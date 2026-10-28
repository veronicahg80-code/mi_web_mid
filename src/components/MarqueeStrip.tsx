import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    "Crea productos digitales",
    "Mentalidad y disciplina",
    "Tráfico orgánico en TikTok & Reels",
    "Meta Ads con bajo presupuesto",
    "Edición dinámica en CapCut",
    "Cierre de ventas por WhatsApp",
    "Garantía incondicional de 7 días",
    "Acceso inmediato por Hotmart"
  ];

  return (
    <div className="w-full bg-[#181612] border-y border-[#343027] overflow-hidden py-3">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.concat(items).map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-[#D4AF63]">
            <span>{text}</span>
            <span className="text-[#8A7950]" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
