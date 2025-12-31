import React from 'react';
import { PageLayout } from '../PageLayout';
import {
    Target, Users, TrendingUp, ArrowRight, Heart, Shield, Zap, Rocket, Globe, Coffee, Smile, Award, History, Newspaper, Linkedin, MapPin,
    Clock, PlayCircle, BookOpen, Hash, ChevronRight, Bookmark, Search, Share2, MailOpen, CheckCircle2, Quote, Smartphone, BrainCircuit, Briefcase
} from 'lucide-react';
import { Button } from '../Button';
import { ButtonVariant } from '../../types';

// --- ABOUT US ---
export const AboutUs: React.FC = () => (
    <PageLayout title="About Us" subtitle="Building the future of financial inclusion in India." maxWidth="max-w-[1200px]">
        <div className="space-y-24">
            {/* Section 1: Our Mission */}
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -z-10 rounded-3xl opacity-50"></div>
                <div className="text-center max-w-[1200px] mx-auto py-12 px-4">
                    <h3 className="text-4xl font-extrabold text-rupivo-dark mb-8 leading-tight">
                        Democratizing Credit for a <br /><span className="text-rupivo-blue">Billion Indians</span>
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                        At Rupivo, we believe that access to credit is a fundamental right, not a privilege. Millions of Indians are underserved by traditional banking simply because they lack a credit history or formal income documents. We are here to change that.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-200 pt-12">
                        <div>
                            <p className="text-4xl font-extrabold text-rupivo-dark mb-2">₹500Cr+</p>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loan Disbursed</p>
                        </div>
                        <div className="md:border-l md:border-r border-gray-200">
                            <p className="text-4xl font-extrabold text-rupivo-dark mb-2">10L+</p>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Happy Customers</p>
                        </div>
                        <div>
                            <p className="text-4xl font-extrabold text-rupivo-dark mb-2">99.9%</p>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Uptime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION 2: The Problem (Market Gap) */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-orange-100 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    {/* Updated to an Indian Context Image (Shop Owner/Freelancer Vibe) */}
                    <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=1000&q=80" alt="Indian Market Gap" className="relative rounded-[2.5rem] shadow-2xl z-10 w-full object-cover h-[500px]" />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-50">
                        <p className="text-4xl font-extrabold text-rupivo-dark mb-1">92%</p>
                        <p className="text-sm text-gray-500 font-medium">Indians don't have access to formal credit cards or unsecured loans.</p>
                    </div>
                </div>
                <div>
                    <span className="text-rupivo-blue font-bold text-sm uppercase tracking-widest mb-2 block">The Problem</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-6">Traditional Banking is <br />Broken for the Majority.</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Banks rely heavily on CIBIL scores and salary slips. But what about the freelancer, the small shop owner, or the fresh graduate?
                        They are often labeled "Credit Invisible" despite being financially responsible. We realized that <strong>No Credit History ≠ High Risk</strong>.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Manual underwriting is slow and biased.",
                            "Tier 2/3 cities are largely ignored by big banks.",
                            "Predatory loan apps exploit this gap with harassment."
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* NEW SECTION 3: Our Technology */}
            <section className="bg-rupivo-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500 rounded-full blur-[100px]"></div>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2 block">Our Solution</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Underwriting 2.0: <br />Data Beyond Documents</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We built a proprietary AI engine that analyzes over 5,000 alternative data points to assess a user's intent and ability to repay in milliseconds—without a single human intervention.
                    </p>
                </div>

                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <Smartphone className="text-blue-400" size={32} />, title: "Device Intelligence", desc: "We analyze non-personal device data points to detect fraud rings and identity theft patterns instantly." },
                        { icon: <TrendingUp className="text-green-400" size={32} />, title: "Cashflow Analysis", desc: "Our engine understands real income through transactional patterns, not just what a salary slip says." },
                        { icon: <BrainCircuit className="text-purple-400" size={32} />, title: "Behavioral AI", desc: "Psychometric scoring models help us assess 'Willingness to Repay', predicting default probability with 99% accuracy." }
                    ].map((feat, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                            <div className="mb-6 bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <h4 className="font-bold text-xl mb-3">{feat.title}</h4>
                            <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEW SECTION 4: Our Reach */}
            <section className="py-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-rupivo-blue font-bold text-sm uppercase tracking-widest mb-2 block">Our Reach</span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-6">Serving Bharat, <br />Not Just India.</h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            While others compete for the same credit-card holding users in Metros, Rupivo is going deep into the hinterlands. We are proud to facilitate credit in over 19,000+ pin codes, bringing financial independence to every corner of the country.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-3xl font-extrabold text-rupivo-dark mb-1">75%</p>
                                <p className="text-sm text-gray-500 font-medium">Users from Tier 2/3 Cities</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-3xl font-extrabold text-rupivo-dark mb-1">28</p>
                                <p className="text-sm text-gray-500 font-medium">States Covered</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full relative h-[400px] bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80" alt="India Connect" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-rupivo-blue/20 to-transparent"></div>

                        {/* Animated Pin Dots */}
                        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-rupivo-blue rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping delay-700"></div>
                        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-ping delay-200"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>

                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm">
                            <p className="text-xs font-bold text-rupivo-dark uppercase mb-1">Live Activity</p>
                            <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Loan disbursed in Siliguri, West Bengal just now.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Leadership Team */}
            <section>
                <div className="text-center mb-16">
                    <span className="text-rupivo-blue font-bold text-sm uppercase tracking-widest mb-2 block">The Visionaries</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark">Meet the Team</h3>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                        We are a group of passionate individuals committed to solving the credit gap in India.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
                    {[
                        { name: "Mohammad Anwar", role: "Founder", img: "Anwar", linkedin: "https://www.linkedin.com/in/ianwarmohammad/" },
                        { name: "Vivek Aakash", role: "Head of Product", img: "Vivek", linkedin: "https://www.linkedin.com/" },
                        { name: "Amjad Khan", role: "Head of Legal", img: "Amjad", linkedin: "https://www.linkedin.com/" },
                    ].map((leader, i) => (
                        <div key={i} className="group relative bg-white rounded-[2.5rem] p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-rupivo-blue/10 to-transparent"></div>

                            <div className="relative inline-block mb-6 mt-8">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-card mx-auto bg-gray-50">
                                    <img
                                        src={leader.name === "Mohammad Anwar" ? "/image.png" : `https://api.dicebear.com/7.x/initials/svg?seed=${leader.name}&backgroundColor=0056D2&textColor=ffffff&fontWeight=700`}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <h4 className="font-bold text-2xl text-rupivo-dark mb-2">{leader.name}</h4>
                            <p className="text-rupivo-blue font-bold text-base uppercase tracking-wide mb-6">{leader.role}</p>

                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6: Our Values */}
            <section className="bg-rupivo-dark rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rupivo-blue/20 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rupivo-green/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>

                <div className="relative z-10 text-center mb-16">
                    <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <Target className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-xl mb-3">Simplicity First</h4>
                        <p className="text-gray-400 leading-relaxed">We remove complex paperwork and jargon. Finance should be as easy as ordering food online.</p>
                    </div>
                    <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                            <Users className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-xl mb-3">Radical Inclusion</h4>
                        <p className="text-gray-400 leading-relaxed">We build for the unserved. Our models look beyond CIBIL scores to see the real person.</p>
                    </div>
                    <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-xl mb-3">Unwavering Trust</h4>
                        <p className="text-gray-400 leading-relaxed">We treat user data with sanctity. Transparency and security are non-negotiable.</p>
                    </div>
                </div>
            </section>

            {/* Section 7: Press Mentions */}
            <section className="text-center pb-12">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12 flex items-center justify-center gap-2">
                    <Newspaper size={16} /> Featured In Top Publications
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-3xl font-serif font-bold text-gray-800">The Economic Times</span>
                    <span className="text-3xl font-sans font-black tracking-tighter text-gray-800">YourStory</span>
                    <span className="text-3xl font-serif font-bold text-gray-800">Mint</span>
                    <span className="text-3xl font-sans font-bold text-gray-800">TechCrunch</span>
                    <span className="text-3xl font-sans font-bold text-gray-800">INC42</span>
                </div>
            </section>
        </div>
    </PageLayout>
);

// --- CAREERS ---
export const Careers: React.FC = () => (
    <PageLayout title="Join Our Team" subtitle="Build the future of fintech with us." maxWidth="max-w-[1200px]">
        <div className="space-y-16">
            {/* Intro */}
            <section className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold text-rupivo-dark mb-6">Work that matters.</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are a team of dreamers, builders, and doers. We don't just write code or design interfaces; we build financial bridges for millions of Indians.
                </p>
            </section>

            {/* Perks */}
            <section className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: <Heart className="text-red-500" />, title: "Health First", desc: "Comprehensive health insurance for you and your family." },
                    { icon: <Zap className="text-yellow-500" />, title: "High Impact", desc: "Work on problems that affect millions of lives daily." },
                    { icon: <Rocket className="text-purple-500" />, title: "Growth", desc: "Generous learning budget and fast-track career paths." },
                    { icon: <Clock className="text-blue-500" />, title: "Flexibility", desc: "Hybrid work policy because we value output over hours." },
                    { icon: <Coffee className="text-brown-500" />, title: "Great Office", desc: "A vibrant workspace in Indiranagar with unlimited coffee." },
                    { icon: <Smile className="text-green-500" />, title: "Fun Culture", desc: "Regular team outings, gaming nights, and retreats." },
                ].map((perk, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 text-xl">
                            {perk.icon}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{perk.title}</h4>
                        <p className="text-sm text-gray-500">{perk.desc}</p>
                    </div>
                ))}
            </section>

            {/* Open Positions */}
            <section>
                <h3 className="text-2xl font-bold text-rupivo-dark mb-8">Open Positions</h3>
                <div className="space-y-4">
                    {[
                        { role: "Senior Backend Engineer", dept: "Engineering", loc: "Bangalore", type: "Full-time" },
                        { role: "Product Designer (UI/UX)", dept: "Design", loc: "Bangalore", type: "Full-time" },
                        { role: "Growth Marketing Manager", dept: "Marketing", loc: "Remote", type: "Full-time" },
                        { role: "Credit Risk Analyst", dept: "Risk", loc: "Mumbai", type: "Full-time" },
                    ].map((job, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-rupivo-blue transition-colors group">
                            <div>
                                <h4 className="font-bold text-lg text-rupivo-dark group-hover:text-rupivo-blue transition-colors">{job.role}</h4>
                                <div className="flex gap-4 mt-2 text-sm text-gray-500 font-medium">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                                </div>
                            </div>
                            <Button variant={ButtonVariant.OUTLINE} className="mt-4 md:mt-0">Apply Now</Button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 rounded-3xl p-8 text-center">
                <h4 className="font-bold text-xl mb-2">Don't see a fit?</h4>
                <p className="text-gray-600 mb-6">We are always looking for exceptional talent. Send your CV to careers@rupivo.in</p>
                <Button>Email Us</Button>
            </section>
        </div>
    </PageLayout>
);

// --- BLOG ---
export const Blog: React.FC = () => (
    <PageLayout title="Rupivo Blog" subtitle="Financial wisdom for the modern Indian." maxWidth="max-w-[1200px]">
        <div className="space-y-16">
            {/* Featured Post */}
            <section className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden h-[400px] mb-6">
                    <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1600&q=80" alt="Finance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <span className="bg-rupivo-blue text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">Featured</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">Understanding Credit Scores: A Comprehensive Guide for 2024</h2>
                        <p className="text-gray-300 max-w-2xl text-lg hidden md:block">Why your score matters, how it's calculated, and 5 proven ways to boost it within 6 months.</p>
                    </div>
                </div>
            </section>

            {/* Recent Posts Grid */}
            <section>
                <h3 className="text-2xl font-bold text-rupivo-dark mb-8 flex items-center gap-2">
                    <BookOpen className="text-rupivo-blue" /> Recent Articles
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Personal Loan vs Credit Card: Which is better?", cat: "Guide", img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80" },
                        { title: "How to Manage your EMIs Smartly", cat: "Tips", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80" },
                        { title: "Digital Lending Guidelines: What Consumers Should Know", cat: "News", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" },
                        { title: "Investing 101: Start Small, Grow Big", cat: "Wealth", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80" },
                        { title: "The Rise of UPI in Rural India", cat: "Trends", img: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=800&q=80" },
                        { title: "Avoid These 5 Common Loan Mistakes", cat: "Education", img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?auto=format&fit=crop&w=800&q=80" }
                    ].map((post, i) => (
                        <div key={i} className="group cursor-pointer flex flex-col h-full">
                            <div className="rounded-2xl overflow-hidden mb-4 h-48 relative">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-800">{post.cat}</div>
                            </div>
                            <h4 className="font-bold text-xl text-rupivo-dark mb-2 group-hover:text-rupivo-blue transition-colors line-clamp-2">{post.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                                <span>5 min read</span>
                                <span>•</span>
                                <span>Mar 15, 2024</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-rupivo-dark rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center">
                <div className="absolute top-0 left-0 w-64 h-64 bg-rupivo-blue/20 rounded-full blur-[80px] -ml-20 -mt-20"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-rupivo-green/20 rounded-full blur-[80px] -mr-20 -mb-20"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <MailOpen className="w-12 h-12 text-white/20 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Stay Financially Savvy</h3>
                    <p className="text-gray-400 mb-8">Get the latest financial tips and Rupivo news delivered straight to your inbox. No spam, we promise.</p>

                    <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:bg-white/20 transition-colors" />
                        <Button className="h-full py-4 px-8 text-lg font-bold">Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
    </PageLayout>
);