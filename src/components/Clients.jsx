import React from 'react';
import ScrollReveal from './ScrollReveal';

/**
 * Seção Clientes e Parceiros — Faixa Contínua (Logo Marquee / Ticker)
 * 
 * Efeito visual inspirado na referência https://saleshookai-landing-page-2-v1.21st.app/
 * - Movimento suave e contínuo da direita para a esquerda
 * - Loop infinito matemático sem saltos nem espaços vazios
 * - Degradês suaves nas extremidades para fade-in e fade-out
 * - Logos em tons neutros/grayscale por padrão, ganhando cor e nitidez no hover
 * - Sem cards ou blocos pesados, com respiro uniforme
 * - Pausa automática ao passar o mouse ou focar por teclado
 * - Suporte nativo a prefers-reduced-motion
 */
export default function Clients() {
  /**
   * ESPAÇOS RESERVADOS PARA LOGOS REAIS DE CLIENTES E PARCEIROS
   * 
   * Instruções para substituição por logos reais:
   * 1. Adicione os arquivos das logos (SVG ou PNG transparente) em /public/images/clientes/
   * 2. Preencha a propriedade `logoUrl` com o caminho (ex: "/images/clientes/empresa.svg")
   * 3. Se `logoUrl` for fornecido, a imagem real será renderizada mantendo proporção e efeitos.
   */
  const clientsList = [
    {
      id: 1,
      name: "Cliente Parceiro 1",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-1.svg"
      comment: "Substituir pelo Logo do Cliente 1",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <path d="M24 6L42 16.5V35.5L24 46L6 35.5V16.5L24 6Z" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 6V46M6 16.5L24 26L42 16.5M6 35.5L24 26L42 35.5" stroke="#94A3B8" strokeWidth="2" strokeLinejoin="round" />
          <text x="56" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">HEXA</text>
          <text x="108" y="29" fill="#38BDF8" fontSize="15" fontWeight="700" letterSpacing="1">CORP</text>
        </svg>
      )
    },
    {
      id: 2,
      name: "Cliente Parceiro 2",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-2.svg"
      comment: "Substituir pelo Logo do Cliente 2",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <path d="M24 8L40 24H28V40H20V24H8L24 8Z" fill="#FF6B00" fillOpacity="0.2" stroke="#FF6B00" strokeWidth="2.5" strokeLinejoin="round" />
          <text x="54" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">SUMMIT</text>
        </svg>
      )
    },
    {
      id: 3,
      name: "Cliente Parceiro 3",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-3.svg"
      comment: "Substituir pelo Logo do Cliente 3",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <circle cx="24" cy="24" r="16" fill="#38BDF8" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="2.5" />
          <path d="M11 18L37 18M9 24L39 24M11 30L37 30" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          <text x="54" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">ORBITAL</text>
        </svg>
      )
    },
    {
      id: 4,
      name: "Cliente Parceiro 4",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-4.svg"
      comment: "Substituir pelo Logo do Cliente 4",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <rect x="8" y="10" width="12" height="12" rx="2" fill="#FF6B00" fillOpacity="0.25" stroke="#FF6B00" strokeWidth="2" />
          <rect x="24" y="10" width="12" height="26" rx="2" fill="#FF6B00" fillOpacity="0.25" stroke="#FF6B00" strokeWidth="2" />
          <rect x="8" y="26" width="12" height="10" rx="2" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="2" />
          <text x="50" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">MATRIX</text>
        </svg>
      )
    },
    {
      id: 5,
      name: "Cliente Parceiro 5",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-5.svg"
      comment: "Substituir pelo Logo do Cliente 5",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <path d="M14 16C8.5 16 6 20 6 24C6 28 8.5 32 14 32C19 32 21.5 28 24 24C26.5 20 29 16 34 16C39.5 16 42 20 42 24C42 28 39.5 32 34 32C29 32 26.5 28 24 24C21.5 20 19 16 14 16Z" fill="#38BDF8" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          <text x="54" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">INFINITI</text>
        </svg>
      )
    },
    {
      id: 6,
      name: "Cliente Parceiro 6",
      logoUrl: null, // Substituir pelo caminho ex: "/images/clientes/cliente-6.svg"
      comment: "Substituir pelo Logo do Cliente 6",
      svg: (
        <svg viewBox="0 0 160 48" fill="none" className="h-8 sm:h-10 w-auto" aria-hidden="true">
          <path d="M10 38C10 38 12 18 36 10C36 10 38 30 14 38H10Z" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M10 38L24 24" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
          <text x="52" y="29" fill="#E2E8F0" fontSize="15" fontWeight="700" letterSpacing="2">ECOLEAF</text>
        </svg>
      )
    }
  ];

  // Duplicamos a lista para criar um loop horizontal contínuo e sem emendas
  const marqueeItems = [...clientsList, ...clientsList];

  return (
    <section 
      id="clientes" 
      aria-label="Marcas que confiam na W11 Brindes"
      className="py-14 sm:py-16 lg:py-24 relative overflow-hidden bg-[#070A10] border-t border-white/5"
    >
      {/* Luz ambiente de estúdio sutil */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500/5 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Revelação Suave */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 lg:mb-14 gap-3 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                  CLIENTES E PARCEIROS
                </span>
                <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Marcas que confiam{' '}
                <span className="text-[#FF6B00]">na W11.</span>
              </h2>
            </div>

            <div className="hidden lg:block lg:max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Empresas de diferentes segmentos já escolheram nossos brindes para fortalecer suas marcas e criar novas conexões.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* FAIXA CONTÍNUA DE LOGOS (MARQUEE / TICKER) COM REVELAÇÃO SUAVE */}
      <ScrollReveal delay={100}>
        <div 
          className="relative w-full overflow-hidden py-4 sm:py-6"
          role="region" 
          aria-label="Carrossel contínuo de clientes e parceiros"
        >
          {/* Máscara de degradê à esquerda para entrada suave das marcas */}
          <div 
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#070A10] via-[#070A10]/90 to-transparent z-20 pointer-events-none"
          />

          {/* Máscara de degradê à direita para saída suave das marcas */}
          <div 
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#070A10] via-[#070A10]/90 to-transparent z-20 pointer-events-none"
          />

          {/* Trilho Animado em Loop Contínuo */}
          <div className="flex animate-marquee gap-10 sm:gap-16 lg:gap-20 items-center select-none py-2">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                tabIndex={0}
                aria-label={item.name}
                className="flex items-center justify-center shrink-0 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 focus:opacity-100 focus:grayscale-0 transition-all duration-300 transform hover:scale-105 focus:scale-105 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-lg px-2 py-1"
              >
                {item.logoUrl ? (
                  /* Exibição quando a imagem real da logo for fornecida */
                  <img
                    src={item.logoUrl}
                    alt={item.name}
                    className="h-7 sm:h-9 max-w-[140px] sm:max-w-[180px] w-auto object-contain transition-all duration-300"
                    loading="lazy"
                  />
                ) : (
                  /* 
                    ESPAÇO RESERVADO: {item.comment}
                    Para substituir por logo real, preencha `logoUrl` em `clientsList` acima.
                  */
                  <div className="transition-transform duration-300">
                    {item.svg}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
