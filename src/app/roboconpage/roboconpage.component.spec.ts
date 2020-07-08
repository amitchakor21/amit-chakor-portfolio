import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboconpageComponent } from './roboconpage.component';

describe('RoboconpageComponent', () => {
  let component: RoboconpageComponent;
  let fixture: ComponentFixture<RoboconpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoboconpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboconpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
