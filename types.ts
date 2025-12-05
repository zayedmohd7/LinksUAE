export interface AppItem {
  name: string;
  url: string;
  desc: string;
  tags?: string[];
  location?: string;
  // Augmented properties
  categoryName?: string;
}

export interface Section {
  title: string;
  apps: AppItem[];
}

export interface SubTab {
  id: string;
  name: string;
  sections: Section[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  subTabs?: SubTab[];
  apps?: AppItem[];
}

export type Theme = 'midnight' | 'daylight' | 'sunset' | 'ocean';

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

export interface RecommendationResponse {
    answer: string;
    recommended_apps: string[];
}
