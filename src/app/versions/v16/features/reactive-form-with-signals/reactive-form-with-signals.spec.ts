import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithSignals } from './reactive-form-with-signals';

describe('ReactiveFormWithSignals', () => {
  let component: ReactiveFormWithSignals;
  let fixture: ComponentFixture<ReactiveFormWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormWithSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
