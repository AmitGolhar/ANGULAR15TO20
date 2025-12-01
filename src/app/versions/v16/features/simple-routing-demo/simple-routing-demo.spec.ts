import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRoutingDemo } from './simple-routing-demo';

describe('SimpleRoutingDemo', () => {
  let component: SimpleRoutingDemo;
  let fixture: ComponentFixture<SimpleRoutingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleRoutingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRoutingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
