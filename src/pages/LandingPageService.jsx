import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Zap,
  Target,
  Smartphone,
  BarChart3,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { Background2D } from '../components/Background2D';
import { SatelliteHeader } from '../components/satellite/SatelliteHeader';
import { MobileWhatsAppFab } from '../components/satellite/MobileWhatsAppFab';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const LandingPageService = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    // Hero entrance animation
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        ctaButtonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        metricsRef.current ? metricsRef.current.children : [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      );

    // Reveal sections on scroll
    const sections = document.querySelectorAll('.reveal-on-scroll');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleSatelliteNavigate = (view, hash) => {
    if (hash === '#contato') {
      if (window.lenis) {
        window.lenis.scrollTo('#contato', { duration: 1.2 });
      } else {
        document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/${hash || ''}`;
    }
  };

  const pillars = [
    {
      icon: Zap,
      title: 'Carregamento Sub-1.2s',
      subtitle: 'Performance Extrema & Core Web Vitals',
      desc: 'Cada 100ms de lentidão pode custar até 7% em conversão. Desenvolvemos com código enxuto, sem plugins inflados de WordPress. O resultado é pontuação 95+ no PageSpeed e zero perda de tráfego pago por lentidão.',
      tag: 'Engenharia Rápida',
    },
    {
      icon: Target,
      title: 'Copywriting Persuasivo',
      subtitle: 'Comunicação Clara que Quebra Objeções',
      desc: 'Um visitante leva 3 segundos para decidir se permanece ou sai da página. Desenhamos a narrativa em torno das dores reais do seu público, evidenciando seu diferencial e conduzindo naturalmente ao botão de contato.',
      tag: 'Psicologia de Conversão',
    },
    {
      icon: Smartphone,
      title: 'Arquitetura Mobile-First',
      subtitle: 'Ergonomia Perfeita para a Zona do Polegar',
      desc: 'Mais de 85% dos cliques de anúncios vêm de smartphones. Nossa interface posiciona CTAs, depoimentos e garantias estrategicamente onde o polegar do usuário interage com facilidade, sem atritos ou zoom.',
      tag: 'Experiência Fluida',
    },
    {
      icon: BarChart3,
      title: 'Tracking & Analytics Total',
      subtitle: 'Pixel, Meta CAPI & Google Tag Manager',
      desc: 'Não entregamos a página "às cegas". Instalamos e validamos o rastreamento de cliques no WhatsApp, envios de formulário e eventos customizados para alimentar os algoritmos de tráfego com inteligência.',
      tag: 'ROI Mensurável',
    },
  ];

  const comparisonData = [
    {
      criteria: 'Tempo de Carregamento',
      generic: '4.5s a 7.2s (pesado, perde tráfego pago)',
      vitrine: '0.8s a 1.2s (ultrarrápido, nota 95+ PageSpeed)',
    },
    {
      criteria: 'Taxa Média de Conversão',
      generic: '0.8% a 1.5% (genérico, muita distração)',
      vitrine: '3.5% a 6.8% (foco obsessivo na ação do lead)',
    },
    {
      criteria: 'Código e Infraestrutura',
      generic: 'Dezenas de plugins vulneráveis e desatualizados',
      vitrine: 'Código limpo em React e Tailwind sem dependências desnecessárias',
    },
    {
      criteria: 'Rastreamento de Conversões',
      generic: 'Apenas visitas na página (sem cliques de WhatsApp)',
      vitrine: 'Tracking avançado de conversão via CAPI e Google Tag Manager',
    },
    {
      criteria: 'Exclusividade do Design',
      generic: 'Tema pronto que milhares de concorrentes usam',
      vitrine: '100% autoral, desenhado para o posicionamento da sua marca',
    },
  ];

  const faqs = [
    {
      q: 'Qual é o prazo médio de entrega de uma Landing Page?',
      a: 'Nosso ciclo de entrega é ágil e estruturado: após a reunião de briefing e aprovação da copy, a landing page completa, testada e com tracking configurado é entregue em até 7 a 10 dias úteis.',
    },
    {
      q: 'Preciso já ter domínio e hospedagem contratados?',
      a: 'Não se preocupe se ainda não tiver. Auxiliamos na compra do domínio ideal e cuidamos de toda a infraestrutura em servidores de alta performance com certificado SSL de segurança gratuito incluso.',
    },
    {
      q: 'A landing page é otimizada para anúncios no Google Ads e Instagram?',
      a: 'Sim, esse é o nosso foco principal. A página é construída seguindo as diretrizes de qualidade do Google Ads (o que barateia o custo por clique/CPC) e configurada com a API de Conversões do Meta para otimização de campanhas de tráfego pago.',
    },
    {
      q: 'Como recebo os leads interessados?',
      a: 'Os leads são direcionados instantaneamente para o WhatsApp da sua equipe comercial com uma mensagem pré-preenchida informando o interesse. Também podemos integrar formulários ao seu e-mail ou sistema de CRM (HubSpot, RD Station, Kommo).',
    },
    {
      q: 'Por que uma landing page converte muito mais que um site institucional?',
      a: 'Sites institucionais possuem dezenas de páginas, menus e distrações. A landing page é construída com um único objetivo: guiar o visitante qualificado por uma narrativa linear até a conversão imediata, eliminando qualquer ponto de fuga.',
    },
  ];

  return (
    <div className="relative min-h-screen text-[#1E293B] antialiased selection:bg-[#1E293B] selection:text-white">
      <SatelliteHeader currentSlug="criacao-de-landing-page" />
      <Background2D watermarkText="LANDING PAGES" />

      <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 pb-16 sm:pb-20 md:pb-28"
        >
          {/* Breadcrumb / Kicker */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider sm:tracking-widest px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur-md shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
              <span className="truncate sm:whitespace-normal">Engenharia de Conversão • ROI Máximo • PageSpeed 95+</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08] sm:leading-[1.05] text-[#1E293B] max-w-6xl break-words"
          >
            Landing pages que transformam <br className="hidden sm:inline" />
            <span className="text-slate-900 underline decoration-blue-500/40 decoration-4">
              cliques em faturamento real.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-5 sm:mt-8 text-sm sm:text-base md:text-xl lg:text-2xl font-light text-slate-700 max-w-4xl leading-relaxed"
          >
            Chega de templates genéricos e sites lentos que queimam seu investimento em anúncios.
            Desenhamos experiências digitais sob medida com carregamento sub-1.2s, copywriting
            persuasivo e foco obsessivo em atrair leads qualificados direto no seu WhatsApp.
          </p>

          {/* CTAs */}
          <div
            ref={ctaButtonsRef}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl"
          >
            <a
              href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20uma%20Landing%20Page%20de%20alta%20convers%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white font-bold text-xs sm:text-base uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl text-center min-h-[48px] flex items-center justify-center"
              data-cursor="hover"
            >
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="#cases"
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo('#cases', { duration: 1.2 });
                } else {
                  document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 border border-slate-300 text-slate-900 bg-white/70 hover:bg-white font-bold text-xs sm:text-base uppercase tracking-wider rounded-full transition-all hover:scale-105 text-center shadow-xs min-h-[48px] flex items-center justify-center"
              data-cursor="hover"
            >
              Ver Cases Reais
            </a>
          </div>

          {/* Metrics Grid */}
          <div
            ref={metricsRef}
            className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 border-t border-slate-300/80 pt-8 sm:pt-10"
          >
            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                &lt; 1.2s
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Carregamento
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Zero perda de leads por lentidão</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                95+
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                PageSpeed Score
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Nota máxima nos critérios do Google</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                3.8x
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Conversão Média
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Comparado a sites comuns e WordPress</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                100%
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                WhatsApp & CRM
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Leads quentes e prontos para fechar</p>
            </div>
          </div>
        </section>

        {/* ================= PILLARS OF HIGH CONVERSION ================= */}
        <section className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-blue-600">
                Engenharia de Conversão
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Os 4 pilares de uma landing page que vende de verdade.
              </h2>
            </div>

            {/* Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActivePillar(idx)}
                    className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      activePillar === idx
                        ? 'bg-white shadow-xl border-slate-400 scale-[1.02]'
                        : 'bg-white/70 hover:bg-white/90 border-slate-200/90 hover:shadow-md'
                    }`}
                    data-cursor="hover"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6">
                        <IconComponent size={28} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                        {item.tag}
                      </span>
                      <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#1E293B] mt-4 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                        {item.subtitle}
                      </p>
                      <p className="text-sm font-light text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                      <span>Pilar 0{idx + 1}</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= REAL CASES SHOWCASE ================= */}
        <section id="cases" className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-blue-600">
                Resultados Comprovados
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Cases que saíram do papel e bateram recordes de conversão.
              </h2>
            </div>

            {/* Case 1: Junior Móveis */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/junior-moveis.png"
                    alt="Landing Page Junior Móveis Sob Medida desenvolvida pela Vitrine Web"
                    className="w-full max-h-[260px] sm:max-h-[380px] md:max-h-none object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2">
                    Móveis Planejados & Decoração
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-3 sm:mb-4">
                    Junior Móveis Planejados
                  </h3>
                  <p className="text-xs sm:text-base font-light text-slate-600 leading-relaxed mb-5 sm:mb-6">
                    Redesenhamos a experiência completa de geração de orçamentos para uma das marcenarias
                    mais tradicionais da região. A página antiga sofria com lentidão no celular e baixa
                    conversão dos anúncios do Google Ads.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600">
                        -42%
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">No custo por lead (CPL)</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">
                        +210%
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Mais orçamentos via WhatsApp</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Vi%20o%20case%20da%20Junior%20M%C3%B3veis%20e%20gostaria%20de%20algo%20semelhante%20para%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto min-h-[48px]"
                    data-cursor="hover"
                  >
                    <span>Quero um resultado como esse</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Case 2: Clínica Odontológica */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2">
                    Saúde & Estética Odontológica
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-3 sm:mb-4">
                    Dr. Cassiano Odontologia
                  </h3>
                  <p className="text-xs sm:text-base font-light text-slate-600 leading-relaxed mb-5 sm:mb-6">
                    Landing page desenvolvida para captação de pacientes de implantes e lentes de contato
                    dental. Layout minimalista, prova social destacada e fluxo de agendamento ágil direto
                    para a recepção da clínica.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600">
                        0.9s
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Carregamento no 4G mobile</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">
                        18 leads/dia
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Média durante campanhas ativas</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20uma%20Landing%20Page%20para%20minha%20cl%C3%ADnica%2Fempresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto min-h-[48px]"
                    data-cursor="hover"
                  >
                    <span>Conversar sobre meu projeto</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/dentista-cassiano.png"
                    alt="Landing Page Odontologia desenvolvida pela Vitrine Web"
                    className="w-full max-h-[260px] sm:max-h-[380px] md:max-h-none object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="reveal-on-scroll py-16 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 text-blue-600">
                Comparativo Técnico
              </p>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Por que soluções amadoras queimam seu dinheiro em anúncios.
              </h2>
            </div>

            {/* Mobile-First Stacked Cards (< 768px) */}
            <div className="space-y-4 md:hidden">
              {comparisonData.map((row) => (
                <div key={row.criteria} className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    {row.criteria}
                  </p>
                  <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>Engenharia Vitrine Web</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900 leading-snug">{row.vitrine}</p>
                  </div>
                  <div className="p-3 bg-slate-100/70 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      <XCircle size={16} className="text-red-500 shrink-0" />
                      <span>Sites & Landing Pages Comuns</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">{row.generic}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table (>= 768px) */}
            <div className="hidden md:block overflow-x-auto rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Critério de Avaliação
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Sites & Landing Pages Comuns
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50/50">
                      Engenharia Vitrine Web
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonData.map((row, i) => (
                    <tr key={row.criteria} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 font-semibold text-sm text-[#1E293B]">{row.criteria}</td>
                      <td className="p-6 text-sm text-slate-600 flex items-center gap-2">
                        <XCircle size={18} className="text-red-500 shrink-0" />
                        <span>{row.generic}</span>
                      </td>
                      <td className="p-6 text-sm font-semibold text-slate-900 bg-blue-50/30">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                          <span>{row.vitrine}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= STEP-BY-STEP METHODOLOGY ================= */}
        <section className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-blue-600">
                Nosso Processo
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Do diagnóstico ao lançamento em 4 passos precisos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Imersão & ICP',
                  desc: 'Mapeamos o perfil do seu cliente ideal, seus concorrentes e a proposta de valor única para criar uma oferta irresistível.',
                },
                {
                  step: '02',
                  title: 'Copywriting & Estrutura',
                  desc: 'Escrevemos cada texto com psicologia de persuasão focada em quebrar dúvidas e incentivar o clique imediato no WhatsApp.',
                },
                {
                  step: '03',
                  title: 'Design Exclusivo & Código',
                  desc: 'Desenvolvemos sua interface sob medida em React e Tailwind com máxima fidelidade visual e carregamento instantâneo.',
                },
                {
                  step: '04',
                  title: 'Tracking & Entrega em 7 Dias',
                  desc: 'Configuramos tags de conversão do Google e Meta Ads, testamos todos os fluxos e colocamos no ar com domínio seguro.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-['Space_Grotesk'] text-5xl font-black text-slate-300">
                      {item.step}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#1E293B] mt-4 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock size={14} />
                    <span>Execução Ágil</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE FAQ ================= */}
        <section className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-blue-600">
                Tire suas Dúvidas
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-['Space_Grotesk'] text-lg font-bold text-[#1E293B] hover:text-black transition-colors"
                    data-cursor="hover"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-slate-500 transition-transform duration-300 shrink-0 ${
                        activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 text-slate-600 font-light text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BRUTALIST FINAL CTA ================= */}
        <section className="reveal-on-scroll max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-28">
          <div className="rounded-2xl sm:rounded-3xl bg-[#1E293B] text-white p-6 sm:p-14 md:p-20 shadow-2xl relative overflow-hidden">
            {/* Ambient blur glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="max-w-4xl relative z-10">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md mb-4 sm:mb-6">
                <Sparkles size={14} className="text-blue-400" />
                Diagnóstico de Conversão Gratuito
              </span>

              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
                Pronto para parar de perder vendas e multiplicar seus leads?
              </h2>

              <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-light mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Converse agora mesmo com os fundadores e Tech Leads da Vitrine Web. Vamos analisar seu
                nicho e desenhar a estratégia ideal para sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/554488680905?text=Ol%C3%A1!%20Quero%20uma%20Landing%20Page%20de%20Alta%20Convers%C3%A3o%20para%20minha%20empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl min-h-[48px] w-full sm:w-auto"
                  data-cursor="hover"
                >
                  <span>Chamar Especialista no WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleSatelliteNavigate} />
      <MobileWhatsAppFab serviceMessage="Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20uma%20Landing%20Page%20de%20alta%20convers%C3%A3o." />
    </div>
  );
};
