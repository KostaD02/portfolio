export interface InformationInterface {
  name: string;
  details: number;
  link?: string;
  backgroundImageURL?: string;
  additional?: {
    text: string;
    link: string;
  }
}