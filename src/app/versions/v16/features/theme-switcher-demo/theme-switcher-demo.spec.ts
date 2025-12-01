import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwitcherDemo } from './theme-switcher-demo';

describe('ThemeSwitcherDemo', () => {
  let component: ThemeSwitcherDemo;
  let fixture: ComponentFixture<ThemeSwitcherDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
