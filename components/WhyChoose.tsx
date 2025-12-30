import React from 'react';
import { BrainCircuit, Building, Clock, ShieldCheck } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-rupivo-green" />,
      title: "Smart AI Engine",
      desc: "Our algorithm scans 20+ lenders to find the one most likely to approve you."
    },
    {
      icon: <Building className="w-8 h-8 text-rupivo-green" />,
      title: "Wide Network",
      desc: "Access top banks like HDFC, Axis, and leading NBFCs in a single dashboard."
    },
    {
      icon: <Clock className="w-8 h-8 text-rupivo-green" />,
      title: "Lightning Fast",
      desc: "From download to disbursement in as fast as 24 hours for verified profiles."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-rupivo-green" />,
      title: "Bank-Grade Security",
      desc: "ISO 27001 certified. Your data is encrypted and never shared without consent."
    }
  ];

  return (
    <section className="py-24 bg-[#1B262C] relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rupivo-blue rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rupivo-green rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Why Choose RUPIVO?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-rupivo-blue to-rupivo-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-rupivo-green/50 hover:bg-white/10 transition-all duration-300 group">
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
  );
};