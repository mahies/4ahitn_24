import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeNazariComponent } from './page-about-me-nazari.component';

describe('PageAboutMeNazariComponent', () => {
  let component: PageAboutMeNazariComponent;
  let fixture: ComponentFixture<PageAboutMeNazariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeNazariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeNazariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
