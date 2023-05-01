import { Component, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() hide: EventEmitter<boolean> = new EventEmitter();
  @Input() scrolled: EventEmitter<boolean> = new EventEmitter();

  public showHamburger$: Observable<boolean>;
  public isListActive = false;
  public isMenuOpen = false;
  public hideHeader: boolean = false;
  public isScrolling: boolean = false;

  constructor() {
    this.showHamburger$ = this.getWindowSize().pipe(
      map((size) => {
        const isTablet = size.width <= 768;
        if (!isTablet) {
          this.isMenuOpen = false;
          this.isListActive = false;
        }
        return size.width <= 768;
      })
    );
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
    } else {
      this.isMenuOpen = !this.isMenuOpen;
      this.isListActive = !this.isListActive;
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
    }, 600);
  }
}
