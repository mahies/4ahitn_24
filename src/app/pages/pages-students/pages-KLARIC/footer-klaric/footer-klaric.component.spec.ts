import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterKlaricComponent } from './footer-klaric.component';

describe('FooterKlaricComponent', () => {
  let component: FooterKlaricComponent;
  let fixture: ComponentFixture<FooterKlaricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterKlaricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterKlaricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
