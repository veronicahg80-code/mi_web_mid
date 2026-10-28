import React from 'react';
import { BONUSES } from '../data/courseData';
import { Bot, Zap, CheckCircle2, Gift, Maximize2 } from 'lucide-react';

interface BonusesSectionProps {
  onOpenPosterModal: (imgSrc: string, title: string) => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenPosterModal }) => {
  return (
    <section id="bonos" className="py-20 md:py-28 bg-[#0A0A0D] border-t border-[#1E1D24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            <Gift className="w-4 h-4" />
            <span>Regalos de Acción Rápida</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
            Asegurando tu acceso hoy, te llevas estos 2 bonos exclusivos
          </h2>
          <p className="text-base sm:text-lg text-[#ABA69B]">
            Herramientas complementarias para acelerar tus resultados y ahorrarte horas de trabajo técnico.
          </p>

          <div>
            <button
              onClick={() => onOpenPosterModal('/assets/bonuses_poster.jpg', 'Infografía Oficial de los 2 Bonos')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF63] hover:text-[#E8CD91] px-3 py-1.5 rounded-lg bg-[#1B1914] border border-[#383327] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ver afiche original de bonos</span>
            </button>
          </div>
        </div>

        {/* 2 Big Bonus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BONUSES.map((bonus) => {
            const isBot = bonus.id === 1;
            return (
              <div 
                key={bonus.id}
                className="relative rounded-2xl bg-gradient-to-b from-[#18171C] to-[#111115] border border-[#383327] p-8 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Tag and Value Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold tracking-wider text-[#D4AF63] uppercase">
                      {bonus.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#8A867E] line-through tabular-nums">
                        Valor: {bonus.estimatedValue}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-[#D4AF63] text-[#14110B]">
                        {bonus.badge}
                      </span>
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#221F17] border border-[#443E30] text-[#D4AF63] flex items-center justify-center shrink-0">
                      {isBot ? <Bot className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#F7F4ED]">
                        {bonus.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#D4AF63]">
                        {bonus.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#ABA69B] leading-relaxed mb-6">
                    {bonus.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-3 pt-2 border-t border-[#23222B]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C5C2BB]">
                      Lo que incluye este bono:
                    </p>
                    {bonus.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#DDD9D0]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#23222B] flex items-center justify-between text-xs text-[#9E9B93]">
                  <span>Se desbloquea al instante tras tu compra</span>
                  <span className="font-bold text-[#D4AF63]">Sin costo adicional</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Value Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#161410] border border-[#3C3526] text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-[#D4AF63] font-medium">
            Valor total de los bonos por separado: <strong className="text-white">$164 USD</strong>.
            <br />
            <span className="text-[#C5C2BB] text-xs sm:text-sm">
              Hoy incluidos gratis dentro de la matrícula única de <strong>$27 USD</strong> del Método MID.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
