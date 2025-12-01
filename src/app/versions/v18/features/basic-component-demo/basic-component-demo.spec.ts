import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentDemo } from './basic-component-demo';

describe('BasicComponentDemo', () => {
  let component: BasicComponentDemo;
  let fixture: ComponentFixture<BasicComponentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicComponentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicComponentDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
