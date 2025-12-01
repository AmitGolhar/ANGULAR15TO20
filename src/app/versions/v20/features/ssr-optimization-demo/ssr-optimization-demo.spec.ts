import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrOptimizationDemo } from './ssr-optimization-demo';

describe('SsrOptimizationDemo', () => {
  let component: SsrOptimizationDemo;
  let fixture: ComponentFixture<SsrOptimizationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrOptimizationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrOptimizationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
