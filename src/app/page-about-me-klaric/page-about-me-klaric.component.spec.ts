import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeKLARICComponent } from './page-about-me-klaric.component';

describe('PageAboutMeKLARICComponent', () => {
  let component: PageAboutMeKLARICComponent;
  let fixture: ComponentFixture<PageAboutMeKLARICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeKLARICComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeKLARICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
