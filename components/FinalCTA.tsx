import React from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

// Vector Icons for Store Badges
const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-8 h-8" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-8 h-8" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-rupivo-dark isolate">
       {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),theme(colors.gray.900))] opacity-50" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center opacity-[0.03]"></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rupivo-blue/20 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mx-auto max-w-4xl">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-8 border border-white/10 backdrop-blur-sm shadow-sm">
                <ShieldCheck size={14} className="text-green-400" />
                RBI Registered Partners
              </div>
              
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
                Ready for Financial Freedom? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Get Approved Instantly.</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-10 font-medium max-w-2xl mx-auto">
                Join 10,000+ Indians who trust Rupivo for their financial needs. Zero paperwork, instant approval, and complete peace of mind.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                 {["Instant Approval", "Zero Paperwork", "Low Interest Rates"].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <CheckCircle2 size={16} className="text-rupivo-blue" /> {benefit}
                    </div>
                 ))}
              </div>

              {/* Primary Actions - High Visibility Store Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-12">
                  {/* Android Button */}
                  <button className="group flex items-center justify-start gap-4 bg-white text-rupivo-dark hover:bg-gray-50 px-6 py-3.5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.3)] min-w-[240px] w-full sm:w-auto border-2 border-transparent relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="group-hover:scale-110 transition-transform duration-300 text-rupivo-dark relative z-10">
                        <PlayStoreIcon />
                     </div>
                     <div className="text-left relative z-10">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-rupivo-blue transition-colors">Get it on</div>
                        <div className="text-2xl font-extrabold leading-none font-sans mt-0.5 text-gray-900">Google Play</div>
                     </div>
                  </button>

                   {/* iOS Button */}
                   <button className="group flex items-center justify-start gap-4 bg-black border border-white/20 text-white hover:bg-gray-900 px-6 py-3.5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/30 min-w-[240px] w-full sm:w-auto relative overflow-hidden">
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <AppleIcon />
                     </div>
                     <div className="text-left relative z-10">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">Download on the</div>
                        <div className="text-2xl font-extrabold leading-none font-sans mt-0.5">App Store</div>
                     </div>
                  </button>
              </div>

              {/* Secondary Action - WhatsApp */}
              <div className="flex flex-col items-center">
                  <div className="flex items-center gap-4 w-full justify-center mb-6">
                     <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
                     <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Or apply via</span>
                     <div className="h-px bg-white/10 flex-1 max-w-[100px]"></div>
                  </div>
                  
                  <Button 
                    variant={ButtonVariant.WHATSAPP}
                    className="w-full sm:w-auto min-w-[280px] rounded-full h-14 text-lg font-bold shadow-[0_0_20px_rgba(37,211,102,0.4)] border border-white/10"
                    icon={<MessageCircle size={24} />}
                  >
                    Chat on WhatsApp
                  </Button>
               </div>
          </div>
       </div>
    </section>
  );
};