import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeMILLICHComponent } from './page-about-me-millich.component';

describe('PageAboutMeMILLICHComponent', () => {
  let component: PageAboutMeMILLICHComponent;
  let fixture: ComponentFixture<PageAboutMeMILLICHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeMILLICHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeMILLICHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
