import { Component } from '@angular/core';
import { ArchivedProjectsInformation } from 'src/app/consts';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  public readonly archivedProjectsInformation = ArchivedProjectsInformation;

  constructor() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
