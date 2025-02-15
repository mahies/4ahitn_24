import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportHistorieSpelitzComponent } from './sport-historie-spelitz.component';

describe('SportHistorieSpelitzComponent', () => {
  let component: SportHistorieSpelitzComponent;
  let fixture: ComponentFixture<SportHistorieSpelitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportHistorieSpelitzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportHistorieSpelitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
