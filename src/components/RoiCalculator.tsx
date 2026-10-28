import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [productPrice, setProductPrice] = useState<number>(27);
  const [salesPerWeek, setSalesPerWeek] = useState<number>(3);

  const weeklyRevenue = productPrice * salesPerWeek;
  const monthlyRevenue = weeklyRevenue * 4;
  const courseCost = 27;
  const salesToBreakEven = Math.ceil(courseCost / productPrice);

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-[#0D0D11] border-t border-[#201F26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            <Calculator className="w-4 h-4" />
            <span>Simulador Interactivo de Retorno</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
            Calcula la velocidad con la que recuperas tu inversión
          </h2>
          <p className="text-base sm:text-lg text-[#ABA69B]">
            A diferencia de un negocio tradicional con inventario físico o locales, en los productos digitales tu margen es casi del 100%. Mueve los controles para ver el impacto.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141418] border border-[#2D2A23] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Column (7 cols) */}
            <div className="md:col-span-7 space-y-8">
              
              {/* Slider 1: Product Price */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#DDD9D0]">
                    Precio de venta de tu producto digital:
                  </label>
                  <span className="font-display font-extrabold text-xl text-[#D4AF63] tabular-nums">
                    ${productPrice} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={productPrice}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#25242C] rounded-lg appearance-none cursor-pointer accent-[#D4AF63]"
                />
                <div className="flex justify-between text-[11px] text-[#7A7770]">
                  <span>$10 USD (mini-guía)</span>
                  <span>$50 USD (plantilla premium)</span>
                  <span>$100 USD (curso completo)</span>
                </div>
              </div>

              {/* Slider 2: Sales per week */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-[#DDD9D0]">
                    Ventas estimadas por semana:
                  </label>
                  <span className="font-display font-extrabold text-xl text-[#D4AF63] tabular-nums">
                    {salesPerWeek} {salesPerWeek === 1 ? 'venta' : 'ventas'} / sem
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={salesPerWeek}
                  onChange={(e) => setSalesPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-[#25242C] rounded-lg appearance-none cursor-pointer accent-[#D4AF63]"
                />
                <div className="flex justify-between text-[11px] text-[#7A7770]">
                  <span>1 venta/sem (ritmo tranquilo)</span>
                  <span>5 ventas/sem (embudo activo)</span>
                  <span>20 ventas/sem (campaña escalada)</span>
                </div>
              </div>

              {/* Break-even Insight */}
              <div className="p-4 rounded-xl bg-[#1B1914] border border-[#3A3326] flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#D4AF63] shrink-0" />
                <p className="text-xs sm:text-sm text-[#E2DFD7]">
                  Necesitas solo <strong className="text-[#D4AF63] font-bold">{salesToBreakEven} {salesToBreakEven === 1 ? 'sola venta' : 'ventas'}</strong> para recuperar el costo total del Método MID ($27 USD). El resto es ganancia pura.
                </p>
              </div>

            </div>

            {/* Results Column (5 cols) */}
            <div className="md:col-span-5 bg-gradient-to-b from-[#1C1A16] to-[#121215] border border-[#3C362A] rounded-2xl p-6 text-center space-y-6">
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9E9B93]">
                  Ingreso Mensual Estimado
                </p>
                <p className="font-display font-black text-4xl sm:text-5xl text-[#E8CD91] tabular-nums mt-1">
                  ${monthlyRevenue} <span className="text-sm font-sans font-normal text-[#C5C2BB]">USD/mes</span>
                </p>
                <p className="text-xs text-[#8A867E] mt-1 tabular-nums">
                  (~${weeklyRevenue} USD cada semana)
                </p>
              </div>

              <div className="pt-4 border-t border-[#2A2824] space-y-2 text-left text-xs text-[#B5B1A7]">
                <div className="flex justify-between">
                  <span>Inversión en Método MID:</span>
                  <span className="font-bold text-white tabular-nums">$27 USD</span>
                </div>
                <div className="flex justify-between">
                  <span>Cobro recurrente:</span>
                  <span className="font-bold text-[#D4AF63]">Ninguno ($0)</span>
                </div>
                <div className="flex justify-between">
                  <span>Margen producto digital:</span>
                  <span className="font-bold text-white">90% - 100%</span>
                </div>
              </div>

              <a
                href="#oferta"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-colors"
              >
                <span>Aprender el Método por $27 USD</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

          <p className="mt-8 text-center text-[11px] text-[#7A7770]">
            *Simulador con fines puramente ilustrativos. Los resultados reales dependerán de tu ejecución, producto, oferta y constancia.
          </p>
        </div>

      </div>
    </section>
  );
};
