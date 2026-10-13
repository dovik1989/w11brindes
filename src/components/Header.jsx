import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A10]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-2.5 sm:py-3'
          : 'bg-[#070A10]/80 backdrop-blur-sm border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo W11 Direto no fundo escuro (sem o bloco branco, igual à IMAGEM 2) */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              aria-label="W11 Brindes - Ir para o início"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#FF6B00] rounded-lg transition-transform duration-300 hover:opacity-90"
            >
              <img
                src={siteConfig.images.logo}
                alt="W11 Brindes"
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navegação Centralizada no Desktop */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2 flex-1" aria-label="Navegação principal">
            {siteConfig.navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  index === 0
                    ? 'text-[#38BDF8] hover:text-[#38BDF8]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {index === 0 && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#FF6B00] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Destacado à Direita no Desktop */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href={siteConfig.cta.primaryHref}
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#EA580C] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-glow-orange hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{siteConfig.cta.primary}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FF6B00]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Dropdown com Área de Toque Confortável */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu móvel"
          className="md:hidden bg-[#070A10]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3.5 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={siteConfig.cta.primaryHref}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] flex items-center justify-center gap-2 w-full bg-[#FF6B00] hover:bg-[#EA580C] text-white font-semibold px-5 py-3 rounded-xl shadow-glow-orange transition-all"
              >
                <span>{siteConfig.cta.primary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
