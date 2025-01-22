import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReiseStoilovComponentComponent } from './page-meine-reise-stoilov.component.component';

describe('PageMeineReiseStoilovComponentComponent', () => {
  let component: PageMeineReiseStoilovComponentComponent;
  let fixture: ComponentFixture<PageMeineReiseStoilovComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReiseStoilovComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReiseStoilovComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
