import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.7"
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.7"
    );
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex flex-col items-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-[100rem] w-full relative z-10 my-auto flex flex-col justify-center">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <span className="inline-flex items-center text-left text-[11px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md opacity-85 leading-normal max-w-full">
            Empresa de Sistemas Web • Landing Pages • ERPs Sob Medida
          </span>
        </div>

        <h1 
          ref={titleRef} 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-[6.8rem] font-extrabold tracking-tighter leading-[1.05] sm:leading-[1.02] md:leading-none"
        >
          Transformamos<br className="hidden sm:inline" /> ideias em experiências<br className="hidden sm:inline" /> digitais.
        </h1>
        <p 
          ref={subtitleRef} 
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl font-light opacity-80 leading-relaxed"
        >
          Desenvolvemos sistemas web sob medida, landing pages de alta conversão e ERPs corporativos para acelerar a presença online e os resultados do seu negócio.
        </p>
        <div ref={buttonsRef} className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="https://wa.me/554488680905?text=Olá,%20tenho%20interesse%20em%20iniciar%20um%20projeto%20com%20a%20Vitrine%20Web!" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Iniciar projeto via WhatsApp com a Vitrine Web"
            className="px-8 py-3.5 sm:py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform text-center shadow-lg text-sm sm:text-base"
          >
            Iniciar projeto
          </a>
          <a 
            href="#projetos" 
            aria-label="Ver projetos desenvolvidos pela Vitrine Web"
            onClick={(e) => {
              e.preventDefault();
              if (window.lenis) {
                window.lenis.scrollTo('#projetos', { duration: 1.2 });
              } else {
                const el = document.getElementById('projetos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3.5 sm:py-4 border border-white/30 hover:border-white/80 font-semibold rounded-full hover:scale-105 transition-all text-center cursor-pointer text-sm sm:text-base"
          >
            Ver trabalhos
          </a>
        </div>
      </div>
      
      <div className="hidden lg:flex absolute bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center opacity-50 pointer-events-none hero-scroll-indicator">
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="scroll-line w-[1px] h-10 bg-current origin-top"></div>
      </div>
    </section>
  );
};
