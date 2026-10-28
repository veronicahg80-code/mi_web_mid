import { ModuleItem, BonusItem, FaqItem } from '../types';

export const COURSE_CONFIG = {
  name: "Método MID",
  brandSubtitle: "Máquina de Imprimir Dinero",
  tagline: "El sistema paso a paso para crear, promocionar y vender productos digitales sin experiencia técnica.",
  checkoutUrl: "https://go.hotmart.com/N107644814E?ap=3433",
  price: "27",
  currency: "USD",
  originalPrice: "197",
  paymentType: "Pago único sin mensualidades",
  accessType: "Acceso inmediato e ilimitado",
  guaranteeDays: 7,
  platform: "Hotmart",
  supportEmail: "soporte@metodomid.com",
};

export const MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "Empieza Aquí",
    subtitle: "Ruta de Aprendizaje y Fundamentos",
    description: "Configuración inicial, mapa estratégico del modelo de negocio digital y la estructura exacta para completar el curso sin abrumarte.",
    lessons: [
      "Bienvenida y cómo navegar el campus virtual de Hotmart",
      "El mapa mental del negocio digital de 0 a 100",
      "Definición de objetivos realistas y cronograma de trabajo",
      "Descarga de plantillas, recursos y checklists de inicio"
    ],
    duration: "45 mins",
    practicalOutcome: "Tendrás tu plan de acción trazado y una hoja de ruta clara de cada paso a seguir.",
    tools: ["Hotmart Club", "Plantilla de Plan de Acción", "Checklist"],
    iconName: "Compass"
  },
  {
    id: 2,
    title: "Mentalidad Imparable",
    subtitle: "Foco, Disciplina y Eliminación de Bloqueos",
    description: "Trabajo psicológico para vencer el síndrome del impostor, el miedo a vender y el hábito de abandonar a mitad de camino.",
    lessons: [
      "Cómo romper el miedo al qué dirán y a mostrarte en redes",
      "La mentalidad del infoproductor y comercializador exitoso",
      "Gestión del tiempo si trabajas o estudias",
      "Cómo mantener la constancia cuando las primeras ventas tardan días"
    ],
    duration: "50 mins",
    practicalOutcome: "Blindaje mental contra la frustración y una rutina diaria de ejecución de 1 a 2 horas.",
    tools: ["Framework de Productividad", "Guía de Enfoque"],
    iconName: "Brain"
  },
  {
    id: 3,
    title: "Elige tu Arma Ganadora",
    subtitle: "Selección de Nicho y Modelo de Negocio",
    description: "Aprende a identificar qué nichos tienen compradores hambrientos con tarjeta en mano y qué modelo digital se adapta mejor a tu perfil.",
    lessons: [
      "Los 3 macro-nichos con mayor rentabilidad (Salud/Dinero/Relaciones)",
      "Análisis de demanda y validación de problemas urgentes",
      "Diferencias entre crear producto propio vs. afiliación / licencias",
      "Elección final de tu primer producto con bajo nivel de competencia"
    ],
    duration: "1h 15m",
    practicalOutcome: "Tu nicho y producto seleccionado y validado con demanda real confirmada.",
    tools: ["Google Trends", "Biblioteca de Anuncios", "Matriz de Nichos"],
    iconName: "Target"
  },
  {
    id: 4,
    title: "Productos Digitales",
    subtitle: "Creación y Estructura de Oferta Irresistible",
    description: "Cómo estructurar un producto digital que resuelva un problema puntual, o acceder a productos con derechos listos para comercializar.",
    lessons: [
      "Anatomía de una oferta que se vende sola (Stack de valor)",
      "Creación de eBooks, mini-cursos o guías prácticas en tiempo récord",
      "Estrategia de pricing: por qué los tickets de $15 a $47 convierten masivo",
      "Cómo armar la página de producto y checkout seguro en Hotmart"
    ],
    duration: "1h 30m",
    practicalOutcome: "Tu producto digital montado en Hotmart con checkout activo listo para cobrar.",
    tools: ["Canva", "Hotmart Checkout", "Notion"],
    iconName: "PackageCheck"
  },
  {
    id: 5,
    title: "Ads Turbo: Campañas en 24h",
    subtitle: "Publicidad Pagada en Meta (Facebook & Instagram)",
    description: "La guía sin tecnicismos para encender anuncios con $1 a $3 dólares al día que lleven personas interesadas a tu embudo.",
    lessons: [
      "Configuración paso a paso del Administrador de Anuncios",
      "Estructura de campaña CBO/ABO para presupuestos pequeños",
      "Creativos publicitarios que detienen el scroll (imágenes y videos)",
      "Métricas clave: cómo saber cuándo pausar o escalar un anuncio"
    ],
    duration: "1h 45m",
    practicalOutcome: "Tu primera campaña de publicidad rodando de forma segura sin quemar dinero.",
    tools: ["Meta Business Suite", "Ads Manager", "Pixel de Seguimiento"],
    iconName: "Flame"
  },
  {
    id: 6,
    title: "Atracción Orgánica 24/7",
    subtitle: "Tráfico Gratuito con TikTok, Reels y Shorts",
    description: "Domina los formatos de video corto para atraer cientos de clientes potenciales todos los días sin pagar un centavo en publicidad.",
    lessons: [
      "Estructura ganadora de un video viral (Hook + Retención + CTA)",
      "Cómo publicar sin necesidad de mostrar tu rostro si te da vergüenza",
      "Estrategia de palabras clave y SEO para TikTok e Instagram",
      "El embudo de tráfico: cómo llevar visitas del video al link de compra"
    ],
    duration: "1h 20m",
    practicalOutcome: "Un calendario de 30 ideas de contenido orgánico y tu embudo de biografía configurado.",
    tools: ["TikTok", "Instagram Reels", "YouTube Shorts"],
    iconName: "Sparkles"
  },
  {
    id: 7,
    title: "Edición que Vende",
    subtitle: "Montaje Rápido con CapCut y Retención Visual",
    description: "Técnicas sencillas de edición que aumentan el tiempo de visualización de tus videos y multiplican el interés por tu oferta.",
    lessons: [
      "Edición fluida desde el celular o computadora con CapCut",
      "Subtítulos automáticos dinámicos que enganchan la vista",
      "Efectos de sonido (B-Roll, zooms, transiciones limpias)",
      "Plantillas prediseñadas para editar un video en menos de 15 minutos"
    ],
    duration: "1h 10m",
    practicalOutcome: "Habilidad para producir videos comerciales de aspecto profesional en minutos.",
    tools: ["CapCut", "Librería de Sonidos", "Plantillas"],
    iconName: "Film"
  },
  {
    id: 8,
    title: "Ventas sin Filtro",
    subtitle: "Cierre por WhatsApp, DMs y Manejo de Objeciones",
    description: "El guión exacto de conversación para responder dudas de interesados y guiarlos con naturalidad a completar el pago.",
    lessons: [
      "Configuración de WhatsApp Business con respuestas rápidas",
      "Script de 4 fases para responder '¿Qué precio tiene?'",
      "Cómo rebatir las 5 objeciones clásicas ('no tengo dinero', 'lo pensaré')",
      "Técnicas de seguimiento ético para recuperar ventas abandonadas"
    ],
    duration: "1h 25m",
    practicalOutcome: "Scripts listos para copiar y pegar en WhatsApp que convierten conversaciones en dinero.",
    tools: ["WhatsApp Business", "Scripts de Venta", "Plantillas de Cierre"],
    iconName: "BadgeDollarSign"
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    tag: "BONO #1 DE REGALO",
    title: "IA - Tu Empleado 24h",
    subtitle: "Automatización con Inteligencia Artificial y ChatGPT",
    description: "Aprende a delegar el 80% del trabajo pesado a la IA: creación de guiones de video, textos persuasivos para tus anuncios, respuestas a objeciones y análisis de mercado en segundos.",
    highlights: [
      "Prompts maestros listos para copiar y pegar en ChatGPT o Claude",
      "Generación de 50 ideas de contenido y guiones completos en 5 minutos",
      "Redacción de copies de ventas para anuncios de alta conversión",
      "Simulador de respuestas para clientes difíciles en WhatsApp"
    ],
    estimatedValue: "$97 USD",
    badge: "100% Gratis hoy"
  },
  {
    id: 2,
    tag: "BONO #2 DE REGALO",
    title: "Desafío 200 en 7",
    subtitle: "Plan de Choque de 7 Días para tus Primeros $200 USD",
    description: "Un plan de acción diario ultra enfocado donde cada día tienes una única tarea clara. El objetivo: lograr tus primeras ventas de productos digitales antes de que termine tu primera semana.",
    highlights: [
      "Día 1 a 3: Configuración exprés y selección de oferta caliente",
      "Día 4 a 5: Activación de fuentes de tráfico orgánico y directo",
      "Día 6 a 7: Conversión acelerada y cierre de tus primeros $200 USD",
      "Checklist diario imprimible de ejecución rápida"
    ],
    estimatedValue: "$67 USD",
    badge: "100% Gratis hoy"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Qué es exactamente el Método MID?",
    answer: "Es un programa formativo 100% online en video que te enseña paso a paso a crear, promocionar y vender productos digitales por internet. Cubre desde la mentalidad y la elección de un producto rentable, hasta la publicidad en Meta Ads, la creación de videos con tráfico orgánico y el cierre de ventas por WhatsApp.",
    category: "general"
  },
  {
    question: "¿Necesito experiencia previa o conocimientos de computación?",
    answer: "No. El método está estructurado desde cero. Todo se explica con la pantalla compartida, paso a paso y con lenguaje directo. Solo necesitas un celular o una computadora con conexión a internet y ganas de aprender.",
    category: "general"
  },
  {
    question: "¿Cómo y cuándo recibo el acceso al curso?",
    answer: "El acceso es inmediato tras completar tu compra. La plataforma Hotmart procesa tu pedido y te envía automáticamente a tu correo electrónico los datos de acceso al área de miembros (Hotmart Club), donde podrás ver las clases y descargar los recursos cuando quieras.",
    category: "acceso"
  },
  {
    question: "¿Cuánto tiempo tendré acceso al material?",
    answer: "Tendrás acceso de por vida al contenido y a las futuras actualizaciones del programa. Podrás avanzar a tu propio ritmo, en el horario que prefieras, y repetir las lecciones cuantas veces lo necesites.",
    category: "acceso"
  },
  {
    question: "¿Cómo realizo el pago y qué métodos se aceptan?",
    answer: "El pago se realiza a través de Hotmart, la plataforma líder y más segura de educación digital en Iberoamérica. Dependiendo de tu país de residencia, puedes pagar con tarjeta de crédito, débito, PayPal o métodos de pago locales autorizados por Hotmart en tu moneda local.",
    category: "pago"
  },
  {
    question: "¿Por qué el precio es tan bajo ($27 USD)? ¿Hay mensualidades ocultas?",
    answer: "No hay ninguna mensualidad ni cobros sorpresa: es un pago único de $27 USD. El objetivo de este precio accesible es permitir que cualquier persona con ganas de emprender pueda formarse con estándares de calidad sin asumir un riesgo financiero alto.",
    category: "pago"
  },
  {
    question: "¿Qué garantía tengo si no es lo que esperaba?",
    answer: "Cuentas con una garantía incondicional de 7 días respaldada al 100% por Hotmart. Si entras al curso, ves las clases y sientes que no es para ti, puedes solicitar el reembolso total de tu dinero dentro de los primeros 7 días con un solo clic en la plataforma, sin preguntas ni trabas.",
    category: "garantia"
  },
  {
    question: "¿El curso promete resultados milagrosos o dinero fácil?",
    answer: "Absolutamente no. Método MID es un entrenamiento serio de negocios y marketing digital. Te da las herramientas, los métodos y la estructura probada, pero tus resultados dependerán de tu dedicación, constancia y aplicación práctica de lo aprendido.",
    category: "general"
  }
];

export const TRUST_POINTS = [
  {
    title: "Checkout 100% Seguro",
    desc: "Procesado por Hotmart con cifrado bancario SSL de 256 bits.",
    icon: "ShieldCheck"
  },
  {
    title: "Garantía de 7 Días",
    desc: "Devolución del 100% de tu dinero si el curso no supera tus expectativas.",
    icon: "RotateCcw"
  },
  {
    title: "Acceso Inmediato",
    desc: "Recibe tu usuario y contraseña en tu correo al instante.",
    icon: "Zap"
  },
  {
    title: "Soporte y Comunidad",
    desc: "Acompañamiento en la plataforma para resolver tus preguntas.",
    icon: "Headphones"
  }
];
