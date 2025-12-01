import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneDefaultDemo } from './standalone-default-demo';

describe('StandaloneDefaultDemo', () => {
  let component: StandaloneDefaultDemo;
  let fixture: ComponentFixture<StandaloneDefaultDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneDefaultDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneDefaultDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
