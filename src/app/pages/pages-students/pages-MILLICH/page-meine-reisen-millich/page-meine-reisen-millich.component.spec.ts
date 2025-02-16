import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReisenMILLICHComponent } from './page-meine-reisen-millich.component';

describe('PageMeineReisenMILLICHComponent', () => {
  let component: PageMeineReisenMILLICHComponent;
  let fixture: ComponentFixture<PageMeineReisenMILLICHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReisenMILLICHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReisenMILLICHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
