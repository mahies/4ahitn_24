import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoeffmannComponent } from './schoeffmann.component';

describe('SchoeffmannComponent', () => {
  let component: SchoeffmannComponent;
  let fixture: ComponentFixture<SchoeffmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoeffmannComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoeffmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
