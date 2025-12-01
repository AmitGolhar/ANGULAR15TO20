import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessModeDemo } from './zoneless-mode-demo';

describe('ZonelessModeDemo', () => {
  let component: ZonelessModeDemo;
  let fixture: ComponentFixture<ZonelessModeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessModeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessModeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
