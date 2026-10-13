import React from 'react';
import { MessageSquare, Gift, FileText, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: MessageSquare,
      title: "Conte sua ideia",
      description: "Envie suas necessidades, público-alvo, quantidade aproximada ou objetivo do seu evento corporativo."
    },
    {
      number: "2",
      icon: Gift,
      title: "Escolha os produtos",
      description: "Apresentamos as melhores opções de brindes e simulações com a aplicação personalizada da sua marca."
    },
    {
      number: "3",
      icon: FileText,
      title: "Receba uma proposta",
      description: "Receba uma proposta detalhada com valores e orientações de produção alinhadas ao seu cronograma."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#070A10] border-t border-white/5">
      {/* Luz ambiente */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Revelação Suave */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                  COMO FUNCIONA
                </span>
                <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Do seu briefing{' '}
                <span className="text-[#FF6B00]">ao brinde ideal.</span>
              </h2>
            </div>

            <div className="hidden lg:block lg:max-w-md">
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                Um processo simples e consultivo para transformar suas ideias em brindes personalizados de alta qualidade.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Grade de 3 Passos com Stagger Suave */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-4 lg:gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 100} className="h-full">
                <div
                  className="group relative h-full flex flex-col p-2.5 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-[#0D1322] border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 shadow-lg shadow-black/40 hover:-translate-y-1 justify-between"
                >
                  {/* Linha superior: Número em destaque e Ícone */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4 lg:mb-6">
                    <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3">
                      <div className="flex flex-col items-center">
                        <span className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-[#FF6B00] text-white font-extrabold text-[11px] sm:text-xs lg:text-sm flex items-center justify-center shadow-glow-orange shrink-0">
                          {step.number}
                        </span>
                        <span className="w-4 sm:w-6 h-0.5 bg-[#FF6B00] mt-1 rounded-full" />
                      </div>
                      
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#FF6B00] transition-colors shrink-0">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#FF6B00]" />
                      </div>
                    </div>

                    {/* Seta indicativa para o próximo passo */}
                    {index < steps.length - 1 && (
                      <div className="text-slate-500 group-hover:text-[#FF6B00] transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </div>
                    )}
                  </div>

                  {/* Título do Passo */}
                  <h3 className="text-[11px] sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {step.title}
                  </h3>

                  {/* Descrição visível em tablets e desktop */}
                  <p className="hidden md:block text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6 flex-1">
                    {step.description}
                  </p>

                  {/* Linha indicadora inferior */}
                  <div className="hidden sm:block h-0.5 w-8 sm:w-12 bg-white/10 group-hover:w-full group-hover:bg-[#FF6B00] transition-all duration-500 rounded-full" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
