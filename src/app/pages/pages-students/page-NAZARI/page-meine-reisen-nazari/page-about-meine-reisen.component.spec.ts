import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeineReisenComponent } from './page-about-meine-reisen.component';

describe('', () => {
  let component: PageAboutMeineReisenComponent;
  let fixture: ComponentFixture<PageAboutMeineReisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeineReisenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeineReisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
