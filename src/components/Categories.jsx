import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

export default function Categories() {
  return (
    <section id="brindes" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-[#070A10]">
      {/* Luz ambiente sutil */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Revelação Suave */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-3 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                  NOSSOS BRINDES
                </span>
                <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Soluções em brindes para a{' '}
                <span className="text-[#FF6B00]">sua empresa.</span>
              </h2>
            </div>

            <div className="hidden lg:block lg:max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Uma linha completa de brindes personalizados para valorizar a sua marca e criar conexões reais.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Grade de 2 colunas no Mobile e 4 no Desktop (Fiel ao Mockup Mobile) com Stagger */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
          {siteConfig.categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 100} className="h-full">
              <div
                className="group flex flex-col h-full bg-[#0D1322] border border-white/10 hover:border-[#FF6B00]/40 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/40"
              >
              {/* Imagem do Produto */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent opacity-75"
                />
              </div>

              {/* Conteúdo do Card: compacto no celular, completo no desktop */}
              <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <h3 className="text-xs sm:text-base lg:text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors truncate">
                      {category.title}
                    </h3>
                    <a
                      href="#orcamento"
                      aria-label={`Solicitar orçamento para ${category.title}`}
                      className="w-6 h-6 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all duration-300 shrink-0"
                    >
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>

                  <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 mb-3 sm:mb-4">
                    {category.description}
                  </p>

                  {/* Sugestões visíveis em telas médias/grandes */}
                  <div className="hidden sm:flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link adicional no desktop */}
                <div className="hidden sm:block mt-4 sm:mt-5 pt-3">
                  <a
                    href="#orcamento"
                    className="min-h-[40px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-[#FF6B00] transition-colors"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
