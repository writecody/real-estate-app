import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Property3Component } from './property3.component';

describe('Property3Component', () => {
  let component: Property3Component;
  let fixture: ComponentFixture<Property3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Property3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Property3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
