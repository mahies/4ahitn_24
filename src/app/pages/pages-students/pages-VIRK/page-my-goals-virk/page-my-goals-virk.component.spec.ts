import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyGoalsVirkComponent } from './page-my-goals-virk.component';

describe('PageMyGoalsVirkComponent', () => {
  let component: PageMyGoalsVirkComponent;
  let fixture: ComponentFixture<PageMyGoalsVirkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyGoalsVirkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyGoalsVirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
