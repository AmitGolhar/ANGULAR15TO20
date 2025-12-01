import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableHydrationDemo } from './stable-hydration-demo';

describe('StableHydrationDemo', () => {
  let component: StableHydrationDemo;
  let fixture: ComponentFixture<StableHydrationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StableHydrationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StableHydrationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
