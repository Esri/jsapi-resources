import "@esri/calcite-components/components/calcite-flow-item";
import "@esri/calcite-components/components/calcite-block";
import "@esri/calcite-components/components/calcite-chip-group";
import "@esri/calcite-components/components/calcite-chip";
import type { VenueFeature } from "../../types";

interface DrillViewProps {
  graphic: VenueFeature | null;
  onClose: () => void;
  clusterColor?: string;
}

export default function DrillView({ graphic, onClose, clusterColor }: DrillViewProps) {
  if (!graphic) {
    return null;
  }

  const attributes = graphic.attributes || {};
  const isActive = !!graphic;

  return (
    <calcite-flow-item
      selected={isActive}
      heading={attributes.Venue || "Venue Name"}
      id="detail-panel"
      description={attributes.Sports! || ""}
      oncalciteFlowItemBack={onClose}
    >
      <calcite-block icon-start="web" heading="Location" expanded>
        {attributes.Cluster && (
          <calcite-chip scale="s" slot="content-end" appearance="outline-fill">
            <span slot="image" className="chip-color-swatch" style={{ backgroundColor: clusterColor }} />
            {attributes.Cluster}
          </calcite-chip>
        )}
        <calcite-chip-group>
          {attributes.Latitude && <calcite-chip scale="s">Lat: {String(attributes.Latitude)}</calcite-chip>}
          {attributes.Longitude && <calcite-chip scale="s">Lon: {String(attributes.Longitude)}</calcite-chip>}
        </calcite-chip-group>
      </calcite-block>
      <calcite-block icon-start="government-building" heading="Building status" expanded>
        <calcite-chip-group>
          {attributes.Status && <calcite-chip scale="s">{String(attributes.Status)}</calcite-chip>}
        </calcite-chip-group>
      </calcite-block>
    </calcite-flow-item>
  );
}
