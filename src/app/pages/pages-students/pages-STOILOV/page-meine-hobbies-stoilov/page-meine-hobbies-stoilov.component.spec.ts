import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineHobbiesStoilovComponent } from './page-meine-hobbies-stoilov.component';

describe('PageMeineHobbiesStoilovComponent', () => {
  let component: PageMeineHobbiesStoilovComponent;
  let fixture: ComponentFixture<PageMeineHobbiesStoilovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineHobbiesStoilovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineHobbiesStoilovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
