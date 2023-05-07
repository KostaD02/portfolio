import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private readonly isOpen$ = new BehaviorSubject<boolean>(false);
  public readonly isOpenObservable$ = this.isOpen$.asObservable();

  get isOpen(){
    return this.isOpen$.value;
  }

  set isOpen(open: boolean) {
    this.isOpen$.next(open);
  }
}
