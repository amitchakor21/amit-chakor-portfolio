import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboconComponent } from './robocon.component';

describe('RoboconComponent', () => {
  let component: RoboconComponent;
  let fixture: ComponentFixture<RoboconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
