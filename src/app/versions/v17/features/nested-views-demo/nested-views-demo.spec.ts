import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedViewsDemo } from './nested-views-demo';

describe('NestedViewsDemo', () => {
  let component: NestedViewsDemo;
  let fixture: ComponentFixture<NestedViewsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedViewsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedViewsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
