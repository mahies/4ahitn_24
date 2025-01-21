import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravel } from './page-travel';

describe('PageAboutMeMoelzerComponent', () => {
  let component: PageTravel;
  let fixture: ComponentFixture<PageTravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
