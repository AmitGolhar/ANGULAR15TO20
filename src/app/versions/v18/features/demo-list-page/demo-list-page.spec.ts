import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListPage } from './demo-list-page';

describe('DemoListPage', () => {
  let component: DemoListPage;
  let fixture: ComponentFixture<DemoListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
