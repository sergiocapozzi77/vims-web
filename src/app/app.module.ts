import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';
import { ComponentType, GoldenLayoutModule } from 'ngx-golden-layout';
import * as $ from 'jquery';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { RouterModule, Routes } from '@angular/router';
import { MainDockingComponent } from './main-docking/main-docking.component';
import { VideoPlayerLiveComponent } from './video-player-live/video-player-live.component';
import { VideoPlayerJsComponent } from './video-player-js/video-player-js.component';
import { ResourceTreeComponent } from './resource-tree/resource-tree.component';

// It is required to have JQuery as global in the window object.
window['$'] = $;

const appRoutes: Routes = [
  { path: '', component: MainDockingComponent, data: { title: 'Vims Web' } },
];


// Define all component types known at compile time to the golden-layout binding.
// It's possible to modify these at runtime using the `ComponentRegistryService`
const componentTypes: ComponentType[] = [{
  name: 'video-player',
  type: VideoPlayerComponent,
},
{
  name: 'video-player-live',
  type: VideoPlayerLiveComponent,
},
{
  name: 'video-player-js',
  type: VideoPlayerJsComponent,
},
{
  name: 'resource-tree',
  type: ResourceTreeComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    MainDockingComponent,
    VideoPlayerComponent,
    VideoPlayerLiveComponent,
    VideoPlayerJsComponent,
    ResourceTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false }
    ),
    GoldenLayoutModule.forRoot(componentTypes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
