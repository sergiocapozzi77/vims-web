import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainDockingComponent } from './main-docking.component';

describe('MainDockingComponent', () => {
  let component: MainDockingComponent;
  let fixture: ComponentFixture<MainDockingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
