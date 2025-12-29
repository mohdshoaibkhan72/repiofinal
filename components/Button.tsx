import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  fullWidth = false, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 h-12 px-8 text-[15px] tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:pointer-events-none";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-rupivo-blue text-white shadow-lg shadow-rupivo-blue/30 hover:shadow-xl hover:shadow-rupivo-blue/40 hover:-translate-y-0.5 focus:ring-rupivo-blue border border-transparent",
    [ButtonVariant.SECONDARY]: "bg-rupivo-green text-white shadow-lg shadow-rupivo-green/30 hover:shadow-xl hover:shadow-rupivo-green/40 hover:-translate-y-0.5 focus:ring-rupivo-green border border-transparent",
    [ButtonVariant.OUTLINE]: "border-2 border-rupivo-blue/10 text-rupivo-blue bg-white hover:bg-rupivo-blue/5 hover:border-rupivo-blue/30 focus:ring-rupivo-blue shadow-sm hover:shadow-md",
    [ButtonVariant.WHATSAPP]: "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 focus:ring-[#25D366] border border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2.5">{icon}</span>}
      {children}
    </button>
  );
};