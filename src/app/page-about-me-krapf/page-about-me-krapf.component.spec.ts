import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeKRAPFComponent } from './page-about-me-krapf.component';

describe('PageAboutMeKRAPFComponent', () => {
  let component: PageAboutMeKRAPFComponent;
  let fixture: ComponentFixture<PageAboutMeKRAPFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeKRAPFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeKRAPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
