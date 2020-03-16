import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarnavComponent } from './app-barnav.component';

describe('AppBarnavComponent', () => {
  let component: AppBarnavComponent;
  let fixture: ComponentFixture<AppBarnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
