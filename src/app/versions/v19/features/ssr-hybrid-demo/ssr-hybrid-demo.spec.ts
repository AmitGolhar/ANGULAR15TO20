import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrHybridDemo } from './ssr-hybrid-demo';

describe('SsrHybridDemo', () => {
  let component: SsrHybridDemo;
  let fixture: ComponentFixture<SsrHybridDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrHybridDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrHybridDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
