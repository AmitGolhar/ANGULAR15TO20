import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCounterDemo } from './signals-counter-demo';

describe('SignalsCounterDemo', () => {
  let component: SignalsCounterDemo;
  let fixture: ComponentFixture<SignalsCounterDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCounterDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsCounterDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
