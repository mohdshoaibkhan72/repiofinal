import React from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
  verified?: boolean;
  loading?: boolean;
}

export const InputText: React.FC<InputTextProps> = ({ className, error, verified, loading, ...props }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          className={`h-[48px] w-full rounded-[10px] bg-[#F9FAFB] border px-3 text-base sm:text-[14px] text-[#0B1F3B] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 transition-all ${
            error 
              ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
              : verified
                ? 'border-green-500 focus:ring-green-500/20 focus:border-green-500'
                : 'border-[#E5E7EB] focus:ring-[#0B1F3B]/20 focus:border-[#0B1F3B]'
          } ${verified || loading ? 'pr-10' : ''} ${props.readOnly ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''} ${className || ''}`}
          {...props}
        />
        {/* Loading Spinner */}
        {loading && !error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
             <svg className="h-5 w-5 animate-spin text-[#0B1F3B]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        {/* Verified Checkmark */}
        {verified && !loading && !error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 ml-1 text-[12px] text-red-500 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
};