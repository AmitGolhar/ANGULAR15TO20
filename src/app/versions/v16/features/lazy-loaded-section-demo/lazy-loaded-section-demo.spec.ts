import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedSectionDemo } from './lazy-loaded-section-demo';

describe('LazyLoadedSectionDemo', () => {
  let component: LazyLoadedSectionDemo;
  let fixture: ComponentFixture<LazyLoadedSectionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyLoadedSectionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadedSectionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
