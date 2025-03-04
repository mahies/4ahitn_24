import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationAljarrahComponent } from './inspiration-aljarrah.component';

describe('InspirationAljarrahComponent', () => {
  let component: InspirationAljarrahComponent;
  let fixture: ComponentFixture<InspirationAljarrahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationAljarrahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationAljarrahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
