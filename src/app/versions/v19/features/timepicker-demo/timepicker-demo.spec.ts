import { ComponentFixture, TestBed } from '@angular/core/testing';

 
describe('TimepickerDemo', () => {
  let component: TimepickerDemo;
  let fixture: ComponentFixture<TimepickerDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimepickerDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimepickerDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
