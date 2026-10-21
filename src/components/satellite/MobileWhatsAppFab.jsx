import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const MobileWhatsAppFab = ({ 
  serviceMessage = "Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vitrine%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento." 
}) => {
  const whatsappUrl = `https://wa.me/554488680905?text=${serviceMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com especialista no WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1E293B] text-white rounded-full shadow-2xl border border-white/20 active:scale-95 transition-transform"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle size={20} className="text-emerald-400" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </div>
        <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-white">
          WhatsApp
        </span>
        <ArrowUpRight size={14} className="text-slate-400" />
      </a>
    </div>
  );
};
