import React, { useEffect, useRef, useState } from 'react';

/**
 * Componente ScrollReveal
 * 
 * Revelação gradual, suave e elegante inspirada na referência SaleshookAI:
 * - Começa com opacidade 0 e deslocamento vertical de aproximadamente 28px
 * - Ao entrar na área visível, anima para opacidade 1 e deslocamento 0
 * - Duração entre 800 e 1000 ms (padrão 900 ms) e easing cubic-bezier(0.16, 1, 0.3, 1)
 * - Controlado por classes CSS (.scroll-reveal e .is-visible)
 * - Dispara logo quando o elemento começa a entrar na tela (rootMargin sutil e threshold 0.05)
 * - Disparado uma única vez (sem reset ao rolar para cima e para baixo)
 * - Suporte nativo a prefers-reduced-motion e resiliência caso JS falhe
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 900,
  yOffset = 28,
  threshold = 0.05
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Se o navegador não suportar IntersectionObserver ou o usuário preferir movimento reduzido, revela imediatamente
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Se o elemento já estiver visível dentro da janela inicial, ativa imediatamente
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 40 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Executa a animação apenas uma vez e desconecta o observador
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        // Dispara assim que a borda do elemento começa a cruzar a parte inferior da tela
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const inlineStyle = {};
  if (delay > 0) {
    inlineStyle.transitionDelay = `${delay}ms`;
  }
  if (duration !== 900) {
    inlineStyle.transitionDuration = `${duration}ms`;
  }
  if (yOffset !== 28 && !isVisible) {
    inlineStyle.transform = `translateY(${yOffset}px)`;
  }

  return (
    <div
      ref={elementRef}
      style={inlineStyle}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

