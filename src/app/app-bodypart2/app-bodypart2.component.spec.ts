import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodypart2Component } from './app-bodypart2.component';

describe('AppBodypart2Component', () => {
  let component: AppBodypart2Component;
  let fixture: ComponentFixture<AppBodypart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodypart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodypart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
