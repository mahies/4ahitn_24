import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseenComponent } from './museen.component';

describe('MuseenComponent', () => {
  let component: MuseenComponent;
  let fixture: ComponentFixture<MuseenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
