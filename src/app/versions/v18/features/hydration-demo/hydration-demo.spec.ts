import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrationDemo } from './hydration-demo';

describe('HydrationDemo', () => {
  let component: HydrationDemo;
  let fixture: ComponentFixture<HydrationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydrationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
