import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Server,
  Cpu,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  XCircle,
  Database,
  Cloud,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';
import { Background2D } from '../components/Background2D';
import { SatelliteHeader } from '../components/satellite/SatelliteHeader';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const SistemasWebService = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
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

  const capabilities = [
    {
      icon: Server,
      title: 'Arquitetura de Nuvem Escalável',
      subtitle: 'APIs, Microsserviços & Alta Concorrência',
      desc: 'Projetamos infraestruturas modernas em AWS e Google Cloud com Docker e Kubernetes. Seu sistema preparado para suportar de dezenas a milhares de usuários simultâneos com tempo de resposta imperceptível.',
      tag: 'Infraestrutura Cloud',
    },
    {
      icon: Cpu,
      title: 'Front-End Reativo & Moderno',
      subtitle: 'React 19, TypeScript & Tailwind',
      desc: 'Nada de interfaces lentas ou travamentos. Construímos SPAs e dashboards de alta densidade de dados com WebSockets em tempo real, componentização modular e design ergonômico para desktop e tablet.',
      tag: 'Experiência de Usuário',
    },
    {
      icon: ShieldCheck,
      title: 'Segurança & Conformidade LGPD',
      subtitle: 'RBAC, Criptografia & Logs de Auditoria',
      desc: 'Autenticação segura via OAuth2/JWT com refresh tokens, criptografia AES-256 em repouso e trânsito, controle estrito de permissões por perfil e trilha de auditoria completa de cada ação executada.',
      tag: 'Segurança Máxima',
    },
    {
      icon: Workflow,
      title: 'Integrações de Ecossistema',
      subtitle: 'Gateways, CRMs, ERPs & IA',
      desc: 'Seu sistema não fica isolado. Conectamos nativamente a gateways de pagamento (Stripe, Asaas), emissão de NFe, CRMs, ferramentas de mensageria (WhatsApp API) e modelos de Inteligência Artificial generativa.',
      tag: 'APIs Conectadas',
    },
  ];

  const comparisonData = [
    {
      criteria: 'Modelo de Custo',
      generic: 'Mensalidades por usuário que ficam impagáveis com o crescimento',
      vitrine: 'Investimento em um ativo proprietário da sua empresa, sem custos por usuário',
    },
    {
      criteria: 'Aderência aos Processos',
      generic: 'Sua empresa precisa mudar sua rotina para se adaptar ao sistema pronto',
      vitrine: 'O sistema é construído 100% em torno do fluxo operacional exato do seu negócio',
    },
    {
      criteria: 'Propriedade Intelectual',
      generic: 'Você é apenas um locatário: se parar de pagar, perde o acesso e os dados',
      vitrine: 'Código-fonte e banco de dados são propriedade total da sua empresa',
    },
    {
      criteria: 'Integrações e APIs',
      generic: 'Fechadas, cobradas à parte ou limitadas a parceiros do fornecedor',
      vitrine: 'APIs RESTful e GraphQL abertas para conectar a qualquer ferramenta do mercado',
    },
    {
      criteria: 'Evolução Contínua',
      generic: 'Você depende da fila de prioridades do fornecedor para ter melhorias',
      vitrine: 'Novas funcionalidades e módulos implementados conforme a estratégia da sua empresa',
    },
  ];

  const faqs = [
    {
      q: 'Quem é o dono do código-fonte do sistema?',
      a: 'Sua empresa. Ao finalizar o desenvolvimento e quitação do projeto, todo o código-fonte, repositório Git, documentação de APIs e acessos de infraestrutura são transferidos integralmente para você. Sem amarras contratuais.',
    },
    {
      q: 'Quais tecnologias e linguagens vocês utilizam?',
      a: 'Trabalhamos com o ecossistema mais moderno e consolidado da indústria: React 19, TypeScript, Next.js e Tailwind CSS no front-end; Node.js, Nest.js e Python FastAPI no back-end; bancos relacionais PostgreSQL, Redis para cache e Docker/Kubernetes na nuvem.',
    },
    {
      q: 'Como acompanhamos o andamento do desenvolvimento?',
      a: 'Trabalhamos em ciclos ágeis (Sprints de 1 a 2 semanas). Você tem acesso ao ambiente de homologação ao vivo para testar as novas funcionalidades a cada entrega e participa de reuniões periódicas de alinhamento direto com o Tech Lead.',
    },
    {
      q: 'Vocês oferecem suporte e manutenção contínua após o lançamento?',
      a: 'Sim. Além da garantia contratual para correção de qualquer inconformidade, oferecemos planos de sustentação técnica, monitoramento de infraestrutura 24/7, backups automáticos e desenvolvimento sob demanda de novas features.',
    },
    {
      q: 'Quanto tempo leva para desenvolver um sistema sob medida?',
      a: 'O prazo varia de acordo com o escopo e complexidade do projeto. MVPs funcionais (produtos mínimos viáveis) costumam ser entregues entre 4 a 8 semanas, enquanto plataformas corporativas completas variam de 2 a 4 meses.',
    },
  ];

  return (
    <div className="relative min-h-screen text-[#1E293B] antialiased selection:bg-[#1E293B] selection:text-white">
      <SatelliteHeader currentSlug="desenvolvimento-de-sistemas-web" />
      <Background2D watermarkText="SISTEMAS WEB" />

      <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-6 pb-20 md:pb-28"
        >
          {/* Breadcrumb / Kicker */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Engenharia Full-Stack • Nuvem Escalável • Arquitetura Moderna
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-[#1E293B] max-w-6xl"
          >
            Sistemas web complexos. <br className="hidden sm:inline" />
            <span className="text-slate-900 underline decoration-indigo-500/40 decoration-4">
              Execução veloz, simples e escalável.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-slate-700 max-w-4xl leading-relaxed"
          >
            Desenvolvemos plataformas SaaS sob medida, portais corporativos e microsserviços em nuvem.
            Código limpo, segurança de ponta a ponta e escalabilidade para empresas que não aceitam
            gargalos operacionais ou sistemas lentos de terceiros.
          </p>

          {/* CTAs */}
          <div
            ref={ctaButtonsRef}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl"
          >
            <a
              href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20o%20desenvolvimento%20de%20um%20Sistema%20Web%20sob%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#1E293B] text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl text-center"
              data-cursor="hover"
            >
              Falar com um Tech Lead
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
              className="px-8 py-4 border border-slate-300 text-slate-900 bg-white/70 hover:bg-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-full transition-all hover:scale-105 text-center shadow-xs"
              data-cursor="hover"
            >
              Ver Plataformas Desenvolvidas
            </a>
          </div>

          {/* Metrics Grid */}
          <div
            ref={metricsRef}
            className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-300/80 pt-10"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                99.9%
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-2">
                SLA de Disponibilidade
              </p>
              <p className="text-xs text-slate-500 mt-1 font-light">Infraestrutura em nuvem resiliente</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                &lt; 200ms
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-2">
                Latência de API
              </p>
              <p className="text-xs text-slate-500 mt-1 font-light">Consultas otimizadas com cache Redis</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                100%
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-2">
                Conformidade LGPD
              </p>
              <p className="text-xs text-slate-500 mt-1 font-light">Criptografia e controle de acesso rigoroso</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                Propriedade
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-2">
                Código 100% Seu
              </p>
              <p className="text-xs text-slate-500 mt-1 font-light">Sem aluguel ou royalties de software</p>
            </div>
          </div>
        </section>

        {/* ================= CAPABILITIES SECTION ================= */}
        <section className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-indigo-600">
                Engenharia de Software
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Arquitetura feita para suportar o crescimento do seu negócio.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveCapability(idx)}
                    className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      activeCapability === idx
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
                      <span>Capacidade 0{idx + 1}</span>
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-indigo-600">
                Aplicações em Produção
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Sistemas web de alto desempenho desenvolvidos pela Vitrine Web.
              </h2>
            </div>

            {/* Case 1: PaceX AI */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/90 p-8 sm:p-12 mb-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/pacex.png"
                    alt="Plataforma SaaS PaceX desenvolvida pela Vitrine Web"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    SaaS Analítico & Telemetria em Tempo Real
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
                    PaceX Analytics Platform
                  </h3>
                  <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed mb-6">
                    Desenvolvemos uma plataforma web completa para processamento de telemetria e análise
                    de performance com dashboards interativos, streaming de dados via WebSockets e relatórios
                    executivos automatizados.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-indigo-600">
                        10k+
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Usuários ativos simultâneos</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-emerald-600">
                        -60%
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Tempo de resposta analítica</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Vi%20a%20plataforma%20PaceX%20e%20gostaria%20de%20construir%20um%20sistema%20web%20para%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto"
                    data-cursor="hover"
                  >
                    <span>Quero desenvolver uma plataforma assim</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Case 2: Adventista Play Streaming */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Streaming & Mídia Sob Demanda
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4">
                    Adventista Play
                  </h3>
                  <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed mb-6">
                    Engenharia web para distribuição de conteúdos audiovisuais em alta resolução.
                    Sistema de autenticação integrado, biblioteca categorizada de vídeos, player adaptativo
                    e CDN global com carregamento ultrarrápido.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-indigo-600">
                        Zero
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Buffering ou travamentos</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold text-emerald-600">
                        100%
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Multiplataforma (Web & Mobile)</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20desenvolver%20uma%20aplica%C3%A7%C3%A3o%20web%20robusta%20com%20a%20Vitrine%20Web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto"
                    data-cursor="hover"
                  >
                    <span>Falar sobre meu sistema</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/adventistaplay.jpg"
                    alt="Plataforma de Streaming desenvolvida pela Vitrine Web"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-indigo-600">
                Tomada de Decisão
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Software de prateleira vs Sistema Web sob medida.
              </h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Dimensão
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Softwares Prontos de Mercado
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50/50">
                      Sistema Sob Medida Vitrine Web
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonData.map((row) => (
                    <tr key={row.criteria} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-6 font-semibold text-sm text-[#1E293B]">{row.criteria}</td>
                      <td className="p-6 text-sm text-slate-600 flex items-center gap-2">
                        <XCircle size={18} className="text-red-500 shrink-0" />
                        <span>{row.generic}</span>
                      </td>
                      <td className="p-6 text-sm font-semibold text-slate-900 bg-indigo-50/30">
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-indigo-600">
                Engenharia Ágil
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Metodologia em 4 etapas para entrega previsível e sem sustos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Blueprint & Arquitetura',
                  desc: 'Mapeamento minucioso dos requisitos, regras de negócio, modelagem de banco de dados relacional e definição do stack ideal.',
                },
                {
                  step: '02',
                  title: 'Prototipagem UI/UX',
                  desc: 'Construção visual e navegável no Figma de todas as telas e fluxos. Você valida a usabilidade antes de escrevermos a primeira linha de código.',
                },
                {
                  step: '03',
                  title: 'Sprints com Homologação',
                  desc: 'Desenvolvimento em ciclos curtos de 2 semanas com ambiente de testes ativo para sua equipe acompanhar a evolução em tempo real.',
                },
                {
                  step: '04',
                  title: 'Deploy Contínuo & Sustentação',
                  desc: 'Configuração de pipeline automatizado (CI/CD) na nuvem, testes de carga, transferência integral do código e suporte pós-lançamento.',
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
                    <Code2 size={14} />
                    <span>Engenharia Moderna</span>
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-indigo-600">
                Tire suas Dúvidas
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Perguntas Frequentes sobre Sistemas Web
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
                        activeFaq === idx ? 'rotate-180 text-indigo-600' : ''
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
        <section className="reveal-on-scroll max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28">
          <div className="rounded-3xl bg-[#1E293B] text-white p-10 sm:p-14 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="max-w-4xl relative z-10">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md mb-6">
                <Sparkles size={14} className="text-indigo-400" />
                Engenharia de Software de Alto Nível
              </span>

              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Tem uma plataforma web ou ideia complexa para tirar do papel?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
                Agende uma conversa técnica sem compromisso com os fundadores e Tech Leads da Vitrine Web.
                Vamos avaliar sua arquitetura e propor a melhor estratégia de engenharia.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/554488680905?text=Ol%C3%A1!%20Quero%20agendar%20uma%20conversa%20t%C3%A9cnica%20sobre%20meu%20Sistema%20Web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl"
                  data-cursor="hover"
                >
                  <span>Conversar com Tech Lead no WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleSatelliteNavigate} />
    </div>
  );
};
