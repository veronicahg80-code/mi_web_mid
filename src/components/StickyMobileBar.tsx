import React, { useEffect, useState } from 'react';
import { COURSE_CONFIG } from '../data/courseData';
import { ArrowRight } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('inicio');
      const offer = document.getElementById('oferta');

      if (!hero || !offer) return;

      const heroRect = hero.getBoundingClientRect();
      const offerRect = offer.getBoundingClientRect();

      // Show when passed hero, hide when offer is visible in viewport
      const passedHero = heroRect.bottom < 100;
      const reachedOffer = offerRect.top < window.innerHeight - 50;

      setVisible(passedHero && !reachedOffer);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed sm:hidden bottom-0 left-0 right-0 z-40 bg-[#0E0E12]/95 backdrop-blur-md border-t border-[#2A2822] p-2.5 px-4 shadow-2xl transition-transform duration-200">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-lg text-white tabular-nums">
              ${COURSE_CONFIG.price}
            </span>
            <span className="text-[10px] text-[#D4AF63] font-bold">USD</span>
          </div>
          <p className="text-[10px] text-[#8E8B83] leading-none">Pago único · 8 Módulos</p>
        </div>

        <a
          href={COURSE_CONFIG.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[200px] text-center py-2.5 px-3 rounded-lg text-xs font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] flex items-center justify-center gap-1.5 shadow-md"
        >
          <span>Acceder Ahora</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
