import React from 'react';
import { PageLayout } from '../PageLayout';
import { Shield, Lock, Eye, FileText, AlertTriangle, ChevronRight, UserCheck, Scale, PhoneCall, CheckCircle2, Server, Globe } from 'lucide-react';

// --- PRIVACY POLICY ---
export const PrivacyPolicy: React.FC = () => (
  <PageLayout title="Privacy Policy" subtitle="Last updated: March 2024">
    <div className="space-y-16">
      
      {/* Introduction & Trust Badge - NEW */}
      <section className="bg-green-50/50 p-8 rounded-3xl border border-green-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
            <Shield size={120} className="text-green-600" />
        </div>
        <div className="relative z-10">
             <h3 className="text-xl font-bold text-rupivo-dark mb-4 flex items-center gap-2">
                 <Shield className="text-green-600" /> Your Data is Safe
             </h3>
             <p className="text-gray-700 leading-relaxed max-w-2xl mb-6">
                At Rupivo, data privacy is not just a policy, it's our product. We use <strong>256-bit Bank Grade Encryption</strong> and do not sell your data to third parties. We are ISO 27001 Certified.
             </p>
             <div className="flex gap-4">
                 <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div> ISO 27001
                 </div>
                 <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div> SSL Secured
                 </div>
                 <div className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div> RBI Compliant
                 </div>
             </div>
        </div>
      </section>

      {/* 1. Information We Collect */}
      <section>
          <h3 className="text-2xl font-bold text-rupivo-dark mb-6 flex items-center gap-3">
              <div className="p-2 bg-rupivo-blue/10 rounded-lg"><Eye size={24} className="text-rupivo-blue" /></div>
              1. Information We Collect
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:border-rupivo-blue transition-colors hover:shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Personal Information</h4>
                  <p className="text-sm text-gray-600">Information you provide directly: Name, Phone Number, Email Address, PAN Card, Aadhaar Number, Date of Birth, Gender, and Bank Account Details.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:border-rupivo-blue transition-colors hover:shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Financial Information</h4>
                  <p className="text-sm text-gray-600">Income details, employment status, bank statements (via Account Aggregator or PDF upload), and credit history.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:border-rupivo-blue transition-colors hover:shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Device Information</h4>
                  <p className="text-sm text-gray-600">Device ID, IP address, operating system, and installed apps data (for credit assessment and fraud prevention).</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-2xl bg-white hover:border-rupivo-blue transition-colors hover:shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Location Data</h4>
                  <p className="text-sm text-gray-600">GPS location to verify current address and prevent fraud. Collected only when the app is in use.</p>
              </div>
          </div>
      </section>

      {/* 2. How We Use Data */}
      <section>
          <h3 className="text-2xl font-bold text-rupivo-dark mb-6 flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg"><FileText size={24} className="text-green-600" /></div>
              2. How We Use Your Information
          </h3>
          <div className="bg-gray-50 rounded-2xl p-6">
             <ul className="space-y-4 text-gray-700">
              {[
                  "To facilitate loan processing with our lending partners.",
                  "To verify your identity and conduct KYC checks.",
                  "To assess your creditworthiness and loan eligibility.",
                  "To prevent money laundering, fraud, and criminal activity.",
                  "To communicate with you regarding your application status, offers, and support.",
                  "To comply with legal and regulatory requirements."
              ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                      {item}
                  </li>
              ))}
             </ul>
          </div>
      </section>

      {/* Data Lifecycle Visual - NEW */}
      <section className="bg-rupivo-dark text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rupivo-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h3 className="text-2xl font-bold mb-8 relative z-10 text-center">Data Security Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8 relative z-10 text-center">
              <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Collection</h4>
                  <p className="text-sm text-gray-400">Encrypted via SSL/TLS during transmission from your device.</p>
              </div>
              <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Server className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Storage</h4>
                  <p className="text-sm text-gray-400">Stored on AWS servers in India with 256-bit AES encryption.</p>
              </div>
              <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Access</h4>
                  <p className="text-sm text-gray-400">Strictly regulated access control. No unauthorized employee access.</p>
              </div>
          </div>
      </section>

       {/* 4. User Rights */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-rupivo-dark mb-4">Your Rights</h3>
          <p className="text-gray-600 mb-4">You have the right to request access to your data, correction of inaccurate data, or deletion of your account (subject to outstanding loan obligations).</p>
          <div className="flex gap-4 items-center mt-6">
              <a href="mailto:privacy@rupivo.in" className="bg-rupivo-dark text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-rupivo-blue transition-colors">Contact Privacy Officer</a>
          </div>
      </section>
    </div>
  </PageLayout>
);

// --- TERMS & CONDITIONS ---
export const TermsAndConditions: React.FC = () => (
  <PageLayout title="Terms & Conditions" subtitle="Please read carefully before using our services.">
    <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Table of Contents - NEW */}
        <div className="lg:w-1/4">
            <div className="sticky top-28 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-rupivo-dark mb-4 uppercase text-xs tracking-wider">Contents</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-500">
                    <li className="hover:text-rupivo-blue cursor-pointer">1. Acceptance</li>
                    <li className="hover:text-rupivo-blue cursor-pointer">2. Role of Rupivo</li>
                    <li className="hover:text-rupivo-blue cursor-pointer">3. Eligibility</li>
                    <li className="hover:text-rupivo-blue cursor-pointer">4. User Obligations</li>
                    <li className="hover:text-rupivo-blue cursor-pointer">5. Repayment</li>
                    <li className="hover:text-rupivo-blue cursor-pointer">6. Termination</li>
                </ul>
            </div>
        </div>

        <div className="lg:w-3/4 space-y-12">
            {/* 1. Acceptance */}
            <section>
                <h3 className="text-xl font-bold text-rupivo-dark mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-600 leading-relaxed">By accessing or using the Rupivo platform (App or Website), you agree to be bound by these Terms. If you do not agree, please do not use our services. We reserve the right to modify these terms at any time.</p>
            </section>

            {/* 2. Services */}
            <section>
                <h3 className="text-xl font-bold text-rupivo-dark mb-4">2. Role of Rupivo</h3>
                <p className="text-gray-600 mb-4">Rupivo acts as a <strong>Loan Service Provider (LSP)</strong> connecting borrowers with RBI-registered Banks and NBFCs. We are not a lender and do not provide loans directly.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                    <p className="text-sm text-yellow-800"><strong>Note:</strong> Loan approval, interest rates, and tenure are at the sole discretion of the lending partner.</p>
                </div>
            </section>

            {/* 3. Eligibility */}
            <section>
                <h3 className="text-xl font-bold text-rupivo-dark mb-4">3. Eligibility Criteria</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>You must be a citizen of India.</li>
                    <li>You must be at least 21 years of age.</li>
                    <li>You must have a valid PAN Card and Aadhaar.</li>
                    <li>You must have a bank account in your own name.</li>
                </ul>
            </section>

            {/* 4. User Obligations */}
            <section>
                <h3 className="text-xl font-bold text-rupivo-dark mb-4">4. User Obligations</h3>
                <p className="text-gray-600 mb-4">You agree to provide accurate, true, and complete information. Any misrepresentation or submission of fake documents is a criminal offense.</p>
                
                {/* Do's and Don'ts Visual - NEW */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <h5 className="font-bold text-green-700 text-sm mb-2">DO's</h5>
                        <ul className="text-xs text-gray-600 space-y-2">
                            <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-600" /> Keep your app updated</li>
                            <li className="flex gap-2"><CheckCircle2 size={14} className="text-green-600" /> Pay EMIs on time</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h5 className="font-bold text-red-700 text-sm mb-2">DON'Ts</h5>
                        <ul className="text-xs text-gray-600 space-y-2">
                            <li className="flex gap-2"><AlertTriangle size={14} className="text-red-600" /> Share OTP with anyone</li>
                            <li className="flex gap-2"><AlertTriangle size={14} className="text-red-600" /> Submit fake salary slips</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* 5. Repayment */}
            <section>
                <h3 className="text-xl font-bold text-rupivo-dark mb-4">5. Repayment & Charges</h3>
                <p className="text-gray-600 mb-2">You are liable to repay the loan amount along with interest and other charges as per the loan agreement signed with the lender.</p>
                <p className="text-gray-600">Late payment or default will negatively impact your credit score and may result in legal recovery proceedings by the lender.</p>
            </section>
        </div>
    </div>
  </PageLayout>
);

// --- GRIEVANCE REDRESSAL ---
export const GrievanceRedressal: React.FC = () => (
  <PageLayout title="Grievance Redressal" subtitle="We are committed to resolving your concerns quickly and fairly.">
    <div className="space-y-16">
      
      {/* Promise Header - NEW */}
      <section className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-rupivo-dark mb-4">Our Service Promise</h3>
          <p className="text-gray-600 leading-relaxed">
              Customer satisfaction is our top priority. We strive to acknowledge all complaints within 24 hours and resolve them within the timelines mentioned below.
          </p>
      </section>

      {/* Escalation Matrix */}
      <section>
          <div className="grid md:grid-cols-3 gap-8">
              
              {/* Level 1 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 relative hover:-translate-y-1 transition-transform">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rupivo-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Level 1</div>
                  <div className="text-center mb-6 pt-4">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-rupivo-blue">
                          <PhoneCall size={32} />
                      </div>
                      <h4 className="font-bold text-xl text-rupivo-dark">Customer Support</h4>
                      <p className="text-sm text-gray-500 mt-1">For initial queries</p>
                  </div>
                  <div className="space-y-4 text-center border-t border-gray-50 pt-6">
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                        <p className="text-gray-800 font-medium">support@rupivo.in</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Phone</p>
                        <p className="text-gray-800 font-medium">1800-123-4567</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg py-2 mt-4">
                          <p className="text-xs text-rupivo-blue font-bold">Max Turnaround: 2 Days</p>
                      </div>
                  </div>
              </div>

              {/* Level 2 */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 relative hover:-translate-y-1 transition-transform">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rupivo-green text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Level 2</div>
                  <div className="text-center mb-6 pt-4">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-rupivo-green">
                          <UserCheck size={32} />
                      </div>
                      <h4 className="font-bold text-xl text-rupivo-dark">Grievance Officer</h4>
                      <p className="text-sm text-gray-500 mt-1">If unresolved after 7 days</p>
                  </div>
                  <div className="space-y-4 text-center border-t border-gray-50 pt-6">
                      <div>
                         <p className="text-gray-800 font-bold">Mr. Rajesh Kumar</p>
                         <p className="text-xs text-gray-500">Rupivo Technologies Pvt Ltd</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                        <p className="text-rupivo-green font-medium">grievance@rupivo.in</p>
                      </div>
                      <div className="bg-green-50 rounded-lg py-2 mt-4">
                          <p className="text-xs text-rupivo-green font-bold">Max Turnaround: 5 Days</p>
                      </div>
                  </div>
              </div>

               {/* Level 3 */}
               <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-blue-900/5 relative hover:-translate-y-1 transition-transform">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">Level 3</div>
                  <div className="text-center mb-6 pt-4">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                          <Scale size={32} />
                      </div>
                      <h4 className="font-bold text-xl text-rupivo-dark">RBI Ombudsman</h4>
                      <p className="text-sm text-gray-500 mt-1">If unresolved after 30 days</p>
                  </div>
                  <div className="text-center text-sm border-t border-gray-50 pt-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">If your complaint remains unresolved for more than 30 days, you may approach the RBI Ombudsman.</p>
                      <a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer" className="block w-full py-3 rounded-xl border border-purple-200 text-purple-700 font-bold hover:bg-purple-50 transition-colors">RBI CMS Portal</a>
                  </div>
              </div>

          </div>
      </section>

      {/* Sachet Portal */}
      <section className="bg-gray-50 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Shield size={24} className="text-gray-600" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-rupivo-dark">RBI Sachet Portal</h4>
                <p className="text-sm text-gray-600">File complaints against unregistered entities.</p>
              </div>
          </div>
          <a href="https://sachet.rbi.org.in" target="_blank" rel="noreferrer" className="px-8 py-3 bg-white border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-rupivo-dark hover:text-white hover:border-rupivo-dark transition-all shadow-sm">
              Visit Sachet Portal
          </a>
      </section>

    </div>
  </PageLayout>
);