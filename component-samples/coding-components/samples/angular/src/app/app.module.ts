import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

// Angular wrapper for coding components
import { ComponentLibraryModule as CodingComponentsModule } from "@arcgis/coding-components-angular";
import { CalciteComponentsModule } from "@esri/calcite-components-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CodingComponentsModule, CalciteComponentsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
