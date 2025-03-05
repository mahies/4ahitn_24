import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKrapfComponent } from './footer-krapf.component';

describe('FooterKrapfComponent', () => {
  let component: FooterKrapfComponent;
  let fixture: ComponentFixture<FooterKrapfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKrapfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKrapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
