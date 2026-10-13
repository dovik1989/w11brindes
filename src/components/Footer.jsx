import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = siteConfig;

  // Verifica se há dados de contato preenchidos na configuração para exibir somente os reais
  const hasContactInfo = Boolean(contact.email || contact.phone || contact.whatsapp || contact.address);

  return (
    <footer className="bg-[#04060A] border-t border-white/10 text-slate-300 pt-12 sm:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Coluna 1: Logo Oficial e Apresentação */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a 
              href="#hero" 
              aria-label="W11 Brindes - Voltar ao início"
              className="inline-block group mb-3 sm:mb-4 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] rounded-lg"
            >
              <img
                src={siteConfig.images.logo}
                alt="W11 Brindes"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-400 mb-2 sm:mb-3">
              SEU PARCEIRO DE BRINDES PERSONALIZADOS
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Brindes personalizados com acabamento profissional para empresas, eventos e ações de marca.
            </p>
          </div>

          {/* Coluna 2: Navegação Interna */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#hero" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Início</a></li>
                <li><a href="#brindes" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Brindes</a></li>
                <li><a href="#portfolio" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Portfólio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
                Institucional
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#clientes" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Clientes</a></li>
                <li><a href="#sobre" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Sobre</a></li>
                <li><a href="#orcamento" className="hover:text-[#FF6B00] transition-colors py-1 inline-block">Orçamento</a></li>
              </ul>
            </div>
          </div>

          {/* Coluna 3: Contatos e Redes (Apenas quando dados forem fornecidos) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Atendimento
            </h4>

            {hasContactInfo ? (
              <ul className="space-y-2.5 text-xs sm:text-sm mb-5">
                {contact.phone && (
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{contact.phone}</span>
                  </li>
                )}
                {contact.whatsapp && (
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-[#FF6B00] font-bold">W</span>
                    <span>{contact.whatsapp}</span>
                  </li>
                )}
                {contact.email && (
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{contact.email}</span>
                  </li>
                )}
                {contact.address && (
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{contact.address}</span>
                  </li>
                )}
              </ul>
            ) : (
              /* Comentário e nota explicativa para preenchimento */
              <div className="text-[11px] sm:text-xs text-slate-400 mb-5 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <p>Dados de telefone, e-mail e endereço editáveis em <code className="text-slate-300">siteConfig.js</code> quando fornecidos.</p>
              </div>
            )}

            {/* Redes Sociais com Área de Toque Adequada (min 44x44px) */}
            <div>
              <span className="text-[11px] sm:text-xs text-slate-400 block mb-2 sm:mb-3">Redes Sociais:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={contact.socials.instagram}
                  aria-label="Instagram da W11 Brindes"
                  className="min-w-[44px] min-h-[44px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  aria-label="LinkedIn da W11 Brindes"
                  className="min-w-[44px] min-h-[44px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={contact.socials.youtube}
                  aria-label="YouTube da W11 Brindes"
                  className="min-w-[44px] min-h-[44px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Barra Inferior: Direitos autorais e links legais */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400">
          <p>© {currentYear} W11 Brindes. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors py-1">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-300 transition-colors py-1">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
