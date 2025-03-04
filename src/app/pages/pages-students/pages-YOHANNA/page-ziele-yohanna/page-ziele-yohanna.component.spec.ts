import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageZieleYohannaComponent } from './page-ziele-yohanna.component';

describe('PageZieleYohannaComponent', () => {
  let component: PageZieleYohannaComponent;
  let fixture: ComponentFixture<PageZieleYohannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageZieleYohannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageZieleYohannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
