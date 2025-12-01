import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessChangeDetectionDemo } from './zoneless-change-detection-demo';

describe('ZonelessChangeDetectionDemo', () => {
  let component: ZonelessChangeDetectionDemo;
  let fixture: ComponentFixture<ZonelessChangeDetectionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessChangeDetectionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessChangeDetectionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
