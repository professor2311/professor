export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ActiveTab = 'import' | 'preview' | 'interactive' | 'react-code';

export type BalanceNavTab = 'today' | 'activity' | 'screen-time' | 'goals' | 'insights';

export interface HabitItem {
  id: string;
  title: string;
  subtitle?: string;
  completed: boolean;
  time?: string;
  icon?: string;
}

export interface WorkoutEntry {
  id: string;
  type: string;
  durationMins: number;
  calories: number;
  time: string;
  notes?: string;
}

export interface StitchPrototype {
  id: string;
  name: string;
  category: string;
  description: string;
  htmlCode: string;
  accentColor: string;
  tags: string[];
}

export interface UserProjectState {
  projectId: string;
  customCode: string;
  appName: string;
  lastUpdated: string;
  activePrototypeId: string;
}

