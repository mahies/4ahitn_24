import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineZieleGeihsederComponent } from './meine-ziele-geihseder.component';

describe('MeineZieleGeihsederComponent', () => {
  let component: MeineZieleGeihsederComponent;
  let fixture: ComponentFixture<MeineZieleGeihsederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineZieleGeihsederComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineZieleGeihsederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
