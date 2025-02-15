import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineHaustiereSpelitzComponent } from './meine-haustiere-spelitz.component';

describe('MeineHaustiereSpelitzComponent', () => {
  let component: MeineHaustiereSpelitzComponent;
  let fixture: ComponentFixture<MeineHaustiereSpelitzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineHaustiereSpelitzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineHaustiereSpelitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
