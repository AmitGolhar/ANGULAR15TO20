import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDirectiveDemo } from './image-directive-demo';

describe('ImageDirectiveDemo', () => {
  let component: ImageDirectiveDemo;
  let fixture: ComponentFixture<ImageDirectiveDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDirectiveDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDirectiveDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
