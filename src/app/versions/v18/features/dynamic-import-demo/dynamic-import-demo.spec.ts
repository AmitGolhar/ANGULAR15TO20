import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImportDemo } from './dynamic-import-demo';

describe('DynamicImportDemo', () => {
  let component: DynamicImportDemo;
  let fixture: ComponentFixture<DynamicImportDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicImportDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicImportDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
