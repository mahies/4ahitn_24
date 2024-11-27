import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeIBRAHIMComponent } from './page-about-me-i-b-r-a-h-i-m.component';

describe('PageAboutMeGEIHSEDERComponent', () => {
  let component: PageAboutMeIBRAHIMComponent;
  let fixture: ComponentFixture<PageAboutMeIBRAHIMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeIBRAHIMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeIBRAHIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
