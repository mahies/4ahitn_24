import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMILLICHComponent } from './footer-millich.component';

describe('FooterMILLICHComponent', () => {
  let component: FooterMILLICHComponent;
  let fixture: ComponentFixture<FooterMILLICHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMILLICHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMILLICHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
