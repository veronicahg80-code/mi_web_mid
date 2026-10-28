import React from 'react';
import { COURSE_CONFIG } from '../data/courseData';
import { ShieldCheck, Play, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onWatchVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchVideo }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle ambient light gradient in the background (tasteful, not neon) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,99,0.08)_0%,transparent_70%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Decision Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Zero-Pill Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-[#C5C2BB]">
              <span className="text-[#D4AF63] font-semibold">Método MID</span>
              <span aria-hidden="true">·</span>
              <span>8 Módulos Paso a Paso</span>
              <span aria-hidden="true">·</span>
              <span>2 Bonos Incluidos</span>
              <span aria-hidden="true">·</span>
              <span>Acceso de Por Vida</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#F7F4ED] leading-[1.1]">
              Aprende a crear, promocionar y <span className="text-[#D4AF63] font-black">vender productos digitales</span> sin improvisar
            </h1>

            {/* Supporting Prose */}
            <p className="text-lg md:text-xl text-[#B8B4AA] leading-relaxed max-w-2xl">
              El sistema estructurado que conecta mentalidad, productos validados, publicidad en Meta Ads, atracción orgánica y técnicas de venta por WhatsApp en un solo método probado.
            </p>

            {/* Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#D4AF63]/15 text-center"
              >
                <span>Comenzar Ahora por $27 USD</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={onWatchVideo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-[#F5F3EF] bg-[#17171B] border border-[#2F2C26] hover:border-[#D4AF63]/50 hover:bg-[#1E1D22] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#D4AF63]/20 text-[#D4AF63] flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Ver video en 60 seg</span>
              </button>
            </div>

            {/* Adjacent Trust Proof Strip */}
            <div className="pt-4 border-t border-[#22201D] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#9E9B93]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF63]" />
                <span>Garantía de reembolso de 7 días Hotmart</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                <span>Pago único de $27 USD sin cobros recurrentes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                <span>Apto para principiantes sin experiencia técnica</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Focal Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative subtle frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-[#2E2A22] via-[#1A1916] to-[#121110] border border-[#3E3930] shadow-2xl">
                
                {/* Visual Asset with styled fallback */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141416]">
                  <img
                    src="/src/assets/images/course_device_mockup_1793201706411.jpg"
                    alt="Plataforma de formación online Método MID"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to local asset
                      e.currentTarget.src = "/assets/hero_laptop.jpg";
                    }}
                  />
                  
                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0D0D10]/85 backdrop-blur-md border border-[#2D2A24] rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#F7F4ED]">8 Módulos Interactivos + 2 Bonos</p>
                      <p className="text-[11px] text-[#A6A298]">Campus virtual activo las 24 horas</p>
                    </div>
                    <span className="font-display font-bold text-sm text-[#D4AF63] tabular-nums">
                      $27 USD
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick stats ribbon beneath the hero visual */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-[#141418] border border-[#222126]">
                  <p className="font-display font-bold text-lg text-[#F5F3EF] tabular-nums">100%</p>
                  <p className="text-[11px] text-[#9A968E]">Paso a paso</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#141418] border border-[#222126]">
                  <p className="font-display font-bold text-lg text-[#E8CD91] tabular-nums">7 Días</p>
                  <p className="text-[11px] text-[#9A968E]">Garantía total</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#141418] border border-[#222126]">
                  <p className="font-display font-bold text-lg text-[#F5F3EF] tabular-nums">Hotmart</p>
                  <p className="text-[11px] text-[#9A968E]">Líder certificado</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
