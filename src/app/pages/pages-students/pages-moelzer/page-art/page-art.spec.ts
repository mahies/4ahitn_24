import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArt } from './page-art';

describe('PageAboutMeMoelzerComponent', () => {
  let component: PageArt;
  let fixture: ComponentFixture<PageArt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
