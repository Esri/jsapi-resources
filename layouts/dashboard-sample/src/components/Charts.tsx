import "@arcgis/charts-components/components/arcgis-chart";
import "@arcgis/charts-components/components/arcgis-charts-action-bar";

import { useEffect, useRef } from "react";

interface ChartsProps {
  layerItemId: string;
  chartIndex: number;
}

export default function Charts({ layerItemId, chartIndex }: ChartsProps) {
  const chartRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const chartElement = chartRef.current;

    if (!chartElement) {
      return;
    }
  }, [layerItemId, chartIndex]);

  return (
    <arcgis-chart
      ref={chartRef}
      layerItemId={layerItemId}
      chartIndex={chartIndex}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
