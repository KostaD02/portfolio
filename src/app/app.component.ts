import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, fromEvent, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  public isAnimationOn: boolean = false;

  public hideEventEmitter: EventEmitter<boolean> = new EventEmitter();
  public startedScrollingEventEmitter: EventEmitter<boolean> = new EventEmitter();
  public scroll$!: Subscription;
  private startPosition: number = 0

  ngOnInit(): void {
    setTimeout(() => { // ? using for close animation loading
      this.isAnimationOn = false;
    }, 4900);

    this.startPosition = window.screenY;
    this.scroll$ = fromEvent(window, 'scroll').pipe(
      tap((event) => {
        const currentPosition = window.scrollY;
        this.hideEventEmitter.emit(this.startPosition < currentPosition);
        this.startedScrollingEventEmitter.emit(window.pageYOffset === 0);
        this.startPosition = currentPosition;
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
