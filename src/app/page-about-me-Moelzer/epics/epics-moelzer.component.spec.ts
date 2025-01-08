import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutMeMoelzerComponent } from './epics-moelzer.component';

describe('PageAboutMeMoelzerComponent', () => {
  let component: PageAboutMeMoelzerComponent;
  let fixture: ComponentFixture<PageAboutMeMoelzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAboutMeMoelzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAboutMeMoelzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
