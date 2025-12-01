import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBenchDemo } from './performance-bench-demo';

describe('PerformanceBenchDemo', () => {
  let component: PerformanceBenchDemo;
  let fixture: ComponentFixture<PerformanceBenchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceBenchDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceBenchDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
