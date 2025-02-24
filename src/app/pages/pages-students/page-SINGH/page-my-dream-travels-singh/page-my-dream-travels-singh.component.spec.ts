import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMyDreamTravelsSinghComponent } from './page-my-dream-travels-singh.component';

describe('PageMyFavouriteBookSinghComponent', () => {
  let component: PageMyDreamTravelsSinghComponent;
  let fixture: ComponentFixture<PageMyDreamTravelsSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyDreamTravelsSinghComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageMyDreamTravelsSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
