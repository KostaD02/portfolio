import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {

  constructor(private translate: TranslateService) {
    this.init();
  }

  private init() {
    this.changeLanguage(localStorage.getItem('language') || this.translate.getBrowserLang() || 'en');
  }

  public changeLanguage(language: string = 'en') {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
