import React from 'react';
import { UserCheck, Briefcase, MapPin, CreditCard } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

import { useModal } from '../contexts/ModalContext';

export const Eligibility: React.FC = () => {
  const { openModal } = useModal();
  const criteria = [
    { icon: <UserCheck className="w-6 h-6 text-rupivo-blue" />, label: "Age", value: "21 – 58 years" },
    { icon: <Briefcase className="w-6 h-6 text-rupivo-blue" />, label: "Monthly Income", value: "₹15,000+" },
    { icon: <MapPin className="w-6 h-6 text-rupivo-blue" />, label: "Citizenship", value: "Indian Resident" },
    { icon: <CreditCard className="w-6 h-6 text-rupivo-blue" />, label: "Documents", value: "Valid PAN & Aadhaar" },
  ];

  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-rupivo-dark mb-4">Who Can Apply?</h2>
        <p className="text-gray-600 mb-12 text-lg">Basic criteria to get started with RUPIVO</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {criteria.map((item, index) => (
            <div key={index} className="group p-8 bg-white border border-gray-100 rounded-2xl flex flex-col items-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-rupivo-blue/10 transition-colors">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32, className: "text-rupivo-blue" })}
              </div>
              <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">{item.label}</h4>
              <p className="text-rupivo-dark font-extrabold text-xl">{item.value}</p>
            </div>
          ))}
        </div>

        <Button variant={ButtonVariant.SECONDARY} className="px-12 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all" onClick={openModal}>
          Check Your Eligibility Now
        </Button>
      </div>
    </section>
  );
};