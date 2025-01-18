import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyTravelsSenjicComponent } from './page-my-travels-senjic.component';

describe('PageMyTravelsSenjicComponent', () => {
  let component: PageMyTravelsSenjicComponent;
  let fixture: ComponentFixture<PageMyTravelsSenjicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyTravelsSenjicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyTravelsSenjicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
