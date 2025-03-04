import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterYohannaComponent } from './footer-yohanna.component';

describe('FooterYohannaComponent', () => {
  let component: FooterYohannaComponent;
  let fixture: ComponentFixture<FooterYohannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterYohannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterYohannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
