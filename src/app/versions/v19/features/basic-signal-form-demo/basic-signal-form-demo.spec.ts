import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSignalFormDemo } from './basic-signal-form-demo';

describe('BasicSignalFormDemo', () => {
  let component: BasicSignalFormDemo;
  let fixture: ComponentFixture<BasicSignalFormDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSignalFormDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSignalFormDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
