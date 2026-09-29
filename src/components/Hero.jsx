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
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-[100rem] w-full relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs md:text-sm uppercase tracking-widest font-semibold mb-8 opacity-80">
          Empresa de Sistemas Web • Landing Pages • ERPs Sob Medida
        </div>

        <h1 
          ref={titleRef} 
          className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter leading-none"
        >
          Transformamos<br/>ideias em experiências<br/>digitais.
        </h1>
        <p 
          ref={subtitleRef} 
          className="mt-8 text-xl md:text-3xl max-w-3xl font-light opacity-80"
        >
          Desenvolvemos sistemas web sob medida, landing pages de alta conversão e ERPs corporativos para acelerar a presença online e os resultados do seu negócio.
        </p>
        <div ref={buttonsRef} className="mt-12 flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/554488680905?text=Olá,%20tenho%20interesse%20em%20iniciar%20um%20projeto%20com%20a%20Vitrine%20Web!" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Iniciar projeto via WhatsApp com a Vitrine Web"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform text-center"
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
                document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border border-white/30 hover:border-white/80 font-semibold rounded-full hover:scale-105 transition-all text-center cursor-pointer"
          >
            Ver trabalhos
          </a>
        </div>
      </div>
      
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center opacity-50">
        <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
        <div className="scroll-line w-[1px] h-12 bg-current origin-top"></div>
      </div>
    </section>
  );
};
