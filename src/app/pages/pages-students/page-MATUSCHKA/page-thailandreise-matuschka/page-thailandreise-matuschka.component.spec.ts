import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThailandreiseMatuschkaComponent } from './page-thailandreise-matuschka.component';

describe('PageThailandreiseMatuschkaComponent', () => {
  let component: PageThailandreiseMatuschkaComponent;
  let fixture: ComponentFixture<PageThailandreiseMatuschkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageThailandreiseMatuschkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageThailandreiseMatuschkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
