import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSchoeffmannComponent } from './navbar-schoeffmann.component';

describe('NavbarSchoeffmannComponent', () => {
  let component: NavbarSchoeffmannComponent;
  let fixture: ComponentFixture<NavbarSchoeffmannComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSchoeffmannComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSchoeffmannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
