import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionsExample } from './view-transitions-example';

describe('ViewTransitionsExample', () => {
  let component: ViewTransitionsExample;
  let fixture: ComponentFixture<ViewTransitionsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransitionsExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
