import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxDemo } from './template-syntax-demo';

describe('TemplateSyntaxDemo', () => {
  let component: TemplateSyntaxDemo;
  let fixture: ComponentFixture<TemplateSyntaxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntaxDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntaxDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
