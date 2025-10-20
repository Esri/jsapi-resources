import type { OnInit } from "@angular/core";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { loadData } from "../functions/load-data.service";
import type { IEditorTestContext, IEditorProfileDefinition, IPredefinedProfile } from "@arcgis/coding-components";

import "@esri/calcite-components/components/calcite-scrim";
import "@arcgis/coding-components/components/arcgis-arcade-editor";

@Component({
  selector: "app-root",
  imports: [CommonModule],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App implements OnInit {
  title = "coding-components-angular-template";

  // Property to track loading state
  public isLoading = true;

  // Properties for the arcade editor
  public profile!: IEditorProfileDefinition | IPredefinedProfile;
  public testData!: IEditorTestContext;

  ngOnInit(): void {
    void (async (): Promise<void> => {
      await this.fetch();
    })();
  }

  arcgisScriptChange(event: CustomEvent): void {
    console.log("script:", event.detail);
  }

  // Async function to fetch data
  async fetch(): Promise<void> {
    const data = await loadData();

    this.profile = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer,
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer,
      },
    };

    this.testData = {
      profileVariableInstances: {
        $feature: data.featureSet.features[0],
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer.url,
      },
      // spatialReference: {wkid: 3857},
      // timeZone: "system"
    };

    // Once data is fetched, set isLoading to false
    this.isLoading = false;
  }
}
