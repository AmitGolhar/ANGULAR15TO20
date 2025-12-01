import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessExample } from './zoneless-example';

describe('ZonelessExample', () => {
  let component: ZonelessExample;
  let fixture: ComponentFixture<ZonelessExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonelessExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
