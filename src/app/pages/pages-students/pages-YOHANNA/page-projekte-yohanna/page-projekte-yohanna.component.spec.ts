import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjekteYohannaComponent } from './page-projekte-yohanna.component';

describe('PageProjekteYohannaComponent', () => {
  let component: PageProjekteYohannaComponent;
  let fixture: ComponentFixture<PageProjekteYohannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjekteYohannaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjekteYohannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
