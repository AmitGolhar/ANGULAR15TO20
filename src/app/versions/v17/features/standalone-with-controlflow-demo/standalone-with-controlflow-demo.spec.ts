import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneWithControlflowDemo } from './standalone-with-controlflow-demo';

describe('StandaloneWithControlflowDemo', () => {
  let component: StandaloneWithControlflowDemo;
  let fixture: ComponentFixture<StandaloneWithControlflowDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneWithControlflowDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneWithControlflowDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
