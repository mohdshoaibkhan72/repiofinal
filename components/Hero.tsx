import React from 'react';
import { MessageCircle, Star, ArrowRight, ShieldCheck, Flag } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

const AppleStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-rupivo-bg">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-teal-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/40 to-blue-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-blue-100 shadow-sm animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rupivo-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rupivo-green"></span>
              </span>
              <span className="text-xs font-bold text-rupivo-dark tracking-wide uppercase">
                #1 Trusted Lending Platform
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-rupivo-dark mb-6 leading-[1.1]">
              Instant Personal Loans.<br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rupivo-blue to-rupivo-lightBlue">Clear Eligibility. Fast Decisions.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Check your loan eligibility in minutes — fully digital, no branch visits, no agent pressure.
            </p>

            <p className="text-sm font-semibold text-gray-500 mb-10 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rupivo-green inline-block"></span>
                Loan amount ₹50,000 – ₹10,00,000 <span className="mx-1 opacity-30">|</span> Multiple RBI-regulated lending partners
            </p>

            {/* Buttons - Redesigned to look like store badges */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Google Play Button */}
              <button className="flex items-center gap-3 bg-rupivo-dark text-white px-5 py-3 rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto min-w-[200px] border border-transparent group h-[60px]">
                <GooglePlayIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-none mb-1">Get it on</div>
                  <div className="text-xl font-bold leading-none font-sans">Google Play</div>
                </div>
              </button>
              
              {/* App Store Button */}
              <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-900 transition-all shadow-lg shadow-gray-900/20 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto min-w-[200px] border border-white/10 group h-[60px]">
                <AppleStoreIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left flex flex-col justify-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-none mb-1">Download on the</div>
                  <div className="text-xl font-bold leading-none font-sans">App Store</div>
                </div>
              </button>

              {/* WhatsApp Button */}
              <Button 
                variant={ButtonVariant.WHATSAPP} 
                icon={<MessageCircle size={24} />}
                className="w-full sm:w-auto min-w-[200px] h-[60px] text-lg rounded-2xl"
              >
                Check on WhatsApp
              </Button>
            </div>

            {/* Social Proof - Moved up */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-gray-500 mb-8">
               <div className="flex items-center gap-2">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                        </div>
                    ))}
                 </div>
                 <span>10k+ Happy Users</span>
               </div>
               <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
               <div className="flex items-center gap-1">
                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                 <span>4.8 Rating</span>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-gray-200/50">
               <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="text-rupivo-green" size={18} />
                  <span>ISO 27001 Certified</span>
               </div>
               <div className="w-px h-6 bg-gray-300"></div>
               <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <Flag className="text-orange-500" size={18} fill="currentColor" />
                  <span>100% Indian Data</span>
               </div>
               <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
               <div className="hidden sm:flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/800px-Rupay-Logo.png" alt="RBI" className="h-4 opacity-60 grayscale" />
                  <span>RBI Regulated</span>
               </div>
            </div>
          </div>

          {/* Right Content - Premium 3D Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-1000">
             <div className="relative w-[300px] sm:w-[340px] h-[640px] sm:h-[680px] bg-gray-900 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.5)] border-[10px] border-gray-900 overflow-hidden ring-1 ring-gray-900/10 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-20">
                
                {/* Dynamic Shine */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent z-30 pointer-events-none"></div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>

                {/* Status Bar */}
                <div className="absolute top-0 left-0 w-full h-12 z-20 flex justify-between px-8 items-center pt-2">
                    <div className="text-white text-xs font-medium">9:41</div>
                    <div className="flex space-x-1.5">
                        <div className="w-4 h-2.5 bg-white rounded-[2px]"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#F5F7FA] pt-14 px-5 pb-6 flex flex-col relative z-10 font-sans">
                    
                    {/* App Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <p className="text-gray-500 text-xs font-semibold mb-0.5">Welcome back,</p>
                            <h3 className="text-rupivo-dark font-bold text-xl">Rahul Sharma</h3>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full shadow-sm p-0.5">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" className="rounded-full" alt="Profile" />
                        </div>
                    </div>

                    {/* Credit Card / Offer */}
                    <div className="bg-gradient-to-br from-rupivo-blue to-[#1e6091] rounded-3xl p-6 text-white mb-6 shadow-xl shadow-blue-900/20 relative overflow-hidden group cursor-pointer">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase">
                                    Pre-Approved
                                </div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/800px-Rupay-Logo.png" alt="Rupay" className="h-4 opacity-80 brightness-0 invert" />
                            </div>
                            <p className="text-blue-100 text-sm font-medium mb-1">Available Limit</p>
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">₹ 5,00,000</h2>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-white text-rupivo-blue text-xs font-bold py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-colors">Apply Now</button>
                                <button className="w-10 flex items-center justify-center bg-white/20 rounded-xl hover:bg-white/30 transition-colors">
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="bg-white p-4 rounded-2xl shadow-card">
                             <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                             </div>
                             <p className="text-gray-400 text-[10px] font-bold uppercase">Interest</p>
                             <p className="text-rupivo-dark font-bold text-lg">1.2% <span className="text-xs font-medium text-gray-400">/mo</span></p>
                         </div>
                         <div className="bg-white p-4 rounded-2xl shadow-card">
                             <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                 <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                             </div>
                             <p className="text-gray-400 text-[10px] font-bold uppercase">Tenure</p>
                             <p className="text-rupivo-dark font-bold text-lg">60 <span className="text-xs font-medium text-gray-400">Months</span></p>
                         </div>
                    </div>

                    {/* Steps */}
                    <div className="bg-white rounded-3xl p-5 shadow-card flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold text-rupivo-dark text-sm">Application Status</h4>
                        </div>
                        <div className="space-y-6 relative">
                            {/* Connector Line */}
                            <div className="absolute left-[19px] top-8 bottom-4 w-0.5 bg-gray-100"></div>

                            <div className="flex items-start relative z-10">
                                <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center mr-4 shrink-0 text-green-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-gray-800">Profile Verified</h5>
                                    <p className="text-[11px] text-gray-400 mt-0.5">PAN & Aadhaar Checked</p>
                                </div>
                            </div>
                            <div className="flex items-start relative z-10">
                                <div className="w-10 h-10 rounded-full bg-rupivo-blue text-white shadow-lg shadow-rupivo-blue/30 flex items-center justify-center mr-4 shrink-0 font-bold text-sm">
                                    2
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-gray-800">Bank Statement</h5>
                                    <p className="text-[11px] text-gray-400 mt-0.5">Pending Action</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>

             {/* Floating Background Elements for Depth */}
             <div className="absolute top-1/3 -right-12 w-24 h-24 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-30 flex items-center justify-center animate-bounce duration-[3000ms]">
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bold mb-1">Disbursed</p>
                    <p className="text-green-600 font-bold text-lg">₹2L</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
