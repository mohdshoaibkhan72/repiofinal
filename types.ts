import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LoanStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface BenefitItem {
  text: string;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  WHATSAPP = 'whatsapp'
}
