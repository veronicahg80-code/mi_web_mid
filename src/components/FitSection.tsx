import React from 'react';
import { CheckCircle2, XCircle, ShieldAlert } from 'lucide-react';

export const FitSection: React.FC = () => {
  const forYouPoints = [
    "Quieres una nueva fuente de ingresos vendiendo productos digitales con comisiones o creación propia.",
    "Estás harto de acumular tutoriales desordenados en YouTube y buscas una ruta paso a paso de principio a fin.",
    "Quieres dominar el tráfico en redes (TikTok, Reels y Meta Ads) sin gastar fortunas en agencias.",
    "No tienes equipo ni capital gigante: buscas un modelo que puedas operar solo con tu celular o laptop.",
    "Estás dispuesto a estudiar con disciplina, aplicar lo enseñado y construir un negocio digital sostenible."
  ];

  const notForYouPoints = [
    "Buscas fórmulas mágicas de 'hacerte millonario sin hacer nada en 48 horas'.",
    "No estás dispuesto a dedicar al menos 45 a 60 minutos al día a estudiar y practicar.",
    "Crees que con solo comprar el curso el dinero caerá del cielo sin implementar.",
    "Te rindes ante el primer obstáculo o buscas excusas en lugar de soluciones."
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0D] border-t border-[#1F1E25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            Filtro Ético de Admisión
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
            ¿Es este programa adecuado para tu situación?
          </h2>
          <p className="text-base sm:text-lg text-[#ABA69B]">
            Queremos personas comprometidas que aprovechen el contenido al 100%. Revisa con honestidad ambos lados antes de unirte.
          </p>
        </div>

        {/* 2-Column Split: Sí es para ti vs No es para ti */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: Sí es para ti */}
          <div className="rounded-2xl p-8 bg-[#141418] border border-[#3C3526] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#232018] text-[#D4AF63] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#F7F4ED]">
                    Este programa ES para ti si:
                  </h3>
                  <p className="text-xs text-[#A8A49A]">
                    Cumples con el perfil de estudiante ideal
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {forYouPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF63] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#DDD9D0] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#25242C] text-xs text-[#9E9B93]">
              Si te identificas con esto, el Método MID te ahorrará cientos de horas de prueba y error.
            </div>
          </div>

          {/* Card: No es para ti */}
          <div className="rounded-2xl p-8 bg-[#111115] border border-[#26242B] flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#201515] text-[#D95D39] flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#F7F4ED]">
                    Este programa NO es para ti si:
                  </h3>
                  <p className="text-xs text-[#A8A49A]">
                    Preferimos ahorrarte tu dinero si buscas esto
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {notForYouPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-[#D95D39] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#9E9B93] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#232128] text-xs text-[#8A867E]">
              Somos transparentes: la educación de calidad requiere tu compromiso y acción diaria.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
