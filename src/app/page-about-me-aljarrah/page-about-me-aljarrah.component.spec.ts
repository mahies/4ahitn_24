import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeAljarrahComponent } from './page-about-me-aljarrah.component';

describe('PageAboutMeAljarrahComponent', () => {
  let component: PageAboutMeAljarrahComponent;
  let fixture: ComponentFixture<PageAboutMeAljarrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeAljarrahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeAljarrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
