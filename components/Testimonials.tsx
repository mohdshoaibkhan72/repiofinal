import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Amit Verma",
      location: "Mumbai",
      role: "IT Professional",
      rating: 5,
      text: "I needed funds for a medical emergency urgently. Rupivo approved my loan of ₹2 Lakhs in just 15 minutes. The money was in my account within 2 hours. Lifesaver!",
      avatarSeed: "Amit"
    },
    {
      name: "Priya Singh",
      location: "Bangalore",
      role: "Marketing Manager",
      rating: 5,
      text: "The best part about Rupivo is the transparency. No hidden charges, and the app showed me exactly what my EMI would be. Very smooth experience.",
      avatarSeed: "Priya"
    },
    {
      name: "Rahul Kumar",
      location: "Delhi",
      role: "Small Business Owner",
      rating: 4,
      text: "As a self-employed person, getting a loan is usually tough. Rupivo's alternate data model helped me get approved based on my banking transactions.",
      avatarSeed: "Rahul"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      role: "Software Engineer",
      rating: 5,
      text: "Process is completely paperless. I applied sitting at my home and got the money credited. Highly recommend for anyone looking for quick personal loans.",
      avatarSeed: "Sneha"
    }
  ];

  return (
    <section className="py-24 bg-rupivo-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -ml-16 -mb-16 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark mb-4">Customer Reviews</h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
             <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <span className="text-rupivo-dark font-bold text-lg">4.8/5</span>
          </div>
          <p className="text-gray-600">Based on 10,000+ happy customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-soft hover:shadow-soft-hover transition-all duration-300 relative group border border-gray-100 flex flex-col h-full hover:-translate-y-1">
              <Quote className="absolute top-6 right-6 text-blue-50 w-8 h-8 group-hover:text-blue-100 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium flex-grow">"{review.text}"</p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-gray-100 p-0.5 border border-gray-200 shrink-0">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.avatarSeed}`} 
                    alt={review.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-rupivo-dark text-sm">{review.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};