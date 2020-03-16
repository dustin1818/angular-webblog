import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBodyheroComponent } from './app-bodyhero.component';

describe('AppBodyheroComponent', () => {
  let component: AppBodyheroComponent;
  let fixture: ComponentFixture<AppBodyheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBodyheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBodyheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
