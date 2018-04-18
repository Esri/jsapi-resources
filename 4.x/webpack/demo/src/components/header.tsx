import * as React from "react";

const CSS = {
  base: "top-nav fade-in",
  title: "top-nav-title margin-left-1",
  titlePhoneHide: "phone-hide"
};

export const Header = (props: any) =>
  <header className={CSS.base}>
    <span className={CSS.title}>ArcGIS <span className={CSS.titlePhoneHide}>{props.appName}</span></span>
  </header>