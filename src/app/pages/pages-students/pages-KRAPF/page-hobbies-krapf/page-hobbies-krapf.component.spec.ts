import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesKrapfComponent } from './page-hobbies-krapf.component';

describe('PageHobbiesKrapfComponent', () => {
  let component: PageHobbiesKrapfComponent;
  let fixture: ComponentFixture<PageHobbiesKrapfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesKrapfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesKrapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
