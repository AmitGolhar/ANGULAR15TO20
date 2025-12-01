import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentDemo } from './dynamic-component-demo';

describe('DynamicComponentDemo', () => {
  let component: DynamicComponentDemo;
  let fixture: ComponentFixture<DynamicComponentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
