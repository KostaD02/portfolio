import { Component, Input } from '@angular/core';
import { OtherProjectsInformationInterface } from 'src/app/interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: OtherProjectsInformationInterface = {
    name: "",
    tags: [],
    externalLinks: {
      external: "",
      github: ""
    }
  }

  getTranslation(part: string): string {
    return `other_projects.${this.project.name}.${part}`;
  }
}
