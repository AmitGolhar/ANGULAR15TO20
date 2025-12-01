import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponentsDemo } from './nested-components-demo';

describe('NestedComponentsDemo', () => {
  let component: NestedComponentsDemo;
  let fixture: ComponentFixture<NestedComponentsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedComponentsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedComponentsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
