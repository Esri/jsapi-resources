import type { OnInit } from "@angular/core";
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { loadData } from "../functions/load-data.service";
import type { EditorTestContext, EditorProfileDefinition, PredefinedProfile } from "@arcgis/coding-components";

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
  private readonly cdr = inject(ChangeDetectorRef);

  // Property to track loading state
  public isLoading = true;
  public loadError = "";

  // Properties for the arcade editor
  public profile!: EditorProfileDefinition | PredefinedProfile;
  public testData!: EditorTestContext;

  ngOnInit(): void {
    void this.fetch();
  }

  arcgisScriptChange(event: CustomEvent): void {
    console.log("script:", event.detail);
  }

  // Async function to fetch data
  async fetch(): Promise<void> {
    try {
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
    } catch (error) {
      console.error("Failed to load Arcade editor data", error);
      this.loadError = "Unable to load the Arcade editor data.";
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges(); // Force change detection
    }
  }
}
