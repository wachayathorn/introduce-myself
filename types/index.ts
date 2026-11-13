export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  team?: string;
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  startDate: string;
  endDate: string;
  gpa: number;
  location: string;
  achievements: string[];
  highlights: string[];
}

export interface Stack {
  title: string;
  icons: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  period?: string;
  link?: string;
  github?: string;
}
