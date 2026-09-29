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
    badge: 'Máxima Conversão'
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
    badge: 'Engenharia Moderna'
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
    badge: 'Gestão Inteligente'
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
    badge: 'Tecnologia de Ponta'
  }
];

export const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section 
      id="servicos" 
      ref={sectionRef} 
      className="py-32 px-4 md:px-12 lg:px-16 w-full border-t border-current border-opacity-10 relative overflow-hidden"
    >
      <div className="max-w-[100rem] mx-auto">
        <div className="mb-20 max-w-4xl">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-50">
            Nossas Especialidades
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Sistemas Web, Landing Pages e ERPs desenvolvidos para liderar.
          </h2>
          <p className="mt-6 text-lg md:text-2xl font-light opacity-80 leading-relaxed">
            Como empresa especializada em desenvolvimento de software e soluções digitais, transformamos demandas complexas em sistemas intuitivos, rápidos e altamente lucrativos para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article 
                key={service.title}
                ref={el => cardsRef.current[index] = el}
                className="group relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 flex flex-col justify-between"
                data-cursor="hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-white/20 bg-white/5 opacity-70">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-6">
                    {service.subtitle}
                  </p>

                  <p className="text-base md:text-lg opacity-80 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-sm md:text-base opacity-75">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="https://wa.me/554488680905?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform"
                    aria-label={`Solicitar orçamento para ${service.title}`}
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
