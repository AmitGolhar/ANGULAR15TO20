import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptimizationDemo } from './image-optimization-demo';

describe('ImageOptimizationDemo', () => {
  let component: ImageOptimizationDemo;
  let fixture: ComponentFixture<ImageOptimizationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageOptimizationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOptimizationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
