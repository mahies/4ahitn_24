import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderYohannaComponent } from './header-yohanna.component';

describe('HeaderYohannaComponent', () => {
  let component: HeaderYohannaComponent;
  let fixture: ComponentFixture<HeaderYohannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderYohannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderYohannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
