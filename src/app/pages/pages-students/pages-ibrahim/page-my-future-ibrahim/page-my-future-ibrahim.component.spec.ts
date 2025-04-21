import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyFutureIbrahimComponent } from './page-my-future-ibrahim.component';

describe('PageMyFutureIbrahimComponent', () => {
  let component: PageMyFutureIbrahimComponent;
  let fixture: ComponentFixture<PageMyFutureIbrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyFutureIbrahimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyFutureIbrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
