import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";
import "@esri/calcite-components/components/calcite-action-bar";
import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-dialog";
import "@esri/calcite-components/components/calcite-navigation-logo";

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleMode: () => void;
  mode: "dark" | "light";
}

export default function Header({ onToggleSidebar, onToggleMode, mode }: HeaderProps) {
  return (
    <calcite-navigation
      id="dashboard-nav"
      slot="header"
      navigation-action
      oncalciteNavigationActionSelect={onToggleSidebar}
    >
      <calcite-navigation-logo slot="logo" heading="Global Power Plants"></calcite-navigation-logo>
      <calcite-action icon="hamburger" text="Toggle sidebar"></calcite-action>
      <calcite-action-bar layout="horizontal" expand-disabled slot="content-end">
        <calcite-action text="Toggle mode" icon={mode === "dark" ? "moon" : "brightness"} onClick={onToggleMode} />
        <calcite-action text="About this application" icon="information" id="aboutButton" />
      </calcite-action-bar>
    </calcite-navigation>
  );
}
