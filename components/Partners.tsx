import React, { useState } from 'react';
import { Building2, Landmark } from 'lucide-react';

interface Partner {
  name: string;
  logoUrl: string;
}

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !partner.logoUrl) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full gap-2 p-2 group-hover:scale-105 transition-transform">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
          {partner.name.toLowerCase().includes('bank') ? (
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
      src={partner.logoUrl}
      onError={() => setImgError(true)}
      alt={`${partner.name} Logo`}
      title={partner.name}
      className="max-w-[85%] max-h-[60px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
    />
  );
};

export const Partners: React.FC = () => {
  // Curated list of high-quality official logos
  const partners: Partner[] = [
    {
      name: "HDFC Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png"
    },
    {
      name: "Axis Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
    },
    {
      name: "ICICI Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png"
    },
    {
      name: "Kotak Mahindra",
      logoUrl: "https://cdn2.downdetector.com/static/uploads/logo/Kotak_Mahindra_Bank_logo.png"
    },

    {
      name: "Bajaj Finserv",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/1280px-Bajaj_Finserv_Logo.svg.png"
    },
    {
      name: "Tata Capital",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png"
    },
    {
      name: "Aditya Birla",
      logoUrl: "https://img-cdn.thepublive.com/filters:format(webp)/afaqs/media/post_attachments/1f4d2723fac0cfbe0186dbf46afdcf20eb47b9e96bab6801e893677839b46955.jpg"
    },
    {
      name: "IDFC FIRST Bank",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_IDFC_First_Bank.svg/1024px-Logo_of_IDFC_First_Bank.svg.png"
    },
    {
      name: "Muthoot Finance",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Muthoot_Finance_Logo.svg/1200px-Muthoot_Finance_Logo.svg.png"
    },

    {
      name: "IIFL Finance",
      logoUrl: "https://storage.googleapis.com/iifl-finance-storage/files/iifl_insights/images/IIFL%2520Finance%2520%25286%2529.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            <p className="text-xs font-bold text-rupivo-blue tracking-widest uppercase">Our Lending Partners</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rupivo-dark">Backed by Industry Leaders</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            We have partnered with 20+ RBI-registered Banks and NBFCs to ensure you get the best interest rates and highest approval chances.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 group h-40 cursor-default relative overflow-hidden"
            >
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <PartnerLogo partner={partner} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-16 max-w-3xl mx-auto border-t border-gray-100 pt-8 leading-relaxed">
          *Rupivo acts as a technology platform and Loan Service Provider (LSP). We facilitate loan transactions between borrowers and our RBI-registered lending partners. We do not directly provide loans or hold a banking license.
        </p>
      </div>
    </section>
  );
};