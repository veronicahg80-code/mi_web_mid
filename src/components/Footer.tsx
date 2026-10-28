import React, { useState } from 'react';
import { COURSE_CONFIG } from '../data/courseData';
import { ShieldCheck, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'terminos' | 'privacidad' | 'reembolso' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1C1B20] text-[#8C8880] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1A191E]">
          
          <div className="space-y-1">
            <span className="font-display font-extrabold text-base tracking-tight text-[#F7F4ED]">
              Método <span className="text-[#D4AF63]">MID</span>
            </span>
            <p className="text-[11px] text-[#7A766F]">
              Máquina de Imprimir Dinero · Formación en Creación y Venta de Productos Digitales
            </p>
          </div>

          {/* Legal Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-[#A8A49A]">
            <button 
              onClick={() => setActiveLegalModal('reembolso')}
              className="hover:text-[#E8CD91] transition-colors"
            >
              Política de Reembolso (7 Días)
            </button>
            <button 
              onClick={() => setActiveLegalModal('terminos')}
              className="hover:text-[#E8CD91] transition-colors"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => setActiveLegalModal('privacidad')}
              className="hover:text-[#E8CD91] transition-colors"
            >
              Política de Privacidad
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 ml-auto md:ml-0"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Detailed Mandatory Disclaimers */}
        <div className="space-y-4 max-w-4xl text-[11px] text-[#7A766F] leading-relaxed">
          <p>
            <strong>Aviso de Responsabilidad y Transparencia:</strong> Este sitio web y el curso «Método MID» ofrecen formación educativa y recursos prácticos orientados al emprendimiento digital. No prometemos ni garantizamos resultados financieros inmediatos ni ingresos pasivos sin trabajo. Los resultados de cada estudiante dependen de su dedicación personal, experiencia previa, tiempo dedicado al estudio y condiciones de mercado.
          </p>
          <p>
            <strong>Aviso sobre la Plataforma Hotmart:</strong> Hotmart es la plataforma tecnológica que procesa los pagos y hospeda el campus virtual. Hotmart no certifica el contenido ni garantiza los resultados derivados de su aplicación. La adquisición de este producto se rige por las políticas y términos de compra de Hotmart.
          </p>
          <p>
            <strong>Garantía Oficial:</strong> Tienes 7 días corridos a partir del momento de tu compra para evaluar la formación. Si consideras que no cumple con tus expectativas, puedes solicitar el reintegro total del 100% de tu dinero directamente desde la plataforma Hotmart sin complicaciones.
          </p>
        </div>

        {/* Bottom Copyright & Contact */}
        <div className="pt-6 border-t border-[#18171C] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#696660]">
          <p>
            © {new Date().getFullYear()} Método MID. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF63]" />
              <span>Checkout Oficial Hotmart</span>
            </span>
          </div>
        </div>

      </div>

      {/* Legal Simple Modal */}
      {activeLegalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveLegalModal(null)}
        >
          <div 
            className="relative max-w-xl w-full rounded-2xl bg-[#141418] border border-[#3A3528] p-6 space-y-4 text-xs text-[#C5C2BB] leading-relaxed shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#25242D] pb-3">
              <h3 className="font-display font-bold text-sm text-[#F7F4ED]">
                {activeLegalModal === 'reembolso' && 'Garantía y Política de Reembolso de 7 Días'}
                {activeLegalModal === 'terminos' && 'Términos y Condiciones del Servicio'}
                {activeLegalModal === 'privacidad' && 'Política de Privacidad y Tratamiento de Datos'}
              </h3>
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="text-[#8A867E] hover:text-white font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-2">
              {activeLegalModal === 'reembolso' && (
                <>
                  <p>
                    Respaldamos el Método MID con una <strong>Garantía Incondicional de Satisfacción de 7 días</strong>.
                  </p>
                  <p>
                    Desde el momento en que realizas tu pago a través de Hotmart, tienes un plazo de 7 días naturales para acceder al campus virtual, ver las lecciones de los 8 módulos, descargar el material y revisar los 2 bonos.
                  </p>
                  <p>
                    Si por cualquier razón sientes que este curso no es para ti, puedes solicitar el reembolso completo sin dar explicaciones accediendo a la página oficial de reembolso de Hotmart (reembolso.hotmart.com) con tu número de transacción.
                  </p>
                </>
              )}

              {activeLegalModal === 'terminos' && (
                <>
                  <p>
                    Al adquirir el curso Método MID obtienes una licencia personal, no transferible e ilimitada para visualizar el contenido digital para tu propio uso.
                  </p>
                  <p>
                    Queda expresamente prohibida la reproducción, reventa no autorizada o distribución masiva del material audiovisual sin el consentimiento previo por escrito del productor.
                  </p>
                  <p>
                    La plataforma educativa está disponible 24/7 sujeta a la disponibilidad técnica de Hotmart Club.
                  </p>
                </>
              )}

              {activeLegalModal === 'privacidad' && (
                <>
                  <p>
                    Tu privacidad es fundamental. Este sitio web no recopila números de tarjetas ni contraseñas bancarias; toda transacción es procesada directamente bajo el protocolo seguro SSL de 256 bits de Hotmart.
                  </p>
                  <p>
                    Tu correo electrónico será utilizado exclusivamente por Hotmart para enviarte las instrucciones de acceso y notificaciones relacionadas con las actualizaciones del curso.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-[#25242D] text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#D4AF63] text-[#14110B] rounded-lg text-xs font-bold hover:bg-[#E8CD91]"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
