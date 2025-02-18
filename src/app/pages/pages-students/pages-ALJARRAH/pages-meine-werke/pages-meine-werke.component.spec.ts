import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMeineWerkeComponent } from './pages-meine-werke.component';

describe('PagesMeineWerkeComponent', () => {
  let component: PagesMeineWerkeComponent;
  let fixture: ComponentFixture<PagesMeineWerkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesMeineWerkeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesMeineWerkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
