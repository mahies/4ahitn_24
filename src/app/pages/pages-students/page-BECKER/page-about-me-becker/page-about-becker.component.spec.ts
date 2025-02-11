import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutBeckerComponent } from './page-about-becker.component';

describe('PageAboutBeckerComponent', () => {
  let component: PageAboutBeckerComponent;
  let fixture: ComponentFixture<PageAboutBeckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutBeckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutBeckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
