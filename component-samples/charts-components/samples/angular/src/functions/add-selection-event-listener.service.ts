// add-selection-event-listener.service.ts
export function addSelectionEventListener(
  chartElement: HTMLElement,
  actionBarId: string
): void {
  chartElement.addEventListener("arcgisSelectionComplete", (event: Event) => {
    const customEvent = event as CustomEvent;
    const actionBarElement = document.getElementById(actionBarId) as HTMLArcgisChartsActionBarElement;

    if (actionBarElement) {
      const selectionData = customEvent.detail;
      if (selectionData.selectionOIDs === undefined || selectionData.selectionOIDs.length === 0) {
        actionBarElement.clearSelectionState = "disabled";
        actionBarElement.filterBySelectionState = "disabled";
      } else {
        actionBarElement.clearSelectionState = "enabled";
        actionBarElement.filterBySelectionState = "enabled";
      }
    } else {
      console.warn(`Action bar element with ID ${actionBarId} not found`);
    }
  });
}