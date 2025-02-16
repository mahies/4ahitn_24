import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReisezieleKrapfComponent } from './page-reiseziele-krapf.component';

describe('PageReisezieleKrapfComponent', () => {
  let component: PageReisezieleKrapfComponent;
  let fixture: ComponentFixture<PageReisezieleKrapfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReisezieleKrapfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReisezieleKrapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
