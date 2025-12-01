import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveLayoutDemo } from './responsive-layout-demo';

describe('ResponsiveLayoutDemo', () => {
  let component: ResponsiveLayoutDemo;
  let fixture: ComponentFixture<ResponsiveLayoutDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveLayoutDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveLayoutDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
