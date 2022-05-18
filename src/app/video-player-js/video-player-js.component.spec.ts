import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoPlayerJsComponent } from './video-player-js.component';

describe('VideoPlayerJsComponent', () => {
  let component: VideoPlayerJsComponent;
  let fixture: ComponentFixture<VideoPlayerJsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
