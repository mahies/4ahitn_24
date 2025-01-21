import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbies } from './page-hobbies';

describe('PageAboutMeMoelzerComponent', () => {
  let component: PageHobbies;
  let fixture: ComponentFixture<PageHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
