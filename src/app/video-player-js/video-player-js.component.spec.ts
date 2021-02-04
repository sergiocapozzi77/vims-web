import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerJsComponent } from './video-player-js.component';

describe('VideoPlayerJsComponent', () => {
  let component: VideoPlayerJsComponent;
  let fixture: ComponentFixture<VideoPlayerJsComponent>;

  beforeEach(async(() => {
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
