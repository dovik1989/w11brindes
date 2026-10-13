import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import ScrollReveal from './ScrollReveal';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    categoria: 'Canecas e copos',
    detalhes: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const categories = [
    "Canecas e copos",
    "Vestuário",
    "Papelaria",
    "Kits e eventos",
    "Múltiplas categorias / Outros"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Por favor, informe seu nome completo.';
    if (!formData.empresa.trim()) newErrors.empresa = 'Por favor, informe o nome da sua empresa.';
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Por favor, informe o WhatsApp para contato.';
    } else if (formData.whatsapp.trim().length < 9) {
      newErrors.whatsapp = 'Informe um número de WhatsApp válido com DDD.';
    }
    if (!formData.categoria) newErrors.categoria = 'Selecione uma categoria de brinde.';
    if (!formData.detalhes.trim()) newErrors.detalhes = 'Descreva resumidamente o que você precisa.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Como ainda não há backend/API de envio integrada, exibe confirmação explícita de demonstração
    // sem simular envio falso nem descartar dados silenciosamente.
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      nome: '',
      empresa: '',
      whatsapp: '',
      email: '',
      categoria: 'Canecas e copos',
      detalhes: ''
    });
  };

  return (
    <section id="orcamento" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#070A10] border-t border-white/5 scroll-mt-16">
      {/* Luz ambiente de fundo */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-0 sm:left-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-orange-500/10 blur-[130px] sm:blur-[150px] rounded-full pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-0 sm:right-10 w-72 sm:w-[400px] h-72 sm:h-[400px] bg-blue-600/10 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Lado Esquerdo: Chamada e Benefícios */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
                <span className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">
                  SOLICITE SEU ORÇAMENTO
                </span>
                <span className="w-8 sm:w-10 h-0.5 bg-[#FF6B00] rounded-full" />
              </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 sm:mb-6">
              Vamos criar algo{' '}
              <span className="text-[#FF6B00]">incrível</span> para a sua marca?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
              Preencha o formulário e nossa equipe retorna com uma proposta personalizada sob medida para a sua necessidade.
            </p>

            <div className="hidden lg:block p-4 sm:p-5 rounded-2xl bg-[#0D1322] border border-white/10 space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">Atendimento Consultivo</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Ajudamos a selecionar os melhores materiais e acabamentos para sua ação.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white">Simulação Visual</h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Apresentação da aplicação da sua logo nos brindes escolhidos.</p>
                </div>
              </div>
            </div>

            {/* Aviso sobre dados de contato */}
            <div className="hidden lg:flex mt-4 sm:mt-6 items-start gap-2 text-xs text-slate-400">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Seus dados serão utilizados exclusivamente para elaboração e envio da proposta comercial.
              </span>
            </div>
            </ScrollReveal>
          </div>

          {/* Lado Direito: Formulário Empilhado e Responsivo com Revelação Suave */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="p-3.5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0D1322] border border-white/10 shadow-2xl shadow-black/80">
              
              {submittedData ? (
                /* Mensagem Explícita de Demonstração (Sem descarte de dados nem simulação enganosa) */
                <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-orange-500/10 border border-[#FF6B00]/30 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">Formulário validado com sucesso!</h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        <strong>Modo de Demonstração:</strong> Os campos foram validados localmente. Como ainda não há um serviço de envio de e-mail/API configurado para o projeto, os dados capturados foram preservados abaixo para conferência.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#070A10] border border-white/10 space-y-2.5 text-sm">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FF6B00]">Dados preenchidos:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div><span className="text-slate-400">Nome:</span> <span className="text-white font-medium">{submittedData.nome}</span></div>
                      <div><span className="text-slate-400">Empresa:</span> <span className="text-white font-medium">{submittedData.empresa}</span></div>
                      <div><span className="text-slate-400">WhatsApp:</span> <span className="text-white font-medium">{submittedData.whatsapp}</span></div>
                      <div><span className="text-slate-400">E-mail:</span> <span className="text-white font-medium">{submittedData.email || 'Não informado'}</span></div>
                      <div className="sm:col-span-2"><span className="text-slate-400">Categoria:</span> <span className="text-white font-medium">{submittedData.categoria}</span></div>
                      <div className="sm:col-span-2"><span className="text-slate-400">Detalhes:</span> <p className="text-white font-medium mt-1 p-2 rounded bg-white/5">{submittedData.detalhes}</p></div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="min-h-[48px] w-full bg-[#FF6B00] hover:bg-[#EA580C] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center text-sm"
                    >
                      Preencher nova solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5" noValidate>
                  
                  {/* Nome e Empresa (lado a lado no mobile e desktop, fiel ao mockup) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    <div>
                      <label htmlFor="nome" className="sr-only sm:not-sr-only block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                        className={`w-full min-h-[44px] sm:min-h-[46px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#070A10] border ${
                          errors.nome ? 'border-red-500' : 'border-white/10 focus:border-[#FF6B00]'
                        } text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors`}
                      />
                      {errors.nome && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 shrink-0" />{errors.nome}</p>}
                    </div>

                    <div>
                      <label htmlFor="empresa" className="sr-only sm:not-sr-only block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Empresa"
                        className={`w-full min-h-[44px] sm:min-h-[46px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#070A10] border ${
                          errors.empresa ? 'border-red-500' : 'border-white/10 focus:border-[#FF6B00]'
                        } text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors`}
                      />
                      {errors.empresa && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 shrink-0" />{errors.empresa}</p>}
                    </div>
                  </div>

                  {/* E-mail e WhatsApp (lado a lado no mobile e desktop, fiel ao mockup) */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    <div>
                      <label htmlFor="email" className="sr-only sm:not-sr-only block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        className="w-full min-h-[44px] sm:min-h-[46px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#070A10] border border-white/10 focus:border-[#FF6B00] text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="sr-only sm:not-sr-only block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="WhatsApp"
                        className={`w-full min-h-[44px] sm:min-h-[46px] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#070A10] border ${
                          errors.whatsapp ? 'border-red-500' : 'border-white/10 focus:border-[#FF6B00]'
                        } text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors`}
                      />
                      {errors.whatsapp && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 shrink-0" />{errors.whatsapp}</p>}
                    </div>
                  </div>

                  {/* Categoria de Produto */}
                  <div>
                    <label htmlFor="categoria" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Categoria de Brinde *
                    </label>
                    <select
                      id="categoria"
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                      className="w-full min-h-[46px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#070A10] border border-white/10 focus:border-[#FF6B00] text-white text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#070A10] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Detalhes do Projeto */}
                  <div>
                    <label htmlFor="detalhes" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Detalhes do Projeto *
                    </label>
                    <textarea
                      id="detalhes"
                      name="detalhes"
                      rows={4}
                      value={formData.detalhes}
                      onChange={handleChange}
                      placeholder="Descreva quantidade estimada, evento, prazo ou ideia de personalização..."
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#070A10] border ${
                        errors.detalhes ? 'border-red-500' : 'border-white/10 focus:border-[#FF6B00]'
                      } text-white placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-colors resize-none`}
                    />
                    {errors.detalhes && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.detalhes}</p>}
                  </div>

                  {/* Botão de Envio com Altura de Toque Mínima de 48px */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[48px] group inline-flex items-center justify-center gap-2.5 bg-[#FF6B00] hover:bg-[#EA580C] text-white font-semibold text-base py-3.5 sm:py-4 px-6 rounded-xl shadow-glow-orange hover:shadow-orange-500/50 transition-all duration-300"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}

            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
