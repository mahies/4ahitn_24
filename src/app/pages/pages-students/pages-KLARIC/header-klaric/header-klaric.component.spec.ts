import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderKlaricComponent } from './header-klaric.component';

describe('HeaderKlaricComponent', () => {
  let component: HeaderKlaricComponent;
  let fixture: ComponentFixture<HeaderKlaricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderKlaricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderKlaricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
