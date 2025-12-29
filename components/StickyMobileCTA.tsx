import React from 'react';
import { Download, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { ButtonVariant } from '../types';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden flex gap-3">
        <Button 
          variant={ButtonVariant.PRIMARY} 
          className="flex-1 text-sm h-12"
          icon={<Download size={18} />}
        >
          Download App
        </Button>
        <Button 
          variant={ButtonVariant.WHATSAPP} 
          className="w-12 px-0 h-12 flex items-center justify-center rounded-lg"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </Button>
    </div>
  );
};