import React from 'react';
import { FileText, KeyRound, Rocket } from 'lucide-react';

export const ThreeSteps: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Inscríbete en Hotmart",
      desc: "Completa tu pago de $27 USD de forma 100% segura en la pasarela oficial de Hotmart con tarjeta, débito o tu moneda local.",
      icon: <FileText className="w-6 h-6 text-[#D4AF63]" />
    },
    {
      num: "02",
      title: "Recibe tu Acceso Inmediato",
      desc: "En segundos te llegará un correo con tus claves de usuario y el enlace directo para ingresar a la plataforma Hotmart Club.",
      icon: <KeyRound className="w-6 h-6 text-[#D4AF63]" />
    },
    {
      num: "03",
      title: "Avanza Módulo a Módulo",
      desc: "Comienza desde el Módulo 1, aplica cada lección y descarga tus plantillas y los 2 bonos de regalo incluidos.",
      icon: <Rocket className="w-6 h-6 text-[#D4AF63]" />
    }
  ];

  return (
    <section className="py-20 bg-[#0E0E12] border-t border-[#1F1E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            Proceso Simple
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F4ED]">
            Comienza tu formación en 3 sencillos pasos
          </h2>
          <p className="text-sm sm:text-base text-[#ABA69B]">
            Sin trámites complicados. En menos de 2 minutos ya estarás dentro de tu campus virtual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl bg-[#141418] border border-[#27262D] p-8 space-y-4 hover:border-[#3C3529] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#201D17] border border-[#3E382A] flex items-center justify-center">
                  {st.icon}
                </div>
                <span className="font-display font-extrabold text-3xl text-[#3A3832] tabular-nums">
                  {st.num}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#F7F4ED]">
                {st.title}
              </h3>

              <p className="text-sm text-[#A8A49A] leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
