import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReplayDemo } from './event-replay-demo';

describe('EventReplayDemo', () => {
  let component: EventReplayDemo;
  let fixture: ComponentFixture<EventReplayDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventReplayDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReplayDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
