import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineReisenComponent } from './meine-reisen.component';

describe('MeineReisenComponent', () => {
  let component: MeineReisenComponent;
  let fixture: ComponentFixture<MeineReisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineReisenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineReisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
