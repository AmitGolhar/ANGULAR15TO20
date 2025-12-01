import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCompositionDemo } from './directive-composition-demo';

describe('DirectiveCompositionDemo', () => {
  let component: DirectiveCompositionDemo;
  let fixture: ComponentFixture<DirectiveCompositionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveCompositionDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveCompositionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
