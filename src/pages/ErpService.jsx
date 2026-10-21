import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Package,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  TrendingUp,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Background2D } from '../components/Background2D';
import { SatelliteHeader } from '../components/satellite/SatelliteHeader';
import { MobileWhatsAppFab } from '../components/satellite/MobileWhatsAppFab';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const ErpService = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const metricsRef = useRef(null);
  const ctaButtonsRef = useRef(null);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

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

  const modules = [
    {
      icon: Users,
      title: 'Módulo de Equipes & DP',
      subtitle: 'Controle de Colaboradores e Cargos',
      desc: 'Centralize contratos, permissões de acesso por setor, controle de jornada e dados de funcionários em uma interface segura. Elimine arquivos em papel e planilhas descentralizadas.',
      tag: 'Gestão de Pessoas',
    },
    {
      icon: DollarSign,
      title: 'Módulo Financeiro & DRE',
      subtitle: 'Fluxo de Caixa, Contas a Pagar e Receber',
      desc: 'Conciliação bancária automatizada, contas a pagar com alertas de vencimento, emissão de boletos/Pix e relatórios de DRE gerados em 1 clique para decisões estratégicas seguras.',
      tag: 'Finanças Blindadas',
    },
    {
      icon: Package,
      title: 'Estoque & Suprimentos',
      subtitle: 'Rastreabilidade de Lotes e Reposição',
      desc: 'Acabe com rupturas de estoque ou compras duplicadas. O sistema monitora entradas e saídas em tempo real e emite notificações automáticas quando itens atingem a margem mínima.',
      tag: 'Operação Precisa',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Executivo & BI',
      subtitle: 'Indicadores em Tempo Real no Celular e PC',
      desc: 'Visualize métricas financeiras, produtividade por departamento e faturamento em gráficos interativos e claros. Tome decisões em reuniões com dados consolidados e confiáveis.',
      tag: 'Inteligência de Gestão',
    },
  ];

  const comparisonData = [
    {
      criteria: 'Integridade dos Dados',
      generic: 'Planilhas corrompidas por erros manuais e fórmulas acidentalmente apagadas',
      vitrine: 'Banco de dados relacional com validações automáticas e integridade garantida',
    },
    {
      criteria: 'Segurança & Sigilo',
      generic: 'Qualquer colaborador pode copiar o arquivo e levar dados confidenciais',
      vitrine: 'Permissões estritas por função (RBAC), criptografia e histórico de alterações',
    },
    {
      criteria: 'Tempo de Fechamento',
      generic: 'Dias perdidos ao fim de cada mês consolidando tabelas de diferentes setores',
      vitrine: 'Relatórios consolidados e indicadores gerados instantaneamente com 1 clique',
    },
    {
      criteria: 'Acesso Multi-usuário',
      generic: 'Conflitos de versão de arquivos salvos em rede e perda de alterações simultâneas',
      vitrine: 'Sistema web em nuvem com sincronização instantânea entre todos os setores',
    },
    {
      criteria: 'Escalabilidade',
      generic: 'A partir de certo volume, o arquivo trava ou fica inviável de manipular',
      vitrine: 'Arquitetura projetada para suportar o crescimento da sua empresa por anos',
    },
  ];

  const faqs = [
    {
      q: 'Como é feita a migração dos dados das nossas planilhas atuais?',
      a: 'Nossa equipe de engenharia realiza o mapeamento, saneamento e importação automatizada de todo o seu histórico de dados em Excel ou sistemas legados para o novo banco de dados do ERP. Nada do seu histórico é perdido.',
    },
    {
      q: 'Nossa operação precisará parar durante a implantação?',
      a: 'Não. Conduzimos a transição de forma paralela. Sua equipe continua operando normalmente enquanto validamos o novo sistema em ambiente de homologação. A virada de chave acontece de forma rápida e segura após treinamento completo.',
    },
    {
      q: 'O sistema pode ser acessado de qualquer lugar pelo celular?',
      a: 'Sim. O ERP é desenvolvido com arquitetura 100% web e responsiva, permitindo que diretores e gestores acompanhem métricas, aprovem pedidos e consultem relatórios de qualquer computador, tablet ou smartphone.',
    },
    {
      q: 'É possível adicionar novos módulos no futuro conforme a empresa crescer?',
      a: 'Com certeza. O sistema é desenhado de forma estritamente modular. Conforme seu negócio expandir, novos módulos (como integração com transportadoras, módulos fiscais ou integrações com novos marketplaces) podem ser acoplados com facilidade.',
    },
    {
      q: 'Como funciona o treinamento dos colaboradores?',
      a: 'Oferecemos sessões práticas de treinamento gravadas e ao vivo para cada departamento da empresa, além de manuais objetivos e suporte prioritário nos primeiros meses de operação para sanar dúvidas da equipe.',
    },
  ];

  return (
    <div className="relative min-h-screen text-[#1E293B] antialiased selection:bg-[#1E293B] selection:text-white">
      <SatelliteHeader currentSlug="sistema-erp-sob-medida" />
      <Background2D watermarkText="ERPS SOB MEDIDA" />

      <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
        {/* ================= HERO SECTION ================= */}
        <section
          ref={heroRef}
          className="max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-4 sm:pt-6 pb-16 sm:pb-20 md:pb-28"
        >
          {/* Breadcrumb / Kicker */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider sm:tracking-widest px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur-md shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
              <span className="truncate sm:whitespace-normal">Gestão Corporativa • Automação de Processos • Adeus Planilhas</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="font-['Space_Grotesk'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08] sm:leading-[1.05] text-[#1E293B] max-w-6xl break-words"
          >
            O ERP que se adapta à sua empresa. <br className="hidden sm:inline" />
            <span className="text-slate-900 underline decoration-emerald-500/40 decoration-4">
              Não o contrário.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mt-5 sm:mt-8 text-sm sm:text-base md:text-xl lg:text-2xl font-light text-slate-700 max-w-4xl leading-relaxed"
          >
            Substitua dezenas de planilhas manuais, erros de digitação e softwares engessados por um
            sistema de gestão corporativa desenvolvido sob medida para a sua operação. Controle equipes,
            financeiro, estoque e processos em um único ecossistema seguro.
          </p>

          {/* CTAs */}
          <div
            ref={ctaButtonsRef}
            className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl"
          >
            <a
              href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20de%20um%20ERP%20sob%20medida."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1E293B] text-white font-bold text-xs sm:text-base uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-xl text-center min-h-[48px] flex items-center justify-center"
              data-cursor="hover"
            >
              Agendar Demonstração Gratuita
            </a>
            <a
              href="#modulos"
              onClick={(e) => {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo('#modulos', { duration: 1.2 });
                } else {
                  document.querySelector('#modulos')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 sm:px-8 py-3.5 sm:py-4 border border-slate-300 text-slate-900 bg-white/70 hover:bg-white font-bold text-xs sm:text-base uppercase tracking-wider rounded-full transition-all hover:scale-105 text-center shadow-xs min-h-[48px] flex items-center justify-center"
              data-cursor="hover"
            >
              Conhecer os Módulos
            </a>
          </div>

          {/* Metrics Grid */}
          <div
            ref={metricsRef}
            className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 border-t border-slate-300/80 pt-8 sm:pt-10"
          >
            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                -75%
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Erros Manuais
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Fim do retrabalho com planilhas</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                3.2x
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Mais Agilidade
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Relatórios financeiros e DRE instantâneos</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                100%
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Auditoria Total
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Rastreabilidade completa de ações</p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1E293B]">
                Zero
              </div>
              <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1.5 sm:mt-2">
                Planilhas Perdidas
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 font-light leading-tight">Toda a empresa unificada em nuvem</p>
            </div>
          </div>
        </section>

        {/* ================= MODULES SECTION ================= */}
        <section id="modulos" className="reveal-on-scroll py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-slate-200/80 bg-white/40 backdrop-blur-xs">
          <div className="max-w-[100rem] mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-emerald-600">
                Arquitetura Modular
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Módulos sob medida para cobrir cada setor da sua empresa.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActiveModule(idx)}
                    className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      activeModule === idx
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
                      <span>Módulo 0{idx + 1}</span>
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-emerald-600">
                Transformação Operacional
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Case de Sucesso: Gestão Corporativa Integrada.
              </h2>
            </div>

            {/* Case: Gestão Corporativa */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-12 mb-8 sm:mb-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/gestao-funcionarios.png"
                    alt="Sistema de Gestão Corporativa e RH desenvolvido pela Vitrine Web"
                    className="w-full max-h-[260px] sm:max-h-[380px] md:max-h-none object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2">
                    Departamento Pessoal & Operações
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-3 sm:mb-4">
                    Plataforma de Gestão Corporativa
                  </h3>
                  <p className="text-xs sm:text-base font-light text-slate-600 leading-relaxed mb-5 sm:mb-6">
                    A empresa gerenciava mais de 120 colaboradores através de 14 planilhas isoladas no Excel,
                    enfrentando inconsistências financeiras e conflitos de dados. Desenvolvemos um ERP sob medida
                    que unificou todos os setores em tempo recorde.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">
                        14 para 1
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Planilhas unificadas</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600">
                        100%
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Aderência aos processos</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Vi%20o%20case%20de%20Gest%C3%A3o%20Corporativa%20e%20gostaria%20de%20automatizar%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto min-h-[48px]"
                    data-cursor="hover"
                  >
                    <span>Quero modernizar minha operação</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Case Secondary: Departamentos */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2">
                    Controle Setorial & Permissões
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1E293B] mb-3 sm:mb-4">
                    Painel de Departamentos & Alçadas
                  </h3>
                  <p className="text-xs sm:text-base font-light text-slate-600 leading-relaxed mb-5 sm:mb-6">
                    Organização visual de filiais e centros de custo. Cada líder setorial visualiza apenas
                    as informações pertinentes ao seu departamento, preservando o sigilo de dados estratégicos
                    da diretoria com auditoria completa.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">
                        100%
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Sigilo entre setores</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-600">
                        1 Clique
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 font-medium">Relatórios consolidados</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/554488680905?text=Ol%C3%A1!%20Gostaria%20de%20um%20ERP%20sob%20medida%20para%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-black transition-all hover:scale-105 shadow-md w-full sm:w-auto min-h-[48px]"
                    data-cursor="hover"
                  >
                    <span>Agendar demonstração no WhatsApp</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/gestao-departamentos.png"
                    alt="Painel de Departamentos desenvolvido pela Vitrine Web"
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 text-emerald-600">
                Diagnóstico de Eficiência
              </p>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                O custo invisível das planilhas vs ERP Sob Medida.
              </h2>
            </div>

            {/* Mobile-First Stacked Cards (< 768px) */}
            <div className="space-y-4 md:hidden">
              {comparisonData.map((row) => (
                <div key={row.criteria} className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    {row.criteria}
                  </p>
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                      <span>ERP Sob Medida Vitrine Web</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900 leading-snug">{row.vitrine}</p>
                  </div>
                  <div className="p-3 bg-slate-100/70 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      <XCircle size={16} className="text-red-500 shrink-0" />
                      <span>Planilhas Paralelas de Excel</span>
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
                      Indicador de Risco
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-500">
                      Operação com Planilhas Paralelas
                    </th>
                    <th className="p-6 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50/50">
                      ERP Sob Medida Vitrine Web
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
                      <td className="p-6 text-sm font-semibold text-slate-900 bg-emerald-50/30">
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-emerald-600">
                Transição Segura
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Implantação sem interrupção das suas rotinas operacionais.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Mapeamento de Processos',
                  desc: 'Entendemos minuciosamente como sua equipe trabalha, as regras de negócio de cada setor e as planilhas utilizadas.',
                },
                {
                  step: '02',
                  title: 'Migração de Dados Históricos',
                  desc: 'Importamos todo o seu histórico com saneamento e validação de integridade para nenhum registro anterior se perder.',
                },
                {
                  step: '03',
                  title: 'Validação com Usuários-Chave',
                  desc: 'Os líderes de cada setor testam os módulos na prática e refinam detalhes antes do lançamento oficial.',
                },
                {
                  step: '04',
                  title: 'Treinamento & Suporte Dedicado',
                  desc: 'Capacitamos sua equipe com materiais objetivos e prestamos suporte próximo durante toda a fase de adaptação.',
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
                    <TrendingUp size={14} />
                    <span>Ganho de Escala</span>
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
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 text-emerald-600">
                Tire suas Dúvidas
              </p>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E293B] tracking-tight">
                Perguntas Frequentes sobre ERP Sob Medida
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
                        activeFaq === idx ? 'rotate-180 text-emerald-600' : ''
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

            <div className="max-w-4xl relative z-10">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md mb-4 sm:mb-6">
                <Sparkles size={14} className="text-emerald-400" />
                Diagnóstico Operacional Gratuito
              </span>

              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
                Pronto para aposentar as planilhas e ter o controle total da sua empresa?
              </h2>

              <p className="text-slate-300 text-sm sm:text-lg md:text-xl font-light mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Agende uma conversa com os fundadores e Tech Leads da Vitrine Web para analisarmos os gargalos
                da sua operação e demonstrar como o ERP sob medida transformará o seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/554488680905?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20minha%20empresa%20com%20um%20ERP%20sob%20medida."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl min-h-[48px] w-full sm:w-auto"
                  data-cursor="hover"
                >
                  <span>Agendar Demonstração no WhatsApp</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={handleSatelliteNavigate} />
      <MobileWhatsAppFab serviceMessage="Ol%C3%A1!%20Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20de%20um%20ERP%20sob%20medida%20para%20minha%20empresa." />
    </div>
  );
};
