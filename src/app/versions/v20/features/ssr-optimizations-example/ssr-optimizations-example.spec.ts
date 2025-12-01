import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrOptimizationsExample } from './ssr-optimizations-example';

describe('SsrOptimizationsExample', () => {
  let component: SsrOptimizationsExample;
  let fixture: ComponentFixture<SsrOptimizationsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrOptimizationsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrOptimizationsExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
