import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, tap, takeUntil } from 'rxjs';
import { AcademyLinks } from 'src/app/consts';
import { LanguageEnum } from 'src/app/enums';
import { AppTranslateService } from 'src/app/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public link: string = "https://itstep.org/en";
  private readonly destroy$ = new Subject<void>;

  constructor(private appTranslateService: AppTranslateService) { }

  ngOnInit(): void {
    this.appTranslateService.languageObservable$.pipe(
      tap((lang: LanguageEnum) => {
        this.link = lang === LanguageEnum.EN ? AcademyLinks.english : AcademyLinks.georgian;
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
