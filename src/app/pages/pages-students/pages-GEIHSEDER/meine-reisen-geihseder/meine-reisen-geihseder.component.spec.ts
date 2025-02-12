import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineReisenGeihsederComponent } from './meine-reisen-geihseder.component';

describe('MeineReisenGeihsederComponent', () => {
  let component: MeineReisenGeihsederComponent;
  let fixture: ComponentFixture<MeineReisenGeihsederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineReisenGeihsederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineReisenGeihsederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
