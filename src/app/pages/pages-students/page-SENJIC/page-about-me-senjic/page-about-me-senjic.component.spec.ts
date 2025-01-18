import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeSenjicComponent } from './page-about-me-senjic.component';

describe('PageAboutMeSenjicComponent', () => {
  let component: PageAboutMeSenjicComponent;
  let fixture: ComponentFixture<PageAboutMeSenjicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeSenjicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeSenjicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
