import React from 'react';
import { ArrowRight, Gift, Users, Box, ShoppingBag } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[700px] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-32 overflow-hidden bg-[#070A10]">
      
      {/* CAMADA VISUAL FULL-BLEED (Mobile e Desktop integrados, sem caixas nem molduras) */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      >
        {/* Foto dos brindes W11 cobrindo toda a área */}
        <img
          src={siteConfig.images.hero}
          alt=""
          className="w-full h-full object-cover object-[88%_15%] sm:object-[80%_center] lg:object-[78%_center]"
        />

        {/* Degradê escuro no Desktop (máscara de transição suave à esquerda) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070A10] from-28% via-[#070A10]/90 via-44% to-transparent to-72% pointer-events-none" />
        
        {/* Degradê escuro no Mobile (mais denso sobre o texto, produtos visíveis à direita/topo) */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-[#070A10] from-25% via-[#070A10]/85 via-55% to-transparent to-95% pointer-events-none" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#070A10]/50 via-transparent to-[#070A10] pointer-events-none" />

        {/* Degradês de topo e rodapé para transição suave com navbar e benefícios */}
        <div className="absolute inset-x-0 top-0 h-20 sm:h-32 bg-gradient-to-b from-[#070A10] via-[#070A10]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#070A10] via-[#070A10]/80 to-transparent pointer-events-none" />
        
        {/* Luzes de estúdio azul e laranja */}
        <div className="absolute top-1/4 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-orange-500/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-5 sm:left-1/4 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-blue-600/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      </div>

      {/* CONTEÚDO HERO (Texto, Apoio e Botão em destaque) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center py-5 sm:py-8 lg:py-12">
        <div className="max-w-sm sm:max-w-lg lg:max-w-2xl text-left">
          
          {/* Tag / Eyebrow */}
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
            <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
              BRINDES PERSONALIZADOS
            </span>
            <span className="w-8 sm:w-10 lg:w-12 h-[2px] bg-[#FF6B00] rounded-full" />
          </div>

          {/* Headline Principal Fiel ao Mockup Aprovado */}
          <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black text-white tracking-tight leading-[1.08] mb-2.5 sm:mb-4 lg:mb-6">
            Sua marca,<br />
            presente em<br />
            <span className="text-[#FF6B00] drop-shadow-[0_0_25px_rgba(255,107,0,0.4)]">
              todos os<br />
              momentos.
            </span>
          </h1>

          {/* Apoio */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-md">
            Brindes personalizados para empresas e eventos.
          </p>

          {/* CTAs: No mobile botão único em destaque na largura disponível; no desktop botões lado a lado */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-2 lg:mb-0">
            <a
              href={siteConfig.cta.primaryHref}
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#EA580C] text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-glow-orange hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              <span>{siteConfig.cta.primary}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={siteConfig.cta.secondaryHref}
              className="hidden sm:inline-flex min-h-[48px] items-center justify-center gap-2 border border-white/20 hover:border-white/40 bg-black/40 hover:bg-white/5 text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full backdrop-blur-sm transition-all duration-300 text-center"
            >
              <span>Conheça nossos brindes</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>

        </div>
      </div>

      {/* FAIXA CONTÍNUA DE BENEFÍCIOS (4 itens com divisores, exatamente como no Mockup Aprovado) */}
      <div className="w-full border-t border-b border-white/10 relative z-20 bg-[#070A10]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10 py-2.5 sm:py-3">
            
            {/* Benefício 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3 text-center sm:text-left min-w-0">
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-300 stroke-[1.5] shrink-0" />
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-slate-200 leading-tight">
                Brindes personalizados
              </span>
            </div>

            {/* Benefício 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3 text-center sm:text-left min-w-0">
              <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-300 stroke-[1.5] shrink-0" />
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-slate-200 leading-tight">
                Empresas e eventos
              </span>
            </div>

            {/* Benefício 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3 text-center sm:text-left min-w-0">
              <Box className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-300 stroke-[1.5] shrink-0" />
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-slate-200 leading-tight">
                Várias categorias de produtos
              </span>
            </div>

            {/* Benefício 4 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-1 sm:px-3 text-center sm:text-left min-w-0">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-300 stroke-[1.5] shrink-0" />
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-slate-200 leading-tight">
                Kits e presentes
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
