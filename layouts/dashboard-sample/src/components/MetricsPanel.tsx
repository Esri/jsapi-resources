import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-meter";
import "@esri/calcite-components/components/calcite-block";

interface MetricsPanelProps {
  title: string;
  value: number | string;
  percent: number;
  color?: string;
}

export default function MetricsPanel({ title, value, percent, color }: MetricsPanelProps) {
  return (
    <calcite-panel heading={title} className="metric-card">
      <div className="metric-value">{value}</div>
      <calcite-meter type="determinate" value={percent} color={color} />
    </calcite-panel>
  );
}
