export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  CONTACT = 'contact',
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  submitting: boolean;
  success: boolean;
  error: string | null;
}