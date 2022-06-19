import { Component, OnInit } from '@angular/core';
import * as GoldenLayout from 'golden-layout';

import { of } from 'rxjs';
import { DockingVideoState } from '../core/models/docking-video-component-state';

const INITIAL_LAYOUT: GoldenLayout.Config = {
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'component',
          componentName: 'resource-tree',
          title: 'Risorse',
          width: 18,
          isClosable: false,
        },
        {
          type: 'column',
          content: [
            {
              type: 'row',
              content: [
                {
                  type: 'column',
                  content: [
                    {
                      type: 'component',
                      title: 'video 1',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
                        title: 'B',
                      } as DockingVideoState,
                    },
                    {
                      type: 'component',
                      title: 'video 2',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
                        title: 'B',
                      } as DockingVideoState,
                    },
                  ],
                },
                {
                  type: 'column',
                  content: [
                    {
                      type: 'component',
                      title: 'video 3',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
                        title: 'B',
                      } as DockingVideoState,
                    },
                    {
                      type: 'component',
                      title: 'video 4',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
                        title: 'B',
                      } as DockingVideoState,
                    },
                  ],
                },
                {
                  type: 'column',
                  content: [
                    {
                      type: 'component',
                      title: 'video 5',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
                        title: 'B',
                      } as DockingVideoState,
                    },
                    {
                      type: 'component',
                      title: 'video 6',
                      componentName: 'video-player-js',
                      componentState: {
                        url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
                        title: 'B',
                      } as DockingVideoState,
                    },
                  ],
                },
              ],
            },
            {
              type: 'stack',
              height: 30,
              content: [
                {
                  type: 'component',
                  title: 'Allarmi',
                  componentName: 'alarm-viewer',
                  isClosable: false,
                },
                {
                  type: 'component',
                  title: 'Altro',
                  isClosable: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-main-docking',
  templateUrl: './main-docking.component.html',
  styleUrls: ['./main-docking.component.scss'],
})
export class MainDockingComponent implements OnInit {
  layoutConfig$ = of(INITIAL_LAYOUT);
  constructor() {}

  ngOnInit() {}
}
