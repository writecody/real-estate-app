import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Property1Component } from './property1.component';

describe('Property1Component', () => {
  let component: Property1Component;
  let fixture: ComponentFixture<Property1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Property1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Property1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
