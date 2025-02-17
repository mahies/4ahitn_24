import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMeineTraumreisezieleNazariComponent } from './page-meine-traumreiseziele-nazari.component';

describe('', () => {
  let component: PageMeineTraumreisezieleNazariComponent;
  let fixture: ComponentFixture<PageMeineTraumreisezieleNazariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMeineTraumreisezieleNazariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMeineTraumreisezieleNazariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
