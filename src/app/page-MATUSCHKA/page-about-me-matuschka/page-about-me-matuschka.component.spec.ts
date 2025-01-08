import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeMATUSCHKAComponent } from './page-about-me-matuschka.component';

describe('PageAboutMeMATUSCHKAComponent', () => {
  let component: PageAboutMeMATUSCHKAComponent;
  let fixture: ComponentFixture<PageAboutMeMATUSCHKAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeMATUSCHKAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeMATUSCHKAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
