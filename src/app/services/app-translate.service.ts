import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LanguageEnum } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {

  private readonly language$ = new BehaviorSubject<LanguageEnum>(LanguageEnum.EN);
  public readonly languageObservable$ = this.language$.asObservable();

  get language() {
    return this.language$.value;
  }

  set language(lang: LanguageEnum) {
    this.language$.next(lang);
  }

  constructor(private translate: TranslateService) {
    this.init();
  }

  private init() {
    this.changeLanguage(localStorage.getItem('language') as LanguageEnum || this.translate.getBrowserLang() as LanguageEnum || LanguageEnum.EN);
  }

  public changeLanguage(language: LanguageEnum) {
    if (language as string !== 'en' || language as string !== 'ka') {
      language = LanguageEnum.EN;
    }
    this.translate.use(language);
    localStorage.setItem('language', language);
    this.language = language;
  }
}
