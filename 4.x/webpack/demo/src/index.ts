/// <reference types="arcgis-js-api" />

import ArcGISMap from 'esri/Map';
import MapView from 'esri/views/MapView';

import FeatureLayer from 'esri/layers/FeatureLayer';
import Expand from 'esri/widgets/Expand';

import FeatureFilter from 'esri/views/layers/support/FeatureFilter';

let floodLayerView: __esri.FeatureLayerView;

// flash flood warnings layer
const layer = new FeatureLayer({
    portalItem: {
        id: 'f9e348953b3848ec8b69964d5bceae02',
    },
    outFields: ['SEASON'],
});

const map = new ArcGISMap({
    basemap: 'gray-vector',
    layers: [layer],
});

const view = new MapView({
    map: map,
    container: 'viewDiv',
    center: [-98, 40],
    zoom: 4,
});

const seasonsElement = document.getElementById('seasons-filter') as HTMLElement;

// click event handler for seasons choices
seasonsElement.addEventListener('click', filterBySeason);

// User clicked on Winter, Spring, Summer or Fall
// set an attribute filter on flood warnings layer view
// to display the warnings issued in that season
function filterBySeason(event: Event) {
    const selectedSeason = (event?.target as HTMLElement).getAttribute(
        'data-season'
    );
    floodLayerView.filter = new FeatureFilter({
        where: "Season = '" + selectedSeason + "'",
    });
}

view.whenLayerView(layer).then(function (layerView) {
    // flash flood warnings layer loaded
    // get a reference to the flood warnings layerview
    floodLayerView = layerView;

    // set up UI items
    seasonsElement.style.visibility = 'visible';
    const seasonsExpand = new Expand({
        view: view,
        content: seasonsElement,
        expandIconClass: 'esri-icon-filter',
        group: 'top-left',
    });
    //clear the filters when user closes the expand widget
    seasonsExpand.watch('expanded', function () {
        if (!seasonsExpand.expanded) {
            // set it to an empty filter
            floodLayerView.filter = new FeatureFilter();
        }
    });
    view.ui.add(seasonsExpand, 'top-left');
    view.ui.add('titleDiv', 'top-right');
});
