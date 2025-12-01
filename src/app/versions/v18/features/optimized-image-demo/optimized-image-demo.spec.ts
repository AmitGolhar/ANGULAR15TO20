import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedImageDemo } from './optimized-image-demo';

describe('OptimizedImageDemo', () => {
  let component: OptimizedImageDemo;
  let fixture: ComponentFixture<OptimizedImageDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedImageDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedImageDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
