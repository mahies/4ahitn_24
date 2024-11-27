import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeVIRKComponent } from './page-about-me-virk.component';

describe('PageAboutMeVIRKComponent', () => {
  let component: PageAboutMeVIRKComponent;
  let fixture: ComponentFixture<PageAboutMeVIRKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeVIRKComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeVIRKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
