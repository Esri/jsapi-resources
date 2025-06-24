import { RouterOutlet } from '@angular/router';
import type { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

import WebMap from '@arcgis/core/WebMap.js';
import MapView from '@arcgis/core/views/MapView.js';
import Bookmarks from '@arcgis/core/widgets/Bookmarks.js';
import Expand from '@arcgis/core/widgets/Expand.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  public view: any = null;

  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  async initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    this.view = new MapView({
      container,
      map: webmap,
    });

    const bookmarks = new Bookmarks({
      view: this.view,
    });

    const bkExpand = new Expand({
      view: this.view,
      content: bookmarks,
      expanded: true,
    });

    // Add the widget to the top-right corner of the view
    this.view.ui.add(bkExpand, 'top-right');

    // bonus - how many bookmarks in the webmap?
    this.view.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log('Bookmarks: ', webmap.bookmarks.length);
      } else {
        console.log('No bookmarks in this webmap.');
      }
    });

    return this.view.when();
  }

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
      console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
