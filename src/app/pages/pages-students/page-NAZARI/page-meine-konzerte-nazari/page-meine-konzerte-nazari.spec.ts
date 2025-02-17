import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineKonzerteNazariComponent } from './page-meine-konzerte-nazari.component';

describe('', () => {
  let component: PageMeineKonzerteNazariComponent;
  let fixture: ComponentFixture<PageMeineKonzerteNazariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineKonzerteNazariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineKonzerteNazariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
