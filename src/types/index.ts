export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
}

export interface Skill {
  id: number;
  title: string;
  icon: string;
  items: string[];
}

export interface Experience {
  id: number;
  company: string;
  duration: string;
  description: string;
}

export interface ContactInfo {
  id: number;
  type: 'email' | 'phone' | 'github' | 'linkedin' | 'location';
  label: string;
  value: string;
  icon: string;
  action?: () => void;
}