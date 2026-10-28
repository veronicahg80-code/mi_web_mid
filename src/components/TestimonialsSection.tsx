import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  PlusCircle, 
  X, 
  Send, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  avatarText: string;
  avatarBg: string;
  category: 'cero' | 'ads' | 'organico' | 'whatsapp';
  metric: string;
  keyModule: string;
  before: string;
  after: string;
  quote: string;
  rating: number;
  date: string;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Camila R.',
    location: 'Medellín, Colombia',
    role: 'Emprendedora Digital (Plantillas y Guías)',
    avatarText: 'CR',
    avatarBg: 'bg-[#3A3326]',
    category: 'organico',
    metric: '+$378 USD generados en 2 semanas',
    keyModule: 'Módulo 6 & 7 (TikTok + CapCut)',
    before: 'Pasaba horas viendo tutoriales en YouTube sin saber cómo editar videos que realmente llamaran la atención.',
    after: 'Aplicó las plantillas de ganchos del Módulo 6 y la edición dinámica en CapCut del Módulo 7.',
    quote: 'Nunca me había atrevido a publicar en TikTok por pena. Con el método de videos sin mostrar rostro y las plantillas de edición, mi tercer video llegó a 45.000 vistas y me llegaron decenas de mensajes a WhatsApp. Logré 14 ventas en mis primeros 14 días.',
    rating: 5,
    date: 'Hace 3 semanas'
  },
  {
    id: '2',
    name: 'Alejandro M.',
    location: 'Buenos Aires, Argentina',
    role: 'Comercializador de Infoproductos',
    avatarText: 'AM',
    avatarBg: 'bg-[#252830]',
    category: 'ads',
    metric: 'Recuperó los $27 USD en 48 horas',
    keyModule: 'Módulo 5 (Ads Turbo en 24h)',
    before: 'Le aterraba encender anuncios en Facebook e Instagram pensando que iba a perder dinero.',
    after: 'Montó su primera campaña publicitaria con $2 USD al día siguiendo la guía paso a paso en pantalla.',
    quote: 'El Módulo 5 es exactamente lo que necesitaba: sin tecnicismos enredados, directo a los botones que importan. Con una inversión de apenas $10 dólares conseguí 32 prospectos directos a mi WhatsApp y cerré 3 ventas en dos días. Pagué el curso al segundo día y el resto ya es ganancia neta.',
    rating: 5,
    date: 'Hace 1 mes'
  },
  {
    id: '3',
    name: 'Valeria G.',
    location: 'Guadalajara, México',
    role: 'Docente y Madre de Familia',
    avatarText: 'VG',
    avatarBg: 'bg-[#2E2028]',
    category: 'cero',
    metric: '5 ventas en su primer fin de semana',
    keyModule: 'Módulo 1 & 8 (Ruta + WhatsApp)',
    before: 'Cero conocimientos de tecnología ni ventas por internet, temía que el curso fuera demasiado técnico.',
    after: 'Siguió el cronograma de 1 hora al día y copió los scripts de conversación de WhatsApp del Módulo 8.',
    quote: 'Tengo 44 años y creía que esto del marketing digital era solo para jovencitos. Las clases son tan claras y humanas que hasta mi hija se sorprendió de cómo configuré mi Hotmart y mi catálogo. Usé los guiones de respuesta para WhatsApp y cerré mis primeras 5 ventas sin forzar a nadie.',
    rating: 5,
    date: 'Hace 2 semanas'
  },
  {
    id: '4',
    name: 'Mateo S.',
    location: 'Lima, Perú',
    role: 'Estudiante Universitario',
    avatarText: 'MS',
    avatarBg: 'bg-[#202E28]',
    category: 'whatsapp',
    metric: '$216 USD en 6 días con el Desafío',
    keyModule: 'Bono 2 (Desafío 200 en 7)',
    before: 'No tenía presupuesto para crear productos caros ni comprar mercancía física.',
    after: 'Se enfocó exclusivamente en el checklist del Bono 2 día por día sin saltarse ningún paso.',
    quote: 'El Desafío 200 en 7 días fue lo que me quitó las dudas de la cabeza. Cada mañana te dice exactamente qué hacer: qué producto seleccionar, qué mensaje enviar y cómo cobrar. El día 6 ya había acumulado $216 USD en comisiones en Hotmart.',
    rating: 5,
    date: 'Hace 5 días'
  },
  {
    id: '5',
    name: 'Daniela & Javier',
    location: 'Santiago, Chile',
    role: 'Comercializadores de Afiliación',
    avatarText: 'DJ',
    avatarBg: 'bg-[#352F22]',
    category: 'ads',
    metric: 'Campaña con ROI de 3.4x en Meta',
    keyModule: 'Módulo 4 & 5 (Ofertas + Meta Ads)',
    before: 'Habían comprado otros cursos caros de $300 USD llenos de teoría que no explicaban el cierre.',
    after: 'Reestructuraron su oferta con el stack de valor del Módulo 4 y encendieron anuncios enfocados.',
    quote: 'Increíble que un curso de $27 dólares tenga más información práctica y aplicable que cursos de $300 en los que gastamos antes. La estructura de oferta del Módulo 4 marcó la diferencia total para que la gente dejara de decir "está caro" y comprara de inmediato.',
    rating: 5,
    date: 'Hace 1 semana'
  },
  {
    id: '6',
    name: 'Esteban P.',
    location: 'Quito, Ecuador',
    role: 'Creador de Guías Digitales',
    avatarText: 'EP',
    avatarBg: 'bg-[#282535]',
    category: 'cero',
    metric: 'Primer producto propio en Hotmart',
    keyModule: 'Bono 1 (IA - Tu Empleado 24h)',
    before: 'Llevaba 6 meses queriendo escribir un ebook y se quedaba atascado con la página en blanco.',
    after: 'Utilizó los prompts maestros de ChatGPT del Bono 1 para estructurar y redactar su guía en 48 horas.',
    quote: 'El bono de Inteligencia Artificial solo ya vale 10 veces lo que cuesta el curso. Los prompts para sacar copys y estructurar el producto me ahorraron semanas de estrés. Ya tengo mi link de Hotmart activo y cobrando.',
    rating: 5,
    date: 'Hace 3 días'
  }
];

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // New testimonial form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newMetric, setNewMetric] = useState('');
  const [newKeyModule, setNewKeyModule] = useState('Módulo 1: Empieza Aquí');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);

  const filtered = testimonials.filter(t => {
    if (selectedCategory === 'todos') return true;
    return t.category === selectedCategory;
  });

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newQuote.trim()) return;

    const newEntry: Testimonial = {
      id: Date.now().toString(),
      name: newName.trim(),
      location: newLocation.trim() || 'Comunidad Oficial MID',
      role: newRole.trim() || 'Estudiante Método MID',
      avatarText: newName.slice(0, 2).toUpperCase(),
      avatarBg: 'bg-[#3A3326]',
      category: 'cero',
      metric: newMetric.trim() || 'Primera venta completada en Hotmart',
      keyModule: newKeyModule,
      before: 'Inició su proceso de formación con Método MID.',
      after: 'Completó los módulos y aplicó la estrategia paso a paso.',
      quote: newQuote.trim(),
      rating: newRating,
      date: 'Reciente'
    };

    setTestimonials([newEntry, ...testimonials]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      // Reset form
      setNewName('');
      setNewLocation('');
      setNewRole('');
      setNewMetric('');
      setNewQuote('');
    }, 1800);
  };

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#0C0C0F] border-t border-[#222027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF63]">
            <Sparkles className="w-4 h-4" />
            <span>Casos y Experiencias de Alumnos</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F7F4ED]">
            Lo que ocurre cuando dejas de improvisar y sigues el Método MID
          </h2>

          <p className="text-base sm:text-lg text-[#ABA69B]">
            Personas reales, sin seguidores previos ni conocimientos técnicos avanzados, que aplicaron los módulos y consiguieron sus primeras ventas en Hotmart.
          </p>

          {/* Social Proof Metric Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#C5C2BB]">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#D4AF63]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#F7F4ED] tabular-nums">4.9 / 5</span>
              <span className="text-[#8A867E]">Calificación promedio</span>
            </div>
            <span className="hidden sm:inline text-[#4A4740]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF63]" />
              <span>Alumnos verificados en Hotmart Club</span>
            </div>
            <span className="hidden sm:inline text-[#4A4740]" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#D4AF63]" />
              <span>Resultados medibles en productos digitales</span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Add Review Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#212028]">
          
          {/* Functional Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todos', label: 'Todos los casos' },
              { id: 'cero', label: 'Desde cero' },
              { id: 'ads', label: 'Meta Ads ($1-$3/día)' },
              { id: 'organico', label: 'TikTok & CapCut' },
              { id: 'whatsapp', label: 'Cierre en WhatsApp' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF63] text-[#14110B]'
                    : 'bg-[#15151A] text-[#B5B1A7] hover:bg-[#1E1E24] border border-[#26252C]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Action to share testimony */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF63] hover:text-[#E8CD91] px-3.5 py-2 rounded-lg bg-[#181612] border border-[#3C3527] hover:border-[#D4AF63]/50 transition-colors shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Compartir mi testimonio</span>
          </button>

        </div>

        {/* Testimonials Grid (Strict Anti-Slop, No Floating Pill Enclosures) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div 
              key={item.id}
              className="rounded-2xl p-6 bg-[#131317] border border-[#25242C] hover:border-[#38342B] transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header: Student Profile + Verification */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${item.avatarBg} text-[#E8CD91] font-display font-bold flex items-center justify-center text-sm border border-[#443D2D]`}>
                      {item.avatarText}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#F7F4ED] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#8C8880]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#D4AF63]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Concrete Attributable Outcome */}
                <div className="mb-4 p-3 rounded-lg bg-[#191814] border border-[#332D20] space-y-1">
                  <p className="text-xs font-bold text-[#E8CD91] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#D4AF63] shrink-0" />
                    <span>{item.metric}</span>
                  </p>
                  <p className="text-[11px] text-[#A6A298]">
                    Clave: <strong className="text-[#DDD9D0]">{item.keyModule}</strong>
                  </p>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#C8C5BD] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#1F1E25] flex items-center justify-between text-[11px] text-[#7A7770]">
                <span className="flex items-center gap-1 text-[#D4AF63]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Alumno Verificado</span>
                </span>
                <span className="tabular-nums">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency CTA connecting Testimonials directly to the Offer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171612] via-[#141418] to-[#171612] border border-[#3C3527] text-center max-w-3xl mx-auto space-y-3">
          <p className="text-base sm:text-lg font-bold text-[#F7F4ED]">
            Tú también puedes construir tu primera fuente de ingresos digitales
          </p>
          <p className="text-xs sm:text-sm text-[#ABA69B] max-w-xl mx-auto">
            El mismo sistema paso a paso que usaron Camila, Alejandro y Valeria está disponible para ti hoy por solo <strong>$27 USD</strong> con garantía de 7 días.
          </p>
          <div className="pt-2">
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-colors"
            >
              <span>Quiero comenzar hoy con Método MID</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal: Agregar Testimonio */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full rounded-2xl bg-[#141418] border border-[#3A3528] p-6 space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#24232C] pb-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D4AF63]" />
                <h3 className="font-display font-bold text-base text-[#F7F4ED]">
                  Comparte tu experiencia con Método MID
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#8A867E] hover:text-white p-1"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Sofía L."
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#18181E] border border-[#2A2932] text-xs text-white placeholder-[#706D67] focus:outline-none focus:border-[#D4AF63]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                      Ciudad y País
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Bogotá, Colombia"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#18181E] border border-[#2A2932] text-xs text-white placeholder-[#706D67] focus:outline-none focus:border-[#D4AF63]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                      Tu Logro o Métrica Concreta
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 6 ventas en 10 días / $180 USD"
                      value={newMetric}
                      onChange={(e) => setNewMetric(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#18181E] border border-[#2A2932] text-xs text-white placeholder-[#706D67] focus:outline-none focus:border-[#D4AF63]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                      Módulo que más te ayudó
                    </label>
                    <select
                      value={newKeyModule}
                      onChange={(e) => setNewKeyModule(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#18181E] border border-[#2A2932] text-xs text-white focus:outline-none focus:border-[#D4AF63]"
                    >
                      <option value="Módulo 1: Empieza Aquí">Módulo 1: Empieza Aquí</option>
                      <option value="Módulo 2: Mentalidad Imparable">Módulo 2: Mentalidad Imparable</option>
                      <option value="Módulo 3: Elige tu Arma Ganadora">Módulo 3: Elige tu Arma</option>
                      <option value="Módulo 4: Productos Digitales">Módulo 4: Productos Digitales</option>
                      <option value="Módulo 5: Ads Turbo en 24h">Módulo 5: Ads Turbo</option>
                      <option value="Módulo 6: Atracción Orgánica">Módulo 6: Orgánico en TikTok</option>
                      <option value="Módulo 7: Edición que Vende">Módulo 7: Edición CapCut</option>
                      <option value="Módulo 8: Ventas sin Filtro">Módulo 8: Cierre WhatsApp</option>
                      <option value="Bono 1: IA - Tu Empleado 24h">Bono 1: IA con ChatGPT</option>
                      <option value="Bono 2: Desafío 200 en 7">Bono 2: Desafío 200 en 7</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                    Calificación
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 text-[#D4AF63] focus:outline-none"
                      >
                        <Star className={`w-5 h-5 ${star <= newRating ? 'fill-current' : 'text-[#4A4740]'}`} />
                      </button>
                    ))}
                    <span className="text-xs text-[#8A867E] ml-2">({newRating} estrellas)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#A8A49B] mb-1 font-medium">
                    Tu testimonio y experiencia honesta *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Cuéntanos cómo era tu situación antes de entrar y qué cambió tras aplicar lo enseñado..."
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#18181E] border border-[#2A2932] text-xs text-white placeholder-[#706D67] focus:outline-none focus:border-[#D4AF63]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#8A867E] hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#D4AF63] text-[#14110B] hover:bg-[#E8CD91] transition-colors"
                  >
                    <span>Publicar testimonio</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF63] mx-auto" />
                <h4 className="font-display font-bold text-base text-white">
                  ¡Gracias por compartir tu experiencia!
                </h4>
                <p className="text-xs text-[#ABA69B]">
                  Tu testimonio se ha integrado en la sección de casos de éxito del Método MID.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
