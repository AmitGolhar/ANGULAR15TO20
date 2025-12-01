import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicListDemo } from './dynamic-list-demo';

describe('DynamicListDemo', () => {
  let component: DynamicListDemo;
  let fixture: ComponentFixture<DynamicListDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicListDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicListDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
