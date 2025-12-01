import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponentDemo } from './standalone-component-demo';

describe('StandaloneComponentDemo', () => {
  let component: StandaloneComponentDemo;
  let fixture: ComponentFixture<StandaloneComponentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneComponentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneComponentDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
