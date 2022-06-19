import {
  Component,
  AfterViewInit,
  Input,
  ElementRef,
  ViewChild,
  Inject,
  OnDestroy,
} from '@angular/core';
import { GoldenLayoutComponentState } from 'ngx-golden-layout';
import videojs, { VideoJsPlayerOptions } from 'video.js';
import { DockingVideoState } from '../core/models/docking-video-component-state';

@Component({
  selector: 'app-video-player-js',
  templateUrl: './video-player-js.component.html',
  styleUrls: ['./video-player-js.component.scss'],
})
export class VideoPlayerJsComponent implements AfterViewInit, OnDestroy {
  public player: videojs.Player;
  @ViewChild('target', { static: true }) target: ElementRef;

  @Input() urlVideo: string;
  @Input() urlPoster: string;

  // id: string = Guid.newGuid();

  constructor(
    @Inject(GoldenLayoutComponentState) public state: DockingVideoState
  ) {}

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  ngAfterViewInit() {
    const options = {
      autoplay: true,
      muted: true,
      sources: [
        {
          src: this.state.url,
        },
      ],
      poster: this.urlPoster,
    } as VideoJsPlayerOptions;

    this.player = videojs(
      this.target.nativeElement,
      options,
      this.onPlayerReady.bind(this)
    );

    // const f = this;
    // this.player.ready(() => {
    //   const promise = this.player.play();
    //   console.log('play ');

    //   if (promise !== undefined) {
    //     promise
    //       .then(() => {
    //           // Autoplay started!
    //         })
    //       .catch((error) => {
    //           console.log('autoplay failure ' + error);
    //         });
    //   }
    // });
  }

  onPlayerReady() {
    // this.player.on("loadedmetadata", (x) => {
    //   console.log("Metadata", x);
    // });
    // this.player.on("timeupdate", () => {});
    // this.player.on("loadeddata", () => {});

    this.player.on('loadedmetadata', () => {});

    this.player.addChild('TitleBar', { text: 'Custom title bar component.' });
    this.player.addChild('CustomButton');
  }
}
