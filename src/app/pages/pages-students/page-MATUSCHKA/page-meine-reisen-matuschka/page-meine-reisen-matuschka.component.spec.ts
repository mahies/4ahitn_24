import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineReisenMatuschkaComponent } from './page-meine-reisen-matuschka.component';

describe('PageMeineReisenMatuschkaComponent', () => {
  let component: PageMeineReisenMatuschkaComponent;
  let fixture: ComponentFixture<PageMeineReisenMatuschkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineReisenMatuschkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineReisenMatuschkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
