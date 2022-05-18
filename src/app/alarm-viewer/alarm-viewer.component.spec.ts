import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlarmViewerComponent } from './alarm-viewer.component';

describe('AlarmViewerComponent', () => {
  let component: AlarmViewerComponent;
  let fixture: ComponentFixture<AlarmViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
