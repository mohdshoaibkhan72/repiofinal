import React from 'react';
import { ShieldAlert, Server, SmartphoneNfc, FileCheck, XCircle, CheckCircle2 } from 'lucide-react';

export const SafetyValues: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider mb-4 border border-green-100">
            <ShieldAlert size={14} />
            Safety First
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-6">
            We are <span className="text-rupivo-blue">NOT</span> just another lending app.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Your trust is our capital. Unlike illegal or unregulated apps, we strictly follow RBI's Digital Lending Guidelines (DLG). We prioritize your privacy and dignity above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Permission Transparency */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-rupivo-dark mb-6 flex items-center gap-2">
              <SmartphoneNfc className="text-rupivo-blue" />
              App Permission Transparency
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <XCircle className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Contact List</p>
                    <p className="text-xs text-gray-500">We NEVER access your contacts</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">BLOCKED</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                    <XCircle className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Photo Gallery</p>
                    <p className="text-xs text-gray-500">We NEVER access your photos</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">BLOCKED</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Location</p>
                    <p className="text-xs text-gray-500">Only for KYC verification</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">ALLOWED</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic text-center">
              We only ask for permissions required by RBI regulations for KYC.
            </p>
          </div>

          {/* Right: Ethical Standards */}
          <div className="space-y-8">
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-rupivo-blue">
                   <Server size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-rupivo-dark">Data Localization (Indian Servers)</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mt-1">
                     100% of your data is stored on secure servers located within India. We do not share your data with foreign entities or third-party marketing agencies.
                   </p>
                </div>
             </div>

             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-rupivo-blue">
                   <ShieldAlert size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-rupivo-dark">Zero Harassment Policy</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mt-1">
                     We strictly adhere to the RBI's Fair Practices Code. Our recovery agents are trained and monitored. We do not call your friends or family for recovery.
                   </p>
                </div>
             </div>

             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-rupivo-blue">
                   <FileCheck size={24} />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-rupivo-dark">Key Fact Statement (KFS)</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mt-1">
                     Transparency is key. We provide a KFS before loan disbursal, clearly listing the Annual Percentage Rate (APR), processing fees, and recovery mechanism.
                   </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};