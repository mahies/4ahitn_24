import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHobbiesYohannaComponent } from './page-hobbies-yohanna.component';

describe('PageHobbiesYohannaComponent', () => {
  let component: PageHobbiesYohannaComponent;
  let fixture: ComponentFixture<PageHobbiesYohannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHobbiesYohannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHobbiesYohannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
