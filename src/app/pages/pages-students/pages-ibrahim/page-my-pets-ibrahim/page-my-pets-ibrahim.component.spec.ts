import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyPetsIbrahimComponent } from './page-my-pets-ibrahim.component';

describe('PageMyPetsIbrahimComponent', () => {
  let component: PageMyPetsIbrahimComponent;
  let fixture: ComponentFixture<PageMyPetsIbrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMyPetsIbrahimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMyPetsIbrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
