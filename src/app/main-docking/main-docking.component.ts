import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from "@angular/core";
import * as GoldenLayout from "golden-layout";

import { IExtendedGoldenLayoutConfig } from "ngx-golden-layout/lib/config";
import { of } from "rxjs";

const INITIAL_LAYOUT: GoldenLayout.Config = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          title: "List",
          width: 18,
          isClosable: false,
        },
        {
          type: "column",
          content: [
            {
              type: "row",
              content: [
                {
                  type: "column",
                  content: [
                    {
                      type: "component",
                      title: "video 1",
                      componentName: "video-player-live",
                      componentState: { label: "B" },
                    },
                    {
                      type: "component",
                      title: "video 2",
                      componentName: "video-player",
                      componentState: { label: "C" },
                    },
                  ],
                },
                {
                  type: "column",
                  content: [
                    {
                      type: "component",
                      title: "video 3",
                      componentName: "video-player-live",
                      componentState: { label: "B" },
                    },
                    {
                      type: "component",
                      title: "video 4",
                      componentName: "video-player-live",
                      componentState: { label: "C" },
                    },
                  ],
                },
                {
                  type: "column",
                  content: [
                    {
                      type: "component",
                      title: "video 5",
                      componentName: "video-player",
                      componentState: { label: "B" },
                    },
                    {
                      type: "component",
                      title: "video 6",
                      componentName: "video-player",
                      componentState: { label: "C" },
                    },
                  ],
                },
              ],
            },
            {
              type: "stack",
              height: 30,
              content: [
                {
                  type: "component",
                  title: "Bottom",
                  isClosable: false,
                },
                {
                  type: "component",
                  title: "Bottom",
                  isClosable: false,
                }],
            }
          ],
        },


      ],
    },
  ],
};

@Component({
  selector: "app-main-docking",
  templateUrl: "./main-docking.component.html",
  styleUrls: ["./main-docking.component.scss"],
})
export class MainDockingComponent implements OnInit {
  layoutConfig$ = of(INITIAL_LAYOUT);
  constructor() { }

  ngOnInit() { }
}
