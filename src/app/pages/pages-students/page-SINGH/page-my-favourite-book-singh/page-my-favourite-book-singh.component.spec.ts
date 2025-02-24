import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMyFavouriteBookSinghComponent } from './page-my-favourite-book-singh.component';

describe('PageMyFavouriteBookSinghComponent', () => {
  let component: PageMyFavouriteBookSinghComponent;
  let fixture: ComponentFixture<PageMyFavouriteBookSinghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyFavouriteBookSinghComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageMyFavouriteBookSinghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
