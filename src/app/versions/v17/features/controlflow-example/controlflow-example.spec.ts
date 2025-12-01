import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowExample } from './controlflow-example';

describe('ControlflowExample', () => {
  let component: ControlflowExample;
  let fixture: ComponentFixture<ControlflowExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
