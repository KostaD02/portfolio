import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, tap, takeUntil } from 'rxjs';
import { AcademyLinks, JobsInformation } from 'src/app/consts';
import { LanguageEnum } from 'src/app/enums';
import { JobsInformationInterface } from 'src/app/interfaces';
import { AppTranslateService, HeaderService } from 'src/app/services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public link: string = "https://itstep.org/en";
  public lowerZIndex: boolean = false;
  private readonly destroy$ = new Subject<void>;
  public readonly jobsInformation: JobsInformationInterface[] = JobsInformation;
  public activeJobIndex: number = 0;

  constructor(private appTranslateService: AppTranslateService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.appTranslateService.languageObservable$.pipe(
      tap((lang: LanguageEnum) => {
        this.link = lang === LanguageEnum.EN ? AcademyLinks.english : AcademyLinks.georgian;
      }),
      takeUntil(this.destroy$)
    ).subscribe();

    this.headerService.isOpenObservable$.pipe(
      tap((isOpen: boolean) => {
        this.lowerZIndex = isOpen;
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public createTranslateKeyForJobs(job: JobsInformationInterface, value: string = "name", part: string = "experience") {
    return `${part}.${job['name']}.${value}`;
  }

  public jobDesription(value: string) {
    return `experience.${this.jobsInformation[this.activeJobIndex].name}.${value}`;
  }

  public getJobDetailsArray(index: number = 0) {
    return new Array(this.jobsInformation[index].details).fill(0) || [];
  }

}
