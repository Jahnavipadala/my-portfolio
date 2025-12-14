export interface Project {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  businessProblem: string[];
  businessObjective: string[];
  constraints: string[];
  projectArchitecture: {
    description: string;
    diagramUrl?: string;
  };
  methodology: string[];
  keyLearnings: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  visualizations: string[];
  dashboardUrl?: string;
  coverImage?: string;
}

export interface Skill {
  category: string;
  items: string[];
  icon?: string;
  description?: string;
}