import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const SatelliteHeader = ({ currentSlug }) => {
  const containerRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '/' },
    {
      label: 'Landing Pages',
      href: '/criacao-de-landing-page',
      active: currentSlug === 'criacao-de-landing-page',
    },
    {
      label: 'Sistemas Web',
      href: '/desenvolvimento-de-sistemas-web',
      active: currentSlug === 'desenvolvimento-de-sistemas-web',
    },
    {
      label: 'ERPs Sob Medida',
      href: '/sistema-erp-sob-medida',
      active: currentSlug === 'sistema-erp-sob-medida',
    },
    { label: 'Sobre Nós', href: '/#sobre-nos' },
  ];

  return (
    <>
      <div ref={containerRef} className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        {/* Layer 1: Visual Base Header with glass blur */}
        <header className="w-full px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 flex justify-between items-center bg-[#F0F4F8]/80 backdrop-blur-xl border-b border-slate-200/80 pointer-events-auto">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
            data-cursor="hover"
            aria-label="Vitrine Web - Início"
          >
            <img
              src="/logo-symbol.png"
              alt="Vitrine Web"
              className="h-6 md:h-7 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-['Space_Grotesk'] font-extrabold text-xl tracking-tight text-[#1E293B]">
              Vitrine Web
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold text-slate-700">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors py-1 ${
                  item.active
                    ? 'text-black font-bold border-b-2 border-black'
                    : 'hover:text-black'
                }`}
                data-cursor="hover"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/554488680905?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vitrine%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md"
              data-cursor="hover"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-slate-800 hover:text-black rounded-lg focus:outline-none"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              data-cursor="hover"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0F172A]/95 backdrop-blur-2xl overflow-y-auto flex flex-col justify-start sm:justify-center items-center py-28 px-6 pointer-events-auto">
          <nav className="flex flex-col gap-5 text-center w-full max-w-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl sm:text-2xl font-bold uppercase tracking-wider py-2.5 transition-colors ${
                  item.active ? 'text-white underline decoration-2 underline-offset-8' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/554488680905?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Vitrine%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0F172A] font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 transition-transform shadow-xl min-h-[48px]"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
