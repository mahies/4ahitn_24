import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeSpelitzComponent } from './page-about-me-spelitz.component';

describe('PageAboutMeSpelitzComponent', () => {
  let component: PageAboutMeSpelitzComponent;
  let fixture: ComponentFixture<PageAboutMeSpelitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeSpelitzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeSpelitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
