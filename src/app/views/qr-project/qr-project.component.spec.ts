import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrProjectComponent } from './qr-project.component';

describe('QrProjectComponent', () => {
  let component: QrProjectComponent;
  let fixture: ComponentFixture<QrProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
