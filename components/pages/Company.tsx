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
    <PageLayout title="About Us" subtitle="Building the future of financial inclusion in India." maxWidth="max-w-[1200px]">
        <div className="space-y-12 md:space-y-20">
            {/* Section 1: Our Mission */}
            <section className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-rupivo-dark mb-6">Democratizing Credit for a Billion Indians</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    At Rupivo, we believe that access to credit is a fundamental right, not a privilege. Millions of Indians are underserved by traditional banking simply because they lack a credit history or formal income documents. We are here to change that. By leveraging advanced AI and alternative data, we connect deserving borrowers with RBI-registered lenders instantly, transparently, and securely.
                </p>
                <div className="w-24 h-1 bg-rupivo-blue mx-auto rounded-full"></div>
            </section>



            {/* Section 3: Leadership Team */}
            <section>
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-rupivo-dark">Meet the Leadership</h3>
                    <p className="text-gray-500 mt-2">Driven by vision, guided by experience.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        { name: "Mohammad Anwer", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/ianwarmohammad/" },
                        { name: "Vivek Akash", role: "Product Manager" },
                    ].map((leader, i) => (
                        <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                            {/* Decorative Background Blob */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative mb-6 z-10">
                                <div className="w-36 h-36 rounded-full p-1.5 bg-white border border-gray-100 shadow-md group-hover:border-rupivo-blue/30 group-hover:scale-105 transition-all duration-500">
                                    <img
                                        src={leader.name === "Mohammad Anwer" ? "/image.png" : `https://api.dicebear.com/7.x/initials/svg?seed=${leader.name}&backgroundColor=0056D2&textColor=ffffff&fontWeight=700`}
                                        alt={leader.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                {leader.linkedin && (
                                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="absolute bottom-2 right-2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[#0077b5] shadow-lg cursor-pointer hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                                        <Linkedin size={18} />
                                    </a>
                                )}
                            </div>

                            <div className="relative z-10">
                                <h4 className="font-bold text-2xl text-rupivo-dark mb-2 group-hover:text-rupivo-blue transition-colors">{leader.name}</h4>
                                <p className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-4">{leader.role}</p>

                                {/* Decorative line */}
                                <div className="w-12 h-1 bg-gray-100 rounded-full mx-auto group-hover:bg-rupivo-blue/50 transition-colors duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: Our Values */}
            <section className="bg-gray-50 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16">
                <div className="text-center mb-8 md:mb-12">
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
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
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
    <PageLayout title="Join Our Team" subtitle="Help us revolutionize lending for the next billion users." maxWidth="max-w-[1200px]">
        <div className="space-y-20">

            {/* Section 1: Intro */}
            <section className="text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    We are a team of engineers, data scientists, and dreamers based in Bangalore. If you are passionate about Fintech and solving hard problems at scale, we want to hear from you.
                </p>
            </section>

            {/* Section 2: Life at Rupivo (Gallery) */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-96">
                    <div className="h-64 md:h-full md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <p className="text-white font-bold text-lg">Brainstorming Fridays</p>
                        </div>
                    </div>
                    <div className="h-48 md:h-full rounded-3xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-48 md:h-full rounded-3xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80" alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="h-48 md:h-full md:col-span-2 rounded-3xl overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80" alt="Office" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <p className="text-white font-bold text-lg">Annual Offsite 2023</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Perks */}
            <section className="bg-gray-50 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10">
                <h3 className="text-2xl font-bold text-rupivo-dark mb-8 md:mb-10 text-center">Why Work With Us?</h3>
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
                        <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shrink-0 bg-rupivo-blue/20">
                            <img src="https://api.dicebear.com/7.x/initials/svg?seed=Rohan%20Mehta&backgroundColor=transparent&textColor=ffffff" alt="Dev" className="w-full h-full" />
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
                <p className="font-bold text-rupivo-blue">Send your CV to careers@rupivo.com</p>
            </div>
        </div>
    </PageLayout>
);

// --- BLOG ---
export const Blog: React.FC = () => (
    <PageLayout title="The Rupivo Journal" subtitle="Insights, guides, and stories for your financial journey." maxWidth="max-w-[1200px]">
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-rupivo-blue w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-rupivo-dark mb-4">Coming Soon</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                We are crafting high-quality articles to help you make better financial decisions. Stay tuned!
            </p>
            <div className="flex gap-4">
                <Button onClick={() => window.location.href = '/'}>
                    Go Home
                </Button>
            </div>
        </div>
    </PageLayout>
);
