import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeIBRAHIMComponent } from './page-about-me-ibrahim.component';

describe('PageAboutMeIBRAHIMComponent', () => {
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
