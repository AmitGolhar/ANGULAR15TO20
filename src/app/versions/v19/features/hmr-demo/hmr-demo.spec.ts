import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmrDemo } from './hmr-demo';

describe('HmrDemo', () => {
  let component: HmrDemo;
  let fixture: ComponentFixture<HmrDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmrDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmrDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
