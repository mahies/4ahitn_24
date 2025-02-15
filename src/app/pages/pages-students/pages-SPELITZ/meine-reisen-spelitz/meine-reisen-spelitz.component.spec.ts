import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineReisenSpelitzComponent } from './meine-reisen-spelitz.component';

describe('MeineReisenSpelitzComponent', () => {
  let component: MeineReisenSpelitzComponent;
  let fixture: ComponentFixture<MeineReisenSpelitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineReisenSpelitzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineReisenSpelitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
