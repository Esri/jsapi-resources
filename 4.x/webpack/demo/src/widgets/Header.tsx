import { tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "top-nav",
  title: "top-nav-title"
};

interface HeaderProperties {
  appName: string;
}

export const Header = (props: HeaderProperties) => (
  <header class={CSS.base}>
    <span class={CSS.title}>ArcGIS {props.appName}</span>
  </header>
);
