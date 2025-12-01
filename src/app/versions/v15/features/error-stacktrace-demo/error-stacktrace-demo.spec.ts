import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStacktraceDemo } from './error-stacktrace-demo';

describe('ErrorStacktraceDemo', () => {
  let component: ErrorStacktraceDemo;
  let fixture: ComponentFixture<ErrorStacktraceDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorStacktraceDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorStacktraceDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
