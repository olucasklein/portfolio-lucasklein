'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      
      if (shouldShow && !shouldRender) {
        // Primeiro renderiza, depois faz aparecer (para a animação funcionar)
        setShouldRender(true);
        // Pequeno delay para o DOM renderizar antes de animar
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
        });
      } else if (!shouldShow && shouldRender) {
        // Primeiro esconde (anima), depois remove do DOM
        setIsVisible(false);
        // Limpa timeout anterior se existir
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // Remove do DOM após a animação
        timeoutRef.current = setTimeout(() => {
          setShouldRender(false);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shouldRender]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!shouldRender) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 bottom-6 z-40 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-95 group transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <svg
        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
