import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRenderModeDemo } from './route-render-mode-demo';

describe('RouteRenderModeDemo', () => {
  let component: RouteRenderModeDemo;
  let fixture: ComponentFixture<RouteRenderModeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteRenderModeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteRenderModeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
