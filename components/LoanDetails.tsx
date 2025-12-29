import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

export const LoanDetails: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Specs Grid */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-10">
              Loan terms that work <br/>
              <span className="text-rupivo-blue">for you, not against you.</span>
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Loan Amount</p>
                <p className="text-2xl sm:text-3xl font-bold text-rupivo-dark">₹50k – ₹10L</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tenure</p>
                <p className="text-2xl sm:text-3xl font-bold text-rupivo-dark">12 – 60 M</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Interest Rate</p>
                <p className="text-2xl sm:text-3xl font-bold text-rupivo-blue">10.49%*</p>
                <p className="text-xs font-medium text-gray-400 mt-2">*Starting p.a reducing</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors">
                <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Processing</p>
                <p className="text-2xl sm:text-3xl font-bold text-rupivo-dark">2% – 4%</p>
                <p className="text-xs font-medium text-gray-400 mt-2">Standard market rates</p>
              </div>
            </div>
          </div>

          {/* Right: Benefits Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-rupivo-green/20 blur-3xl rounded-full opacity-30 transform translate-x-10 translate-y-10"></div>
            <div className="bg-rupivo-dark text-white p-8 lg:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-rupivo-green/20 rounded-lg">
                        <ShieldCheck className="text-rupivo-green" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold">The Rupivo Edge</h3>
                </div>
                
                <ul className="space-y-6">
                {[
                    "100% Paperless Application",
                    "Multiple Lenders, One App",
                    "No Hidden Foreclosure Charges",
                    "Instant In-Principal Decision",
                    "Flexible EMI Dates"
                ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start group">
                    <div className="w-6 h-6 rounded-full bg-rupivo-green/20 flex items-center justify-center mr-4 shrink-0 mt-0.5 group-hover:bg-rupivo-green transition-colors">
                        <Check className="w-3.5 h-3.5 text-rupivo-green group-hover:text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-200 font-medium text-lg">{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};