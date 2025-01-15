import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAboutMeKLARICComponent } from './page-about-me-klaric.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('PageAboutMeKLARICComponent', () => {
  let component: PageAboutMeKLARICComponent;
  let fixture: ComponentFixture<PageAboutMeKLARICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PageAboutMeKLARICComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAboutMeKLARICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button for Reiseorte navigation', () => {
    const buttonDebugElement = fixture.debugElement.query(By.css('a[routerLink="/reiseorte"]'));
    expect(buttonDebugElement).toBeTruthy();
    expect(buttonDebugElement.attributes['routerLink']).toBe('/reiseorte');
  });
});
