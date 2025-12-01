import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedFormsDemo } from './typed-forms-demo';

describe('TypedFormsDemo', () => {
  let component: TypedFormsDemo;
  let fixture: ComponentFixture<TypedFormsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedFormsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedFormsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
