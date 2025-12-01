import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowForDemo } from './control-flow-for-demo';

describe('ControlFlowForDemo', () => {
  let component: ControlFlowForDemo;
  let fixture: ComponentFixture<ControlFlowForDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowForDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowForDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
