import React, { useState } from 'react';
import { Building2, Landmark, Wallet } from 'lucide-react';

interface Partner {
  name: string;
  logoUrl?: string; // Direct URL if available
  domain?: string;  // Fallback for Clearbit
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [imgError, setImgError] = useState(false);

  // Construct URL: Use explicit URL or fallback to Clearbit
  const src = partner.logoUrl || (partner.domain ? `https://logo.clearbit.com/${partner.domain}` : '');

  if (!src || imgError) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full gap-2 p-2 group-hover:scale-105 transition-transform">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
          {partner.name.includes('Bank') ? (
            <Landmark className="w-6 h-6 text-rupivo-blue" />
          ) : (
            <Building2 className="w-6 h-6 text-rupivo-blue" />
          )}
        </div>
        <span className="text-[11px] font-bold text-center leading-tight uppercase tracking-wide text-gray-600 group-hover:text-rupivo-dark transition-colors">{partner.name}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      onError={() => setImgError(true)}
      alt={`${partner.name} Logo`}
      className="max-w-[80%] max-h-[50px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
    />
  );
};

export const Partners: React.FC = () => {
  // Using Wikipedia/Wikimedia URLs for major banks for stability and quality
  const partners: Partner[] = [
    {
      name: "HDFC Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
    },
    {
      name: "Axis Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
    },
    {
      name: "IDFC FIRST",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/IDFC_First_Bank_logo.svg/2560px-IDFC_First_Bank_logo.svg.png"
    },
    {
      name: "Kotak Mahindra",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kotak_Mahindra_Bank_logo.svg/2560px-Kotak_Mahindra_Bank_logo.svg.png"
    },
    {
      name: "Tata Capital",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tata_Capital_Logo.svg/1200px-Tata_Capital_Logo.svg.png"
    },
    {
      name: "Aditya Birla",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Aditya_Birla_Capital_Logo.svg/1200px-Aditya_Birla_Capital_Logo.svg.png"
    },
    {
      name: "KreditBee",
      logoUrl: "https://kreditbee.in/assets/images/logo.png" // Direct form source
    },
    {
      name: "MoneyView",
      logoUrl: "https://moneyview.in/images/ic-logo.svg"
    },
    {
      name: "Fibe",
      logoUrl: "https://www.fibe.in/wp-content/uploads/2022/07/Fibe-Logo.svg"
    },
    {
      name: "Piramal",
      logoUrl: "https://www.piramalfinance.com/images/piramal-logo.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            <p className="text-xs font-bold text-rupivo-blue tracking-widest uppercase">Lending Partners</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark">Trusted by India's Top Banks</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We work with RBI-registered NBFCs and Banks to bring you the best loan offers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group h-32 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-12 max-w-3xl mx-auto border-t border-gray-100 pt-6">
          *Rupivo is a technology platform acting as a Loan Service Provider (LSP). We do not provide loans directly. All loans are disbursed by our regulated lending partners.
        </p>
      </div>
    </section>
  );
};