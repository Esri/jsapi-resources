import "@esri/calcite-components/components/calcite-block";
import "@esri/calcite-components/components/calcite-block-section";
import "@esri/calcite-components/components/calcite-checkbox";
import "@esri/calcite-components/components/calcite-label";
import "@esri/calcite-components/components/calcite-notice";
import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-radio-button";
import "@esri/calcite-components/components/calcite-shell-panel";
import "@esri/calcite-components/components/calcite-slider";
import type { PlantTypeFilter } from "../types";

interface SidebarProps {
  collapsed: boolean;
  plantTypeFilter: PlantTypeFilter;
  onPlantTypeChange: (type: PlantTypeFilter) => void;
  showPieChart: boolean;
  showBoxPlot: boolean;
  onShowPieChartChange: (show: boolean) => void;
  onShowBoxPlotChange: (show: boolean) => void;
}

export default function Sidebar({
  collapsed,
  plantTypeFilter,
  onPlantTypeChange,
  showPieChart,
  showBoxPlot,
  onShowPieChartChange,
  onShowBoxPlotChange,
}: SidebarProps) {
  const handleAll = () => onPlantTypeChange("all");
  const handleSolar = () => onPlantTypeChange("solar");
  const handleOil = () => onPlantTypeChange("oil");

  const handlePieChange = () => onShowPieChartChange(!showPieChart);
  const handleBoxChange = () => onShowBoxPlotChange(!showBoxPlot);

  return (
    <calcite-shell-panel slot="panel-start" collapsed={collapsed} hidden={collapsed}>
      <calcite-panel
        heading="What does the dashboard project?"
        description="Configuration, options and details"
        collapsed={collapsed}
        hidden={collapsed}
      >
        <calcite-block collapsible expanded heading="Filter metrics">
          <calcite-label layout="inline">
            <calcite-radio-button oncalciteRadioButtonChange={handleAll} checked={plantTypeFilter === "all"} />
            All
          </calcite-label>
          <calcite-label layout="inline">
            <calcite-radio-button oncalciteRadioButtonChange={handleSolar} checked={plantTypeFilter === "solar"} />
            Solar
          </calcite-label>
          <calcite-label layout="inline">
            <calcite-radio-button oncalciteRadioButtonChange={handleOil} checked={plantTypeFilter === "oil"} />
            Oil
          </calcite-label>
        </calcite-block>

        <calcite-block collapsible expanded heading="Chart projections">
          <calcite-label layout="inline">
            <calcite-checkbox oncalciteCheckboxChange={handlePieChange} checked={showPieChart}></calcite-checkbox>
            Show pie chart
          </calcite-label>
          <calcite-label layout="inline">
            <calcite-checkbox oncalciteCheckboxChange={handleBoxChange} checked={showBoxPlot}></calcite-checkbox>
            Show box plot
          </calcite-label>
        </calcite-block>

        <calcite-notice open slot="footer">
          <div slot="message">
            More customization options can be added, like a calcite slider for layer transparency.
          </div>
        </calcite-notice>
      </calcite-panel>
    </calcite-shell-panel>
  );
}
