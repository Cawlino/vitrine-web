import React from 'react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer id="contato" className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 w-full mt-12 sm:mt-16 md:mt-20 border-t border-current border-opacity-10 overflow-hidden relative z-20">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        <div className="flex-1 w-full">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 opacity-50 text-slate-600">Tem um projeto em mente?</p>
          <img 
            src="/logo-symbol.png" 
            alt="Vitrine Web" 
            className="h-10 md:h-16 w-auto object-contain mb-6"
          />
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none mb-8 sm:mb-10 text-[#1E293B]">
            VAMOS<br/>CONVERSAR.
          </h2>
          <a 
            href="https://wa.me/554488680905" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-[#1E293B] text-white font-bold uppercase tracking-widest text-xs sm:text-sm md:text-base rounded-full hover:bg-black transition-colors duration-300 shadow-xl"
            data-cursor="hover"
          >
            Chamar no WhatsApp
          </a>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-10 text-xs sm:text-sm tracking-widest uppercase font-medium w-full md:w-auto text-[#1E293B]">
          
          <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 text-left md:text-right w-full sm:w-auto">
            
            {/* Top-Left: LinkedIn */}
            <div className="relative group flex justify-end">
              <div className="hover:opacity-50 transition-opacity flex items-center gap-2 cursor-pointer" data-cursor="hover">
                LinkedIn
              </div>
              <div className="absolute right-0 bottom-full hidden group-hover:block pb-2 z-50">
                <div className="flex flex-col bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden whitespace-nowrap min-w-[150px] text-left text-white">
                  <a href="https://www.linkedin.com/in/danielbarrionuevo/" target="_blank" rel="noopener noreferrer" className="px-6 py-4 hover:bg-white/10 transition-colors border-b border-white/5" data-cursor="hover">
                    Daniel
                  </a>
                  <a href="https://www.linkedin.com/in/natanael-figueredo-balbo/" target="_blank" rel="noopener noreferrer" className="px-6 py-4 hover:bg-white/10 transition-colors" data-cursor="hover">
                    Natanael
                  </a>
                </div>
              </div>
            </div>
            
            {/* Top-Right: Instagram */}
            <div className="relative group flex justify-end">
              <div className="hover:opacity-50 transition-opacity flex items-center gap-2 cursor-pointer" data-cursor="hover">
                Instagram
              </div>
              <div className="absolute right-0 bottom-full hidden group-hover:block pb-2 z-50">
                <div className="flex flex-col bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden whitespace-nowrap min-w-[150px] text-left text-white">
                  <a href="https://www.instagram.com/danielbarriogomes/" target="_blank" rel="noopener noreferrer" className="px-6 py-4 hover:bg-white/10 transition-colors border-b border-white/5" data-cursor="hover">
                    Daniel
                  </a>
                  <a href="https://www.instagram.com/natanaelbalbo/" target="_blank" rel="noopener noreferrer" className="px-6 py-4 hover:bg-white/10 transition-colors" data-cursor="hover">
                    Natanael
                  </a>
                </div>
              </div>
            </div>

            {/* Services & Projetos */}
            <div className="flex justify-end">
              <button className="hover:opacity-50 transition-opacity uppercase cursor-pointer" data-cursor="hover" onClick={() => onNavigate && onNavigate('home', '#servicos')}>Serviços</button>
            </div>

            <div className="flex justify-end">
              <button className="hover:opacity-50 transition-opacity uppercase cursor-pointer" data-cursor="hover" onClick={() => onNavigate && onNavigate('home', '#projetos')}>Projetos</button>
            </div>
            
            {/* Sobre Nós */}
            <div className="flex justify-end">
              <button className="hover:opacity-50 transition-opacity uppercase cursor-pointer" data-cursor="hover" onClick={() => onNavigate && onNavigate('home', '#sobre-nos')}>Sobre Nós</button>
            </div>

            {/* Contato */}
            <div className="flex justify-end">
              <button className="hover:opacity-50 transition-opacity uppercase cursor-pointer" data-cursor="hover" onClick={() => onNavigate && onNavigate('home', '#contato')}>Contato</button>
            </div>
            
          </div>

          {/* Voltar ao Topo */}
          <div 
            className="hover:opacity-50 transition-opacity uppercase block cursor-pointer"
            data-cursor="hover" 
            onClick={() => {
              if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1.5 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Voltar ao Topo ↑
          </div>
          
        </div>
        
      </div>

      {/* SEO Footer Bar */}
      <div className="max-w-[100rem] mx-auto mt-20 pt-8 border-t border-slate-300/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600 tracking-wider">
        <p>© {new Date().getFullYear()} Vitrine Web. Desenvolvimento de Sistemas Web, Landing Pages de Alta Conversão e ERPs Sob Medida.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-slate-700">
          <a href="/criacao-de-landing-page" className="hover:text-black transition-colors underline decoration-slate-400 underline-offset-4">Criação de Landing Pages</a>
          <span className="opacity-30">•</span>
          <a href="/desenvolvimento-de-sistemas-web" className="hover:text-black transition-colors underline decoration-slate-400 underline-offset-4">Sistemas Web Sob Medida</a>
          <span className="opacity-30">•</span>
          <a href="/sistema-erp-sob-medida" className="hover:text-black transition-colors underline decoration-slate-400 underline-offset-4">Sistemas ERP Corporativos</a>
        </div>
      </div>
    </footer>
  );
};
