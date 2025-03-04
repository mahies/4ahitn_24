import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageMeineReisenIbisevicComponent } from './page-meine-reisen-ibisevic.component';


describe('PageMeineReisenIbisevicComponent', () => {
  let component: PageMeineReisenIbisevicComponent;
  let fixture: ComponentFixture<PageMeineReisenIbisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReisenIbisevicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReisenIbisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
