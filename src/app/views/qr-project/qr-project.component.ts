import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-project',
  templateUrl: './qr-project.component.html',
  styleUrls: ['./qr-project.component.scss']
})
export class QrProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl("/");
    }, 10000);
  }

}
