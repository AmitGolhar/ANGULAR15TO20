import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceProfileDemo } from './performance-profile-demo';

describe('PerformanceProfileDemo', () => {
  let component: PerformanceProfileDemo;
  let fixture: ComponentFixture<PerformanceProfileDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceProfileDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceProfileDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
