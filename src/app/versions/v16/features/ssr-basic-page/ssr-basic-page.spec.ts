import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrBasicPage } from './ssr-basic-page';

describe('SsrBasicPage', () => {
  let component: SsrBasicPage;
  let fixture: ComponentFixture<SsrBasicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrBasicPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrBasicPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
