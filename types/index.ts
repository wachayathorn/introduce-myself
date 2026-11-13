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
  gpa: number;
  location: string;
  achievements: string[];
}

export interface Stack {
  title: string;
  icons: string[];
}
