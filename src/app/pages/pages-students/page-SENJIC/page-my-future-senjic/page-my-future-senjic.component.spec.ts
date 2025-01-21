import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyFutureSenjicComponent } from './page-my-future-senjic.component';

describe('PageMyFutureSenjicComponent', () => {
  let component: PageMyFutureSenjicComponent;
  let fixture: ComponentFixture<PageMyFutureSenjicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyFutureSenjicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyFutureSenjicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
