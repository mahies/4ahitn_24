import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage2Component } from './subpage2.component';

describe('Subpage2Component', () => {
  let component: Subpage2Component;
  let fixture: ComponentFixture<Subpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
