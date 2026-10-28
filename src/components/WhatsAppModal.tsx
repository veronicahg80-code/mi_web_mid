import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COURSE_CONFIG } from '../data/courseData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('metodos-pago');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [sentMessage, setSentMessage] = useState(false);

  if (!isOpen) return null;

  const topics = [
    { id: 'metodos-pago', text: '¿Cómo pagar en mi moneda local?' },
    { id: 'acceso', text: '¿Cómo recibiré el acceso al curso?' },
    { id: 'principiantes', text: 'No tengo experiencia previa, ¿es para mí?' },
    { id: 'garantia', text: '¿Cómo funciona la garantía de 7 días?' }
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSentMessage(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-md w-full rounded-2xl bg-[#141418] border border-[#3A3528] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 px-6 border-b border-[#25242D] bg-[#18181D] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm text-[#F7F4ED]">
                Asistente de Consultas MID
              </h3>
              <p className="text-[11px] text-[#25D366]">En línea · Respuestas inmediatas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E9B93] hover:text-white hover:bg-[#25242D]"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {!sentMessage ? (
            <>
              <p className="text-xs text-[#ABA69B] leading-relaxed">
                ¿Tienes alguna inquietud antes de completar tu inscripción de $27 USD? Selecciona una duda frecuente o escribe tu consulta:
              </p>

              {/* Topics chips */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase text-[#D4AF63]">Consultas frecuentes:</p>
                <div className="grid grid-cols-1 gap-1.5">
                  {topics.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`text-left p-2.5 rounded-lg text-xs font-medium transition-colors border ${
                        selectedTopic === t.id
                          ? 'bg-[#1F1D17] border-[#D4AF63] text-[#F7F4ED]'
                          : 'bg-[#18181D] border-[#26252C] text-[#B8B4AA] hover:bg-[#1E1E24]'
                      }`}
                    >
                      {t.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instant Answer Preview */}
              <div className="p-3.5 rounded-xl bg-[#1A1A20] border border-[#272630] text-xs text-[#D5D2CA] space-y-1">
                <p className="font-semibold text-[#D4AF63]">Respuesta inmediata:</p>
                {selectedTopic === 'metodos-pago' && (
                  <p>Al pulsar el botón de compra, Hotmart detecta tu país y te muestra opciones en moneda local (efectivo, transferencias locales, tarjeta de débito/crédito y PayPal).</p>
                )}
                {selectedTopic === 'acceso' && (
                  <p>El sistema es 100% automático. Inmediatamente tras el pago, Hotmart te envía un correo con tus credenciales para ingresar al campus virtual.</p>
                )}
                {selectedTopic === 'principiantes' && (
                  <p>Sí, el Método MID está diseñado específicamente para personas desde cero. Cada clase muestra la pantalla paso a paso sin tecnicismos.</p>
                )}
                {selectedTopic === 'garantia' && (
                  <p>Tienes 7 días corridos. Si no estás satisfecho por cualquier motivo, solicitas el reembolso en Hotmart y te devuelven el 100% de inmediato.</p>
                )}
              </div>

              <form onSubmit={handleSend} className="space-y-3">
                <label className="block text-xs text-[#9E9B93]">
                  ¿Otra pregunta? Escribe aquí:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customQuestion}
                    onChange={(e) => setCustomQuestion(e.target.value)}
                    placeholder="Ej. ¿Aceptan tarjeta de débito en Colombia?"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#18181D] border border-[#2B2A34] text-xs text-white placeholder-[#706D67] focus:outline-none focus:border-[#D4AF63]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#D4AF63] text-[#14110B] rounded-lg text-xs font-bold hover:bg-[#E8CD91] flex items-center justify-center shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              <div className="pt-2 border-t border-[#23222B] flex items-center justify-between">
                <a
                  href={COURSE_CONFIG.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-lg text-xs font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91]"
                >
                  Continuar al checkout de Hotmart ($27 USD)
                </a>
              </div>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  ¡Mensaje registrado!
                </h4>
                <p className="text-xs text-[#ABA69B] mt-1">
                  Tu consulta ha sido enviada a soporte. Si deseas asegurar la tarifa promocional de $27 USD, puedes acceder con la garantía protegida de 7 días.
                </p>
              </div>
              <a
                href={COURSE_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2.5 px-6 rounded-lg text-xs font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91]"
              >
                Ir a Hotmart Checkout ($27 USD)
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 px-6 border-t border-[#25242D] bg-[#101014] flex items-center justify-center gap-2 text-[11px] text-[#8A867E]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF63]" />
          <span>Garantía de reembolso de 7 días respaldada por Hotmart</span>
        </div>
      </div>
    </div>
  );
};
