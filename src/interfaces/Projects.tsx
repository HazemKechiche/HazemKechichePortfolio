export interface Project {
  title: string;
  category: string;
  period: string;
  company?: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  // --- Nouveaux Champs Premium ---
  videoDemo?: string; // URL vers un .mp4
  gallery?: string[]; // Tableau d'URLs d'images
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  challenges?: string;
}