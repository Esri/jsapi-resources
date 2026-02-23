import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";
import "@esri/calcite-components/components/calcite-action-pad";
import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-notice";
import "@esri/calcite-components/components/calcite-link";

export default function Header(_props: { hasChanges?: boolean }) {
  return (
    <calcite-navigation slot="header" id="nav">
      <calcite-navigation-logo
        id="demo-nav"
        icon="chord-diagram"
        alt="Application logo"
        slot="logo"
        heading="LA Olympics 2028"
        class="calcite-mode-dark"
      />

      <calcite-notice
        open
        icon="information"
        slot="content-end"
        style={{
          marginInlineEnd: "0.75rem",
        }}
        scale="s"
      >
        <div slot="title">
          <calcite-link href="https://tickets.la28.org/?utm_source=la28&utm_medium=referral&utm_campaign=2512_ticketing_tktregd1&utm_content=la28-all-fans_drop1-reg-link-pink-banner&c_src=WRF2601tktregd106GE">
            Sale begins 2026
          </calcite-link>
        </div>

        <calcite-action icon="launch" slot="actions-end" />
      </calcite-notice>
    </calcite-navigation>
  );
}
