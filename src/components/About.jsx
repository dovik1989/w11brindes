import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section 
      id="sobre" 
      className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#070A10]"
    >
      {/* CAMADA VISUAL FULL-BLEED (Fundo fotográfico em largura total integrado) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      >
        {/* Imagem de fundo: Aperto de mãos em cenário com iluminação azul e laranja */}
        <img
          src={siteConfig.images.about}
          alt=""
          className="w-full h-full object-cover object-[62%_center] sm:object-[68%_center] lg:object-right"
        />

        {/* Degradê escuro no Desktop: transição gradual e contínua cobrindo o texto à esquerda */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070A10] from-25% via-[#070A10]/90 via-48% to-transparent to-75% pointer-events-none" />

        {/* Degradê escuro no Mobile e Tablet: sólido atrás do texto à esquerda e transparente à direita */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-[#070A10] from-30% via-[#070A10]/80 via-65% to-transparent to-90% pointer-events-none" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070A10]/60 via-transparent to-[#070A10]/70 pointer-events-none" />

        {/* Degradês suaves de topo e base para transição perfeita com o restante da página */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#070A10] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#070A10] to-transparent pointer-events-none" />

        {/* Iluminação ambiente azul e laranja sutil */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/15 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* CONTEÚDO INSTITUCIONAL (Diretamente sobre o fundo, sem caixas, molduras ou bordas) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl text-left">
          <ScrollReveal delay={0}>
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
              <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                SOBRE A W11 BRINDES
              </span>
              <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
            </div>

            {/* Título Principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
              Mais que brindes,{' '}
              <span className="text-[#FF6B00]">conexões reais.</span>
            </h2>

            {/* Texto Descritivo */}
            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                A W11 Brindes é especialista em brindes personalizados para empresas e eventos. Unimos criatividade e atendimento consultivo para ajudar sua marca a se destacar em todos os momentos.
              </p>
            </div>

            {/* Botão de Ação */}
            <div className="mt-6 sm:mt-8">
              <a
                href="#orcamento"
                className="group min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center sm:justify-start gap-2.5 border border-white/20 hover:border-[#FF6B00] bg-white/5 hover:bg-[#FF6B00]/10 text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm shadow-md"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6B00] transition-colors" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
