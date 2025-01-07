import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStadienbesucheMatuschkaComponent } from './page-stadienbesuche-matuschka.component';

describe('PageStadienbesucheMatuschkaComponent', () => {
  let component: PageStadienbesucheMatuschkaComponent;
  let fixture: ComponentFixture<PageStadienbesucheMatuschkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageStadienbesucheMatuschkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStadienbesucheMatuschkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
