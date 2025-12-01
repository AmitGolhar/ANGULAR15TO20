import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVariablesDemo } from './css-variables-demo';

describe('CssVariablesDemo', () => {
  let component: CssVariablesDemo;
  let fixture: ComponentFixture<CssVariablesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssVariablesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssVariablesDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
