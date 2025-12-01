import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBenchmarkDemo } from './performance-benchmark-demo';

describe('PerformanceBenchmarkDemo', () => {
  let component: PerformanceBenchmarkDemo;
  let fixture: ComponentFixture<PerformanceBenchmarkDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceBenchmarkDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceBenchmarkDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
