export interface ArchivedProjectsInterface {
  year: number;
  title: string;
  made_at?: string;
  built_with: string[];
  link?: {
    external?: string;
    github?: string;
    swagger?: string;
    article?: string;
  }
}