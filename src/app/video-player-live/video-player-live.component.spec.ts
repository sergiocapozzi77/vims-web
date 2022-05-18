import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoPlayerLiveComponent } from './video-player-live.component';

describe('VideoPlayerLiveComponent', () => {
  let component: VideoPlayerLiveComponent;
  let fixture: ComponentFixture<VideoPlayerLiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayerLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayerLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
