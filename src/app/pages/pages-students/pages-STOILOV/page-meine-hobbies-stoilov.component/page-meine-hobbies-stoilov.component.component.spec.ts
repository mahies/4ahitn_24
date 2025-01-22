import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineHobbiesStoilovComponentComponent } from './page-meine-hobbies-stoilov.component.component';

describe('PageMeineHobbiesStoilovComponentComponent', () => {
  let component: PageMeineHobbiesStoilovComponentComponent;
  let fixture: ComponentFixture<PageMeineHobbiesStoilovComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineHobbiesStoilovComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineHobbiesStoilovComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
