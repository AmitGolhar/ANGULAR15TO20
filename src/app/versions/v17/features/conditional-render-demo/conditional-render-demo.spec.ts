import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRenderDemo } from './conditional-render-demo';

describe('ConditionalRenderDemo', () => {
  let component: ConditionalRenderDemo;
  let fixture: ComponentFixture<ConditionalRenderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalRenderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalRenderDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
