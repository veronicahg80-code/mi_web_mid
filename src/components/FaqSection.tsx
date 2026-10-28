import React, { useState } from 'react';
import { FAQS } from '../data/courseData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First FAQ open by default

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = activeTab === 'todos' || faq.category === activeTab;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0D0D11] border-t border-[#201F26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            <HelpCircle className="w-4 h-4" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F4ED]">
            Preguntas frecuentes sobre el Método MID
          </h2>
          <p className="text-sm sm:text-base text-[#ABA69B]">
            Resolvemos todas tus dudas antes de que tomes tu decisión.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-8">
          
          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8A867E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar una duda o palabra clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141418] border border-[#26252C] text-sm text-[#F7F4ED] placeholder-[#737069] focus:outline-none focus:border-[#D4AF63]"
            />
          </div>

          {/* Interactive filter tabs (Allowed as functional buttons per constitution) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {[
              { id: 'todos', label: 'Todas las preguntas' },
              { id: 'general', label: 'Sobre el curso' },
              { id: 'acceso', label: 'Acceso y campus' },
              { id: 'pago', label: 'Pagos y monedas' },
              { id: 'garantia', label: 'Garantía 7 días' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#D4AF63] text-[#14110B]'
                    : 'bg-[#16161B] text-[#B5B1A7] hover:bg-[#1E1D24] border border-[#25242D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#141418] border border-[#232228] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#F7F4ED]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#D4AF63] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-[#1F1E24] text-sm text-[#ABA69B] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-sm text-[#8A867E]">
              No encontramos preguntas que coincidan con tu búsqueda.
            </div>
          )}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#161410] border border-[#373123] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#F7F4ED]">¿Tienes alguna pregunta específica?</p>
            <p className="text-xs text-[#A8A49A]">Nuestro equipo de soporte te asiste con cualquier consulta antes de comprar.</p>
          </div>
          <a
            href="#oferta"
            className="text-xs font-bold text-[#14110B] bg-[#D4AF63] hover:bg-[#E8CD91] px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors"
          >
            Inscribirme por $27 USD
          </a>
        </div>

      </div>
    </section>
  );
};
