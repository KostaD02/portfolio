import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
