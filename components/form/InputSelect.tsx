import React from 'react';

interface InputSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
}

export const InputSelect: React.FC<InputSelectProps> = ({ options, placeholder, className, error, ...props }) => {
  return (
    <div className="w-full">
      <div className="relative">
        <select
          className={`h-[48px] w-full rounded-[10px] bg-[#F9FAFB] border pl-3 pr-10 text-base sm:text-[14px] text-[#0B1F3B] appearance-none focus:outline-none focus:ring-2 transition-all ${
            error
              ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500'
              : 'border-[#E5E7EB] focus:ring-[#0B1F3B]/20 focus:border-[#0B1F3B]'
          } ${
            props.value === '' ? 'text-[#9CA3AF]' : ''
          } ${className || ''}`}
          {...props}
        >
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-[#0B1F3B]">
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom arrow icon for better aesthetics */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6B7280]">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 ml-1 text-[12px] text-red-500 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
};