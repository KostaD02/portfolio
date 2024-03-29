import { InformationInterface } from '../interfaces';

export const ProjectsInformation: InformationInterface[] = [
  {
    name: 'EverREST',
    details: 5,
    link: 'https://everrest.educata.dev/',
    backgroundImageURL: "url('../../assets/images/everrest.JPG')",
  },
  {
    name: 'iswavle',
    details: 7,
    link: 'https://iswavle.com',
    backgroundImageURL: "url('../../assets/images/iswavle.PNG')",
  },
  {
    name: 'qr_code',
    details: 5,
    link: '',
    backgroundImageURL: "url('../../assets/images/qr_code.PNG')",
    additional: {
      text: 'Read more',
      link: 'qr_project',
    },
  },
];
