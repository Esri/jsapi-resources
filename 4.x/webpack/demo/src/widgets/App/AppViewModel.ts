import Accessor from "esri/core/Accessor";
import { whenOnce } from "esri/core/watchUtils";
import GeoJSONLayer from "esri/layers/GeoJSONLayer";
import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Expand from "esri/widgets/Expand";
import Search from "esri/widgets/Search";

import {
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";

export interface AppParams {
  appName: string;
  map: EsriMap;
  layer: GeoJSONLayer;
  view: MapView;
}

@subclass("widgets.App.AppViewModel")
class AppViewModel extends declared(Accessor) {
  @property() appName: string;

  @property() map: EsriMap;

  @property() layer: GeoJSONLayer;

  @property() view: MapView;

  constructor(params?: Partial<AppParams>) {
    super(params);
    whenOnce(this, "view").then(this.onload.bind(this));
  }

  onload() {
    const search = new Search({ view: this.view });
    const expand = new Expand({
      content: search
    });
    this.view.ui.add(expand, "top-right");

    this.layer.when(() => {
      this.view.goTo({ target: this.layer.fullExtent });
    });
  }
}

export default AppViewModel;
