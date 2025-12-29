import React from 'react';
import { Lock, Landmark, FileCheck, IndianRupee } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { 
      icon: <Lock className="w-6 h-6 text-rupivo-green" />, 
      title: "Secure & Encrypted",
      sub: "256-bit SSL Protection"
    },
    { 
      icon: <Landmark className="w-6 h-6 text-rupivo-blue" />, 
      title: "RBI-Registered",
      sub: "Multiple Lenders"
    },
    { 
      icon: <FileCheck className="w-6 h-6 text-purple-600" />, 
      title: "Transparent Terms",
      sub: "No Hidden Fees"
    },
    { 
      icon: <IndianRupee className="w-6 h-6 text-orange-600" />, 
      title: "Made for India",
      sub: "100% Homegrown"
    },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3 py-8 px-4 hover:bg-gray-50/80 transition-colors cursor-default group text-center">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-rupivo-dark text-sm md:text-base leading-tight mb-0.5">{item.title}</p>
                <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};