import React from 'react';
import { COURSE_CONFIG, MODULES, BONUSES } from '../data/courseData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  RotateCcw, 
  Sparkles,
  Zap,
  Globe2,
  Clock
} from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-20 md:py-32 bg-[#0A0A0D] border-t border-[#24221D] relative">
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 top-1/4 h-96 bg-[radial-gradient(ellipse_at_center,rgba(212,175,99,0.06)_0%,transparent_70%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            Inscripción Promocional Limitada
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F4ED]">
            Accede hoy al Método MID con el 86% de descuento
          </h2>
          <p className="text-base sm:text-lg text-[#ABA69B]">
            Todo el ecosistema completo: 8 módulos formativos, 2 bonos de aceleración y soporte en plataforma por un único pago.
          </p>
        </div>

        {/* Master Offer Card (Split 2 cols) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#18171C] via-[#141418] to-[#101014] border border-[#3E382A] shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Everything Included Checklist (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-8">
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF63] mb-1">
                  Resumen del Paquete
                </p>
                <h3 className="font-display text-2xl font-bold text-[#F7F4ED]">
                  Lo que recibes al inscribirte:
                </h3>
              </div>

              {/* 8 Modules list */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#A8A49A]">
                  Programa Principal (8 Módulos):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {MODULES.map((m) => (
                    <div key={m.id} className="flex items-start gap-2.5 text-xs text-[#DDD9D0]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                      <span>M0{m.id}: {m.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 Bonuses */}
              <div className="pt-4 border-t border-[#23222B] space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF63]">
                  2 Bonos Especiales de Regalo:
                </p>
                <div className="space-y-2">
                  {BONUSES.map((b) => (
                    <div key={b.id} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F7F4ED]">
                      <Sparkles className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                      <div>
                        <strong>{b.title}:</strong> <span className="text-[#A8A49A]">{b.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perks */}
              <div className="pt-4 border-t border-[#23222B] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C5C2BB]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                  <span>Acceso de por vida a las clases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                  <span>Actualizaciones futuras sin costo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                  <span>Descargables, guiones y plantillas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF63]" />
                  <span>Área de miembros en Hotmart Club</span>
                </div>
              </div>

            </div>

            {/* Right Column: Checkout Call-to-Action & Price (5 cols) */}
            <div className="lg:col-span-5 bg-[#171612] border-t lg:border-t-0 lg:border-l border-[#332E24] p-8 sm:p-10 flex flex-col justify-between space-y-8">
              
              <div className="space-y-4">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-[#D4AF63]/15 text-[#D4AF63] border border-[#D4AF63]/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Oferta por tiempo limitado</span>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#8A867E] line-through tabular-nums">
                      Antes ${COURSE_CONFIG.originalPrice} USD
                    </span>
                    <span className="text-xs font-bold text-[#E8CD91] uppercase">
                      Ahorras $170 USD
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-black text-5xl sm:text-6xl text-[#F7F4ED] tabular-nums">
                      ${COURSE_CONFIG.price}
                    </span>
                    <span className="text-lg font-bold text-[#D4AF63]">
                      {COURSE_CONFIG.currency}
                    </span>
                  </div>
                  <p className="text-xs text-[#A8A49A] mt-1">
                    {COURSE_CONFIG.paymentType}
                  </p>
                </div>

                {/* Primary CTA Button to Hotmart */}
                <div className="pt-2">
                  <a
                    href={COURSE_CONFIG.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#D4AF63]/20 text-center"
                  >
                    <span>¡Sí, quiero acceder ahora!</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <p className="text-center text-[11px] text-[#8A867E] mt-2 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#D4AF63]" />
                    <span>Pago encriptado con certificación SSL de 256 bits</span>
                  </p>
                </div>

              </div>

              {/* Official 7-Day Guarantee Seal */}
              <div className="pt-6 border-t border-[#2F2B22] flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#221F17] border border-[#443D2D] text-[#D4AF63] flex items-center justify-center shrink-0">
                  <RotateCcw className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F7F4ED]">
                    Garantía Incondicional de 7 Días
                  </h4>
                  <p className="text-xs text-[#A8A49A] leading-relaxed mt-0.5">
                    Entra al curso, pruébalo y si no es lo que esperabas solicita tu reembolso del 100% en Hotmart sin preguntas.
                  </p>
                </div>
              </div>

              {/* Local currency note */}
              <div className="p-3 rounded-lg bg-[#141310] border border-[#2B271F] flex items-center gap-2 text-[11px] text-[#A6A298]">
                <Globe2 className="w-4 h-4 text-[#D4AF63] shrink-0" />
                <span>Hotmart convierte automáticamente a la moneda local de tu país al pagar.</span>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Trust Security Badges Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-[#141418] border border-[#23222A] text-center space-y-1">
            <Lock className="w-5 h-5 text-[#D4AF63] mx-auto mb-1" />
            <p className="text-xs font-bold text-[#F5F3EF]">Compra Segura</p>
            <p className="text-[11px] text-[#8A867E]">Plataforma oficial Hotmart</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141418] border border-[#23222A] text-center space-y-1">
            <ShieldCheck className="w-5 h-5 text-[#D4AF63] mx-auto mb-1" />
            <p className="text-xs font-bold text-[#F5F3EF]">Privacidad Total</p>
            <p className="text-[11px] text-[#8A867E]">Tus datos nunca se comparten</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141418] border border-[#23222A] text-center space-y-1">
            <Zap className="w-5 h-5 text-[#D4AF63] mx-auto mb-1" />
            <p className="text-xs font-bold text-[#F5F3EF]">Acceso Inmediato</p>
            <p className="text-[11px] text-[#8A867E]">Envío al instante por correo</p>
          </div>

          <div className="p-4 rounded-xl bg-[#141418] border border-[#23222A] text-center space-y-1">
            <RotateCcw className="w-5 h-5 text-[#D4AF63] mx-auto mb-1" />
            <p className="text-xs font-bold text-[#F5F3EF]">7 Días de Garantía</p>
            <p className="text-[11px] text-[#8A867E]">100% de devolución garantizada</p>
          </div>
        </div>

      </div>
    </section>
  );
};
