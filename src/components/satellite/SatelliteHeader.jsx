import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const headerPosition = 'fixed inset-x-0 top-0 h-20 sm:h-[88px] lg:h-[84px] px-4 sm:px-6 md:px-8';
const focusStyle = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current';

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
      <div ref={containerRef}>
        <div aria-hidden="true" className={`${headerPosition} z-[49] flex items-center pointer-events-none`}>
          <img src="/logo-symbol.png" alt="" className="h-6 md:h-7 w-auto object-contain" />
        </div>
        <header className={`${headerPosition} z-50 flex justify-between items-center mix-blend-difference text-white pointer-events-none`}>
          {/* Brand Logo */}
          <a
            href="/"
            className={`flex items-center gap-2 pointer-events-auto hover:opacity-80 ${focusStyle}`}
            data-cursor="hover"
            aria-label="Vitrine Web - Início"
          >
            <img
              src="/logo-symbol.png"
              alt=""
              className="h-6 md:h-7 w-auto object-contain opacity-0"
            />
            <span className="font-bold text-xl tracking-tighter">
              Vitrine Web
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium pointer-events-auto">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                className={`py-1 transition-opacity ${focusStyle} ${
                  item.active
                    ? 'font-bold underline decoration-2 underline-offset-8'
                    : 'hover:opacity-80'
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
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-current font-bold text-xs uppercase tracking-wider rounded-full pointer-events-auto transition-opacity hover:opacity-80 ${focusStyle}`}
              data-cursor="hover"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg pointer-events-auto hover:opacity-80 ${focusStyle}`}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls={isMobileMenuOpen ? 'service-mobile-menu' : undefined}
              data-cursor="hover"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="service-mobile-menu" className="fixed inset-0 z-[45] bg-[#0F172A] overflow-y-auto flex flex-col justify-start sm:justify-center items-center py-28 px-6 pointer-events-auto">
          <nav className="flex flex-col gap-5 text-center w-full max-w-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl sm:text-2xl font-bold uppercase tracking-wider py-2.5 text-white transition-opacity ${focusStyle} ${
                  item.active ? 'underline decoration-2 underline-offset-8' : 'hover:opacity-80'
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
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0F172A] font-extrabold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white shadow-xl min-h-[48px]"
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
