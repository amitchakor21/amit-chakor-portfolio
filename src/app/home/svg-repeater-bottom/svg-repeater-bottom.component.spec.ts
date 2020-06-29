import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRepeaterBottomComponent } from './svg-repeater-bottom.component';

describe('SvgRepeaterBottomComponent', () => {
  let component: SvgRepeaterBottomComponent;
  let fixture: ComponentFixture<SvgRepeaterBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgRepeaterBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgRepeaterBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
