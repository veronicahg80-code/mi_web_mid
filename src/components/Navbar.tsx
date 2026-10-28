import React, { useState } from 'react';
import { COURSE_CONFIG } from '../data/courseData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#24221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark / Logo */}
          <a 
            href="#inicio" 
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF63]"
            aria-label="Método MID - Inicio"
          >
            <img 
              src="/assets/logo_mid.png" 
              alt="Método MID" 
              className="h-9 w-auto object-contain"
              onError={(e) => {
                // Graceful fallback if image is missing
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="font-display font-extrabold text-xl tracking-tight text-[#F5F3EF]">
              Método <span className="text-[#D4AF63]">MID</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#B8B4AA]">
            <a href="#presentacion" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              El Sistema
            </a>
            <a href="#solucion" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Por Qué Funciona
            </a>
            <a href="#modulos" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Temario (8 Módulos)
            </a>
            <a href="#bonos" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Bonos
            </a>
            <a href="#calculadora" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Simulador ROI
            </a>
            <a href="#testimonios" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Testimonios
            </a>
            <a href="#faq" className="whitespace-nowrap hover:text-[#E8CD91] transition-colors py-1">
              Preguntas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsult}
              className="text-xs font-semibold text-[#B8B4AA] hover:text-[#F5F3EF] transition-colors px-3 py-2"
            >
              ¿Tienes dudas?
            </button>
            <a
              href={COURSE_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm whitespace-nowrap"
            >
              <span>Acceder por $27 USD</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COURSE_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-md text-xs font-bold bg-[#D4AF63] text-[#14110B]"
            >
              $27 USD
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#B8B4AA] hover:text-white focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#24221E] bg-[#0E0E12] px-4 pt-3 pb-6 space-y-2">
          <a
            href="#presentacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            El Sistema
          </a>
          <a
            href="#solucion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Por Qué Funciona
          </a>
          <a
            href="#modulos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Temario (8 Módulos)
          </a>
          <a
            href="#bonos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Bonos de Regalo
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Simulador de Ganancias
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Casos y Testimonios
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-[#C7C3B9] hover:text-[#E8CD91] hover:bg-[#18181D]"
          >
            Preguntas Frecuentes
          </a>
          <div className="pt-3 border-t border-[#24221E] flex flex-col gap-2">
            <a
              href={COURSE_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-lg text-sm font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91]"
            >
              Comenzar Ahora ($27 USD)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsult();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-[#B8B4AA] hover:text-white"
            >
              ¿Dudas antes de comprar? Hablar por WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
