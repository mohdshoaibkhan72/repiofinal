import React from 'react';
import { Smartphone, Zap, Banknote } from 'lucide-react';
import { StepItem } from '../types';

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: 1,
      icon: Smartphone,
      title: "Download & Login",
      description: "Get the app and sign in securely with your mobile number. It takes less than a minute."
    },
    {
      number: 2,
      icon: Zap,
      title: "Check Eligibility",
      description: "Our AI engine analyzes your profile instantly to find the best lender match for you."
    },
    {
      number: 3,
      icon: Banknote,
      title: "Get Money",
      description: "Select your loan amount, complete KYC, and get funds directly in your bank account."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-rupivo-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-4">Simple, Fast, Transparent.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We've stripped away the complexity. Get your loan in 3 easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={step.number} className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2">
              <div className="w-24 h-24 rounded-3xl bg-white shadow-card flex items-center justify-center mb-8 relative border border-gray-50 group-hover:border-blue-100 transition-colors">
                 <step.icon className="w-10 h-10 text-rupivo-blue group-hover:scale-110 transition-transform duration-300" />
                 <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-rupivo-blue text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-rupivo-blue/20 rotate-12 group-hover:rotate-0 transition-all">
                    {step.number}
                 </div>
              </div>
              <h3 className="text-xl font-bold text-rupivo-dark mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};