import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeIbrahimComponent } from './page-about-me-ibrahim.component';

describe('PageAboutMeGEIHSEDERComponent', () => {
  let component: PageAboutMeIbrahimComponent;
  let fixture: ComponentFixture<PageAboutMeIbrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeIbrahimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeIbrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
