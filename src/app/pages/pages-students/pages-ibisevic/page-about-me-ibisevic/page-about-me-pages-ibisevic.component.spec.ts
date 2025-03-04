import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAboutMeIbisevicComponent } from './page-about-me-pages-ibisevic.component';
import { CommonModule } from '@angular/common';


describe('PageAboutMeIbisevicComponent', () => {
  let component: PageAboutMeIbisevicComponent;
  let fixture: ComponentFixture<PageAboutMeIbisevicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAboutMeIbisevicComponent],
      imports: [
        CommonModule,

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PageAboutMeIbisevicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined "me" property', () => {
    expect(component.me).toBeDefined();
  });

  it('should render the name correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(component.me.surname);
  });
});
