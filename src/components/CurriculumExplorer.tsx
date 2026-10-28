import React, { useState } from 'react';
import { MODULES } from '../data/courseData';
import { 
  Compass, 
  Brain, 
  Target, 
  PackageCheck, 
  Flame, 
  Sparkles, 
  Film, 
  BadgeDollarSign,
  ChevronDown,
  Clock,
  CheckCircle2,
  Maximize2,
  Wrench
} from 'lucide-react';

interface CurriculumExplorerProps {
  onOpenPosterModal: (imgSrc: string, title: string) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ onOpenPosterModal }) => {
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [expandedAll, setExpandedAll] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'BadgeDollarSign': return <BadgeDollarSign className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const activeModule = MODULES.find(m => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="modulos" className="py-20 md:py-28 bg-[#0D0D11] border-t border-[#201F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            Plan de Estudios Oficial
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
            Esto es todo lo que vas a dominar en los 8 módulos
          </h2>
          <p className="text-base sm:text-lg text-[#ABA69B]">
            Una formación estructurada y secuencial diseñada para llevarte desde la mentalidad inicial hasta tus primeras ventas escalables.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              onClick={() => onOpenPosterModal('/assets/modules_poster.jpg', 'Infografía Oficial de los 8 Módulos')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF63] hover:text-[#E8CD91] px-3 py-1.5 rounded-lg bg-[#1D1B16] border border-[#3A3529] transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ver afiche infográfico original</span>
            </button>
          </div>
        </div>

        {/* Desktop & Tablet: Interactive 2-Column Split Navigator */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 8 Modules Selector List (5 cols) */}
          <div className="col-span-5 space-y-2.5">
            {MODULES.map((mod) => {
              const isActive = activeModuleId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                    isActive 
                      ? 'bg-[#1C1A16] border-[#D4AF63] text-white shadow-md' 
                      : 'bg-[#131317] border-[#222127] text-[#B5B1A7] hover:bg-[#18181D] hover:border-[#33313B]'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#D4AF63] text-[#14110B]' : 'bg-[#1F1E24] text-[#D4AF63]'
                    }`}>
                      {getIcon(mod.iconName)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF63]">
                        Módulo {mod.id}
                      </p>
                      <h4 className="text-sm font-semibold truncate text-[#F7F4ED]">
                        {mod.title}
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs text-[#8A867E] tabular-nums shrink-0">
                    {mod.duration}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Module Deep-Dive Card (7 cols) */}
          <div className="col-span-7 bg-[#15151A] border border-[#2D2B24] rounded-2xl p-8 relative shadow-xl">
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#24232B]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#D4AF63]/20 text-[#D4AF63] border border-[#D4AF63]/30">
                  MÓDULO 0{activeModule.id}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#A8A49B]">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF63]" />
                  <span className="tabular-nums">{activeModule.duration} de lecciones</span>
                </span>
              </div>

              <span className="text-xs font-semibold text-[#8A867E]">
                {activeModule.lessons.length} Lecciones Clave
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#F7F4ED]">
                  {activeModule.title}
                </h3>
                <p className="text-sm font-medium text-[#D4AF63] mt-1">
                  {activeModule.subtitle}
                </p>
                <p className="text-sm text-[#ABA69B] mt-2 leading-relaxed">
                  {activeModule.description}
                </p>
              </div>

              {/* Lessons List */}
              <div className="pt-4 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C5C2BB]">
                  Contenido del Módulo:
                </p>
                <div className="space-y-2.5">
                  {activeModule.lessons.map((lesson, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-lg bg-[#1A1A20] border border-[#272630] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#E2DFD8]">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Outcome */}
              <div className="mt-6 p-4 rounded-xl bg-[#1D1B15] border border-[#3C3527] space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E8CD91]">
                  Resultado Práctico al Finalizar:
                </p>
                <p className="text-sm text-[#F7F4ED]">
                  {activeModule.practicalOutcome}
                </p>
              </div>

              {/* Tools Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#8A867E] flex items-center gap-1 mr-1">
                  <Wrench className="w-3 h-3 text-[#D4AF63]" /> Herramientas:
                </span>
                {activeModule.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="text-xs text-[#C5C2BB] bg-[#1F1E25] px-2.5 py-1 rounded-md border border-[#2B2A34]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#24232B] flex items-center justify-between">
              <span className="text-xs text-[#8A867E]">
                Incluido dentro de tu inscripción única de $27 USD
              </span>
              <a
                href="#oferta"
                className="text-xs font-bold text-[#14110B] bg-[#D4AF63] hover:bg-[#E8CD91] px-4 py-2 rounded-lg transition-colors"
              >
                Inscribirme Ahora
              </a>
            </div>
          </div>

        </div>

        {/* Mobile View: Accordion style for effortless reading on small screens */}
        <div className="lg:hidden space-y-3">
          {MODULES.map((mod) => {
            const isOpen = activeModuleId === mod.id;
            return (
              <div 
                key={mod.id}
                className="rounded-xl bg-[#141418] border border-[#232228] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveModuleId(isOpen ? 0 : mod.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1F1D17] text-[#D4AF63] flex items-center justify-center shrink-0">
                      {getIcon(mod.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-[#D4AF63]">
                        Módulo {mod.id}
                      </span>
                      <h4 className="text-sm font-bold text-[#F7F4ED]">
                        {mod.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronDown className={`w-5 h-5 text-[#8A867E] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 border-t border-[#201F26] space-y-4">
                    <p className="text-xs text-[#B5B1A7] mt-3">
                      {mod.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF63]">
                        Lecciones:
                      </p>
                      {mod.lessons.map((l, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#DDD9D0]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF63] shrink-0 mt-0.5" />
                          <span>{l}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#1E1B15] border border-[#3C3527]">
                      <p className="text-[11px] font-bold uppercase text-[#E8CD91]">Entregable:</p>
                      <p className="text-xs text-[#F7F4ED] mt-0.5">{mod.practicalOutcome}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Curriculum */}
        <div className="mt-16 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-all shadow-lg shadow-[#D4AF63]/15"
          >
            <span>Quiero acceso inmediato a los 8 módulos</span>
          </a>
        </div>

      </div>
    </section>
  );
};
