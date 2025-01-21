import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravels } from './page-travels';

describe('PageAboutMeMoelzerComponent', () => {
  let component: PageTravels;
  let fixture: ComponentFixture<PageTravels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
