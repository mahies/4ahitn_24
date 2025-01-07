import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeStoilovComponent } from './page-about-me-stoilov.component';

describe('PageAboutMeStoilovComponent', () => {
  let component: PageAboutMeStoilovComponent;
  let fixture: ComponentFixture<PageAboutMeStoilovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeStoilovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeStoilovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
