import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyJerseysSenjicComponent } from './page-my-jerseys-senjic.component';

describe('PageMyJerseysSenjicComponent', () => {
  let component: PageMyJerseysSenjicComponent;
  let fixture: ComponentFixture<PageMyJerseysSenjicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyJerseysSenjicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyJerseysSenjicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
