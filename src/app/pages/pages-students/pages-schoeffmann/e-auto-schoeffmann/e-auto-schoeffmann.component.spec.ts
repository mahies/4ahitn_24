import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAutoSchoeffmannComponent } from './e-auto-schoeffmann.component';

describe('EAutoSchoeffmannComponent', () => {
  let component: EAutoSchoeffmannComponent;
  let fixture: ComponentFixture<EAutoSchoeffmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EAutoSchoeffmannComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAutoSchoeffmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
