import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <footer id="support" className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Text - Important */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
             <div className="md:w-3/4">
                <h5 className="text-sm font-bold text-rupivo-dark mb-2 flex items-center gap-2">
                   <ShieldCheck size={16} className="text-rupivo-blue" />
                   RBI Compliance & Disclaimer
                </h5>
                <p className="text-xs text-gray-500 leading-relaxed text-justify">
                  RUPIVO (Rupivo Technologies Pvt Ltd) is a Digital Lending Platform/Loan Service Provider (LSP) that acts as a bridge between borrowers and RBI-registered NBFCs. We are not a bank or a lender. All loan approvals, disbursements, and recovery are handled by our regulated lending partners. We strictly adhere to the RBI's Digital Lending Guidelines (2022).
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400 font-medium">
                   <span>CIN: U72900KA2023PTC123456</span>
                   <span>•</span>
                   <span>ISO 27001:2013 Certified</span>
                   <span>•</span>
                   <span>Member of FACE (Fintech Association for Consumer Empowerment)</span>
                </div>
             </div>
             <div className="md:w-1/4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <p className="text-xs font-bold text-gray-700 mb-1">Grievance Officer:</p>
                <p className="text-xs text-gray-600">Mr. Rajesh Kumar</p>
                <p className="text-xs text-rupivo-blue font-bold mt-1">grievance@rupivo.in</p>
                <p className="text-[10px] text-gray-400 mt-1">Mon-Sat (10 AM - 6 PM)</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-rupivo-dark mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">About Us</Link></li>
              <li><Link to="/careers" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Blog</Link></li>
              <li><Link to="/partner" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors font-medium text-rupivo-blue">Referral Partner</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-rupivo-dark mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/privacy" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/grievance" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Grievance Redressal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-rupivo-dark mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" onClick={scrollToTop} className="hover:text-rupivo-blue transition-colors">FAQs</Link></li>
              <li>support@rupivo.in</li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-rupivo-dark mb-4">Registered Office</h4>
             <div className="flex gap-2 text-sm text-gray-600">
                <Building2 size={16} className="shrink-0 mt-0.5" />
                <p>
                  4th Floor, Tech Park,<br/>
                  12th Main Rd, Indiranagar,<br/>
                  Bangalore, Karnataka - 560038
                </p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} RUPIVO. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-rupivo-blue hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
             </div>
             <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-rupivo-blue hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};