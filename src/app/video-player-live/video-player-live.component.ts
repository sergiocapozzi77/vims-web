import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';
import { BitrateOptions, VgApiService } from '@videogular/ngx-videogular/core';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-video-player-live',
  templateUrl: './video-player-live.component.html',
  styleUrls: ['./video-player-live.component.scss']
})
export class VideoPlayerLiveComponent implements OnInit {
  bitrates: BitrateOptions[];
  constructor() { }

  ngOnInit() {
  }

  setBitrate(option: BitrateOptions) {
      //this.vgHls.setBitrate(option);
    }


}
