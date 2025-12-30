import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldCheck, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '../Button';

export const SignIn: React.FC = () => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length !== 10) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        alert("Login Successful! Redirecting to dashboard...");
    }, 1500);
  }

  // We use z-[60] to ensure it covers the fixed header (z-50)
  return (
    <div className="fixed inset-0 z-[60] bg-white flex items-stretch overflow-y-auto lg:overflow-hidden">
      
      {/* Left Panel - Visuals (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-rupivo-dark relative overflow-hidden items-center justify-center p-12 text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rupivo-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rupivo-green/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10 max-w-md">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                <ShieldCheck className="w-8 h-8 text-rupivo-green" />
             </div>
             <h1 className="text-4xl font-extrabold mb-6 leading-tight">Secure Access to Your Financial Freedom.</h1>
             <p className="text-gray-400 text-lg mb-8">Manage your loans, check repayment schedules, and get exclusive top-up offers.</p>
             
             <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                     <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                     <p className="font-medium text-gray-200">256-bit Encrypted Connection</p>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm">
                     <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                     <p className="font-medium text-gray-200">RBI Compliant Platform</p>
                 </div>
             </div>
          </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative">
          <Link to="/" className="absolute top-6 left-6 lg:top-8 lg:left-8 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-rupivo-blue transition-colors group">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-rupivo-blue group-hover:text-white transition-all">
                  <ArrowLeft size={16} />
              </div>
              Back to Home
          </Link>

          <div className="max-w-md mx-auto w-full mt-10 lg:mt-0">
              <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-rupivo-blue shadow-sm">
                      <Smartphone size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-rupivo-dark mb-2">
                      {step === 'phone' ? 'Welcome Back' : 'Verify Mobile'}
                  </h2>
                  <p className="text-gray-500">
                      {step === 'phone' 
                        ? 'Enter your mobile number to access your account.' 
                        : `We sent a 4-digit code to +91 ${mobile}`}
                  </p>
              </div>

              {step === 'phone' ? (
                  <form onSubmit={handlePhoneSubmit} className="space-y-6">
                      <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                          <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400 border-r border-gray-300 pr-3 select-none">+91</span>
                              <input 
                                type="tel" 
                                value={mobile}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '');
                                    if (val.length <= 10) setMobile(val);
                                }}
                                className="w-full pl-16 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-rupivo-blue/10 focus:border-rupivo-blue outline-none transition-all font-bold text-xl tracking-widest placeholder:font-normal placeholder:tracking-normal placeholder:text-gray-300 text-gray-800"
                                placeholder="90000 00000"
                                autoFocus
                              />
                          </div>
                      </div>
                      <Button fullWidth disabled={mobile.length !== 10 || loading} className="h-14 text-lg rounded-xl">
                          {loading ? <Loader2 className="animate-spin" /> : 'Get OTP'}
                      </Button>
                  </form>
              ) : (
                  <form onSubmit={handleVerify} className="space-y-8">
                       <div className="flex justify-between gap-3 sm:gap-4">
                          {otp.map((digit, idx) => (
                              <input
                                key={idx}
                                id={`otp-${idx}`}
                                type="tel"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(idx, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !digit && idx > 0) {
                                        document.getElementById(`otp-${idx - 1}`)?.focus();
                                    }
                                }}
                                className="w-full aspect-square text-center text-3xl font-bold rounded-xl border border-gray-200 focus:ring-4 focus:ring-rupivo-blue/10 focus:border-rupivo-blue outline-none transition-all bg-gray-50 focus:bg-white text-rupivo-dark"
                              />
                          ))}
                       </div>
                       
                       <Button fullWidth className="h-14 text-lg rounded-xl" disabled={loading || otp.some(d => !d)}>
                           {loading ? <Loader2 className="animate-spin" /> : 'Verify & Login'}
                       </Button>

                       <div className="text-center">
                           <button 
                             type="button"
                             onClick={() => { setStep('phone'); setOtp(['','','','']); }}
                             className="text-sm font-bold text-rupivo-blue hover:text-rupivo-dark transition-colors"
                           >
                               Change Mobile Number
                           </button>
                       </div>
                  </form>
              )}
              
              <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400">
                      By continuing, you agree to our <Link to="/terms" className="underline hover:text-rupivo-dark">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-rupivo-dark">Privacy Policy</Link>.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};