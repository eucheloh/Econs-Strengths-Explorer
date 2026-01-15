
export type ProfileType = 'A' | 'B' | 'C' | 'D';

export interface Option {
  id: ProfileType;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ProfileDefinition {
  id: ProfileType;
  title: string;
  emoji: string;
  strengths: string[];
  description: string;
  iconClass: string;
  color: string;
}
