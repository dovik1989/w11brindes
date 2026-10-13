import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Caneca de Porcelana",
      category: "Canecas e copos",
      image: "/images/w11/produtos/02-categoria-canecas-copos.png",
      alt: "Exemplo de caneca personalizada com marca W11"
    },
    {
      id: 2,
      title: "Camiseta Corporativa",
      category: "Vestuário",
      image: "/images/w11/produtos/03-categoria-vestuario.png",
      alt: "Exemplo de camiseta personalizada com marca W11"
    },
    {
      id: 3,
      title: "Copo Térmico Inox",
      category: "Térmicos",
      image: "/images/w11/produtos/06-portfolio-copo-termico.png",
      alt: "Exemplo de copo térmico personalizado com marca W11"
    },
    {
      id: 4,
      title: "Chaveiro em Metal",
      category: "Acessórios",
      image: "/images/w11/produtos/07-portfolio-chaveiro.png",
      alt: "Exemplo de chaveiro personalizado com marca W11"
    },
    {
      id: 5,
      title: "Caderno & Caneta",
      category: "Papelaria",
      image: "/images/w11/produtos/04-categoria-papelaria.png",
      alt: "Exemplo de caderno e caneta personalizados com marca W11"
    },
    {
      id: 6,
      title: "Kit Corporativo Executivo",
      category: "Kits e eventos",
      image: "/images/w11/produtos/05-categoria-kits-eventos.png",
      alt: "Exemplo de kit corporativo completo com marca W11"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#070A10]">
      {/* Luz ambiente de estúdio */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 right-0 sm:right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 left-0 sm:left-10 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Revelação Suave */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 lg:mb-14 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                  PORTFÓLIO
                </span>
                <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Projetos que levam marcas{' '}
                <span className="text-[#FF6B00]">mais longe.</span>
              </h2>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-2.5 sm:gap-3">
              <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-md text-right">
                Brindes personalizados que fortalecem marcas e criam conexões reais. Conheça alguns dos nossos projetos e inspire-se.
              </p>
              <a
                href="#orcamento"
                className="min-h-[40px] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF6B00] hover:text-[#EA580C] transition-colors"
              >
                <span>Ver todos os projetos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Galeria de 6 Itens com Stagger Discreto */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100} className="h-full">
              <div
                className="group relative h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0D1322] border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-orange-500/10 flex flex-col"
              >
                {/* Imagem com proporção consistente (aspect-[4/3] fiel aos mockups) */}
                <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Gradiente escuro sutil */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-0 bg-gradient-to-t from-[#070A10]/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
                  />

                  {/* Tag de categoria no desktop */}
                  <div className="hidden sm:block absolute top-3.5 left-3.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#070A10]/85 backdrop-blur-md text-slate-300 border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Informações na base do card visíveis em telas médias e grandes */}
                <div className="hidden sm:flex p-4 lg:p-5 items-center justify-between gap-2 border-t border-white/5 bg-[#0D1322]">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm md:text-base font-bold text-white truncate group-hover:text-[#FF6B00] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 inline-block">
                      Exemplo de personalização
                    </span>
                  </div>

                  <a
                    href="#orcamento"
                    aria-label={`Solicitar orçamento para ${item.title}`}
                    className="min-w-[32px] min-h-[32px] w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-slate-300 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:text-white transition-all shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Nota informativa de rodapé da galeria */}
        <ScrollReveal delay={150}>
          <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span>
                Imagens conceituais de apresentação com a marca W11. Projetos personalizados sob demanda conforme a identidade visual de cada cliente.
              </span>
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
