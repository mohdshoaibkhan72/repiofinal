import React, { useState } from 'react';
import { PageLayout } from '../PageLayout';
import { Mail, Phone, MapPin, Plus, Minus, Search, MessageSquare, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Building2, HelpCircle } from 'lucide-react';
import { Button } from '../Button';

// --- CONTACT US ---
export const ContactUs: React.FC = () => (
  <PageLayout title="Contact Us" subtitle="We're here to help you 24/7. Reach out to us through any channel.">
    <div className="space-y-16">
        
      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-rupivo-dark mb-8">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start p-6 bg-blue-50/50 rounded-2xl border border-blue-100 hover:bg-blue-50 transition-colors group cursor-default">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm group-hover:scale-110 transition-transform">
                 <Mail className="text-rupivo-blue" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                <p className="text-gray-600 mb-1">For general queries & support</p>
                <p className="text-rupivo-blue font-bold">support@rupivo.in</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-green-50/50 rounded-2xl border border-green-100 hover:bg-green-50 transition-colors group cursor-default">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm group-hover:scale-110 transition-transform">
                 <Phone className="text-rupivo-green" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                <p className="text-gray-600 mb-1">Mon-Sat, 9 AM - 7 PM</p>
                <p className="text-rupivo-green font-bold">1800-123-4567</p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-purple-50/50 rounded-2xl border border-purple-100 hover:bg-purple-50 transition-colors group cursor-default">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 mr-5 shadow-sm group-hover:scale-110 transition-transform">
                 <MapPin className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                <p className="text-gray-600">
                  Rupivo Technologies Pvt Ltd<br/>
                  12th Main Rd, Indiranagar, Bangalore, 560038
                </p>
              </div>
            </div>
          </div>
          
          {/* Department Emails - NEW */}
          <div className="mt-12">
              <h4 className="font-bold text-gray-900 mb-4">Specific Inquiries</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-rupivo-blue/30 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase">Partnerships</p>
                      <p className="text-sm font-medium text-rupivo-blue">partner@rupivo.in</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-rupivo-blue/30 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase">Media / Press</p>
                      <p className="text-sm font-medium text-rupivo-blue">media@rupivo.in</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-rupivo-blue/30 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase">Legal / Privacy</p>
                      <p className="text-sm font-medium text-rupivo-blue">legal@rupivo.in</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 hover:border-rupivo-blue/30 transition-colors">
                      <p className="text-xs font-bold text-gray-400 uppercase">Careers</p>
                      <p className="text-sm font-medium text-rupivo-blue">careers@rupivo.in</p>
                  </div>
              </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-xl shadow-gray-200/50">
          <h3 className="text-2xl font-bold text-rupivo-dark mb-2">Send a Message</h3>
          <p className="text-gray-500 mb-8">We usually respond within 24 hours.</p>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none transition-all" placeholder="Rahul" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none transition-all" placeholder="Verma" />
                </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none transition-all" placeholder="rahul@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none transition-all" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <Button fullWidth className="rounded-xl mt-2 h-14 font-bold text-lg">Send Message</Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 rounded-[2.5rem] overflow-hidden relative border border-gray-200">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80" alt="Map" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl font-bold text-rupivo-dark flex flex-col items-center gap-2 max-w-sm text-center animate-bounce-slow">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-2">
                     <MapPin fill="currentColor" />
                  </div>
                  <h4 className="text-lg">Bangalore HQ</h4>
                  <p className="text-sm text-gray-500 font-normal">Come say hi! We have great coffee.</p>
              </div>
          </div>
      </div>
    </div>
  </PageLayout>
);

// --- FAQS ---

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b border-gray-100 py-5 ${isOpen ? 'bg-gray-50/50 -mx-4 px-4 rounded-lg border-transparent' : ''} transition-all`}>
      <button 
        className="w-full flex justify-between items-start text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold text-lg ${isOpen ? 'text-rupivo-blue' : 'text-gray-800'} group-hover:text-rupivo-blue transition-colors`}>{question}</span>
        {isOpen ? <Minus className="text-rupivo-blue shrink-0 ml-4 mt-1" size={20} /> : <Plus className="text-gray-400 shrink-0 ml-4 mt-1 group-hover:text-rupivo-blue" size={20} />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 leading-relaxed pr-8 animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQs: React.FC = () => {
    const [activeTab, setActiveTab] = useState("General");
    const [searchQuery, setSearchQuery] = useState("");

    const faqs = [
        { category: "General", q: "What is Rupivo?", a: "Rupivo is a digital lending platform that connects borrowers with RBI-registered lenders to provide instant personal loans completely digitally." },
        { category: "General", q: "Is Rupivo a bank?", a: "No, Rupivo is a Loan Service Provider (LSP). We partner with Banks and NBFCs to provide loans." },
        { category: "Eligibility", q: "What is the minimum salary required?", a: "You need a minimum monthly in-hand salary of ₹15,000 to be eligible." },
        { category: "Eligibility", q: "Do I need a CIBIL score?", a: "While a good CIBIL score (650+) helps, we also use alternative data for users new to credit." },
        { category: "Application", q: "How long does approval take?", a: "In-principal approval is instant. Disbursement typically happens within 2-24 hours after document verification." },
        { category: "Application", q: "What documents are needed?", a: "PAN Card, Aadhaar Card (linked to mobile), and Bank Statement (last 3 months)." },
        { category: "Repayment", q: "Can I repay my loan early?", a: "Yes, you can foreclose your loan. Charges may apply as per the specific lender's policy (usually 0-4%)." },
        { category: "Repayment", q: "What happens if I miss an EMI?", a: "Missing an EMI will attract penalty charges and negatively impact your credit score. We recommend enabling auto-debit." },
        { category: "Security", q: "Is my data safe?", a: "Yes, we use 256-bit encryption and are ISO 27001 certified. Your data is never shared without consent." },
    ];

    const filteredFaqs = faqs.filter(f => 
        (activeTab === "All" || f.category === activeTab) &&
        (f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <PageLayout title="Frequently Asked Questions" subtitle="Find answers to common queries about Rupivo.">
            <div className="max-w-4xl mx-auto space-y-16">
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                    <input 
                        type="text" 
                        placeholder="Search for questions..." 
                        className="w-full px-6 py-4 pl-12 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-rupivo-blue/20 focus:border-rupivo-blue outline-none text-lg"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {["General", "Eligibility", "Application", "Repayment", "Security"].map((cat) => (
                        <button 
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === cat ? 'bg-rupivo-dark text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <AccordionItem key={i} question={faq.q} answer={faq.a} />
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500">No matching questions found.</div>
                    )}
                </div>
                
                {/* Glossary - NEW */}
                <section className="bg-blue-50/50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100">
                    <h3 className="text-2xl font-bold text-rupivo-dark mb-8 text-center flex items-center justify-center gap-2">
                        <HelpCircle className="text-rupivo-blue" /> Financial Glossary
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-rupivo-blue mb-2">APR (Annual Percentage Rate)</h4>
                            <p className="text-sm text-gray-600">The total cost of your loan, including interest and processing fees, expressed as a yearly rate.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-rupivo-blue mb-2">NACH / e-Mandate</h4>
                            <p className="text-sm text-gray-600">An electronic system to automatically deduct your loan EMI from your bank account on the due date.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-rupivo-blue mb-2">LSP (Loan Service Provider)</h4>
                            <p className="text-sm text-gray-600">A platform like Rupivo that acts as a bridge between the borrower and the Regulated Entity (Bank/NBFC).</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-rupivo-blue mb-2">KFS (Key Fact Statement)</h4>
                            <p className="text-sm text-gray-600">A simplified document outlining all key terms (interest, fees, cooling-off period) provided before loan disbursal.</p>
                        </div>
                    </div>
                </section>

                {/* Still Stuck CTA */}
                <div className="bg-rupivo-dark rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-white">
                    <div>
                        <h4 className="font-bold text-xl mb-1">Still have questions?</h4>
                        <p className="text-gray-300">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button className="shrink-0 bg-white text-rupivo-dark hover:bg-gray-100" icon={<MessageSquare size={18} />}>Contact Support</Button>
                </div>

            </div>
        </PageLayout>
    );
};