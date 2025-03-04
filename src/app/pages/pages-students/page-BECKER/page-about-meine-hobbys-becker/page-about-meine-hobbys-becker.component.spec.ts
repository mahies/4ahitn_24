import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeineHobbysBeckerComponent } from './page-about-meine-hobbys-becker.component';

describe('PageAboutBeckerComponent', () => {
  let component: PageAboutMeineHobbysBeckerComponent;
  let fixture: ComponentFixture<PageAboutMeineHobbysBeckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeineHobbysBeckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeineHobbysBeckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
