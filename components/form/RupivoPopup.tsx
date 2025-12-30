import React, { useState, useEffect } from 'react';
import { PopupProps, EarlyAccessFormData } from '../../types';
import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { api } from '../../services/api';

export const RupivoPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  // Step 1: Mobile, Step 2: OTP, Step 3: Details (PAN/Income/City), Step 4: Success
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState<EarlyAccessFormData>({
    fullName: '',
    mobileNumber: '',
    panNumber: '',
    monthlyIncome: '',
    city: '',
    loanAmount: '',
  });

  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFetchingPan, setIsFetchingPan] = useState(false);

  // Handle entry animation logic
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setStep(1); // Reset to start
      setFormData({
        fullName: '',
        mobileNumber: '',
        panNumber: '',
        monthlyIncome: '',
        city: '',
        loanAmount: ''
      });
      setOtp('');
      setErrors({});
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

  // --- Logic for Step 1: Mobile ---
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();

    // Robust Mobile Validation
    if (!formData.mobileNumber) {
      setErrors({ mobileNumber: 'Mobile number is required to proceed' });
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      setErrors({ mobileNumber: 'Please enter a valid 10-digit mobile number' });
      return;
    }

    // Check for valid Indian mobile series (starts with 6, 7, 8, or 9)
    if (!/^[6-9]/.test(formData.mobileNumber)) {
      setErrors({ mobileNumber: 'Mobile number must start with 6, 7, 8, or 9' });
      return;
    }

    // Simulate OTP sent
    setStep(2);
    setErrors({});
  };

  // --- Logic for Step 2: OTP ---
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== '1234') {
      setErrors({ otp: 'Invalid OTP. Please use default OTP: 1234' });
      return;
    }
    // Simulate verification success
    setStep(3);
    setErrors({});
  };

  // --- Logic for Step 3: Details (PAN Auto-fetch) ---

  // Effect to simulate API call when PAN is valid
  useEffect(() => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (step === 3 && panRegex.test(formData.panNumber)) {
      setIsFetchingPan(true);

      // Simulate API Delay
      const timer = setTimeout(() => {
        setFormData(prev => ({ ...prev, fullName: 'ARJUN VERMA' })); // Simulated fetched name
        setIsFetchingPan(false);
        setErrors(prev => ({ ...prev, panNumber: undefined })); // Clear pan errors if any
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [formData.panNumber, step]);


  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    let isValid = true;

    // PAN Validation
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.panNumber) {
      newErrors.panNumber = 'PAN Number is required';
      isValid = false;
    } else if (!panRegex.test(formData.panNumber)) {
      newErrors.panNumber = 'Invalid PAN format';
      isValid = false;
    }

    // Name (should be auto-fetched, but check empty just in case)
    if (!formData.fullName) {
      // In a real app we might allow manual entry if fetch fails, 
      // but here we wait for fetch.
      if (!isFetchingPan) newErrors.fullName = 'Name not fetched. Re-enter PAN.';
      isValid = false;
    }

    // Monthly Income
    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Select monthly income';
      isValid = false;
    }

    // City
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }

    // Loan Amount Validation
    if (!formData.loanAmount) {
      newErrors.loanAmount = 'Please select a loan amount range';
      isValid = false;
    }

    if (isValid) {
      setErrors({});

      // Submit to backend
      try {
        api.applications.create({
          fullName: formData.fullName,
          email: "popup_user@example.com",
          phone: formData.mobileNumber,
          loanAmount: parseFloat(formData.loanAmount.replace(/[^0-9]/g, '')) || 0,
          purpose: `Early Access - Income: ${formData.monthlyIncome}, City: ${formData.city}`
        }).catch(err => console.error("Background submission failed", err));
      } catch (e) {
        console.error("Popup submission init failed", e);
      }

      setTimeout(() => {
        setStep(4); // Success
      }, 600);
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
      setFormData(prev => ({ ...prev, panNumber: upperValue, fullName: '' })); // Reset name on PAN change
      if (errors.panNumber) setErrors(prev => ({ ...prev, panNumber: undefined }));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // OTP Handler
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setOtp(val);
    if (errors.otp) setErrors(prev => ({ ...prev, otp: undefined }));
  };

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Terms & Conditions placeholder");
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

      {/* Added my-8 for vertical spacing on short screens/landscape and ensuring scrolling works */}
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

          {step === 4 ? (
            // --- STEP 4: SUCCESS ---
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
              {/* Header: Changes based on step */}
              <div className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-[#6B7280]">
                <span>🔔</span>
                <span>{step === 3 ? 'Almost There' : 'App Launching Soon'}</span>
              </div>

              <h2 className="text-center text-[20px] sm:text-[22px] font-semibold text-[#0B1F3B] mt-1">
                {step === 1 && "Get Early Access"}
                {step === 2 && "Verify Mobile Number"}
                {step === 3 && "Complete Your Profile"}
              </h2>

              <p className="text-center text-[13px] sm:text-[14px] leading-[20px] text-[#4B5563] mb-6">
                {step === 1 && "Faster loan approval with smart eligibility."}
                {step === 2 && `Enter the 4-digit code sent to +91 ${formData.mobileNumber}`}
                {step === 3 && "We need a few more details to customize your offer."}
              </p>

              {/* --- STEP 1: MOBILE INPUT --- */}
              {step === 1 && (
                <form onSubmit={handleSendOtp} noValidate className="flex flex-col gap-4">
                  <InputText
                    name="mobileNumber"
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    error={errors.mobileNumber}
                    inputMode="numeric"
                    autoComplete="tel"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98] hover:opacity-90 mt-2"
                  >
                    Get OTP
                  </button>
                  <p className="text-center text-[11px] text-[#9CA3AF]">
                    By continuing, you agree to our Terms & Conditions
                  </p>
                </form>
              )}

              {/* --- STEP 2: OTP INPUT --- */}
              {step === 2 && (
                <form onSubmit={handleVerifyOtp} noValidate className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <InputText
                      name="otp"
                      type="text"
                      placeholder="Enter 4-digit OTP"
                      value={otp}
                      onChange={handleOtpChange}
                      error={errors.otp}
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      maxLength={4}
                      autoFocus
                      className="text-center tracking-[0.5em] text-2xl h-[56px] font-semibold"
                    />
                    <div className="flex justify-between px-1">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[12px] text-[#0E7490] font-medium hover:underline"
                      >
                        Change Number
                      </button>
                      <button type="button" className="text-[12px] text-[#6B7280] hover:text-[#0B1F3B]">
                        Resend OTP
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98] hover:opacity-90 mt-2"
                  >
                    Verify & Proceed
                  </button>
                </form>
              )}

              {/* --- STEP 3: DETAILS (PAN + OTHERS) --- */}
              {step === 3 && (
                <form onSubmit={handleDetailsSubmit} noValidate className="flex flex-col gap-3">
                  {/* PAN Row */}
                  <InputText
                    name="panNumber"
                    placeholder="PAN Number (e.g. ABCDE1234F)"
                    value={formData.panNumber}
                    onChange={handleChange}
                    error={errors.panNumber}
                    maxLength={10}
                    className="uppercase"
                    loading={isFetchingPan}
                    autoComplete="off"
                  />

                  {/* Full Name (Auto-fetched) */}
                  <InputText
                    name="fullName"
                    placeholder="Full Name (Auto-fetched)"
                    value={formData.fullName}
                    readOnly
                    tabIndex={-1}
                    // Use !bg-green-50/50 and !text-green-800 to override default readOnly gray styles
                    className={formData.fullName ? "!bg-green-50/50 !border-green-200 !text-green-800" : ""}
                    verified={!!formData.fullName}
                    error={errors.fullName}
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="h-[52px] w-full rounded-[12px] bg-[#0B1F3B] text-[15px] font-semibold text-white shadow-sm transition-transform active:scale-[0.98] hover:opacity-90 mt-2"
                  >
                    Join Early Access
                  </button>

                  <div className="text-center text-[13px] font-medium text-[#0E7490] mt-1">
                    🎉 Priority processing unlocked
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