import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsbuildBuildDemo } from './esbuild-build-demo';

describe('EsbuildBuildDemo', () => {
  let component: EsbuildBuildDemo;
  let fixture: ComponentFixture<EsbuildBuildDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsbuildBuildDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsbuildBuildDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
