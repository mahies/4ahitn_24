import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReisenKrapfComponent } from './page-reisen-krapf.component';

describe('PageReisenKrapfComponent', () => {
  let component: PageReisenKrapfComponent;
  let fixture: ComponentFixture<PageReisenKrapfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReisenKrapfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReisenKrapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
