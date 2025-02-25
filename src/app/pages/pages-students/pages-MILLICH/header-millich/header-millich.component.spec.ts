import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMILLICHComponent } from './header-millich.component';

describe('HeaderMILLICHComponent', () => {
  let component: HeaderMILLICHComponent;
  let fixture: ComponentFixture<HeaderMILLICHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMILLICHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMILLICHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
