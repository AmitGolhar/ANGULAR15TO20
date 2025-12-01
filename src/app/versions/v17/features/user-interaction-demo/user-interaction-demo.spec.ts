import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionDemo } from './user-interaction-demo';

describe('UserInteractionDemo', () => {
  let component: UserInteractionDemo;
  let fixture: ComponentFixture<UserInteractionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInteractionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInteractionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
