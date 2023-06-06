import { InformationInterface } from '../interfaces';

export const ProjectsInformation: InformationInterface[] = [
  {
    name: "iswavle",
    details: 7,
    link: "https://iswavle.com",
    backgroundImageURL: "url('../../assets/images/iswavle.PNG')",
  },
  {
    name: "registry_imdo",
    details: 5,
    link: "https://registryimdo.org",
    backgroundImageURL: "url('../../assets/images/registry_imdo.PNG')",
  },
  {
    name: "qr_code",
    details: 5,
    link: "",
    backgroundImageURL: "url('../../assets/images/qr_code.PNG')",
    additional: {
      text: "Read more",
      link: "qr_project"
    }
  }
];