import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutPageComponent } from './page-about-page.component';

describe('PageAboutPageComponent', () => {
  let component: PageAboutPageComponent;
  let fixture: ComponentFixture<PageAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
