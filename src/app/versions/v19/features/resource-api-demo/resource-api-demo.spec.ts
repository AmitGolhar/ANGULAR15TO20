import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiDemo } from './resource-api-demo';

describe('ResourceApiDemo', () => {
  let component: ResourceApiDemo;
  let fixture: ComponentFixture<ResourceApiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
