import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalHydrationDemo } from './incremental-hydration-demo';

describe('IncrementalHydrationDemo', () => {
  let component: IncrementalHydrationDemo;
  let fixture: ComponentFixture<IncrementalHydrationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalHydrationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementalHydrationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
