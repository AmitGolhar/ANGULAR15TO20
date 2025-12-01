import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsStabilityDemo } from './signals-stability-demo';

describe('SignalsStabilityDemo', () => {
  let component: SignalsStabilityDemo;
  let fixture: ComponentFixture<SignalsStabilityDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsStabilityDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsStabilityDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
