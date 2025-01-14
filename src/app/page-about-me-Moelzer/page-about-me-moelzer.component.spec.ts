import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutmoelzerComponent } from './page-about-me-moelzer.component';

describe('PageAboutmoelzerComponent', () => {
  let component: PageAboutmoelzerComponent;
  let fixture: ComponentFixture<PageAboutmoelzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutmoelzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutmoelzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
