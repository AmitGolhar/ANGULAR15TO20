import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowSwitchDemo } from './control-flow-switch-demo';

describe('ControlFlowSwitchDemo', () => {
  let component: ControlFlowSwitchDemo;
  let fixture: ComponentFixture<ControlFlowSwitchDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowSwitchDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowSwitchDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
