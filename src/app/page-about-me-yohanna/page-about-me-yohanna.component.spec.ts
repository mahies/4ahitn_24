import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeYOHANNAComponent } from './page-about-me-yohanna.component';

describe('PageAboutMeYOHANNAComponent', () => {
  let component: PageAboutMeYOHANNAComponent;
  let fixture: ComponentFixture<PageAboutMeYOHANNAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeYOHANNAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeYOHANNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
