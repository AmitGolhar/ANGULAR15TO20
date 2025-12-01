import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotReloadCliDemo } from './hot-reload-cli-demo';

describe('HotReloadCliDemo', () => {
  let component: HotReloadCliDemo;
  let fixture: ComponentFixture<HotReloadCliDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotReloadCliDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotReloadCliDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
