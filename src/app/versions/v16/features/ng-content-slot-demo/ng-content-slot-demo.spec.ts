import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSlotDemo } from './ng-content-slot-demo';

describe('NgContentSlotDemo', () => {
  let component: NgContentSlotDemo;
  let fixture: ComponentFixture<NgContentSlotDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContentSlotDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentSlotDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
