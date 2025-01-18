import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeGEIHSEDERComponent } from './page-about-me-geihseder.component';

describe('PageAboutMeGEIHSEDERComponent', () => {
  let component: PageAboutMeGEIHSEDERComponent;
  let fixture: ComponentFixture<PageAboutMeGEIHSEDERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeGEIHSEDERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeGEIHSEDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
