import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKrapfComponent } from './header-krapf.component';

describe('HeaderKrapfComponent', () => {
  let component: HeaderKrapfComponent;
  let fixture: ComponentFixture<HeaderKrapfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKrapfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKrapfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
