import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTemplateSyntaxDemo } from './extended-template-syntax-demo';

describe('ExtendedTemplateSyntaxDemo', () => {
  let component: ExtendedTemplateSyntaxDemo;
  let fixture: ComponentFixture<ExtendedTemplateSyntaxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedTemplateSyntaxDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtendedTemplateSyntaxDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
