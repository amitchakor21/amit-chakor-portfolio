import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgRepeaterComponent } from './svg-repeater.component';

describe('SvgRepeaterComponent', () => {
  let component: SvgRepeaterComponent;
  let fixture: ComponentFixture<SvgRepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgRepeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
