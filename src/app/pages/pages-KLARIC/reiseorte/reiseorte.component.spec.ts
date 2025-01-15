import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiseorteComponent } from './reiseorte.component';

describe('ReiseorteComponent', () => {
  let component: ReiseorteComponent;
  let fixture: ComponentFixture<ReiseorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReiseorteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReiseorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
