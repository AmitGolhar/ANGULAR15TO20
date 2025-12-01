import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSideRenderDemo } from './server-side-render-demo';

describe('ServerSideRenderDemo', () => {
  let component: ServerSideRenderDemo;
  let fixture: ComponentFixture<ServerSideRenderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerSideRenderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerSideRenderDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
