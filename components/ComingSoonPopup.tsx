import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

interface ComingSoonPopupProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

export const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose, message }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[60] overflow-y-auto transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-[4px]"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div
                    className={`relative w-full max-w-[400px] transform rounded-2xl bg-white p-8 text-center shadow-2xl transition-all duration-300 ease-out ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors focus:outline-none"
                        aria-label="Close"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 relative group">
                        <div className="absolute inset-0 rounded-full bg-rupivo-blue opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
                        <Rocket className="h-10 w-10 text-rupivo-blue transform group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-500" />

                        {/* Decorative particles */}
                        <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-400 animate-ping"></div>
                        <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-2xl font-bold text-rupivo-dark">
                        Coming Soon! 🚀
                    </h3>

                    <p className="mb-8 text-gray-500 leading-relaxed">
                        {message || "We're building something amazing for you. Stay tuned for the big launch!"}
                    </p>

                    <button
                        onClick={onClose}
                        className="w-full rounded-xl bg-rupivo-blue py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-rupivo-blue/30 hover:bg-opacity-90 transition-all hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Got it, thanks!
                    </button>
                </div>
            </div>
        </div>
    );
};
