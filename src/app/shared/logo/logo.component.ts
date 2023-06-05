import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(private router: Router) {}

  scrollUp() {
    const baseUrl = this.router.url.split("#").shift();
    if (baseUrl !== "/") {
      this.router.navigateByUrl('/');
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
