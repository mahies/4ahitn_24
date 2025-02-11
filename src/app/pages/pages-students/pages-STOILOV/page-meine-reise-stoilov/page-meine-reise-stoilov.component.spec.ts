import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReiseStoilovComponent } from './page-meine-reise-stoilov.component';

describe('PageMeineReiseStoilovComponentComponent', () => {
  let component: PageMeineReiseStoilovComponent;
  let fixture: ComponentFixture<PageMeineReiseStoilovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReiseStoilovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReiseStoilovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
