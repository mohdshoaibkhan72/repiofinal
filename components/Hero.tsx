import React from 'react';
import { Download, MessageCircle, Star, ArrowRight, ShieldCheck, Flag } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

const AppleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2604 15.3406C17.2865 14.1678 17.9427 13.0858 18.9167 12.4842C18.4219 11.7698 17.7188 11.2334 16.9271 11.0823C15.8698 10.8739 14.8542 11.6916 14.3333 11.6916C13.7865 11.6916 12.9115 10.9833 12.0677 10.9989C10.9375 11.0197 9.875 11.6499 9.30208 12.6249C8.125 14.6509 9.03125 17.6353 10.1667 19.2968C10.7292 20.1093 11.3906 21.0051 12.2813 20.9739C13.125 20.9426 13.4427 20.4322 14.4635 20.4322C15.4844 20.4322 15.776 20.9739 16.6823 20.9583C17.5885 20.9426 18.1563 20.1406 18.7083 19.3281C19.349 18.3906 19.6146 17.4791 19.6354 17.4374C19.6094 17.427 18.0677 16.8333 18.0677 15.0281V15.3406ZM15.0104 9.47392C15.4531 8.93746 15.75 8.18746 15.6667 7.44788C14.9792 7.53121 14.151 7.91663 13.6615 8.49996C13.2344 8.99996 12.8594 9.77079 12.9688 10.5104C13.7292 10.5677 14.5365 10.1302 15.0104 9.47392Z" />
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
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-rupivo-dark mb-8 leading-[1.1]">
              Money when <br className="hidden lg:block"/>
              you <span className="text-transparent bg-clip-text bg-gradient-to-r from-rupivo-blue to-rupivo-lightBlue">need it.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Check your eligibility in 30 seconds. No paperwork, no hidden fees. 
              Just instant approvals and money in your bank.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <Button 
                variant={ButtonVariant.PRIMARY} 
                icon={<Download size={20} />}
                className="w-full sm:w-auto min-w-[200px] h-14 text-lg"
              >
                Get Android App
              </Button>
              
              <Button 
                variant={ButtonVariant.PRIMARY} 
                icon={<AppleIcon />}
                className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-black text-white hover:bg-gray-900 shadow-lg shadow-gray-900/20 hover:-translate-y-0.5 border border-transparent"
              >
                Get iOS App
              </Button>

              <Button 
                variant={ButtonVariant.WHATSAPP} 
                icon={<MessageCircle size={20} />}
                className="w-full sm:w-auto min-w-[200px] h-14 text-lg"
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