import React, { useEffect } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  subtitle, 
  children,
  maxWidth = "max-w-4xl" 
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-rupivo-dark py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rupivo-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rupivo-green/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-16`}>
        {maxWidth === "max-w-4xl" ? (
          <div className="prose prose-lg prose-blue max-w-none text-gray-600">
            {children}
          </div>
        ) : (
          <div className="w-full text-gray-600">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};