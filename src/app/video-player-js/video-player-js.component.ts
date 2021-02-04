import { Component, AfterViewInit, Input } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player-js',
  templateUrl: './video-player-js.component.html',
  styleUrls: ['./video-player-js.component.scss']
})
export class VideoPlayerJsComponent implements AfterViewInit  {
  public vjs: videojs.Player;
  @Input() urlVideo: string;
  @Input() urlPoster: string;

  id:string = Guid.newGuid();

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const options = {
      'sources' : [{
        'src' : "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        'type' : 'video/mp4'
        }
      ],
      'poster' : this.urlPoster
    };
/*
    this.vjs = videojs(this.id, options);

    let f = this;
    this.vjs.ready(x => {

      var promise = this.vjs.play();
      console.log("play ");

      if (promise !== undefined) {
        promise.then(function() {
          // Autoplay started!
        }).catch(function(error) {
          console.log("autoplay failure " + error);
        });
      }
    });*/

  }
}

class Guid {
  static newGuid() {
    return 'plxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
