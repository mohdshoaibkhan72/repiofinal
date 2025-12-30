import React from 'react';
import { UserCheck, Briefcase, MapPin, CreditCard } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const Eligibility: React.FC = () => {
  const criteria = [
    { icon: <UserCheck className="w-6 h-6 text-rupivo-blue" />, label: "Age", value: "21 – 58 years" },
    { icon: <Briefcase className="w-6 h-6 text-rupivo-blue" />, label: "Monthly Income", value: "₹15,000+" },
    { icon: <MapPin className="w-6 h-6 text-rupivo-blue" />, label: "Citizenship", value: "Indian Resident" },
    { icon: <CreditCard className="w-6 h-6 text-rupivo-blue" />, label: "Documents", value: "Valid PAN & Aadhaar" },
  ];

  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-rupivo-dark mb-4">Who Can Apply?</h2>
        <p className="text-gray-600 mb-12">Basic criteria to get started with RUPIVO</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {criteria.map((item, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl flex flex-col items-center hover:bg-blue-100 transition-colors">
              <div className="mb-3 p-3 bg-white rounded-full shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">{item.label}</h4>
              <p className="text-rupivo-dark font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>

        <Button variant={ButtonVariant.SECONDARY} className="px-12">
          Check Your Eligibility Now
        </Button>
      </div>
    </section>
  );
};