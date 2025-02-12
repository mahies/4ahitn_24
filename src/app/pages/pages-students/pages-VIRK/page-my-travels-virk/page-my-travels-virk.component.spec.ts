import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyTravelsVirkComponent } from './page-my-travels-virk.component';

describe('PageMyTravelsVirkComponent', () => {
  let component: PageMyTravelsVirkComponent;
  let fixture: ComponentFixture<PageMyTravelsVirkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyTravelsVirkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyTravelsVirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
