import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineVisionUndZieleStoilovComponent } from './page-meine-vision-und-ziele-stoilov.component';

describe('PageMeineVisionUndZieleStoilovComponent', () => {
  let component: PageMeineVisionUndZieleStoilovComponent;
  let fixture: ComponentFixture<PageMeineVisionUndZieleStoilovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineVisionUndZieleStoilovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineVisionUndZieleStoilovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
