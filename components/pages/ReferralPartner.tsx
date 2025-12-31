import React, { useState } from 'react';
import { 
  CheckCircle2, Smartphone, TrendingUp, Users, 
  Calculator, BadgeIndianRupee, Star, ShieldCheck, 
  Gift, Zap, Lock, Briefcase, Plane, Quote, 
  Bell, Clock, Trophy, Target, Server, LayoutDashboard, ArrowRight, Menu
} from 'lucide-react';
import { Button } from '../Button';
import { ButtonVariant } from '../../types';

// Icons for App Stores
const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
  </svg>
);

export const ReferralPartner: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [leads, setLeads] = useState(25);
  
  // Simple calculation logic: Leads * 40% conversion * loanAmount * 1.5% commission (avg)
  const potentialEarnings = Math.round(leads * 0.4 * loanAmount * 0.015);
  
  // Tier Logic
  const partnerLevel = leads < 20 ? 'Silver' : leads < 50 ? 'Gold' : 'Platinum';
  const nextLevel = leads < 20 ? 'Gold' : leads < 50 ? 'Platinum' : 'Titanium';
  const progressPercent = Math.min((leads / 50) * 100, 100);

  // Registration Form State
  const [regForm, setRegForm] = useState({
      firstName: '',
      lastName: '',
      mobile: '',
      city: '',
      profession: 'Financial Advisor'
  });

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setRegForm({ ...regForm, [e.target.name]: e.target.value });
  };

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enhanced Testimonials Data
  const testimonials = [
    { 
        name: "Rajesh Kumar", 
        role: "DSA, Delhi", 
        earnings: "₹1.2 Lakhs/mo",
        text: "I shifted from traditional banks to Rupivo because of the app. I can track every lead's status without calling support. My monthly income has doubled.", 
        img: "Rajesh" 
    },
    { 
        name: "Sunita Menon", 
        role: "Financial Advisor", 
        earnings: "₹85,000/mo",
        text: "The payouts are actually instant. T+3 days means I get my money same week. Plus, my customers are happy with the fast approvals.", 
        img: "Sunita" 
    },
    { 
        name: "Deepak Sharma", 
        role: "Chartered Accountant", 
        earnings: "₹2.5 Lakhs/mo",
        text: "Rupivo helps my clients get business funding when banks delay. The commission is transparent and always on time. Highly professional.", 
        img: "Deepak" 
    },
    { 
        name: "Vikram Singh", 
        role: "Insurance Agent", 
        earnings: "₹60,000/mo",
        text: "Cross-selling loans to my insurance clients was never this easy. The eligibility check takes 30 seconds and approval rates are high.", 
        img: "Vikram" 
    },
    { 
        name: "Anjali Desai", 
        role: "Freelancer", 
        earnings: "₹45,000/mo",
        text: "I started sharing referral links in my society WhatsApp groups. Now I pay my own bills without a 9-to-5 job. It's incredibly empowering.", 
        img: "Anjali" 
    },
    { 
        name: "Meera Iyer", 
        role: "Wealth Manager", 
        earnings: "₹95,000/mo",
        text: "The dedicated relationship manager support is what sets Rupivo apart. Any issue with a case is resolved within hours, keeping my clients happy.", 
        img: "Meera" 
    },
    {
        name: "Suresh Patil",
        role: "Shop Owner, Pune",
        earnings: "₹55,000/mo",
        text: "I run an electronics shop. Using Rupivo, I offer instant loans to my customers who want to buy on EMI. My sales increased and I earn commission too!",
        img: "Suresh"
    },
    {
        name: "Priya Nair",
        role: "Homemaker",
        earnings: "₹32,000/mo",
        text: "I was looking for work-from-home options. Becoming a Rupivo partner was the best decision. I refer loans to friends and family in my free time.",
        img: "Priya"
    },
    {
        name: "Rohan Das",
        role: "Tax Consultant",
        earnings: "₹1.8 Lakhs/mo",
        text: "My clients often ask for business loans during tax filing season. Rupivo allows me to help them instantly while adding a significant revenue stream.",
        img: "Rohan"
    }
  ];

  return (
    <div className="bg-rupivo-bg pt-20 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-gradient-to-br from-green-100/40 to-blue-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-100/40 to-green-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-green-100 shadow-sm animate-fade-in-up hover:shadow-md transition-shadow cursor-default">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rupivo-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rupivo-green"></span>
                        </span>
                        <span className="text-xs font-bold text-rupivo-dark tracking-wide uppercase">Rupivo Partner Program</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-rupivo-dark mb-8 leading-[1.1]">
                        Earn Big with <br className="hidden lg:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rupivo-green to-teal-500">Zero Investment.</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                        Join India's fastest-growing loan distribution network. Earn up to 2.5% commission on every disbursal. Instant payouts, transparent tracking.
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
                        <Button 
                            variant={ButtonVariant.PRIMARY} 
                            onClick={scrollToRegister}
                            className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-rupivo-green hover:bg-green-700 shadow-green-900/20 focus:ring-green-500 border-transparent"
                        >
                            Become a Partner
                        </Button>
                        <Button 
                            variant={ButtonVariant.OUTLINE}
                            className="w-full sm:w-auto min-w-[200px] h-14 text-lg border-2 border-rupivo-dark/10 text-rupivo-dark hover:bg-rupivo-dark/5 hover:border-rupivo-dark/20"
                        >
                            Download App
                        </Button>
                    </div>

                     {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/60">
                        <div className="hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-3xl lg:text-4xl font-extrabold text-rupivo-dark tracking-tight">₹15Cr+</p>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Paid Out</p>
                        </div>
                        <div className="border-l border-gray-200 pl-8 hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-3xl lg:text-4xl font-extrabold text-rupivo-dark tracking-tight">5000+</p>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Partners</p>
                        </div>
                         <div className="border-l border-gray-200 pl-8 hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-3xl lg:text-4xl font-extrabold text-rupivo-dark tracking-tight">T+3</p>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1">Payouts</p>
                        </div>
                    </div>
                </div>

                {/* Right Content - 3D Mockup (Partner Dashboard) */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-1000">
                    <div className="relative w-[300px] sm:w-[340px] h-[640px] sm:h-[680px] bg-gray-900 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.5)] border-[10px] border-gray-900 overflow-hidden ring-1 ring-gray-900/10 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-20 group">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-30"></div>
                        
                        {/* Screen Content */}
                        <div className="w-full h-full bg-gray-50 pt-14 flex flex-col relative z-10 font-sans">
                            {/* Dashboard Header */}
                            <div className="bg-rupivo-dark text-white p-6 pb-8 rounded-b-[2rem] shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                                <div className="flex justify-between items-center mb-6 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" className="w-8 h-8 rounded-full" alt="User" /></div>
                                        <div><p className="text-xs text-gray-400 font-bold uppercase">Welcome</p><h4 className="font-bold text-lg leading-none">Rahul Verma</h4></div>
                                    </div>
                                    <Bell className="text-white/80 w-6 h-6" />
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1 relative z-10">Total Earnings</p>
                                <h2 className="text-4xl font-extrabold mb-4 relative z-10">₹ 45,250</h2>
                                <div className="flex gap-2 relative z-10">
                                    <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 border border-green-500/20"><TrendingUp size={12}/> +12% this month</span>
                                </div>
                            </div>

                            <div className="px-5 -mt-6 flex-grow flex flex-col">
                                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center mb-6 z-20">
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Pending Payout</p>
                                        <p className="text-xl font-bold text-rupivo-dark">₹ 8,400</p>
                                    </div>
                                    <button className="bg-rupivo-blue text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">Withdraw</button>
                                </div>

                                <h4 className="font-bold text-gray-800 mb-4 px-1">Recent Leads</h4>
                                <div className="space-y-3 overflow-hidden">
                                    {[1,2,3,4].map(i => (
                                        <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:border-blue-100 transition-colors">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm ${i===1 ? 'bg-green-500' : 'bg-rupivo-blue'}`}>{String.fromCharCode(64+i)}</div>
                                            <div className="flex-1">
                                                <h5 className="font-bold text-sm text-gray-800">Lead #{204+i}</h5>
                                                <p className="text-[10px] text-gray-500 font-medium">Applied for ₹2L Personal Loan</p>
                                            </div>
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded ${i===1 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>{i===1 ? 'Disbursed' : 'Processing'}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Bottom Nav Simulation */}
                                <div className="mt-auto mb-4 bg-white rounded-2xl p-3 shadow-lg border border-gray-50 flex justify-around text-gray-400">
                                   <div className="text-rupivo-blue"><LayoutDashboard size={20} /></div>
                                   <div><Users size={20} /></div>
                                   <div><Target size={20} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <div className="w-full bg-white border-y border-gray-100 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
                {[
                    { icon: <Clock className="text-rupivo-blue" />, title: "Weekly Payouts", sub: "Every Tuesday" },
                    { icon: <Users className="text-rupivo-green" />, title: "Dedicated RM", sub: "Support 24/7" },
                    { icon: <Briefcase className="text-purple-600" />, title: "Zero Investment", sub: "Free to Join" },
                    { icon: <ShieldCheck className="text-orange-600" />, title: "Data Safety", sub: "ISO Certified" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-3 py-16 px-4 hover:bg-gray-50/50 transition-colors cursor-default group text-center">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                            {React.cloneElement(item.icon, { className: `w-7 h-7 ${item.icon.props.className}` })}
                        </div>
                        <div className="flex flex-col items-center mt-2">
                            <p className="font-bold text-rupivo-dark text-base leading-tight mb-0.5">{item.title}</p>
                            <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 3. APP SHOWCASE */}
      <section className="py-24 lg:py-32 bg-rupivo-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-rupivo-blue text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 animate-fade-in-up">
                        <Smartphone size={14} /> Partner App
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-rupivo-dark mb-6 leading-tight">
                        Your Entire Business <br/>
                        <span className="text-rupivo-blue">In Your Pocket.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        The Rupivo Partner App gives you the power to onboard customers, track applications, and withdraw earnings—anytime, anywhere.
                    </p>

                    <div className="space-y-8 mb-10">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 text-rupivo-blue">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-rupivo-dark">Real-Time Lead Tracking</h4>
                                <p className="text-sm text-gray-500">See exactly when your customer's loan gets approved and disbursed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 text-green-600">
                                <BadgeIndianRupee className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-rupivo-dark">Earnings Dashboard</h4>
                                <p className="text-sm text-gray-500">Track your daily commissions and withdraw funds instantly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                         {/* Google Play Button - Enhanced */}
                         <button className="flex items-center gap-3 bg-rupivo-dark text-white px-5 py-3 rounded-2xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto min-w-[200px] border border-transparent group h-[60px]">
                            <PlayStoreIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                            <div className="text-left flex flex-col justify-center">
                                <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-none mb-1">Get it on</div>
                                <div className="text-xl font-bold leading-none font-sans">Google Play</div>
                            </div>
                         </button>
                         
                         {/* App Store Button - Enhanced */}
                         <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-900 transition-all shadow-lg shadow-gray-900/20 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto min-w-[200px] border border-white/10 group h-[60px]">
                            <AppleIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                            <div className="text-left flex flex-col justify-center">
                                <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 leading-none mb-1">Download on the</div>
                                <div className="text-xl font-bold leading-none font-sans">App Store</div>
                            </div>
                         </button>
                    </div>
                </div>

                {/* Right: Dual Phone Mockups */}
                <div className="relative h-[650px] w-full hidden md:block">
                    {/* Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/50 to-green-100/50 rounded-full blur-3xl"></div>
                    
                    {/* Phone 1: Background (Android - Lead Tracking) */}
                    <div className="absolute top-0 right-10 w-[280px] h-[580px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl transform rotate-12 z-10 opacity-80 scale-95 origin-bottom-left hover:scale-100 hover:rotate-6 hover:z-30 transition-all duration-500 ease-out">
                        <div className="w-full h-full bg-gray-50 rounded-[2rem] overflow-hidden flex flex-col relative">
                            {/* Android Status Bar & Punch Hole */}
                            <div className="h-8 bg-rupivo-dark text-white flex justify-between px-4 items-center text-[10px] font-medium z-20 relative">
                                <span>10:30</span>
                                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                <div className="flex gap-1"><span>5G</span><span>100%</span></div>
                            </div>

                            {/* Header */}
                            <div className="bg-rupivo-dark text-white p-6 pt-6">
                                <h4 className="font-bold text-lg">My Leads</h4>
                                <div className="flex gap-2 mt-4 text-xs font-bold overflow-x-hidden no-scrollbar">
                                    <span className="bg-white text-rupivo-dark px-3 py-1 rounded-full whitespace-nowrap">All (45)</span>
                                    <span className="bg-white/10 text-white px-3 py-1 rounded-full whitespace-nowrap">Pending</span>
                                    <span className="bg-white/10 text-white px-3 py-1 rounded-full whitespace-nowrap">Approved</span>
                                </div>
                            </div>
                            {/* List */}
                            <div className="p-4 space-y-3 overflow-y-auto no-scrollbar pb-10">
                                {[1,2,3,4,5,6].map(i => (
                                    <div key={i} className="bg-white p-3 rounded-xl shadow-sm flex items-center justify-between border border-gray-50">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                                                {String.fromCharCode(64+i)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-xs text-gray-800">Customer {i}</p>
                                                <p className="text-[10px] text-gray-400">#29{i}39</p>
                                            </div>
                                        </div>
                                        <span className={`text-[9px] font-bold px-2 py-1 rounded ${i%2===0 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                            {i%2===0 ? 'DISBURSED' : 'PENDING'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            {/* Android Nav Bar */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>

                    {/* Phone 2: Foreground (iOS - Earnings) */}
                    <div className="absolute bottom-10 left-10 w-[290px] h-[600px] bg-gray-900 rounded-[3.5rem] border-[10px] border-gray-900 shadow-2xl z-20 overflow-hidden ring-1 ring-gray-800 hover:scale-105 transition-transform duration-500">
                         <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden flex flex-col relative">
                             
                             {/* iOS Status Bar & Dynamic Island */}
                             <div className="h-12 w-full flex justify-between px-6 items-center absolute top-0 z-30 pt-2">
                                <span className="text-[10px] font-bold text-rupivo-dark">9:41</span>
                                <div className="w-24 h-7 bg-black rounded-full flex items-center justify-center gap-3 px-3 shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-4 h-2.5 border border-gray-800 rounded-[2px]"></div>
                                </div>
                             </div>
                             
                             {/* App Header */}
                             <div className="p-6 pt-16 bg-gray-50/50 pb-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" alt="User"/>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Partner</p>
                                            <p className="text-sm font-bold text-rupivo-dark leading-none">Rahul</p>
                                        </div>
                                    </div>
                                    <Bell size={20} className="text-gray-400" />
                                </div>
                                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Earnings</p>
                                <h2 className="text-3xl font-extrabold text-rupivo-dark mb-2">₹ 45,250</h2>
                                <p className="text-green-500 text-xs font-bold flex items-center gap-1"><TrendingUp size={12}/> +12.5% this week</p>
                             </div>

                             {/* Chart Area */}
                             <div className="h-40 bg-white w-full relative px-2">
                                  <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
                                      <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15 V40 H0 Z" fill="url(#gradient)" />
                                      <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                                      <defs>
                                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                                        </linearGradient>
                                      </defs>
                                  </svg>
                             </div>

                             {/* Actions */}
                             <div className="p-4 grid grid-cols-2 gap-3 -mt-6 relative z-10">
                                 <div className="bg-rupivo-dark text-white p-4 rounded-2xl text-center shadow-lg shadow-gray-900/10 hover:scale-105 transition-transform cursor-pointer">
                                     <ArrowRight className="w-5 h-5 mx-auto mb-2 -rotate-45" />
                                     <p className="text-xs font-bold">Withdraw</p>
                                 </div>
                                 <div className="bg-white text-gray-600 p-4 rounded-2xl text-center border border-gray-100 shadow-sm hover:scale-105 transition-transform cursor-pointer">
                                     <Smartphone className="w-5 h-5 mx-auto mb-2 text-rupivo-blue" />
                                     <p className="text-xs font-bold">History</p>
                                 </div>
                             </div>

                             {/* Recent Activity List */}
                             <div className="px-4 pb-4 flex-grow overflow-hidden">
                                 <p className="text-xs font-bold text-gray-400 uppercase mb-3 ml-1">Recent Payouts</p>
                                 <div className="space-y-2">
                                     <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50">
                                         <div className="flex items-center gap-3">
                                             <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><ArrowRight size={14} className="-rotate-45"/></div>
                                             <div><p className="text-xs font-bold text-gray-800">Withdrawal</p><p className="text-[9px] text-gray-400">Tue, 12 Mar</p></div>
                                         </div>
                                         <p className="text-xs font-bold text-gray-800">- ₹5,000</p>
                                     </div>
                                     <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50">
                                         <div className="flex items-center gap-3">
                                             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-rupivo-blue"><BadgeIndianRupee size={14}/></div>
                                             <div><p className="text-xs font-bold text-gray-800">Commission</p><p className="text-[9px] text-gray-400">Mon, 11 Mar</p></div>
                                         </div>
                                         <p className="text-xs font-bold text-green-600">+ ₹1,200</p>
                                     </div>
                                 </div>
                             </div>
                             
                             {/* iOS Home Indicator */}
                             <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 4. EARNINGS CALCULATOR */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-rupivo-blue text-xs font-bold uppercase tracking-wider mb-6">
                        <Calculator size={14} /> Simulator
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-6">
                        Calculate Your <br/>
                        <span className="text-rupivo-blue">Earning Potential</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed">
                        Adjust the sliders to see how much you could earn monthly based on our standard commission rates.
                    </p>
                    
                    <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 space-y-12">
                        <div>
                             <div className="flex justify-between mb-4 font-bold text-gray-800 text-lg">
                                 <label className="text-gray-600">Monthly Leads</label>
                                 <span className="text-rupivo-blue bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100 text-xl font-extrabold min-w-[100px] text-center">{leads}</span>
                             </div>
                             <input 
                                type="range" 
                                min="1" max="100" 
                                value={leads} 
                                onChange={(e) => setLeads(parseInt(e.target.value))} 
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rupivo-blue hover:accent-blue-600 transition-all"
                             />
                             
                             {/* Gamified Tier Progress */}
                             <div className="mt-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy size={18} className={partnerLevel === 'Platinum' ? 'text-purple-600' : partnerLevel === 'Gold' ? 'text-yellow-500' : 'text-gray-400'} />
                                        <span className="text-xs font-bold uppercase text-gray-500 tracking-wide">Current Tier: <span className="text-rupivo-dark text-sm ml-1">{partnerLevel}</span></span>
                                    </div>
                                    <span className="text-xs font-bold text-rupivo-blue uppercase tracking-wide">Next: {nextLevel}</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                     <div 
                                        className={`h-full rounded-full transition-all duration-700 ease-out ${partnerLevel === 'Platinum' ? 'bg-gradient-to-r from-purple-500 to-purple-700' : partnerLevel === 'Gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gray-400'}`} 
                                        style={{ width: `${progressPercent}%` }}
                                     ></div>
                                </div>
                             </div>
                        </div>

                         <div>
                             <div className="flex justify-between mb-4 font-bold text-gray-800 text-lg">
                                 <label className="text-gray-600">Avg. Loan Amount</label>
                                 <span className="text-rupivo-blue bg-white px-5 py-2 rounded-xl shadow-sm border border-gray-100 text-xl font-extrabold min-w-[140px] text-center">₹{(loanAmount/100000).toFixed(1)} L</span>
                             </div>
                             <input 
                                type="range" 
                                min="50000" max="1000000" step="50000" 
                                value={loanAmount} 
                                onChange={(e) => setLoanAmount(parseInt(e.target.value))} 
                                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rupivo-blue hover:accent-blue-600 transition-all"
                             />
                         </div>
                    </div>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="absolute inset-0 bg-rupivo-blue/20 blur-3xl rounded-full opacity-30 transform translate-x-10 translate-y-10"></div>
                    <div className="bg-rupivo-dark text-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center group cursor-default border border-white/10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                        
                        <p className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-6">Monthly Potential Earnings</p>
                        <div className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-white drop-shadow-sm">
                            ₹ {potentialEarnings.toLocaleString()}
                        </div>
                        <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-10 backdrop-blur-sm border border-white/10 text-xs font-bold text-green-400 shadow-inner">
                             + Performance Bonuses included
                        </div>
                        <Button 
                            fullWidth 
                            onClick={scrollToRegister} 
                            className="!bg-white !text-rupivo-dark hover:!bg-gray-100 border-0 h-14 text-lg font-bold shadow-lg shadow-white/10 relative z-10"
                        >
                            Start Earning Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. EXCLUSIVE PERKS */}
      <section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-4">More Than Just Commissions</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">Unlock exclusive rewards as you grow your business with us.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-lg">
                      <div className="w-16 h-16 bg-orange-50 rounded-3xl flex items-center justify-center mb-8 text-orange-500 shadow-sm border border-orange-100">
                          <Gift className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-2xl text-rupivo-dark mb-4">Rewards & Contests</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">Win smartphones, gold coins, and vouchers in our monthly partner contests.</p>
                  </div>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-lg">
                      <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 text-rupivo-blue shadow-sm border border-blue-100">
                          <Briefcase className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-2xl text-rupivo-dark mb-4">Marketing Support</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">Get personalized visiting cards, posters, and WhatsApp creatives with your branding.</p>
                  </div>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-lg">
                      <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center mb-8 text-purple-600 shadow-sm border border-purple-100">
                          <Plane className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-2xl text-rupivo-dark mb-4">Club Membership</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">Top performers get invited to exclusive domestic and international trips.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. PARTNER BENEFITS (Dark Section) */}
      <section className="py-24 lg:py-32 bg-[#1B262C] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rupivo-blue rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rupivo-green rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Why Partners Choose Rupivo?</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-rupivo-blue to-rupivo-green mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <TrendingUp className="w-8 h-8 text-rupivo-green" />, title: "High Conversions", desc: "Our multi-lender engine ensures maximum approvals." },
                    { icon: <Zap className="w-8 h-8 text-rupivo-green" />, title: "Instant Payouts", desc: "Withdraw commissions as soon as the loan is disbursed." },
                    { icon: <Target className="w-8 h-8 text-rupivo-green" />, title: "Real-time Tracking", desc: "Monitor every lead status live on your dashboard." },
                    { icon: <Users className="w-8 h-8 text-rupivo-green" />, title: "Lifetime Earnings", desc: "Earn passive income on repeat loans from your customers." }
                ].map((feature, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-[2rem] border border-white/10 hover:border-rupivo-green/50 hover:bg-white/10 transition-all duration-300 group">
                        <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* 7. SECURITY & TRUST */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-rupivo-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rupivo-blue/20 rounded-full blur-[120px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rupivo-green/10 rounded-full blur-[120px] -ml-20 -mb-20"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-8 border border-green-500/30">
                            <Lock size={14} /> Partner Protection Promise
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Your Data. Your Leads. <br/> <span className="text-green-400">Your Business.</span></h2>
                        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                            We understand that your client relationships are your biggest asset. At Rupivo, we have strict data policies to ensure your leads are never poached or shared.
                        </p>
                        <div className="grid gap-8">
                             <div className="flex items-start gap-5">
                                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                     <CheckCircle2 className="text-green-400" size={24} />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-xl text-white mb-1">Strict Lead Mapping</h4>
                                     <p className="text-sm text-gray-400">Leads are mapped strictly to your Partner ID forever. We maintain a clear separation of ownership.</p>
                                 </div>
                             </div>
                             <div className="flex items-start gap-5">
                                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                     <Server className="text-blue-400" size={24} />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-xl text-white mb-1">Encrypted Database</h4>
                                     <p className="text-sm text-gray-400">Bank-grade 256-bit encryption ensures client data remains confidential and secure.</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 relative hover:bg-white/10 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck size={140} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6">Compliance First</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Rupivo is fully compliant with RBI's Digital Lending Guidelines. We act as a technology bridge, ensuring all data handling meets the highest regulatory standards.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div> ISO 27001</span>
                            <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div> RBI Compliant</span>
                            <span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-bold text-white border border-white/10 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div> Data Localization</span>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </section>

      {/* 8. TESTIMONIALS (PARTNER SUCCESS STORIES) */}
      <section className="py-24 lg:py-32 bg-rupivo-bg relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-4">Partner Success Stories</h2>
                <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                    <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}</div>
                    <span className="text-rupivo-dark font-bold text-lg">4.9/5 Average Rating</span>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">Join a community of 5000+ partners who are transforming their financial future.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((review, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-soft hover:shadow-soft-hover transition-all duration-300 relative group border border-gray-100 flex flex-col h-full hover:-translate-y-1">
                        <Quote className="absolute top-8 right-8 text-blue-50 w-8 h-8 group-hover:text-blue-100 transition-colors" />
                        
                        <div className="flex items-center gap-4 mb-6">
                             <div className="w-14 h-14 rounded-full bg-gray-100 p-0.5 border border-gray-200 shrink-0">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.img}`} alt={review.name} className="rounded-full w-full h-full" />
                            </div>
                            <div>
                                 <h4 className="font-bold text-rupivo-dark text-lg leading-tight">{review.name}</h4>
                                 <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{review.role}</p>
                            </div>
                        </div>
                        
                        {/* Earnings Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 border border-green-100 w-fit">
                            <BadgeIndianRupee size={16} className="text-green-600" />
                            <span className="text-sm font-bold text-green-700">Earnings: {review.earnings}</span>
                        </div>

                        <p className="text-gray-700 text-base leading-relaxed mb-4 font-medium flex-grow">"{review.text}"</p>
                        
                        <div className="flex items-center gap-1 mt-auto pt-4 border-t border-gray-50">
                            {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="mt-20 text-center">
                <Button 
                    onClick={scrollToRegister} 
                    className="h-16 px-12 text-lg rounded-full shadow-lg shadow-rupivo-blue/30 hover:shadow-xl hover:shadow-rupivo-blue/40 transform hover:-translate-y-1 transition-all"
                    icon={<ArrowRight size={24} />}
                >
                    Start Your Partner Journey
                </Button>
            </div>
         </div>
      </section>

      {/* 9. REGISTRATION FORM */}
      <section id="register" className="py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-rupivo-dark rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rupivo-blue/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rupivo-green/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <h2 className="text-3xl font-bold mb-6">Join Rupivo Partner Network</h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">Fill the form to get your Partner ID. It takes less than 2 minutes to start earning.</p>
                        <ul className="space-y-6">
                            {["Dedicated Relationship Manager", "Free Marketing Material", "Unlimited Earning Potential"].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-rupivo-green/20 flex items-center justify-center shrink-0 border border-rupivo-green/30">
                                        <CheckCircle2 className="text-rupivo-green w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-200 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[2rem] text-gray-800 shadow-xl relative">
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wide">First Name</label>
                                    <input type="text" value={regForm.firstName} onChange={handleRegChange} name="firstName" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none transition-all font-bold text-gray-800 placeholder-gray-300"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wide">Last Name</label>
                                    <input type="text" value={regForm.lastName} onChange={handleRegChange} name="lastName" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none transition-all font-bold text-gray-800 placeholder-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wide">Mobile Number</label>
                                <input type="tel" value={regForm.mobile} onChange={handleRegChange} name="mobile" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none transition-all font-bold text-gray-800 placeholder-gray-300"/>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wide">City</label>
                                <input type="text" value={regForm.city} onChange={handleRegChange} name="city" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none transition-all font-bold text-gray-800 placeholder-gray-300"/>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wide">Profession</label>
                                <select name="profession" value={regForm.profession} onChange={handleRegChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none transition-all font-bold text-gray-800 appearance-none">
                                    <option>Financial Advisor</option>
                                    <option>DSA / Loan Agent</option>
                                    <option>Insurance Agent</option>
                                    <option>Chartered Accountant</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <Button fullWidth className="h-16 text-lg rounded-xl mt-6 shadow-lg shadow-rupivo-blue/30 hover:shadow-xl hover:-translate-y-1 transition-all">Register Now</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};