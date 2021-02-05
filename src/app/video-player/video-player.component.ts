import { Component, OnInit } from "@angular/core";
import { BitrateOptions, VgApiService } from "@videogular/ngx-videogular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements OnInit {
  api: VgApiService;

  constructor() {}

  ngOnInit() {}

  videoError($event) {
    console.log("video error ", event);
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.error.subscribe((ee) => {
      console.log("EROR");
    });

    this.api.getDefaultMedia().subscriptions.abort.subscribe((e) => {
      console.log("abort", e);
    });

    this.api.getDefaultMedia().subscriptions.canPlay.subscribe((e) => {
      console.log("canPlay", e);
    });

    this.api.getDefaultMedia().subscriptions.suspend.subscribe((e) => {
      console.log("suspend", e);
    });

    this.api.getDefaultMedia().subscriptions.ended.subscribe((e) => {
      console.log("ended", e);
    });

    this.api.getDefaultMedia().subscriptions.timeUpdate.subscribe((e) => {
      console.log("timeUpdate", e);
    });

    this.api.getDefaultMedia().subscriptions.emptied.subscribe((e) => {
      console.log("emptied", e);
    });

    this.api.getDefaultMedia().subscriptions.startAds.subscribe((e) => {
      console.log("startAds", e);
    });

    var promise = this.api.getDefaultMedia().play();
    console.log("play ");

    if (promise !== undefined) {
      promise
        .then(function () {
          // Autoplay started!
        })
        .catch(function (error) {
          console.log("autoplay failure " + error);
        });
    }
    /*
    if(this.api.state != 'play'){
      //Force play if autoplay doesn't work
      console.log("playyyyying")
      this.api.play();
      this.api.state = 'play';
   }*/
    /*
    this.api.getDefaultMedia().subscriptions.error.subscribe(
      (x) => {
        console.log("playing error", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.abort.subscribe(
      (x) => {
        console.log("playing abort", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.loadStart.subscribe(
      (x) => {
        console.log("playing loadStart", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.playing.subscribe(
      (x) => {
        console.log("playing playing", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.loadedData.subscribe(
      (x) => {
        console.log("playing loadedData", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      (x) => {
        console.log("playing ended", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
      (x) => {
        console.log("playing ended", x)
      }
    );

    this.api.getDefaultMedia().subscriptions.canPlayThrough.subscribe(
      () => {
        console.log("playing buffer")

      }
    );*/
  }
}
