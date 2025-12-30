import React from 'react';
import { PageLayout } from '../PageLayout';
import { 
  Target, Users, TrendingUp, ArrowRight, Heart, Shield, Zap, Rocket, Globe, Coffee, Smile, Award, History, Newspaper, Linkedin, MapPin,
  Clock, PlayCircle, BookOpen, Hash, ChevronRight, Bookmark, Search, Share2, MailOpen, CheckCircle2, Quote
} from 'lucide-react';
import { Button } from '../Button';
import { ButtonVariant } from '../../types';

// --- ABOUT US ---
export const AboutUs: React.FC = () => (
  <PageLayout title="About Us" subtitle="Building the future of financial inclusion in India.">
    <div className="space-y-20">
      {/* Section 1: Our Mission */}
      <section className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-rupivo-dark mb-6">Democratizing Credit for a Billion Indians</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At Rupivo, we believe that access to credit is a fundamental right, not a privilege. Millions of Indians are underserved by traditional banking simply because they lack a credit history or formal income documents. We are here to change that. By leveraging advanced AI and alternative data, we connect deserving borrowers with RBI-registered lenders instantly, transparently, and securely.
        </p>
        <div className="w-24 h-1 bg-rupivo-blue mx-auto rounded-full"></div>
      </section>

      {/* Section 2: Our Journey (Timeline) */}
      <section>
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark flex items-center justify-center gap-2">
                <History className="text-rupivo-blue" /> Our Journey
            </h3>
        </div>
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-1/2 space-y-12">
            {[
                { year: "2021", title: "The Inception", desc: "Founded in Bangalore by a team of ex-bankers and techies." },
                { year: "2022", title: "Seed Funding", desc: "Raised $5M to build our proprietary AI credit engine." },
                { year: "2023", title: "100k Users", desc: "Reached a milestone of 1 Lakh happy customers and 10+ lending partners." },
                { year: "2024", title: "Expansion", desc: "Launched Rupivo 2.0 with instant approvals and expanded to 19,000 pincodes." }
            ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-rupivo-blue rounded-full border-4 border-white shadow-sm"></div>
                    <div className="md:w-1/2 p-4 md:px-12">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left">
                            <span className="text-rupivo-blue font-extrabold text-2xl block mb-1">{item.year}</span>
                            <h4 className="font-bold text-lg text-rupivo-dark">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    </div>
                    <div className="md:w-1/2"></div>
                </div>
            ))}
        </div>
      </section>

      {/* Section 3: Leadership Team */}
      <section>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark">Meet the Leadership</h3>
            <p className="text-gray-500 mt-2">Driven by passion, guided by experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {[
                  { name: "Arjun Malhotra", role: "Co-Founder & CEO", prev: "Ex-Goldman Sachs", img: "Arjun" },
                  { name: "Sneha Kapoor", role: "Co-Founder & CTO", prev: "Ex-Google AI", img: "Sneha" },
                  { name: "Vikram Singh", role: "Chief Risk Officer", prev: "Ex-HDFC Bank", img: "Vikram" },
              ].map((leader, i) => (
                  <div key={i} className="group text-center">
                      <div className="relative inline-block mb-4">
                          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.img}`} alt={leader.name} className="w-full h-full bg-gray-100" />
                          </div>
                          <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#0077b5] rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                              <Linkedin size={16} />
                          </div>
                      </div>
                      <h4 className="font-bold text-xl text-rupivo-dark">{leader.name}</h4>
                      <p className="text-rupivo-blue font-medium text-sm mb-1">{leader.role}</p>
                      <p className="text-gray-400 text-xs uppercase tracking-wide">{leader.prev}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="bg-gray-50 rounded-[2.5rem] p-10 md:p-16">
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-rupivo-dark">Our Core Values</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-rupivo-blue" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Simplicity First</h4>
            <p className="text-gray-600 leading-relaxed">We remove complex paperwork and jargon. Finance should be as easy as ordering food online.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-rupivo-green" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Radical Inclusion</h4>
            <p className="text-gray-600 leading-relaxed">We build for the unserved. Our models look beyond CIBIL scores to see the real person.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h4 className="font-bold text-xl text-rupivo-dark mb-3">Unwavering Trust</h4>
            <p className="text-gray-600 leading-relaxed">We treat user data with sanctity. Transparency and security are non-negotiable.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Press Mentions */}
      <section className="text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-10 flex items-center justify-center gap-2">
              <Newspaper size={20} /> Featured In
          </h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for media logos */}
             <span className="text-2xl font-serif font-bold text-gray-800">The Economic Times</span>
             <span className="text-2xl font-sans font-black tracking-tighter text-gray-800">YourStory</span>
             <span className="text-2xl font-serif font-bold text-gray-800">Mint</span>
             <span className="text-2xl font-sans font-bold text-gray-800">TechCrunch</span>
             <span className="text-2xl font-sans font-bold text-gray-800">INC42</span>
          </div>
      </section>
    </div>
  </PageLayout>
);

// --- CAREERS ---
export const Careers: React.FC = () => (
  <PageLayout title="Join Our Team" subtitle="Help us revolutionize lending for the next billion users.">
    <div className="space-y-20">
      
      {/* Section 1: Intro */}
      <section className="text-center max-w-3xl mx-auto">
         <p className="text-xl text-gray-700 leading-relaxed font-medium">
            We are a team of engineers, data scientists, and dreamers based in Bangalore. If you are passionate about Fintech and solving hard problems at scale, we want to hear from you.
         </p>
      </section>
      
      {/* Section 2: Life at Rupivo (Gallery) */}
      <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-bold text-lg">Brainstorming Fridays</p>
                  </div>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="col-span-2 rounded-3xl overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80" alt="Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white font-bold text-lg">Annual Offsite 2023</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 3: Perks */}
      <section className="bg-gray-50 rounded-[2.5rem] p-10">
        <h3 className="text-2xl font-bold text-rupivo-dark mb-10 text-center">Why Work With Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Rocket className="text-blue-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">High Impact</h4>
                <p className="text-sm text-gray-600">Work on products used by millions.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Coffee className="text-green-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Work-Life Balance</h4>
                <p className="text-sm text-gray-600">Flexible hours & hybrid policy.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <TrendingUp className="text-purple-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Growth & ESOPs</h4>
                <p className="text-sm text-gray-600">Competitive salary + ownership.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
                <Heart className="text-yellow-600 w-8 h-8 mb-4" />
                <h4 className="font-bold text-lg mb-2">Health First</h4>
                <p className="text-sm text-gray-600">Comprehensive insurance for family.</p>
            </div>
        </div>
      </section>

      {/* Section 4: Employee Testimonial */}
      <section className="max-w-4xl mx-auto">
          <div className="bg-rupivo-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Developer" alt="Dev" className="bg-gray-800" />
                  </div>
                  <div className="text-center md:text-left">
                      <p className="text-xl md:text-2xl font-medium italic mb-4">"The autonomy to build things from scratch is incredible here. I shipped a feature in my first month that is now used by 50k users daily. The culture is purely meritocratic."</p>
                      <div>
                          <h4 className="font-bold text-rupivo-blue">Rohan Mehta</h4>
                          <p className="text-gray-400 text-sm">Senior Backend Engineer</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Section 5: Open Positions */}
      <section>
        <div className="flex justify-between items-end mb-8">
            <h3 className="text-2xl font-bold text-rupivo-dark">Open Positions</h3>
            <a href="#" className="text-rupivo-blue font-bold text-sm hover:underline">View All</a>
        </div>
        <div className="space-y-4">
          {[
            { role: "Senior Backend Engineer", dept: "Engineering", loc: "Bangalore", type: "Full-time" },
            { role: "Product Manager - Growth", dept: "Product", loc: "Bangalore", type: "Full-time" },
            { role: "Customer Success Lead", dept: "Operations", loc: "Remote", type: "Contract" },
            { role: "UI/UX Designer", dept: "Design", loc: "Bangalore", type: "Full-time" }
          ].map((job, idx) => (
            <div key={idx} className="group flex flex-col sm:flex-row justify-between items-center p-6 border border-gray-200 rounded-2xl hover:border-rupivo-blue hover:shadow-lg hover:shadow-rupivo-blue/5 transition-all cursor-pointer bg-white">
              <div className="mb-4 sm:mb-0 text-center sm:text-left w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h4 className="font-bold text-lg text-rupivo-dark group-hover:text-rupivo-blue transition-colors">{job.role}</h4>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span className="text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded text-gray-500 inline-block w-fit mx-auto sm:mx-0">{job.type}</span>
                </div>
                <p className="text-sm text-gray-500">{job.dept} • {job.loc}</p>
              </div>
              <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-rupivo-blue group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Section 6: Application Process */}
      <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-rupivo-dark mb-8 text-center">How We Hire</h3>
          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
              {/* Line */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

              {[
                  { step: 1, title: "Apply", desc: "Send us your CV" },
                  { step: 2, title: "Intro Call", desc: "30 min chat" },
                  { step: 3, title: "Deep Dive", desc: "Technical round" },
                  { step: 4, title: "Culture Fit", desc: "Meet the team" },
                  { step: 5, title: "Offer", desc: "Welcome aboard!" }
              ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center bg-gray-50">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-rupivo-blue text-rupivo-blue font-bold text-lg flex items-center justify-center mb-4 shadow-sm z-10">
                          {s.step}
                      </div>
                      <h5 className="font-bold text-rupivo-dark">{s.title}</h5>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                  </div>
              ))}
          </div>
      </section>

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-2">Don't see a role for you?</p>
        <p className="font-bold text-rupivo-blue">Send your CV to careers@rupivo.in</p>
      </div>
    </div>
  </PageLayout>
);

// --- BLOG ---
export const Blog: React.FC = () => (
  <PageLayout title="The Rupivo Journal" subtitle="Insights, guides, and stories for your financial journey.">
    <div className="space-y-24">
       
       {/* Section 1: Hero Featured Post */}
       <section className="relative rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl h-[650px]">
           <img 
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
             alt="Featured" 
             className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4 text-white">
               <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                   <span className="bg-rupivo-blue px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-rupivo-blue/20">Cover Story</span>
                   <span className="flex items-center gap-1.5 text-sm font-medium text-gray-300 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full"><Clock size={14}/> 8 min read</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-sm">The Future of Lending is Here: Why AI is Your New Banker</h2>
               <p className="text-gray-200 mb-8 text-lg leading-relaxed line-clamp-2 opacity-90 max-w-2xl">
                 Traditional credit scores are outdated. Discover how Rupivo's new AI model uses alternative data to approve loans for the unbanked, ensuring fairness and inclusion for millions of Indians.
               </p>
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                   <Button className="bg-white text-rupivo-dark hover:bg-blue-50 border-0 rounded-full px-8 py-4 h-auto text-base font-bold shadow-lg shadow-white/10" icon={<BookOpen size={20}/>}>
                       Start Reading
                   </Button>
                   <div className="flex items-center gap-3">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun" alt="Author" className="w-12 h-12 rounded-full border-2 border-white/20" />
                       <div>
                           <p className="text-sm font-bold">Arjun Malhotra</p>
                           <p className="text-xs text-gray-400">CEO & Co-Founder</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       {/* Section 2: Trending Topics / Navigation */}
       <section>
           <div className="flex flex-col md:flex-row justify-between items-center mb-8">
               <h3 className="text-2xl font-bold text-rupivo-dark flex items-center gap-2">
                   <Hash className="text-rupivo-blue" /> Trending Topics
               </h3>
               <div className="relative w-full md:w-64 mt-4 md:mt-0">
                   <input type="text" placeholder="Search articles..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 outline-none text-sm" />
                   <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
               </div>
           </div>
           <div className="flex flex-wrap gap-3">
               {["All", "Credit Score 101", "Personal Finance", "Fraud Prevention", "Success Stories", "Rupivo Updates", "Regulatory News", "Lifestyle"].map((cat, i) => (
                   <button key={i} className={`px-6 py-3 rounded-2xl text-sm font-bold border transition-all hover:-translate-y-0.5 ${i===0 ? 'bg-rupivo-dark text-white border-rupivo-dark shadow-lg shadow-gray-900/20' : 'bg-white text-gray-600 border-gray-200 hover:border-rupivo-blue hover:text-rupivo-blue hover:shadow-md'}`}>
                       {cat}
                   </button>
               ))}
           </div>
       </section>

       {/* Section 3: FinShorts (Quick Reads) - Horizontal Scroll */}
       <section>
           <div className="flex items-center justify-between mb-8">
               <div>
                   <h3 className="text-2xl font-bold text-rupivo-dark flex items-center gap-2"><Zap className="text-yellow-500 fill-yellow-500" /> FinShorts</h3>
                   <p className="text-gray-500 text-sm">Bite-sized financial updates. 1 minute reads.</p>
               </div>
               <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ArrowRight size={20} className="rotate-180" /></button>
                   <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"><ArrowRight size={20} /></button>
               </div>
           </div>
           
           <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
               {[
                   { title: "RBI repo rate remains unchanged at 6.5%", tag: "News", color: "blue" },
                   { title: "5 ways to save tax before March 31st", tag: "Tips", color: "green" },
                   { title: "UPI transactions hit new record in Feb", tag: "Market", color: "purple" },
                   { title: "Gold prices see a slight dip this week", tag: "Commodities", color: "yellow" },
                   { title: "New credit card rules effective from April", tag: "Regulations", color: "red" }
               ].map((item, i) => (
                   <div key={i} className="min-w-[280px] p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer snap-start flex flex-col justify-between h-48 group">
                       <div>
                           <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-${item.color}-50 text-${item.color}-600 mb-3 inline-block`}>{item.tag}</span>
                           <h4 className="font-bold text-lg text-rupivo-dark group-hover:text-rupivo-blue transition-colors leading-tight">{item.title}</h4>
                       </div>
                       <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                           <span>Today</span>
                           <span className="flex items-center gap-1"><Clock size={12}/> 1 min</span>
                       </div>
                   </div>
               ))}
           </div>
       </section>

       {/* Section 4: Editor's Picks (Grid) */}
       <section>
           <h3 className="text-2xl font-bold text-rupivo-dark mb-8 flex items-center gap-2"><Award className="text-rupivo-blue" /> Editor's Picks</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                   { title: "The Ultimate Guide to improving CIBIL Score", desc: "Went from 650 to 800 in 6 months? Here is the exact strategy used by our financial experts.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" },
                   { title: "Debt Consolidation: Is it right for you?", desc: "Managing multiple EMIs can be stressful. Learn how a consolidation loan can save you interest and money.", img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80" }
               ].map((post, i) => (
                   <div key={i} className="group cursor-pointer">
                       <div className="overflow-hidden rounded-[2rem] mb-6 h-64 shadow-md relative">
                           <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                       </div>
                       <h4 className="text-2xl font-bold text-rupivo-dark mb-3 group-hover:text-rupivo-blue transition-colors">{post.title}</h4>
                       <p className="text-gray-600 leading-relaxed mb-4">{post.desc}</p>
                       <div className="inline-flex items-center gap-2 text-rupivo-blue font-bold text-sm bg-blue-50/50 px-4 py-2 rounded-full group-hover:bg-rupivo-blue group-hover:text-white transition-all">
                           Read Article <ArrowRight size={16}/>
                       </div>
                   </div>
               ))}
           </div>
       </section>

       {/* Section 5: Deep Dives (Long List) */}
       <section className="bg-gray-50 rounded-[3rem] p-8 md:p-12">
           <h3 className="text-2xl font-bold text-rupivo-dark mb-10">Deep Dives</h3>
           <div className="space-y-8">
               {[
                   { title: "Understanding the Psychology of Money", date: "Mar 15", cat: "Psychology", read: "12 min" },
                   { title: "How inflation is silently eating your savings", date: "Mar 12", cat: "Economics", read: "10 min" },
                   { title: "The complete checklist before taking a Personal Loan", date: "Mar 08", cat: "Guide", read: "15 min" }
               ].map((item, i) => (
                   <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-rupivo-blue/30 transition-all flex flex-col md:flex-row gap-8 items-center group cursor-pointer shadow-sm hover:shadow-lg">
                       <div className="w-full md:w-48 h-32 bg-gray-200 rounded-2xl overflow-hidden shrink-0">
                           <img src={`https://images.unsplash.com/photo-${i === 0 ? '1579621970563-ebec7560ff3e' : i === 1 ? '1611974765270-ca1258047490' : '1554224155-8d04cb21cd6c'}?auto=format&fit=crop&w=400&q=80`} alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       </div>
                       <div className="flex-1">
                           <div className="flex gap-3 mb-2">
                               <span className="bg-blue-50 text-rupivo-blue px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">{item.cat}</span>
                               <span className="text-gray-400 text-xs font-bold flex items-center gap-1"><Clock size={12} /> {item.read}</span>
                           </div>
                           <h4 className="text-xl font-bold text-rupivo-dark mb-2 group-hover:text-rupivo-blue transition-colors">{item.title}</h4>
                           <p className="text-gray-500 text-sm line-clamp-2">An in-depth look at how financial decisions are driven more by emotions than logic, and what you can do about it.</p>
                       </div>
                       <div className="hidden md:block">
                           <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-rupivo-blue group-hover:text-white group-hover:border-rupivo-blue transition-all">
                               <ArrowRight size={20} />
                           </div>
                       </div>
                   </div>
               ))}
           </div>
           <div className="text-center mt-10">
               <Button variant={ButtonVariant.OUTLINE} className="px-8 border-gray-300">Load More Articles</Button>
           </div>
       </section>

       {/* Section 6: Video Section */}
       <section className="bg-rupivo-dark rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rupivo-blue/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                   <div>
                       <h3 className="text-3xl font-bold mb-2 flex items-center gap-3"><PlayCircle className="text-red-500" size={32} /> Watch & Learn</h3>
                       <p className="text-gray-400">Complex financial concepts explained simply.</p>
                   </div>
                   <Button variant={ButtonVariant.OUTLINE} className="border-white/20 text-white hover:bg-white hover:text-rupivo-dark">Visit YouTube Channel</Button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                       { title: "What is APR?", dur: "2:30" },
                       { title: "How to apply for a loan?", dur: "3:45" },
                       { title: "Customer Success Story", dur: "1:15" }
                   ].map((vid, i) => (
                       <div key={i} className="group cursor-pointer">
                           <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800 mb-4 border border-white/10 shadow-lg">
                               <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                                   <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                       <PlayCircle size={32} className="text-white fill-white" />
                                   </div>
                               </div>
                               <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-xs font-bold">{vid.dur}</span>
                           </div>
                           <h4 className="font-bold text-lg group-hover:text-rupivo-blue transition-colors">{vid.title}</h4>
                       </div>
                   ))}
               </div>
           </div>
       </section>
       
       {/* Section 7: Community Voices */}
        <section>
            <h3 className="text-2xl font-bold text-rupivo-dark mb-10 text-center">Community Voices</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-8 rounded-[2.5rem] relative hover:-translate-y-1 transition-transform">
                    <Quote className="text-orange-200 w-16 h-16 absolute top-8 right-8" />
                    <p className="text-lg font-medium text-gray-800 italic mb-6 relative z-10">"I never thought reading a finance blog could be this interesting. The article on 'Debt Snowball' literally saved me ₹20k in interest."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full p-1 shadow-sm">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Reader1" alt="Reader" className="rounded-full" />
                        </div>
                        <div>
                            <p className="font-bold text-rupivo-dark">Sarah J.</p>
                            <p className="text-xs text-gray-500 uppercase font-bold">Regular Reader</p>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 p-8 rounded-[2.5rem] relative hover:-translate-y-1 transition-transform">
                    <Quote className="text-blue-200 w-16 h-16 absolute top-8 right-8" />
                    <p className="text-lg font-medium text-gray-800 italic mb-6 relative z-10">"The FinShorts section is my daily morning routine now. It keeps me updated without boring me with jargon."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full p-1 shadow-sm">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Reader2" alt="Reader" className="rounded-full" />
                        </div>
                        <div>
                            <p className="font-bold text-rupivo-dark">Mike T.</p>
                            <p className="text-xs text-gray-500 uppercase font-bold">Subscriber</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       {/* Section 8: Newsletter (Updated) */}
       <section className="bg-gradient-to-br from-rupivo-blue to-blue-900 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
               <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-md">
                   <MailOpen size={32} className="text-yellow-400" />
               </div>
               <h3 className="text-4xl font-extrabold mb-4">Money wisdom, delivered.</h3>
               <p className="text-blue-100 mb-10 text-lg">Join 50,000+ smart Indians who get our weekly financial roundup. No fluff, just value.</p>
               
               <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                   <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-4 rounded-2xl border border-white/20 bg-white/10 text-white placeholder:text-blue-200 focus:bg-white/20 outline-none backdrop-blur-sm transition-all" />
                   <Button className="rounded-2xl px-8 h-auto py-4 bg-white text-rupivo-blue hover:bg-blue-50 font-bold text-lg shadow-xl">Subscribe Free</Button>
               </form>
               <div className="flex items-center justify-center gap-6 mt-8 text-sm text-blue-200 font-medium">
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Weekly updates</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Exclusive guides</span>
                   <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Unsubscribe anytime</span>
               </div>
           </div>
       </section>

       {/* Section 9: Categories Footer */}
       <section className="border-t border-gray-100 pt-10">
           <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
               <a href="#" className="hover:text-rupivo-blue transition-colors">Credit</a>
               <a href="#" className="hover:text-rupivo-blue transition-colors">Loans</a>
               <a href="#" className="hover:text-rupivo-blue transition-colors">Insurance</a>
               <a href="#" className="hover:text-rupivo-blue transition-colors">Investments</a>
               <a href="#" className="hover:text-rupivo-blue transition-colors">Calculators</a>
               <a href="#" className="hover:text-rupivo-blue transition-colors">Glossary</a>
           </div>
       </section>
    </div>
  </PageLayout>
);
