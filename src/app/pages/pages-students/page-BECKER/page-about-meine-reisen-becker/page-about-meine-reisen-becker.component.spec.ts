import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeineReisenBeckerComponent } from './page-about-meine-reisen-becker.component';

describe('PageAboutBeckerComponent', () => {
  let component: PageAboutMeineReisenBeckerComponent;
  let fixture: ComponentFixture<PageAboutMeineReisenBeckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeineReisenBeckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeineReisenBeckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
