import React, { useState, useEffect } from 'react';
import { PopupProps, EarlyAccessFormData } from '../../types';
import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { api } from '../../services/api';

export const RupivoPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  // Step 1: Mobile, Step 2: Details, Step 3: Success
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState<EarlyAccessFormData>({
    fullName: '',
    mobileNumber: '',
    panNumber: '',
    monthlyIncome: '',
    city: '',
    loanAmount: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle entry animation logic
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setStep(1);
      setFormData({
        fullName: '',
        mobileNumber: '',
        panNumber: '',
        monthlyIncome: '',
        city: '',
        loanAmount: ''
      });
      setErrors({});
      setIsLoading(false);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Step 1: Mobile Handler
  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (!formData.mobileNumber) {
      setErrors({ mobileNumber: 'Mobile number is required' });
      return;
    }
    if (formData.mobileNumber.length !== 10) {
      setErrors({ mobileNumber: 'Please enter a valid 10-digit mobile number' });
      return;
    }
    if (!/^[6-9]/.test(formData.mobileNumber)) {
      setErrors({ mobileNumber: 'Mobile number must start with 6, 7, 8, or 9' });
      return;
    }

    setIsLoading(true);
    try {
      // Save the mobile number immediately
      await api.applications.create({ phone: formData.mobileNumber });
      setErrors({});
      setStep(2);
    } catch (err: any) {
      if (err.response && err.response.status === 409) {
        setErrors({ mobileNumber: 'You have already applied with this number.' });
      } else {
        console.error("Step 1 Submission Error", err);
        // Optional: allow proceeding anyway if backend is down, or show generic error
        setErrors({ mobileNumber: 'Something went wrong. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Details Handler
  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.panNumber) {
      newErrors.panNumber = 'PAN Number is required';
      isValid = false;
    } else if (!panRegex.test(formData.panNumber)) {
      newErrors.panNumber = 'Invalid PAN format';
      isValid = false;
    }

    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Select monthly income';
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.loanAmount) {
      newErrors.loanAmount = 'Please select a loan amount range';
      isValid = false;
    }

    if (isValid) {
      setErrors({});
      // Submit to backend
      try {
        await api.applications.create({
          fullName: formData.fullName,
          email: "",
          phone: formData.mobileNumber,
          loanAmount: (() => {
            const map: Record<string, number> = {
              '50k-1L': 50000,
              '1L-5L': 100000,
              '5L-10L': 500000,

            };
            return map[formData.loanAmount] || 0;
          })(),
          purpose: `Early Access - Income: ${formData.monthlyIncome}, City: ${formData.city}, PAN: ${formData.panNumber}, Loan Range: ${formData.loanAmount}`
        });


        // Delay visual step change slightly if needed, or just set Success state immediately
        // But since we use step state:
        setStep(3);
      } catch (e) {
        console.error("Popup submission details failed", e);
        // Start generic error handling (optional, maybe set global error)
        alert("Submission failed. Please try again.");
      }
    } else {
      setErrors(newErrors);
    }
  };

  // Generic Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'mobileNumber') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, mobileNumber: numericValue }));
      if (errors.mobileNumber) setErrors(prev => ({ ...prev, mobileNumber: undefined }));
    }
    else if (name === 'panNumber') {
      const upperValue = value.toUpperCase().slice(0, 10);
      setFormData(prev => ({ ...prev, panNumber: upperValue }));
      if (errors.panNumber) setErrors(prev => ({ ...prev, panNumber: undefined }));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-[4px]"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div
          className={`relative w-full max-w-[420px] transform rounded-[16px] bg-white p-5 sm:p-6 text-left shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out my-8 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Icon (Visible in all steps) */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full text-[#9CA3AF] hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/20 z-10"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {step === 3 ? (
            // --- SUCCESS ---
            <div className="flex flex-col items-center justify-center pt-6 pb-4 text-center relative overflow-hidden animate-fadeIn">
              {/* Background Blobs (Animated) */}
              <div className="absolute top-0 left-0 -ml-10 -mt-10 h-32 w-32 rounded-full bg-blue-100 mix-blend-multiply blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-teal-100 mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 h-32 w-32 rounded-full bg-purple-100 mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

              {/* Success Icon with Ripple */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-75 duration-1000"></div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>

              <h2 className="mb-2 text-[26px] font-bold text-[#0B1F3B] tracking-tight">
                You’re In! 🚀
              </h2>
              <p className="mb-8 text-[14px] text-[#4B5563] max-w-[280px] mx-auto leading-relaxed">
                Welcome to the future of finance. Your early access pass has been generated.
              </p>

              {/* PREMIUM CARD */}
              <div className="w-full max-w-[340px] mb-8 relative group">
                <div className="relative overflow-hidden rounded-2xl bg-[#0B1F3B] p-6 text-left shadow-2xl shadow-blue-900/20 transition-transform duration-500 hover:rotate-1">
                  {/* Shimmer Effect Overlay */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none"></div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Early Access</p>
                        <h3 className="text-xl font-bold text-white tracking-wide">RUPIVO</h3>
                      </div>
                      <div className="h-8 w-12 rounded bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-90 shadow-sm border border-yellow-100/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-2"></div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end border-t border-white/10 pt-4">
                      <div>
                        <p className="text-[10px] uppercase text-white/50 mb-0.5">Card Holder</p>
                        <p className="font-medium text-white text-sm tracking-wide shadow-black drop-shadow-sm uppercase">
                          {formData.fullName || 'FUTURE MEMBER'}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] font-bold text-emerald-300 ring-1 ring-inset ring-emerald-500/40">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          PRIORITY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Background Circles on Card */}
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#0E7490] blur-3xl opacity-40"></div>
                  <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#4f46e5] blur-3xl opacity-40"></div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-lg shadow-blue-900/10 transition-all hover:shadow-blue-900/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            // --- FORM CONTAINER ---
            <div className="animate-fadeIn">
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-[#6B7280]">
                <span>🔔</span>
                <span>
                  {step === 1 ? 'Step 1 of 2: Mobile' : 'Step 2 of 2: Details'}
                </span>
              </div>

              <h2 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0B1F3B] mt-1">
                {step === 1 ? 'Get Early Access' : 'Complete Profile'}
              </h2>

              <p className="text-center text-[13px] sm:text-[14px] leading-[20px] text-[#4B5563] mb-6">
                {step === 1 ? 'Faster loan approval with smart eligibility.' : 'We need a few more details to customize your offer.'}
              </p>

              {/* Step 1: Mobile */}
              {step === 1 && (
                <form onSubmit={handleMobileSubmit} noValidate className="flex flex-col gap-4">
                  <InputText
                    name="mobileNumber"
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    error={errors.mobileNumber}
                    inputMode="numeric"
                    maxLength={10}
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98] hover:opacity-90 mt-2 flex items-center justify-center gap-2 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wait...
                      </>
                    ) : 'Proceed'}
                  </button>
                  <p className="text-center text-[11px] text-[#9CA3AF]">
                    By continuing, you agree to our Terms & Conditions
                  </p>
                </form>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <form onSubmit={handleDetailsSubmit} noValidate className="flex flex-col gap-3">
                  {/* Read-Only Mobile Number */}
                  <div className="relative">
                    <InputText
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      readOnly
                      className="bg-gray-50 text-gray-500 font-medium"
                      placeholder="Mobile Number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>

                  {/* Full Name */}
                  <InputText
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    autoFocus
                  />

                  {/* PAN Number */}
                  <InputText
                    name="panNumber"
                    placeholder="PAN Number (e.g. ABCDE1234F)"
                    value={formData.panNumber}
                    onChange={handleChange}
                    error={errors.panNumber}
                    maxLength={10}
                    className="uppercase"
                    autoComplete="off"
                  />

                  {/* Monthly Income */}
                  <InputSelect
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    error={errors.monthlyIncome}
                    placeholder="Monthly Income"
                    options={[
                      { value: '0-25k', label: 'Below ₹25,000' },
                      { value: '25k-50k', label: '₹25,000 – ₹50,000' },
                      { value: '50k-1L', label: '₹50,000 – ₹1 Lakh' },
                      { value: '1L+', label: 'Above ₹1 Lakh' },
                    ]}
                  />

                  {/* City */}
                  <InputText
                    name="city"
                    placeholder="Current City"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                    autoComplete="address-level2"
                  />

                  {/* Loan Amount */}
                  <InputSelect
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    error={errors.loanAmount}
                    placeholder="Required Loan Amount"
                    options={[
                      { value: '50k-1L', label: '₹50,000 – ₹1,00,000' },
                      { value: '1L-5L', label: '₹1,00,000 – ₹5,00,000' },
                      { value: '5L-10L', label: '₹5,00,000 – ₹10,00,000' },

                    ]}
                  />

                  <button
                    type="submit"
                    className="h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98] hover:opacity-90 mt-2"
                  >
                    Join Early Access
                  </button>

                  <div className="flex justify-center mt-2">
                    <button type="button" onClick={() => setStep(1)} className="text-[12px] text-[#6B7280] hover:text-[#0B1F3B]">
                      Edit Mobile Number
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};