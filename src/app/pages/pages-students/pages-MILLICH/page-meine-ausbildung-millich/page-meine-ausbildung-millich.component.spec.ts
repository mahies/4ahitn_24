import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineAusbildungMillichComponent } from './page-meine-ausbildung-millich.component';

describe('PageMeineAusbildungMillichComponent', () => {
  let component: PageMeineAusbildungMillichComponent;
  let fixture: ComponentFixture<PageMeineAusbildungMillichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineAusbildungMillichComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineAusbildungMillichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
