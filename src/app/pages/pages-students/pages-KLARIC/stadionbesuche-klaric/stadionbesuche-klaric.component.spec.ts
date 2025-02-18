import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadionbesucheKlaricComponent } from './stadionbesuche-klaric.component';

describe('StadionbesucheKlaricComponent', () => {
  let component: StadionbesucheKlaricComponent;
  let fixture: ComponentFixture<StadionbesucheKlaricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadionbesucheKlaricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadionbesucheKlaricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
