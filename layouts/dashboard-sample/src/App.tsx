import { useContext, useEffect, useRef, useState } from "react";
import Charts from "./components/Charts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import MetricsPanel from "./components/MetricsPanel";
import Sidebar from "./components/Sidebar";
import { AppContext } from "./context/AppContext";

import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-shell-panel";

import "./App.css";

export default function App() {
  const { metrics, plantTypeFilter, setPlantTypeFilter } = useContext(AppContext);
  const [collapsed, setCollapsed] = useState(false);
  const [mode, setMode] = useState<"dark" | "light">("light");
  const [showPieChart, setShowPieChart] = useState(true);
  const [showBoxPlot, setShowBoxPlot] = useState(false);

  const mapRef = useRef<HTMLArcgisMapElement | null>(null);

  const mapItemId = mode === "light" ? "620bb22d97c642b998b4266a4d970ad0" : "5dac87f99fd74738b2e60a38a99f0cd9";

  return (
    <div className={`dashboard-root calcite-mode-${mode}`}>
      <calcite-shell>
        <Header
          mode={mode}
          onToggleSidebar={() => setCollapsed(!collapsed)}
          onToggleMode={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
        />
        <Sidebar
          collapsed={collapsed}
          plantTypeFilter={plantTypeFilter}
          onPlantTypeChange={(type) => setPlantTypeFilter(type)}
          showPieChart={showPieChart}
          showBoxPlot={showBoxPlot}
          onShowPieChartChange={setShowPieChart}
          onShowBoxPlotChange={setShowBoxPlot}
        />

        <div className="dashboard-main">
          <div className="metric-row">
            <MetricsPanel title="Total number of plants" value={metrics?.totalPlants || 0} percent={100} />
            <MetricsPanel
              title="% of renewable plants"
              value={`${metrics?.renewablePercent || 0}%`}
              percent={metrics?.renewablePercent || 0}
            />
            <MetricsPanel
              title="% of non-renewable plants"
              value={`${metrics?.nonRenewablePercent || 0}%`}
              percent={metrics?.nonRenewablePercent || 0}
            />
          </div>

          <div className="map-panel">
            <Map ref={mapRef} itemId={mapItemId} />
          </div>

          <calcite-shell-panel slot="panel-bottom" layout="horizontal" resizable position="end">
            <calcite-panel>
              <div className="charts-row">
                {showPieChart && <Charts layerItemId="6fea417194a0475d8306e24c14220081" chartIndex={0} />}
                {showBoxPlot && <Charts layerItemId="6fea417194a0475d8306e24c14220081" chartIndex={1} />}
              </div>
            </calcite-panel>
          </calcite-shell-panel>
        </div>
        <calcite-popover
          heading="About this dashboard"
          label="About this dashboard"
          referenceElement="aboutButton"
          placement="top"
          offsetDistance={10}
          closable
        >
          <div className="popover-content">
            <p>
              This dashboard visualizes global power plant data using the ArcGIS Maps SDK for JavaScript and Esri
              Calcite Components.
            </p>
            <p>
              Use the sidebar filters to explore renewable and non-renewable plant types and compare metrics and charts.
            </p>
          </div>
        </calcite-popover>

        <Footer lastUpdated={new Date()} mapSource="ArcGIS Online, World Imagery" />
      </calcite-shell>
    </div>
  );
}
