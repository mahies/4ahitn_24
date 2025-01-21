import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeSinghComponent } from './page-about-me-singh.component';

describe('PageAboutMeSinghComponent', () => {
  let component: PageAboutMeSinghComponent;
  let fixture: ComponentFixture<PageAboutMeSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeSinghComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
