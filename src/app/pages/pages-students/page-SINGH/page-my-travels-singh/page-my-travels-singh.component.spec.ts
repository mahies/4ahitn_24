import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMyTravelsSinghComponent } from './page-my-travels-singh.component';

describe('PageMyFavouriteBookSinghComponent', () => {
  let component: PageMyTravelsSinghComponent;
  let fixture: ComponentFixture<PageMyTravelsSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyTravelsSinghComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageMyTravelsSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
