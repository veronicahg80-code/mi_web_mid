import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const painPoints = [
    {
      problem: "Tutoriales sueltos e información contradictoria",
      description: "Miras decenas de videos en YouTube donde cada 'gurú' dice algo distinto y al final te quedas más confundido que al inicio."
    },
    {
      problem: "Parálisis por no saber qué producto vender",
      description: "Quieres empezar hoy pero no sabes qué nicho tiene demanda real ni cómo armar una oferta que alguien esté dispuesto a pagar."
    },
    {
      problem: "Miedo a perder dinero en publicidad pagada",
      description: "Escuchas hablar de Meta Ads pero temes apretar botones equivocados y quemar tu presupuesto sin conseguir ni un solo cliente."
    },
    {
      problem: "Crear contenido en redes que nadie ve",
      description: "Subes videos o publicaciones con horas de esfuerzo que solo reciben 3 likes y 0 mensajes de personas interesadas."
    },
    {
      problem: "No saber qué decir cuando alguien pregunta el precio",
      description: "Te escriben interesados por mensaje privado pero cuando dices el precio desaparecen y no sabes cómo cerrar la venta."
    },
    {
      problem: "La frustración de ver a otros vender mientras tú sigues estancado",
      description: "Pasa el tiempo y sientes que el negocio digital funciona para todo el mundo menos para ti."
    }
  ];

  const transformations = [
    {
      before: "Saltas de un video a otro sin saber qué funciona realmente",
      after: "Sigues una ruta secuencial comprobada, módulo por módulo, sabiendo qué hacer cada día",
      tag: "Módulos 1 & 2"
    },
    {
      before: "No sabes qué producto ofrecer ni cómo validarlo",
      after: "Eliges un nicho caliente y tienes productos digitales listos para comercializar en Hotmart",
      tag: "Módulos 3 & 4"
    },
    {
      before: "Temor a malgastar presupuesto en campañas publicitarias",
      after: "Configuras anuncios en Meta Ads con $1-$3 USD al día con segmentación clara y retorno",
      tag: "Módulo 5"
    },
    {
      before: "Publicas a ciegas sin conseguir visualizaciones ni prospectos",
      after: "Creas videos con ganchos psicológicos que atraen personas interesadas en piloto automático",
      tag: "Módulos 6 & 7"
    },
    {
      before: "Pierdes ventas por no saber rebatir objeciones en el chat",
      after: "Usas guiones probados de 4 pasos en WhatsApp que convierten dudas en compras completadas",
      tag: "Módulo 8"
    }
  ];

  return (
    <section id="solucion" className="py-20 md:py-28 bg-[#0B0B0E] border-t border-[#1F1E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
              Diagnóstico Real
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
              ¿Por qué la mayoría de personas que quieren vender por internet abandonan en las primeras semanas?
            </h2>
            <p className="text-lg text-[#ABA69B] leading-relaxed max-w-3xl">
              No es por falta de talento o ganas. Es porque reciben información fragmentada, sin un orden lógico. 
              Tener piezas sueltas de un rompecabezas sin ver la imagen completa genera frustración y desgaste.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl p-6 bg-[#141418] border border-[#27262E]">
              <p className="text-xs font-bold tracking-wider uppercase text-[#D4AF63] mb-2">
                El Secreto de la Consistencia
              </p>
              <p className="text-sm text-[#C8C5BD] leading-relaxed">
                Cuando cuentas con una <strong className="text-white">metodología paso a paso</strong>, 
                cada hora que inviertes construye un activo duradero en lugar de dar palos de ciego.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {painPoints.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl bg-[#121216] border border-[#232228] hover:border-[#383530] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#2A1D1A] text-[#E07A5F] flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F5F3EF]">
                  {item.problem}
                </h3>
                <p className="text-sm text-[#9E9B93] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Bridge: Before vs After with Método MID */}
        <div className="rounded-2xl bg-gradient-to-b from-[#18171B] to-[#121215] border border-[#2E2B25] p-6 sm:p-10 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
              El Cambio Radical
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F7F4ED]">
              Cómo transforma tu negocio el Método MID
            </h3>
            <p className="text-sm text-[#A8A49A]">
              Reemplaza la improvisación con un proceso mecánico donde cada etapa tiene una sola función clara.
            </p>
          </div>

          <div className="space-y-4">
            {transformations.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 sm:p-5 rounded-xl bg-[#141318] border border-[#25242C]"
              >
                {/* Before (Problem) */}
                <div className="md:col-span-5 text-sm text-[#938F88] line-through decoration-[#C9705A]/70">
                  {row.before}
                </div>

                {/* Arrow & Module Indicator */}
                <div className="md:col-span-2 flex items-center justify-start md:justify-center gap-2">
                  <ArrowRight className="w-4 h-4 text-[#D4AF63] shrink-0" />
                  <span className="text-xs font-semibold text-[#D4AF63] tracking-wide">
                    {row.tag}
                  </span>
                </div>

                {/* After (Solution) */}
                <div className="md:col-span-5 text-sm font-medium text-[#F7F4ED] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                  <span>{row.after}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#modulos"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF63] hover:text-[#E8CD91] transition-colors"
            >
              <span>Explorar el temario completo de los 8 módulos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
