export interface OtherProjectsInformationInterface {
  name: string;
  tags: string[];
  externalLinks: {
    external: string;
    github?: string;
    swagger?: string;
    npm?: string;
  };
}
