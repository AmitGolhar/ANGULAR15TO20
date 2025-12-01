import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowIfDemo } from './control-flow-if-demo';

describe('ControlFlowIfDemo', () => {
  let component: ControlFlowIfDemo;
  let fixture: ComponentFixture<ControlFlowIfDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowIfDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowIfDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
