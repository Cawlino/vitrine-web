import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Flame, LayoutDashboard, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Flame,
    title: 'Landing Pages de Alta Conversão',
    subtitle: 'Presença Online Estratégica & Geração de Leads',
    description:
      'Desenvolvemos landing pages personalizadas de altíssima performance, com design exclusivo, carregamento instantâneo e técnicas de persuasão voltadas para transformar visitantes em clientes qualificados via WhatsApp ou formulários.',
    highlights: [
      'Copywriting persuasivo e foco em ROI',
      'Carregamento ultrarrápido com pontuação máxima no Google',
      'Otimização avançada para SEO e campanhas de tráfego pago',
      'Integrações com WhatsApp, CRMs e Analytics'
    ],
  },
  {
    icon: Code2,
    title: 'Sistemas Web Sob Medida',
    subtitle: 'Engenharia de Software Escalável & Full-Stack',
    description:
      'Criamos sistemas web robustos, arquitetados com tecnologias modernas (React, TypeScript, Node.js, Python). Desenvolvemos desde plataformas SaaS até aplicações complexas com controle de usuários, APIs e alta segurança.',
    highlights: [
      'Arquitetura limpa, modular e altamente escalável',
      'Dashboards analíticos e métricas em tempo real',
      'Autenticação avançada e permissões multinível',
      'Integrações via APIs RESTful e Cloud'
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'ERPs & Gestão Corporativa',
    subtitle: 'Automação Operacional & Controle Empresarial',
    description:
      'Soluções completas de ERP e gestão corporativa desenvolvidas sob demanda para eliminar planilhas manuais, automatizar processos operacionais, organizar colaboradores e departamentos com eficiência máxima.',
    highlights: [
      'Controle centralizado de colaboradores e setores',
      'Relatórios e indicadores de desempenho',
      'Fluxos operacionais e aprovações sob medida',
      'Segurança de dados e conformidade'
    ],
  },
  {
    icon: Sparkles,
    title: 'Inteligência Artificial & Inovação',
    subtitle: 'Automação Avançada & Experiências Digitais',
    description:
      'Integramos o poder da Inteligência Artificial em seus produtos digitais e processos internos. Desde agentes conversacionais inteligentes até automações de fluxos complexos para destacar sua empresa na liderança do mercado.',
    highlights: [
      'Agentes e chatbots com IA generativa',
      'Processamento e análise inteligente de dados',
      'Experiências interativas imersivas',
      'Vantagem competitiva tecnológica'
    ],
  }
];

export const Services = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const dotsRef = useRef([]);

  const scrollTweenRef = useRef(null);
  const activeIdxRef = useRef(0);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const scrollToIdx = (idx) => {
    if (!scrollTweenRef.current || !scrollTweenRef.current.scrollTrigger) return;
    const st = scrollTweenRef.current.scrollTrigger;
    const total = services.length - 1;
    const targetY = st.start + (idx / total) * (st.end - st.start);
    
    if (window.lenis) {
      window.lenis.scrollTo(targetY, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (activeIdxRef.current < services.length - 1) scrollToIdx(activeIdxRef.current + 1);
  };

  const handlePrev = () => {
    if (activeIdxRef.current > 0) scrollToIdx(activeIdxRef.current - 1);
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const slides = gsap.utils.toArray('.service-slide');

      const scrollTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: { min: 0.3, max: 0.8 },
            delay: 0.2,
            ease: "power1.inOut",
          },
          end: () => "+=" + wrapperRef.current.offsetWidth,
          onUpdate: (self) => {
            const activeIdx = Math.round(self.progress * (slides.length - 1));
            activeIdxRef.current = activeIdx;
            
            dotsRef.current.forEach((dot, i) => {
              if (dot) dot.style.opacity = i === activeIdx ? '1' : '0.2';
            });
            
            if (prevBtnRef.current) {
              const isStart = self.progress <= 0.05;
              prevBtnRef.current.style.opacity = isStart ? '0' : '1';
              prevBtnRef.current.style.transform = isStart ? 'translateX(-16px)' : 'translateX(0)';
              prevBtnRef.current.style.pointerEvents = isStart ? 'none' : 'auto';
            }
            if (nextBtnRef.current) {
              const isEnd = self.progress >= 0.95;
              nextBtnRef.current.style.opacity = isEnd ? '0' : '1';
              nextBtnRef.current.style.transform = isEnd ? 'translateX(16px)' : 'translateX(0)';
              nextBtnRef.current.style.pointerEvents = isEnd ? 'none' : 'auto';
            }
          }
        }
      });

      scrollTweenRef.current = scrollTween;

      // Animate text in each slide
      slides.forEach((slide, index) => {
        const texts = slide.querySelectorAll('.service-text');
        gsap.fromTo(texts,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: index === 0 ? containerRef.current : slide,
              containerAnimation: index === 0 ? null : scrollTween,
              start: index === 0 ? "top 70%" : "left center",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      return () => scrollTween.kill();
    });

    // Mobile: vertical scroll with fade-in
    mm.add("(max-width: 767px)", () => {
      const slides = gsap.utils.toArray('.service-slide');
      slides.forEach((slide, index) => {
        const texts = slide.querySelectorAll('.service-text');
        gsap.fromTo(texts,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: slide,
              start: index === 0 ? "top 95%" : "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="w-full border-t border-current border-opacity-10 relative overflow-hidden"
    >
      <div
        ref={containerRef}
        className="w-full h-auto md:h-screen overflow-x-hidden md:overflow-hidden relative"
      >
        {/* Title "Serviços" Desktop */}
        <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none items-center gap-3 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          <span className="text-xs font-bold tracking-widest uppercase">Serviços</span>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
        </div>

        {/* Navigation Arrows (Desktop Only) */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 lg:px-8 pointer-events-none z-50">
          <button 
            ref={prevBtnRef}
            onClick={handlePrev}
            className="opacity-0 -translate-x-4 pointer-events-none flex items-center justify-center gap-3 px-6 h-12 lg:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white shadow-2xl transition-all duration-300 hover:bg-white/40 hover:scale-105"
            aria-label="Serviço anterior"
            data-cursor="hover"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <span className="text-sm font-bold tracking-widest uppercase">Anterior</span>
          </button>
          <button 
            ref={nextBtnRef}
            onClick={handleNext}
            className="opacity-100 translate-x-0 pointer-events-auto flex items-center justify-center gap-3 px-6 h-12 lg:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white shadow-2xl transition-all duration-300 hover:bg-white/40 hover:scale-105"
            aria-label="Próximo serviço"
            data-cursor="hover"
          >
            <span className="text-sm font-bold tracking-widest uppercase">Ver mais serviços</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Progress Dots — Desktop Only */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-3 z-50">
          {services.map((_, i) => (
            <div 
              key={i} 
              ref={el => dotsRef.current[i] = el}
              className="w-2 h-2 rounded-full bg-current transition-opacity duration-300"
              style={{ opacity: i === 0 ? 1 : 0.2 }}
            />
          ))}
        </div>

        {/* Heading — visible at the start, pinned with section */}
        <div className="md:hidden px-4 pt-24 pb-8">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-50">
            Nossas Especialidades
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            Sistemas Web, Landing Pages e ERPs desenvolvidos para liderar.
          </h2>
          <p className="mt-4 text-base font-light opacity-80 leading-relaxed">
            Transformamos demandas complexas em sistemas intuitivos, rápidos e altamente lucrativos para o seu negócio.
          </p>
        </div>

        {/* Horizontal Track */}
        <div 
          ref={wrapperRef}
          style={{ '--total-services': services.length }}
          className="services-horizontal-track flex flex-col md:flex-row flex-nowrap w-full h-full"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="service-slide relative w-full md:w-screen h-auto md:h-screen shrink-0 flex items-center justify-center px-4 py-16 md:py-0 md:px-12 lg:px-16 border-b border-white/5 md:border-none last:border-none"
              >
                <div className="max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center relative">
                  
                  {/* Decorative number — Desktop only */}
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[18vw] font-black text-current opacity-[0.03] leading-none select-none pointer-events-none hidden lg:block">
                    0{index + 1}
                  </div>

                  {/* Left Column: Counter + Icon + Title */}
                  <div className="service-text flex flex-col items-start justify-center">
                    <div className="text-xs font-bold tracking-widest uppercase opacity-50 mb-6">
                      0{index + 1} / 0{services.length}
                    </div>
                    <Icon className="w-10 h-10 mb-6 opacity-80" />
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Right Column: Description + Highlights + CTA */}
                  <div className="service-text flex flex-col items-start justify-center">
                    <p className="text-base md:text-lg opacity-80 leading-relaxed mb-8 max-w-xl">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-10 w-full max-w-md">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base opacity-75">
                          <span className="opacity-40 font-mono text-xs mt-0.5 shrink-0">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/554488680905?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border border-current rounded-full uppercase tracking-widest text-xs md:text-sm hover:bg-[#1E293B] hover:text-[#F0F4F8] transition-colors duration-300"
                      data-cursor="hover"
                      aria-label={`Solicitar orçamento para ${service.title}`}
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Skip Button at bottom of slides */}
                <button
                  onClick={() => {
                    const nextSection = document.getElementById('projetos');
                    if (nextSection) {
                      if (window.lenis) {
                        window.lenis.scrollTo(nextSection, { offset: 0, duration: 1.2 });
                      } else {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center gap-3 px-6 md:px-8 py-3 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:bg-zinc-800 transition-all duration-300 hover:scale-105 z-10"
                  data-cursor="hover"
                  aria-label="Ir para a seção de Projetos"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">Ver projetos</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
