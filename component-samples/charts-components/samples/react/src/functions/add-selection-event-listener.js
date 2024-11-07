/**
 * Adds an event listener to the chart element that listens for the "arcgisSelectionComplete" event. 
 * This will enable or disable the Clear Selection and Filter by Selection buttons in the action bar based on the selection state.
 */
export function addSelectionEventListener(chartElement, actionBarId) {
  chartElement.addEventListener("arcgisSelectionComplete", (event) => {
    const actionBarElement = document.getElementById(actionBarId);

    const selectionData = event.detail;
    if (selectionData.selectionOIDs === undefined || selectionData.selectionOIDs.length === 0) {
      actionBarElement.clearSelectionState = "disabled";
      actionBarElement.filterBySelectionState = "disabled";
    } else {
      actionBarElement.clearSelectionState = "enabled";
      actionBarElement.filterBySelectionState = "enabled";
    }
  });
}