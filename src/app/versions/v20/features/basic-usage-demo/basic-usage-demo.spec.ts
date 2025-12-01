import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsageDemo } from './basic-usage-demo';

describe('BasicUsageDemo', () => {
  let component: BasicUsageDemo;
  let fixture: ComponentFixture<BasicUsageDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicUsageDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicUsageDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
