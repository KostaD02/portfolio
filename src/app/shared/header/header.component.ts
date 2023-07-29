import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap, takeUntil } from 'rxjs/operators';
import { LanguageEnum } from 'src/app/enums';
import { AppTranslateService, HeaderService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() hide: EventEmitter<boolean> = new EventEmitter();
  @Input() scrolled: EventEmitter<boolean> = new EventEmitter();

  public showHamburger$!: Observable<boolean>;
  public isListActive = false;
  public isMenuOpen = false;
  public hideHeader: boolean = false;
  public isScrolling: boolean = false;
  public link: string = "./resume.pdf";
  private destroy$ = new Subject<void>();

  constructor(private appTranslateService: AppTranslateService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.showHamburger$ = this.getWindowSize().pipe(
      map((size) => {
        const isTablet = size.width <= 768;
        if (!isTablet) {
          this.isMenuOpen = false;
          this.isListActive = false;
          this.headerService.isOpen = false;
          document.body.style.overflow = 'auto';
        }
        return size.width <= 768;
      }),
      takeUntil(this.destroy$)
    );
    this.appTranslateService.languageObservable$.pipe(
      tap(result => {
        this.link = result === LanguageEnum.KA ? './cv.pdf' : './resume.pdf';
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngAfterViewInit(): void {
    this.hide.subscribe(hide => {
      this.hideHeader = hide;
    });
    this.scrolled.subscribe(scrolled => {
      this.isScrolling = !scrolled;
    });
  }

  getWindowSize(): Observable<{ width: number; height: number }> {
    return new Observable((observer) => {
      const handler = () =>
        observer.next({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      handler();
      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    });
  }

  toggleMenu() {
    const list = document.querySelector('.list') as HTMLElement;
    if (list) {
      this.fadeOutList(list);
      document.body.style.overflow = 'auto';
      this.headerService.isOpen = false;
    } else {
      this.isMenuOpen = !this.isMenuOpen;
      this.isListActive = !this.isListActive;
      document.body.style.overflow = 'hidden';
      this.headerService.isOpen = true;
    }
  }

  backdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const list = document.querySelector('.list') as HTMLElement;
    if (target.className === 'content') {
      this.fadeOutList(list);
    }
  }

  fadeOutList(list: HTMLElement) {
    this.isListActive = false;
    if (list) {
      list.style.transform = 'translateX(100%)';
      const emptyNode = (document.querySelector('.empty') as HTMLElement);
      emptyNode.style.opacity = '0';
    }
    setTimeout(() => {
      this.isMenuOpen = false;
      document.body.style.overflow = 'auto';
      this.headerService.isOpen = false;
    }, 600);
  }

  toggleLanguage(isFromResize: boolean = false) {
    const currentLanguage = localStorage.getItem('language') || LanguageEnum.EN;
    this.appTranslateService.changeLanguage(currentLanguage === LanguageEnum.EN ? LanguageEnum.KA : LanguageEnum.EN);
    if (isFromResize) {
      this.toggleMenu();
    }
  }
}
