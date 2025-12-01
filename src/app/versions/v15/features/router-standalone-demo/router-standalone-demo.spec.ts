import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterStandaloneDemo } from './router-standalone-demo';

describe('RouterStandaloneDemo', () => {
  let component: RouterStandaloneDemo;
  let fixture: ComponentFixture<RouterStandaloneDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterStandaloneDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterStandaloneDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
