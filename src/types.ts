export interface ModuleItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  lessons: string[];
  duration: string;
  practicalOutcome: string;
  tools: string[];
  iconName: string;
}

export interface BonusItem {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  estimatedValue: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'pago' | 'acceso' | 'garantia';
}

export interface TrustSignal {
  title: string;
  desc: string;
  icon: string;
}
