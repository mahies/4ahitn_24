import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyStadiumVisitsVirkComponent } from './page-my-stadium-visits-virk.component';

describe('PageMyStadiumVisitsVirkComponent', () => {
  let component: PageMyStadiumVisitsVirkComponent;
  let fixture: ComponentFixture<PageMyStadiumVisitsVirkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyStadiumVisitsVirkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyStadiumVisitsVirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
