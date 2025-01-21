import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReisenComponent } from './page-meine-reisen.component';

describe('PageMeineReisenComponent', () => {
  let component: PageMeineReisenComponent;
  let fixture: ComponentFixture<PageMeineReisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReisenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
