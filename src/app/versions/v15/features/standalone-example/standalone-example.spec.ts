import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneExample } from './standalone-example';

describe('StandaloneExample', () => {
  let component: StandaloneExample;
  let fixture: ComponentFixture<StandaloneExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
