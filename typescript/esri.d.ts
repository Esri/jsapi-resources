// Type definitions for ArcGIS API for JavaScript version 3.9
// Project: http://js.arcgis.com
// Updated: Tue Apr 08 2014

declare module "esri" {
  import Graphic = require("esri/graphic");
  import Point = require("esri/geometry/Point");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");
  import ImageParameters = require("esri/layers/ImageParameters");
  import ImageServiceParameters = require("esri/layers/ImageServiceParameters");
  import InfoTemplate = require("esri/InfoTemplate");
  import Basemap = require("esri/dijit/Basemap");
  import Extent = require("esri/geometry/Extent");
  import TileInfo = require("esri/layers/TileInfo");
  import BasemapLayer = require("esri/dijit/BasemapLayer");
  import BookmarkItem = require("esri/dijit/BookmarkItem");
  import Units = require("esri/units");
  import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
  import RouteParameters = require("esri/tasks/RouteParameters");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
  import Color = require("esri/Color");
  import Font = require("esri/symbols/Font");
  import LineSymbol = require("esri/symbols/LineSymbol");
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");
  import SpatialReference = require("esri/SpatialReference");
  import Symbol = require("esri/symbols/Symbol");
  import Layer = require("esri/layers/layer");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import LOD = require("esri/layers/LOD");
  import FillSymbol = require("esri/symbols/FillSymbol");
  import PrintTemplate = require("esri/tasks/PrintTemplate");
  import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
  import WMTSLayerInfo = require("esri/layers/WMTSLayerInfo");

  export interface AGSMouseEvent extends MouseEvent {
    graphic?: Graphic;
    mapPoint: Point;
    screenPoint: ScreenPoint;
  }
  export interface AddOptions {
    /** The features that were added to the feature layer. */
    addedGraphics?: Graphic[];
    /** The feature layer where the new feature(s) are added. */
    featureLayer?: FeatureLayer;
  }
  export interface AggregatePointsOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from pointLayer based on which the points will be grouped. */
    groupByField?: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints?: boolean;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: FeatureLayer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: FeatureLayer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: FeatureLayer[];
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of attribute field names and statistic types that you would like to aggregate for all points within each polygon. */
    summaryFields?: string[];
  }
  export interface ArcGISDynamicMapServiceLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
    /** Id to assign to the layer. */
    id?: string;
    /** Represents the image parameter options. */
    imageParameters?: ImageParameters;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage?: boolean;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface ArcGISImageServiceLayerOptions {
    /** Id to assign to the layer. */
    id?: string;
    /** The image service parameter options used when exporting an Image Service layer. */
    imageServiceParameters?: ImageServiceParameters;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate?: InfoTemplate;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage?: boolean;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface ArcGISTiledMapServiceLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Lists which levels to draw. */
    displayLevels?: number;
    /** Id to assign to the layer. */
    id?: string;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** Array of REST endpoints that can be used to retrieve tile images. */
    tileServers?: string[];
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface AttributeInspectorOptions {
    /** Array of layer info objects with the following properties. */
    layerInfos: any[];
  }
  export interface AttributionOptions {
    /** String used as the delimiter between attribution items. */
    itemDelimiter?: string;
    /** Reference to the map object. */
    map: Map;
  }
  export interface BasemapGalleryOptions {
    /** List of basemap layer ids in the current map. */
    basemapIds?: string[];
    /** An array of user-defined basemaps to display in the BasemapGallery. */
    basemaps?: Basemap[];
    /** Specify an ArcGIS.com group that contains web maps that will be used as basemaps in the gallery. */
    basemapsGroup?: any;
    /** Specify your Bing Maps key if the basemap group you want to display in the gallery contains bing basemaps. */
    bingMapsKey?: string;
    /** Reference to the map. */
    map: Map;
    /** Specify the portal url, including the instance name, used to access the group that contains the basemap gallery items. */
    portalUrl?: string;
    /** List of reference layer ids in the current map. */
    referenceIds?: string[];
    /** When true, queries ArcGIS.com to retrieve available basemaps. */
    showArcGISBasemaps?: boolean;
  }
  export interface BasemapLayerOptions {
    /** If the url points to an image service, you can specify which band ids will display. */
    bandIds?: number[];
    /** Define attribution information for the layer to be used by the Attribution widget. */
    copyright?: string;
    /** If the url points to a cached map service you can specify the levels to draw. */
    displayLevels?: number[];
    /** Specify the full extent of the layer. */
    fullExtent?: Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: Extent;
    /** Set to true if the layer is a reference layer and should be drawn on top of all other layers in the map. */
    isReference?: boolean;
    /** Initial opacity or transparency of the basemap layer. */
    opacity?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: TileInfo;
    /** Define additional tile server domains for the layer. */
    tileServer?: string[];
    /** The type of layer, valid values are "BingMapsAerial", "BingMapsHybrid", "BingMapsRoad", "OpenStreetMap", or "WebTiledLayer". */
    type?: string;
    /** URL to the ArcGIS Server REST resource that represents a map or image service. */
    url?: string;
    /** If the url points to a dynamic map service you can specify a subset of layers to display. */
    visibleLayers?: number[];
  }
  export interface BasemapOptions {
    /** The id of the basemap. */
    id?: string;
    /** An array of layers to add to the basemap. */
    layers: BasemapLayer[];
    /** A URL to a thumbnail image for the basemap that will be displayed in the BasemapGallery. */
    thumbnailUrl?: string;
    /** Title for the basemap. */
    title?: string;
  }
  export interface BasemapToggleOptions {
    /** The secondary basemap to toggle to. */
    basemap?: string;
    /** Object containing the labels and URLs for the image of each basemap. */
    basemaps?: any;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface BookmarksOptions {
    /** An array of BookmarkItem objects or a json object with the BookmarkItem format to initially display in the bookmark widget. */
    bookmarks?: BookmarkItem[];
    /** When true, users can add, remove and edit bookmark items. */
    editable?: boolean;
    /** Reference to the map. */
    map: Map;
  }
  export interface CSVLayerOptions {
    /** The column delimiter. */
    columnDelimiter?: string;
    /** Copyright information for the layer. */
    copyright?: string;
    /** The fields property contains objects with "name", "alias" and "type" String properties. */
    fields?: any[];
    /** The latitude field name. */
    latitudeFieldName?: string;
    /** The longitude field name. */
    longitudeFieldName?: string;
  }
  export interface CircleOptions1 {
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** Radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: Units;
  }
  export interface CircleOptions2 {
    /** The center point of the circle. */
    center: any;
    /** Applicable when the spatial reference of the center point is either set to Web Mercator or geographic/geodesic as true would apply. */
    geodesic?: boolean;
    /** A circle can be thought of similar to a polygon. */
    numberOfPoints?: number;
    /** The radius of the circle. */
    radius?: number;
    /** Unit of the radius. */
    radiusUnit?: Units;
  }
  export interface CreateBuffersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of buffer distances to buffer the input feature layer. */
    bufferDistance?: number[];
    /** The input point, line, or polygon feature layer to be buffered. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: string;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface CreateDriveTimeAreasOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The units of the breakValues parameter. */
    breakUnits?: string;
    /** An array of driving time break values. */
    breakValues?: number[];
    /** The point feature layer around which drive-time areas will be drawn. */
    inputLayer: FeatureLayer;
    /** The geometry type of the input layer. */
    inputType?: string;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The rule of overlap. */
    overlapPolicy?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface CutOptions {
    /** The feature(s) added to the feature layer by the cut operation. */
    addedGraphics?: Graphic[];
    /** The feature layer that contains the cut feature(s). */
    featureLayer?: FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) before the cut operation is performed. */
    preUpdatedGraphics?: Graphic[];
  }
  export interface DeleteOptions {
    /** The features that were removed from the feature layer. */
    deletedGraphics?: Graphic[];
    /** The feature layer from which the feature(s) are removed. */
    featureLayer?: FeatureLayer;
  }
  export interface DirectionsOptions {
    /** Defines the values that label each stop. */
    alphabet?: any;
    /** Display the 'Add Destination' button. */
    canModifyStops?: boolean;
    /** Center the map at the start of the selected route segment. */
    centerAtSegmentStart?: boolean;
    /** Enable the dragging of stop locations on the map. */
    dragging?: boolean;
    /** Focus the cursor in the stop input when a new stop is added. */
    focusOnNewStop?: boolean;
    /** The symbol that is used to denote the start location on the map. */
    fromSymbol?: PictureMarkerSymbol;
    /** The symbol that displays when the from location is dragged to a new location. */
    fromSymbolDrag?: PictureMarkerSymbol;
    /** Define optional geocoder options view the Geocoder help for details on the object properties. */
    geocoderOptions?: any;
    /** Specify the service that will be used to find locations. */
    locatorUrl?: string;
    /** Reference to the map object. */
    map?: Map;
    /** Specify the input parameters for the route task. */
    routeParams?: RouteParameters;
    /** Define the symbol used to draw the route on the map. */
    routeSymbol?: SimpleLineSymbol;
    /** Specify the service that will be used to calculate directions. */
    routeTaskUrl?: string;
    /** Define the info template for the popup that appears when the popup for a route segment is displayed. */
    segmentInfoTemplate?: InfoTemplate;
    /** Specify the symbol used to render the individual route segments that display on the map when a direction step is clicked. */
    segmentSymbol?: SimpleLineSymbol;
    /** When true the 'Print' button is displayed that allows users to display driving directions in a print page. */
    showPrintPage?: boolean;
    /** Display the 'Show Reverse Stops' button. */
    showReverseStopsButton?: boolean;
    /** Highlight the route segment when a directions step is clicked. */
    showSegmentHighlight?: boolean;
    /** Display a popup with segment details when a direction step is clicked. */
    showSegmentPopup?: boolean;
    /** An array of points that define the stop locations. */
    stops?: any;
    /** Define the info template for the popup that appears when a stop is clicked. */
    stopsInfoTemplate?: InfoTemplate;
    /** The symbol that displays on the map for the locations between the origin and final destination locations. */
    stopSymbol?: PictureMarkerSymbol;
    /** The symbol that displays when an intermediate location is dragged to a new location. */
    stopSymbolDrag?: PictureMarkerSymbol;
    /** The text color for the text that appears for each destination. */
    textSymbolColor?: Color;
    /** The font used for the text that displays on the map for each stop location. */
    textSymbolFont?: Font;
    /** Define an x and/or y offset for the text symbols that are used for the stop locations on the map. */
    textSymbolOffset?: any;
    /** Specify a theme for the widget. */
    theme?: string;
    /** The symbol that is used to denote the final destination location on the map. */
    toSymbol?: PictureMarkerSymbol;
    /** The symbol that displays when an final destination location is dragged to a new location. */
    toSymbolDrag?: PictureMarkerSymbol;
  }
  export interface DissolveBoundariesOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of field names based on which polygons are merged. */
    dissolveFields?: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of field names and statistical summary types that you wish to calculate from the polygons that are dissolved together. */
    summaryFields?: string[];
  }
  export interface DotDensityRendererOptions {
    /** The color to be used for the background of the symbol. */
    backgroundColor?: Color;
    /** The shape to be used for the dot. */
    dotShape?: string;
    /** The size of the dot in pixels. */
    dotSize: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline?: LineSymbol;
  }
  export interface DrawOptions {
    /** Determines how much time to wait before adding a new point when using a freehand tool. */
    drawTime?: number;
    /** If true, tooltips are displayed when creating new graphics with the draw toolbar. */
    showTooltips?: boolean;
    /** Determines how far the mouse moves before adding a new point when using one of the freehand tools. */
    tolerance?: number;
    /** Determines how far to offset the tool tip from the mouse pointer. */
    tooltipOffset?: number;
  }
  export interface DriveBufferOptions {
    /** The radii to use to create ring buffers */
    radius: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface EditOptions {
    /** Specifies whether users can add new vertices. */
    allowAddVertices?: boolean;
    /** Specifies whether users can delete vertices. */
    allowDeletevertices?: boolean;
    /** Line symbol used to draw the guild lines, displayed when moving vertices. */
    ghostLineSymbol?: LineSymbol;
    /** Marker symbol used to display the insertable vertices. */
    ghostVertexSymbol?: MarkerSymbol;
    /** If users want to place the text symbol editor to a user defined HTML element. */
    textSymbolEditorHolder?: any;
    /** When true, if the geometry is re-sized the aspect ration will be preserved. */
    uniformScaling?: boolean;
    /** Marker symbol used to draw the vertices. */
    vertexSymbol?: MarkerSymbol;
  }
  export interface EditorOptions {
    /** Create a new settings object that defines the capabilities of the widget. */
    settings?: any;
  }
  export interface EnrichLayerOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An buffer distance or driving time value to buffer the input feature layer. */
    distance?: number;
    /** The input feature layer to enrich with new data. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** When true, you can specify a time for traffic condition under Define areas to enrich - Driving Time. */
    showTrafficWidget?: boolean;
  }
  export interface ExtractDataOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** If true, the Clip features option in Study area will be ckecked. */
    clip?: boolean;
    /** The format of output data shown as the default selection in the Output data format menu. */
    dataFormat?: string;
    /** An array for feature layers to be extracted. */
    featureLayers: FeatureLayer[];
    /** An array for feature layers to be extracted. */
    inputLayers?: FeatureLayer[];
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FeatureLayerOptions {
    /** Enable or disable the auto generalization of features from a non-editable layer in on-demand mode. */
    autoGeneralize?: boolean;
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** When true, graphics are displayed during panning. */
    displayOnPan?: boolean;
    /** Set a callback function that will be invoked by  FeatureLayer.getEditSummary. */
    editSummaryCallback?: Function;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
    /** Unique ID to assign to the layer. */
    id?: string;
    /** The template that defines the content to display in the map info window when the user clicks on a feature. */
    infoTemplate?: InfoTemplate;
    /** The maximum allowable offset, only applicable for layers that are not editable. */
    maxAllowableOffset?: number;
    /** The query mode for the feature layer. */
    mode?: number;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** One or more fields used to order features by - for queries as well as rendering. */
    orderByFields?: string[];
    /** An array of strings which correspond to fields to include in the FeatureLayer. */
    outFields?: string[];
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Specify the metadata of the layer. */
    resourceInfo?: any;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
    /** Specify the size of the virtual tiles, used in on-demand mode. */
    tileHeight?: number;
    /** Specify the size of the virtual tiles, used in on-demand mode. */
    tileWidth?: number;
    /** The name of the trackIdField. */
    trackIdField?: string;
    /** When true, the layer will update its content based on the map's time extent. */
    useMapTime?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface FindHotSpotsOptions {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: FeatureLayer[];
    /** The numeric field in the AnalysisLayer that will be analyzed. */
    analysisField?: string;
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: FeatureLayer[];
    /** When true, make process info to get analysis report. */
    isProcessInfo?: boolean;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FindNearestOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer from which the nearest features are found. */
    analysisLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount?: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: FeatureLayer;
    /** An array of near layer candidates. */
    nearLayers: FeatureLayer[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** The maximum range to search for nearest locations from each feature in the analysisLayer. */
    searchCutoff?: number;
    /** The units of the searchCutoff parameter. */
    searchCutoffUnits?: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  export interface FindTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface GalleryOptions {
    /** An array of items, see example below. */
    items: any[];
    /** Display the title for each item in the gallery. */
    showTitle?: boolean;
    /** Specify the size of the gallery's thumbnail image. */
    thumbnailStyle?: string;
  }
  export interface GaugeOptions {
    /** Text to display at the bottom of the gauge. */
    caption?: string;
    /** Color used for the arc indicator on the gauge. */
    color?: string;
    /** Name of the attribute field used to drive the gauge. */
    dataField?: string;
    /** Either "value" or "percentage". */
    dataFormat?: string;
    /** Name of the attribute field used to display a feature name on the gauge. */
    dataLabelField?: string;
    /** When true, the gauge is created with JSON from an ArcGIS Online webmap. */
    fromWebmap?: boolean;
    /** A esri.layers.GraphicsLayer or esri.layers.FeatureLayer used to drive the gauge. */
    layer?: GraphicsLayer;
    /** Maximum value that will be displayed on the gauge. */
    maxDataValue?: number;
    /** The text to display when a feature does not not a value for the dataLabelField. */
    noDataLabel?: string;
    /** Object passed to dojo.number.format to specify how data values are formatted. */
    numberFormat?: any;
    /** Text displayed above the gauge. */
    title?: string;
    /** What to dsiplay after the value of the currently selected feature. */
    unitLabel?: string;
  }
  export interface GenerateRendererTaskOptions {
    /** Prior to ArcGIS Server 10.2, map server/feature service only sample 1000 features to generate the renderer when using GenerateRenderer operation, which mean if there are more than 1000 features, it may run into the case that some feature will not be categorized into any breaks/unique values. */
    checkValueRange?: boolean;
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface GeoRSSLayerOptions {
    /** The template used to display popup window for identify operation. */
    infoTemplate?: InfoTemplate;
    /** The output spatial reference for the GeoRSSLayer. */
    outSpatialReference?: SpatialReference;
    /** The default symbol use to display point features. */
    pointSymbol?: Symbol;
    /** The default symbol used to display polygon features. */
    polygonSymbol?: Symbol;
    /** The default symbol used to display polyline features. */
    polylineSymbol?: Symbol;
  }
  export interface GeocoderOptions {
    /** By default, the Geocoder widget uses the Esri World Locator to find search locations. */
    arcgisGeocoder?: any;
    /** When false, the geocoder will not display the auto-complete results menu. */
    autoComplete?: boolean;
    /** When false, the geolocator will not navigate to the result after selection or search. */
    autoNavigate?: boolean;
    /** When false, the geocoder menu will not be displayed when more than one geocoder is set. */
    geocoderMenu?: boolean;
    /** Defines the geocoders that will be used by the Geocoder widget. */
    geocoders?: any[];
    /** Reference to the map. */
    map: Map;
    /** Maximum number of results to return. */
    maxLocations?: number;
    /** Minimum number of characters entered into the search field before querying for results. */
    minCharacters?: number;
    /** Number of milliseconds before querying for results will begin. */
    searchDelay?: number;
    /** When false, the geocoder will not show search suggestions while typing. */
    showResults?: boolean;
    /** Specify a theme for the geocoder. */
    theme?: string;
    /** Start the geocoder with a default value. */
    value?: string;
    /** Scale to zoom to when geocoder does not return an extent. */
    zoomScale?: number;
  }
  export interface GraphicsLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** List of attribute fields to be added as custom data attributes to graphics node. */
    dataAttributes?: any;
    /** When true, graphics are displayed during panning. */
    displayOnPan?: boolean;
    /** Id to assign to the layer. */
    id?: string;
    /** The info template for the layer. */
    infoTemplate?: InfoTemplate;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** Indicates whether the layer is responsible for styling graphics. */
    styling?: boolean;
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface Handle {
    /** Remove the listener */
    remove(): void;
  }
  export interface HistogramTimeSliderOptions {
    /** Change color of histogram bars, default is "rgb(5, 112, 176)".color: "#555555" */
    color?: string;
    /** Formats dates displayed by histogram slider.dateFormat: "DateFormat(selector: 'date', fullYear: true)" */
    dateFormat?: string;
    /** Array of feature layers to be used by slider. */
    layers?: Layer[];
    /** With a stream layer, when the number of points on the map exceeds the maximum number allowed, this histogram will start removing bins at the beginning of the array if in the "show_partial" mode. */
    mode?: string;
    /** Sets resolution for histogram slider (seconds/minutes/hours/etc) using Esri date formats. */
    timeInterval?: string;
  }
  export interface HomeButtonOptions {
    /** The extent used to zoom to when clicked. */
    extent?: Extent;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface IdentifyTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface KMLLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** The output spatial reference for the KMLLayer. */
    outSR?: SpatialReference;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
  }
  export interface LayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** When true, the layer's attribution is displayed on the map. */
    showAttribution?: boolean;
  }
  export interface LayerSwipeOptions {
    /** The number of pixels to clip the swipe tool. */
    clip?: number;
    /** If the widget is enabled and layers can be swiped. */
    enabled?: boolean;
    /** The layers to be swiped. */
    layers: Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left?: number;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme?: string;
    /** The number of pixels to place the tool from the top of the map. */
    top?: number;
    /** Type of swipe tool to use. */
    type?: string;
  }
  export interface LegendOptions {
    /** Specify the alignment of the legend within the HTML element where the legend is rendered. */
    arrangement?: number;
    /** When false, the legend will not automatically update if the map changes scale or when layers are added are removed from the map. */
    autoUpdate?: boolean;
    /** Specify a subset of the layers in the map to display in the legend. */
    layerInfos?: any[];
    /** Reference to the map. */
    map: Map;
    /** When true the legend will update with every scale change and displays only the layers and sub layers that are visible in the current map scale. */
    respectCurrentMapScale?: boolean;
  }
  export interface LocateButtonOptions {
    /** Centers the map to the location when a new position is returned. */
    centerAt?: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions?: any;
    /** If highlightLocation is on and this property is set then a graphic will be added to this layer instead of map.graphics. */
    graphicsLayer?: GraphicsLayer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation?: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate?: InfoTemplate;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** The scale to zoom to when a users location has been found. */
    scale?: number;
    /** Sets the maps scale when a new position is returned. */
    setScale?: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol?: Symbol;
    /** Class used for styling the widget. */
    theme?: string;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking?: boolean;
    /** Whether the widget is visible by default. */
    visible?: boolean;
  }
  export interface MapImageOptions {
    /** Specfiy an extent for the image. */
    extent?: Extent;
    /** Specify the url of the image. */
    href?: string;
  }
  export interface MapOptions {
    /** Width of the attribution node relative to the map width. */
    attributionWidth?: number;
    /** When true the map will automatically resize when the browser window is resized or when the ContentPane widget enclosing the map is resized. */
    autoResize?: boolean;
    /** Specify a basemap for the map. */
    basemap?: string;
    /** The location where the map should be centered. */
    center?: any;
    /** When true, graphics are displayed during panning. */
    displayGraphicsOnPan?: boolean;
    /** If provided, the extent and projection of the map is set to the properties of Extent. */
    extent?: Extent;
    /** When true a fade effect is enabled for supported layers. */
    fadeOnZoom?: boolean;
    /** When true, for maps that contain tiled map service layers, you are guaranteed to have the initial extent defined using the extent constructor option shown completely on the map. */
    fitExtent?: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms?: boolean;
    /** By default the map creates and uses an out-of-the-box Popup. */
    infoWindow?: InfoWindowBase;
    /** If provided, the map is initialized with the specified levels of detail. */
    lods?: LOD[];
    /** Display the esri logo on the map. */
    logo?: boolean;
    /** Maximum visible scale of the map. */
    maxScale?: number;
    /** Maximum map zoom level. */
    maxZoom?: number;
    /** Minimum visible scale of the map. */
    minScale?: number;
    /** Minimum map zoom level. */
    minZoom?: number;
    /** Displays pan buttons on map. */
    nav?: boolean;
    /** Specify whether or not to use CSS3 transformations when panning and zooming. */
    navigationMode?: string;
    /** Default value is true, indicating that the map will skip panning animation when calling map.centerAt() or map.setExtent() (for map.setExtent(), the animation is only skipped if the map's zoom level is not changing) if the panning distance is twice the distance of the current extent. */
    optimizePanAnimation?: boolean;
    /** Specify a time period in milliseconds to ignore repeated calls to the resize method. */
    resizeDelay?: number;
    /** Initial map scale. */
    scale?: number;
    /** Enable or disable map attribution display. */
    showAttribution?: boolean;
    /** The default behavior is to show an InfoWindow if the Graphic has a defined InfoTemplate when the user clicks on the graphic. */
    showInfoWindowOnClick?: boolean;
    /** Displays a slider on the map. */
    slider?: boolean;
    /** Define labels for the slider. */
    sliderLabels?: string[];
    /** Orientation of the zoom slider. */
    sliderOrientation?: string;
    /** Position of the zoom slider within the map control. */
    sliderPosition?: string;
    /** Defines the slider style. */
    sliderStyle?: string;
    /** When true, for Apple computers with a trackpad or magic mouse use, swipe pans instead of zooming. */
    smartNavigation?: boolean;
    /** When true, supports continuous pan across the dateline. */
    wrapAround180?: boolean;
    /** Initial zoom level of the map. */
    zoom?: number;
  }
  export interface MeasurementOptions {
    /** The default area unit for the measure area tool. */
    defaultAreaUnit?: Units;
    /** The default length unit for the measure distance tool. */
    defaultLengthUnit?: Units;
    /** Line symbol used to draw the lines for the measure line and measure distance tools. */
    lineSymbol?: SimpleLineSymbol;
    /** Reference to the map. */
    map: Map;
    /** Marker symbol used to draw the points for the measure line tool. */
    pointSymbol?: MarkerSymbol;
  }
  export interface MergeLayersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: FeatureLayer[];
    /** An array of values that describe how fields from the mergeLayer are to be modified. */
    mergingAttributes?: string[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
  }
  /** Constants representing how the geometry is returned. */
  export interface NAOutputLine {
    /** Do not return geometries. */
    NONE: any;
    /** Return polylines containing striaght lines between input locations. */
    STRAIGHT: any;
    /** Return polylines based on the underlying street geometries. */
    TRUE_SHAPE: any;
    /** Return polylines based on the underlying street geometries with the M values set based on the accumulated impedance at each vertex. */
    TRUE_SHAPE_WITH_MEASURE: any;
  }
  /** Constants representing how the geometry is returned. */
  export interface NAOutputPolygon {
    /** Detailed output polygons */
    DETAILED: any;
    /** No output polygons */
    NONE: any;
    /** Simplified output polygons. */
    SIMPLIFIED: any;
  }
  /** Constants representing how the geometry is returned. */
  export interface NATravelDirection {
    /** Travel direction from the facility */
    FROM_FACILITY: any;
    /** Travel direction to the facility */
    TO_FACILITY: any;
  }
  /** Constants representing how U-Turns are handled. */
  export interface NAUTurn {
    /** Allow u-turns at the end of any street. */
    ALLOW_BACKTRACK: any;
    /** Allow u-turns at dead ends and intersections. */
    AT_DEAD_ENDS_AND_INTERSECTIONS: any;
    /** Only allow u-turns at dead ends where a street is not connected to another street. */
    AT_DEAD_ENDS_ONLY: any;
    /** Do not allow u-turns at the end of any streets. */
    NO_BACKTRACK: any;
  }
  export interface OpenStreetMapLayerOptions {
    /** An array of levels at which to draw. */
    displayLevels?: number[];
    /** Id to assign to the layer. */
    id?: string;
    /** Initial opacity or transparency of layer. */
    opacity?: number;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** An array of tile servers */
    tileServers?: string[];
    /** Initial visibility of the layer. */
    visible?: boolean;
  }
  export interface OperationBaseOptions {
    /** Provide information about the operation. */
    label?: string;
    /** Specify the type of operation, for example: "edit" or "navigation". */
    type?: string;
  }
  export interface OverlayLayersOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** The feature layer that will be overlayed with the overlayLayer. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: FeatureLayer[];
    /** Defines how two input layers are combined. */
    overlayType?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** When the distance between features is less than the tolerance, the features in the overlay layer will snap to the features in the input layer. */
    snapToInput?: boolean;
    /** The minimum distance separating all feature coordinates (nodes and vertices) as well as the distance a coordinate can move in X or Y (or both). */
    tolerance?: number;
  }
  export interface OverviewMapOptions {
    /** Specifies which corner of the map to attach the OverviewMap dijit. */
    attachTo?: string;
    /** Specify the base layer for the overview map. */
    baseLayer?: Layer;
    /** Fill color for the extent rectangle. */
    color?: string;
    /** The ratio between the size of the overview map and the extent rectangle displayed on the overview map. */
    expandFactor?: number;
    /** Height of the overview map dijit in screen pixels. */
    height?: number;
    /** Unique identifier for the dijit. */
    id?: string;
    /** Reference to the map. */
    map: Map;
    /** Defines the visibility of the maximize/restore button. */
    maximizeButton?: boolean;
    /** Opacity of the extent rectangle, defined as a number between 0 (invisible) and 1 (opaque). */
    opacity?: number;
    /** Specifies the initial visibility of the overview map. */
    visible?: boolean;
    /** Width of the overview map dijit in screen pixels. */
    width?: number;
  }
  export interface PopupMobileOptions {
    /** Define the symbol used to highlight polygon features. */
    fillSymbol?: FillSymbol;
    /** When true, the feature is highlighted, set to false to disable highlighting. */
    highlight?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: LineSymbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: MarkerSymbol;
    /** Specify the x-offset (in pixels) used when positioning the popup. */
    offsetX?: number;
    /** Specify the y-offset (in pixels) used when positioning the popup. */
    offsetY?: number;
    /** Define the number of levels to zoom in, default value is 4. */
    zoomFactor?: number;
  }
  export interface PopupOptions {
    /** Controls the placement of the popup window with respect to the geographic location. */
    anchor?: string;
    /** Define the symbol used to highlight polygon features. */
    fillSymbol?: FillSymbol;
    /** Indicates whether popup should highlight features. */
    highlight?: boolean;
    /** Indicates whether a feature should remain highlighted after the user closes the popup window. */
    keepHighlightOnHide?: boolean;
    /** Define the symbol used to highlight line features. */
    lineSymbol?: LineSymbol;
    /** Specify the margin (in pixels) to leave to the left of the popup window when it is maximized. */
    marginLeft?: number;
    /** Specify the margin (in pixels) to leave at the top of the popup window when it is maximized. */
    marginTop?: number;
    /** Define the marker symbol used to highlight point features. */
    markerSymbol?: MarkerSymbol;
    /** Specify the x-offset (in pixels) used when positioning the popup. */
    offsetX?: number;
    /** Specify the y-offset (in pixels) used when positioning the popup. */
    offsetY?: number;
    /** Indicates whether popup should display previous and next buttons in the title bar. */
    pagingControls?: boolean;
    /** Indicates whether popup should display the title bar text that contains the page number and total number of available features. */
    pagingInfo?: boolean;
    /** Indicates whether the popup window should be displayed. */
    popupWindow?: boolean;
    /** Indicates whether the feature's title should display within the body of the popup window as opposed to in the titlebar. */
    titleInBody?: boolean;
    /** Define the number of levels to zoom in when the 'Zoom to' link is clicked. */
    zoomFactor?: number;
  }
  export interface PopupTemplateOptions {
    /** Positive or negative offset (in minutes) from UTC. */
    utcOffset?: number;
  }
  export interface PrintOptions {
    /** Set to true if the print service is an asynchronous geoprocessing service. */
    async?: boolean;
    /** The map to  print. */
    map?: Map;
    /** An optional array of user-defined templates. */
    templates?: PrintTemplate[];
    /** The url to an export web map task. */
    url?: string;
  }
  export interface PrintTaskOptions {
    /** Set to true if the print service is an asynchronous geoprocessing service. */
    async?: boolean;
  }
  export interface ProcessorOptions {
    /** Start processing features immediately. */
    autostart?: boolean;
    /** Whether the processor allow the feature layer to draw its features. */
    drawFeatures?: boolean;
    /** Whether the processor do the layer's I/O via a worker. */
    fetchWithWorker?: boolean;
    /** A FeatureLayer or array of FeatureLayers to attach the processor to. */
    layers?: FeatureLayer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: Map;
    /** Whether the processor pass the features through without modification or delay to the FeatureLayer. */
    passFeatures?: boolean;
    /** Whether the processor require Workers to function properly. */
    requireWorkerSupport?: boolean;
  }
  export interface QueryTaskOptions {
    /** Specify the geodatabase version to display. */
    gdbVersion?: string;
  }
  export interface RingBufferOptions {
    /** The radii to use to create ring buffers */
    radii: number[];
    /** The units of the radii. */
    units: string;
  }
  export interface ScaleDependentRendererOptions {
    /** An array of objects where each object defines a renderer and  the zoom or scale range to which it applies. */
    rendererInfos?: any[];
  }
  export interface ScalebarOptions {
    /** Specify the scalebar position on the map. */
    attachTo?: string;
    /** Reference to the map. */
    map: Map;
    /** Specify the style for the scalebar. */
    scalebarStyle?: string;
    /** Specify the scalebar units. */
    scalebarUnit?: string;
  }
  export interface SnappingManagerOptions {
    /** When true, snapping is always enabled. */
    alwaysSnap?: boolean;
    /** Specify an array of layerInfo objects. */
    layerInfos?: any[];
    /** Reference to the map. */
    map: Map;
    /** When alwaysSnap is set to false use this option to define the key users press to enable snapping. */
    snapKey?: any;
    /** Define a symbol for the snapping location. */
    snapPointSymbol?: SimpleMarkerSymbol;
    /** Specify the radius of the snapping circle in pixels. */
    tolerance?: number;
  }
  export interface SpatialIndexOptions {
    /** Start processing features immediately. */
    autostart?: boolean;
    /** Whether the processor allow the feature layer to draw its features. */
    drawFeatures?: boolean;
    /** Whether the processor do the layer's I/O via a worker. */
    fetchWithWorkers?: boolean;
    /** Index system specific options. */
    indexOptions?: any;
    /** The indexing system to use. */
    indexType?: string;
    /** A FeatureLayer or array of FeatureLayers to attach the processor to. */
    layers?: FeatureLayer[];
    /** Uses all FeatureLayers associated with the map in the processor. */
    map?: Map;
    /** Whether the processor pass the features through without modification or delay to the FeatureLayer. */
    passFeatures?: boolean;
    /** Whether the processor require Workers to function properly. */
    requireWorkerSupport?: boolean;
  }
  export interface StreamLayerOptions {
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Rules for purging data from the layer to avoid overloading the browser with too many features. */
    purgeOptions?: any;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
    /** The url to use for connecting to a socket. */
    socketUrl?: string;
  }
  export interface SummarizeNearbyOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** An array of numbers that defines the search distance (for StraightLine or DrivingDistance) or time (for DrivingTime) shown in the distance input in the Find nearest features using a option. */
    distance?: number[];
    /** A field of the summarizeLayer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: Map;
    /** Type of distance measurement shown as the defeault value in the Find nearest features using a option. */
    nearType?: string;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** Type of units shown under the Total Area checkbox in the Add statistics from option. */
    shapeUnits?: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** An array of possible statistics attribute field names and summary types that you wish to calculate for all nearby features. */
    summaryFields?: string[];
    /** The feature layer to be shown selected in the Choose layer to summarize dropdown. */
    summaryLayer?: FeatureLayer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: FeatureLayer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: FeatureLayer;
    /** If true. */
    sumShape?: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units?: string;
  }
  export interface SummarizeWithinOptions {
    /** The URL to the GPServer used to execute an analysis job. */
    analysisGpServer?: string;
    /** A field name from summaryLayer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField?: string;
    /** Reference to the map object. */
    map?: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName?: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl?: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection?: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent?: boolean;
    /** When true, the show credit option is visible. */
    showCredits?: boolean;
    /** When true, the help links will be shown. */
    showHelp?: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder?: boolean;
    /** A list of field names and statistical summary type that you wish to calculate for all features in SummaryLayer that are within each polygon in sumWithinLayer. */
    summaryFields?: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer?: FeatureLayer;
    /** An array of summarize layer candidates. */
    summaryLayers: FeatureLayer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: FeatureLayer;
  }
  export interface TemplatePickerOptions {
    /** Number of visible columns. */
    columns?: number;
    /** Defines the text to be displayed when the template picker does not have any templates to display. */
    emptyMessage?: string;
    /** Array of input feature layers. */
    featureLayers?: FeatureLayer[];
    /** Templates are grouped based on the containing feature layer. */
    grouping?: boolean;
    /** An array of items described using the syntax below. */
    items?: any[];
    /** Length of label description. */
    maxLabelLength?: number;
    /** Number of visible rows. */
    rows?: number;
    /** Tooltip content contains the template name and description. */
    showTooltip?: boolean;
    /** HTML style attributes for the widget. */
    style?: string;
    /** When true, the template picker displays map service legend swatches for feature layers created in selection mode that have an associated map service added to the map as a dynamic map service layer. */
    useLegend?: boolean;
  }
  export interface TimeSliderOptions {
    /** When true, subtracts one second to the time extent's end time to exclude data at the exact end time instant. */
    excludeDataAtLeadingThumb?: boolean;
    /** When true, adds one second to the time extent's start time to exclude data at the exact start time instant. */
    excludeDataAtTrailingThumb?: boolean;
  }
  export interface UndoManagerOptions {
    /** The maximum number of operations the UndoManager can perform. */
    maxOperations?: number;
  }
  export interface UnionOptions {
    /** The feature(s) removed from the feature layer by the union operation. */
    deletedGraphics?: Graphic[];
    /** The feature layer that contains the unioned feature(s). */
    featureLayer?: FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) before the union operation is performed. */
    preUpdatedGraphics?: Graphic[];
  }
  export interface UpdateOptions {
    /** The feature layer that contains the updated feature(s). */
    featureLayer?: FeatureLayer;
    /** The updated feature(s). */
    postUpdatedGraphics?: Graphic[];
    /** The feature(s) prior to the update. */
    preUpdatedGraphics?: Graphic[];
  }
  export interface VEGeocoderOptions {
    /** Key used to access Bing Maps maps. */
    bingMapsKey?: string;
    /** Specifies the culture in which to return results. */
    culture?: string;
  }
  export interface VETiledLayerOptions {
    /** Key used to access Bing Maps maps. */
    bingMapsKey?: string;
    /** Class attribute to set for the layer's node. */
    className?: string;
    /** Specifies the culture in which to return results. */
    culture?: string;
    /** Bing Maps style. */
    mapStyle?: string;
    /** Refresh interval of the layer in minutes. */
    refreshInterval?: number;
  }
  export interface WMSLayerOptions {
    /** Specify the map image format, valid options are png,jpg,bmp,gif,svg. */
    format?: string;
    /** An optional resourceInfo object. */
    resourceInfo?: any;
    /** If the WMS service supports transparency, specify whether the image background is transparent. */
    transparent?: boolean;
    /** A list of layer names that represent the layers to include in the exported map. */
    visibleLayers?: string[];
  }
  export interface WMTSLayerInfoOptions {
    /** The description of the layer defined by the abstract property of the capabilities file or resource info. */
    description?: string;
    /** Specify a format supported by the service. */
    format?: string;
    /** The full extent of the WMTS layer. */
    fullExtent?: Extent;
    /** The layer id. */
    identifier?: string;
    /** The initial extent of the WMTS layer. */
    initialExtent?: Extent;
    /** Specify the layer style. */
    style?: string;
    /** A tile info object. */
    tileInfo?: TileInfo;
    /** Define the tileMatrixSet for the layer. */
    tileMatrixSet?: string;
    /** The layer title. */
    title?: string;
  }
  export interface WMTSLayerOptions {
    /** A WMTSLayerInfo object that when ResourceInfo options are not specified the map will display the first layer in the WMTS capabilities that matches the properties specified by WMTSLayerInfo. */
    layerInfo?: WMTSLayerInfo;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** An optional resource info object. */
    resourceInfo?: any;
    /** Specify the service type. */
    serviceMode?: string;
  }
  export interface WebTiledLayerOptions {
    /** Define attribution information for the layer to be used by the Attribution widget. */
    copyright?: string;
    /** Specify the full extent of the layer. */
    fullExtent?: Extent;
    /** Specify the initial extent of the layer. */
    initialExtent?: Extent;
    /** When true, tile resampling is enabled. */
    resampling?: boolean;
    /** Number of levels beyond the last level where tiles are available. */
    resamplingTolerance?: number;
    /** Specify subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains?: string[];
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo?: TileInfo;
    /** Define additional tile server domains for the layer. */
    tileServers?: string[];
  }
}

declare module "esri/Color" {
  /** Inherits all attributes from dojo/_base/Color to provide functions for setting colors. */
  class Color {
    /** Dictionary list of all CSS named colors, by name. */
    static named: any;
    /** The alpha value. */
    a: number;
    /** The blue value. */
    b: number;
    /** The green value. */
    g: number;
    /** The red value. */
    r: number;
    /**
     * Creates a new Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
     */
    constructor(color?: string);
    /**
     * Creates a new Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
     */
    constructor(color?: number[]);
    /**
     * Creates a new Color object.
     * @param color A named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object.
     */
    constructor(color?: any);
    /**
     * Blend colors start and end with weight from 0 to 1, 0.5 being a 50/50 blend.
     * @param start The start color.
     * @param end The end color.
     * @param weight The weight value.
     * @param obj A previously allocated Color object to reuse for the result.
     */
    static blendColors(start: Color, end: Color, weight: number, obj?: Color): Color;
    /**
     * Builds a Color from a 3 or 4 element array, mapping each element in sequence to the rgb(a) values of the color.
     * @param a The input array.
     * @param obj A previously allocated Color object to reuse for the result.
     */
    static fromArray(a: number[], obj?: Color): Color;
    /**
     * Converts a hex string with a '#' prefix to a color object.
     * @param color The input color.
     * @param obj A previously allocated Color object to reuse for the result.
     */
    static fromHex(color: string, obj?: Color): Color;
    /**
     * Returns a Color instance from a string of the form "rgb(...)" or "rgba(...)".
     * @param color The input color.
     * @param obj A previously allocated Color object to reuse for the result.
     */
    static fromRgb(color: string, obj?: Color): Color;
    /**
     * Parses str for a color value.
     * @param str The input value.
     * @param obj A previously allocated Color object to reuse for the result.
     */
    static fromString(str: string, obj?: Color): Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: string): Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: number[]): Color;
    /**
     * Takes a named string, hex string, array of rgb or rgba values, an object with r, g, b, and a properties, or another Color object and sets this color instance to that value.
     * @param color The new color value.
     */
    setColor(color: any): Color;
    /**
     * Returns a css color string in rgb(a) representation.
     * @param includeAlpha If true, the alpha value will be included in the result.
     */
    toCss(includeAlpha?: boolean): string;
    /** Returns a CSS color string in hexadecimal representation. */
    toHex(): string;
    /** Returns a 3 component array of rgb values. */
    toRgb(): number[];
    /** Returns a 4 component array of rgba values. */
    toRgba(): number[];
  }
  export = Color;
}

declare module "esri/Credential" {
  import esri = require("esri");

  /** The Credential class represents a credential object used to access a secure ArcGIS resource. */
  class Credential {
    /** Token expiration time specified as number of milliseconds since 1 January 1970 00:00:00 UTC. */
    expires: number;
    /** Indicates whether this credential belongs to a user with admin privileges. */
    isAdmin: boolean;
    /** The server url. */
    server: string;
    /** Indicates whether the resources accessed using this credential should be fetched over HTTPS protocol. */
    ssl: boolean;
    /** Token generated by the token service using the specified userId and password. */
    token: string;
    /** User associated wth the Credential object. */
    userId: string;
    /** Destroy a credential. */
    destroy(): void;
    /** Generate a new token and update the Credential's token property with the newly acquired token. */
    refreshToken(): any;
    /** Return the properties of this object in JSON. */
    toJson(): any;
    /** Fired when a credential object is destroyed. */
    on(type: "destroy", listener: (event: { target: Credential }) => void): esri.Handle;
    /** Fired when the token associated with the credential is updated or changed. */
    on(type: "token-change", listener: (event: { target: Credential }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Credential;
}

declare module "esri/IdentityManager" {
  import esri = require("esri");
  import IdentityManagerBase = require("esri/IdentityManagerBase");

  /** This singleton class is automatically instantiated into esri.id when the module containing this class is imported into the application. */
  class IdentityManager extends IdentityManagerBase {
    /** Dialog box widget used to challenge the user for their credentials when the application attempts to access a secure resource. */
    dialog: any;
    /** This method is called by the base identity manager implementation. */
    signIn(): any;
    /** Fired when the user clicks the cancel button on the dialog box widget. */
    on(type: "dialog-cancel", listener: (event: { info: any; target: IdentityManager }) => void): esri.Handle;
    /** Fired when the dialog box widget, used to prompt users for their credentials, is created. */
    on(type: "dialog-create", listener: (event: { target: IdentityManager }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = IdentityManager;
}

declare module "esri/IdentityManagerBase" {
  import Credential = require("esri/Credential");
  import ServerInfo = require("esri/ServerInfo");

  /** This class provides the framework and helper methods required to implement a solution for managing user credentials. */
  class IdentityManagerBase {
    /** The suggested lifetime of the token in minutes. */
    tokenValidity: number;
    /**
     * Returns the credential for the resource identified by the specified url.
     * @param url The url to a server.
     * @param userId The userId for which you want to obtain credentials.
     */
    findCredential(url: string, userId?: string): Credential;
    /**
     * Returns information about the server that is hosting the specified url.
     * @param url The url to a server.
     */
    findServerInfo(url: string): ServerInfo;
    /**
     * Returns an object containing a token and its expiration time.
     * @param serverInfo A ServerInfo object that contains a token service URL.
     * @param userInfo A user info object containing a user name and password.
     * @param options Optional parameters.
     */
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: any): any;
    /**
     * Returns a Credential object that can be used to access the secured resource identified by the input url.
     * @param url The url for the secure resource.
     * @param options Optional parameters.
     */
    getCredential(url: string, options?: any): any;
    /**
     * Call this method (during your application initialization) with JSON previously obtained from toJson method to re-hydrate the state of identity manager.
     * @param json The JSON obtained from the toJson method.
     */
    initialize(json: Object): any;
    /** Returns true if the identity manager is busy accepting user input, i.e., the user has invoked signIn and is waiting for a response. */
    isBusy(): boolean;
    /**
     * Register secure servers and the token endpoints.
     * @param serverInfos A ServerInfos object that defines the secure service and token endpoint.
     */
    registerServers(serverInfos: ServerInfo[]): void;
    /**
     * Registers the given OAuth2 access token with the identity manager.
     * @param properties An object with the following properties.
     */
    registerToken(properties: any): void;
    /**
     * When accessing secured resources, identity manager may prompt for username and password and send them to the server using a secure connection.
     * @param handlerFunction The function to call when the protocol is mismatched.
     */
    setProtocolErrorHandler(handlerFunction: Function): void;
    /**
     * When accessing secure resources from ArcGIS.com or one of its sub-domains the IdentityManager redirects the user to the ArcGIS.com sign-in page.
     * @param handler An object containing the following redirection properties.
     */
    setRedirectionHandler(handler: any): void;
    /**
     * Sub-classes must implement this method to create and manager the user interface that is used to obtain a username and password from the end-user.
     * @param url Url for the secure resource.
     * @param serverInfo A ServerInfo object that contains the token service url.
     * @param options Optional parameters.
     */
    signIn(url: string, serverInfo: ServerInfo, options?: any): any;
    /** Return properties of this object in JSON. */
    toJson(): any;
  }
  export = IdentityManagerBase;
}

declare module "esri/InfoTemplate" {
  /** An InfoTemplate contains a title and content template string used to transform Graphic.attributes into an HTML representation. */
  class InfoTemplate {
    /** The template for defining how to format the content used in an InfoWindow. */
    content: any;
    /** The template for defining how to format the title used in an InfoWindow. */
    title: any;
    /** Creates a new empty InfoTemplate object. */
    constructor();
    /**
     * Creates a new InfoTemplate object.
     * @param title The template for defining how to format the title used in an InfoWindow.
     * @param content The template for defining how to format the content used in an InfoWindow.
     */
    constructor(title: string, content: string);
    /**
     * Creates a new InfoTemplate object using a JSON object.
     * @param json JSON object representing the InfoTemplate.
     */
    constructor(json: Object);
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: string): InfoTemplate;
    /**
     * Sets the content template.
     * @param template The template for the content.
     */
    setContent(template: Function): InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: string): InfoTemplate;
    /**
     * Sets the title template.
     * @param template The template for the title.
     */
    setTitle(template: Function): InfoTemplate;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = InfoTemplate;
}

declare module "esri/InfoWindowBase" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Point = require("esri/geometry/Point");

  /** The base class for the out-of-the-box InfoWindow. */
  class InfoWindowBase {
    /** The reference to a DOM node where the info window is constructed. */
    domNode: any;
    /** Indicates if the info window is visible. */
    isShowing: boolean;
    /** Helper method. */
    destroyDijits(): void;
    /** Hide the info window. */
    hide(): void;
    /**
     * Helper method.
     * @param value A string with HTML tags or a DOM node.
     * @param parentNode The parent node where the value will be placed.
     */
    place(value: string, parentNode: HTMLElement): void;
    /**
     * Helper method.
     * @param value A string with HTML tags or a DOM node.
     * @param parentNode The parent node where the value will be placed.
     */
    place(value: HTMLElement, parentNode: HTMLElement): void;
    /**
     * Resize the info window to the specified width and height (in pixels).
     * @param width The new width of the InfoWindow in pixels.
     * @param height The new height of the InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Define the info window content.
     * @param content The content argument can be any of the following.
     */
    setContent(content: string): void;
    /**
     * Define the info window content.
     * @param content The content argument can be any of the following.
     */
    setContent(content: any): void;
    /**
     * This method is called by the map when the object is set as its info window.
     * @param map The map object.
     */
    setMap(map: Map): void;
    /**
     * Set the input value as the title for the info window.
     * @param title  In most cases the title will be a string value but the same options are available as for the setContent method.
     */
    setTitle(title: string): void;
    /**
     * Set the input value as the title for the info window.
     * @param title  In most cases the title will be a string value but the same options are available as for the setContent method.
     */
    setTitle(title: any): void;
    /**
     * Display the info window at the specified location.
     * @param location Location is an instance of esri.geometry.Point.
     */
    show(location: Point): void;
    /** Helper method. */
    startupDijits(): void;
    /**
     * This method is called by the map when the object is no longer the map's info window.
     * @param map The map object.
     */
    unsetMap(map: Map): void;
    /** Fires after the info window is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowBase }) => void): esri.Handle;
    /** Fires after the info window becomes visible. */
    on(type: "show", listener: (event: { target: InfoWindowBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = InfoWindowBase;
}

declare module "esri/OperationBase" {
  import esri = require("esri");

  /** The OperationBase class defines operations that can be added to the UndoManager. */
  class OperationBase {
    /** Details about the operation, for example: "Update" may be the label for an edit operation that updates features. */
    label: string;
    /** The type of operation, for example: "edit" or "navigation". */
    type: string;
    /**
     * Creates a new OperationBase object.
     * @param params See options list for parameters.
     */
    constructor(params: esri.OperationBaseOptions);
    /** Re-perform the last undo operation. */
    performRedo(): void;
    /** Reverse the operation. */
    performUndo(): void;
  }
  export = OperationBase;
}

declare module "esri/ServerInfo" {
  /** This class contains information about an ArcGIS Server and its token endpoint. */
  class ServerInfo {
    /** The token service URL used to generate tokens for ArcGIS Server Admin resources. */
    adminTokenServiceUrl: string;
    /** Version of the ArcGIS Server REST API deployed on this server. */
    currentVersion: number;
    /** Server URL in the following format: scheme://host[:port] */
    server: string;
    /** Validity of short-lived token in minutes. */
    shortLivedTokenValidity: number;
    /** The token service URL used to generate tokens for the secured resources on the server. */
    tokenServiceUrl: string;
    /** Return the properties of this object in JSON. */
    toJson(): any;
  }
  export = ServerInfo;
}

declare module "esri/SnappingManager" {
  import esri = require("esri");
  import Point = require("esri/geometry/Point");

  /** The SnappingManager is used to add snapping capability to the Editor, Measurement Widget,  Draw toolbar and Edit toolbar. */
  class SnappingManager {
    /**
     * Create a new SnappingManager object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.SnappingManagerOptions);
    /** Destroy the SnappingManager object. */
    destroy(): void;
    /**
     * Returns a deferred object, which can be added to a callback to find the snap point.
     * @param screenPoint The input screen point for which to find the snapping location.
     */
    getSnappingPoint(screenPoint: Point): any;
    /**
     * An array of layerInfo objects used to specify the target snapping layers.
     * @param setLayerInfos An array of layerInfo objects that define the snapping target layers.
     */
    setLayerInfos(setLayerInfos: any[]): void;
  }
  export = SnappingManager;
}

declare module "esri/SpatialReference" {
  /** The spatial reference of a map, layer, or inputs to and outputs from a task. */
  class SpatialReference {
    /** The well-known ID of a spatial reference. */
    wkid: number;
    /** The well-known text that defines a spatial reference. */
    wkt: string;
    /**
     * Creates a new SpatialReference object.
     * @param json The REST JSON representation of the spatial reference.
     */
    constructor(json: Object);
    /**
     * Create a spatial reference object and initialize it with a well-known ID (wkid).
     * @param wkid The well-known id (wkid) of the coordinate system.
     */
    constructor(wkid: number);
    /**
     * Create a spatial reference object and initialize it with the given well-known text (wkt).
     * @param wkt The well-known text (wkt) of the coordinate system.
     */
    constructor(wkt: string);
    /**
     * Returns true if the input spatial reference object has the same wkid or wkt as this spatial reference object.
     * @param sr The spatial reference to compare.
     */
    equals(sr: SpatialReference): boolean;
    /** Returns true if the wkid of the spatial reference object is one of the following values: 102113, 102100, 3857 */
    isWebMercator(): boolean;
    /** Returns an easily serializable object representation of the spatial reference. */
    toJson(): any;
  }
  export = SpatialReference;
}

declare module "esri/TimeExtent" {
  /** Represents the period in time within which the data was collected. */
  class TimeExtent {
    /** The end time for the specified time extent. */
    endTime: Date;
    /** The start time for the specified time extent. */
    startTime: Date;
    /**
     * Creates a new TimeExtent object with the specifed start and end time.
     * @param startTime The start time for the specified time extent.
     * @param endTime The end time for the specified time extent.
     */
    constructor(startTime: Date, endTime: Date);
    /**
     * Returns a new time extent indicating the intersection between "this" and the argument time extent.
     * @param timeExtent The input time extent.
     */
    intersection(timeExtent: number): TimeExtent;
    /**
     * Returns a new time extent with the given offset from "this' time extent.
     * @param offsetValue The length of time to offset from "this" time extent.
     * @param offsetUnits The offset units, see the TimeInfo constants for a list of valid values.
     */
    offset(offsetValue: number, offsetUnits: string): TimeExtent;
  }
  export = TimeExtent;
}

declare module "esri/arcgis/Portal" {
  import esri = require("esri");

  /** The Portal class is part of the ArcGIS Portal API which provides a way to build applications that work with content from ArcGIS Online or an ArcGIS Portal. */
  export class Portal {
    /** The access level of the organization. */
    access: string;
    /** When true, access to the organization's Portal resources must occur over SSL. */
    allSSL: boolean;
    /** The query that defines the basemaps that are displayed in the Basemap Gallery. */
    basemapGalleryGroupQuery: string;
    /** The Bing key to use for web maps using Bing Maps. */
    bingKey: string;
    /** Whether an organization can list applications in the marketplace . */
    canListApps: boolean;
    /** Whether an organization can list data services in the marketplace. */
    canListData: boolean;
    /** Whether an organization can list pre-provisioned items in the marketplace. */
    canListPreProvisionedItems: boolean;
    /** Whether an organization can provision direct purchases in the marketplace without customer request. */
    canProvisionDirectPurchase: boolean;
    /** When true, the organization's public items, groups and users are included in search queries. */
    canSearchPublic: boolean;
    /** The Bing key can be shared to the public and is returned as part of a portal's description call (/sharing/rest/portals/). */
    canShareBingPublic: boolean;
    /** When true, members of the organization can share resources outside the organization. */
    canSharePublic: boolean;
    /** Whether to allow an organization with an enterprise IDP configured to be able to turn on or off the ArcGIS sign in. */
    canSignInArcGIS: boolean;
    /** Whether to allow an organization with an enterprise IDP configured to be able to turn on or off the enterprise sign in. */
    canSignInIDP: boolean;
    /** The query that identifies the group containing the color sets used for rendering in the map viewer. */
    colorSetsGroupQuery: string;
    /** Whether to allow the organization to disable commenting. */
    commentsEnabled: boolean;
    /** Date the organization was created. */
    created: Date;
    /** The default locale (language and country) information. */
    culture: string;
    /** The custom base URL for the portal. */
    customBaseUrl: string;
    /** The default basemap the portal displays in the map viewer. */
    defaultBasemap: any;
    /** The default extent for the map the portal displays in the map viewer. */
    defaultExtent: any;
    /** A description of the organization / portal. */
    description: string;
    /** The featured groups for the portal. */
    featuredGroups: any[];
    /** The featured groups for the organization. */
    featuredGroupsId: string;
    /** The query that defines the featured group. */
    featuredItemsGroupQuery: string;
    /** The query that identifies the group containing features items for the gallery. */
    galleryTemplatesGroupQuery: string;
    /** The group that contains featured content to be displayed on the home page. */
    homePageFeaturedContent: string;
    /** The number of featured items that can be displayed on the home page. */
    homePageFeaturedContentCount: number;
    /** The port used by the portal for HTTP communication. */
    httpPort: number;
    /** The port used by the portal for HTTPS communication. */
    httpsPort: number;
    /** The id of the organization that owns this portal. */
    id: string;
    /** The country code of the calling IP (ArcGIS Online only). */
    ipCntryCode: string;
    /** Indicates if the portal is an organization. */
    isOrganization: boolean;
    /** Indicates if the portal is on premises. */
    isPortal: boolean;
    /** The query that defines the collection of editable layer templates. */
    layerTemplatesGroupQuery: string;
    /** The maximum validity in minutes of tokens issued for users of the organization. */
    maxTokenExpirationMinutes: number;
    /** Date the organization was last modified. */
    modified: Date;
    /** The Name of the organization / portal. */
    name: string;
    /** The portal host's URL. */
    portalHostname: string;
    /** Denotes multitenant or singletenant. */
    portalMode: string;
    /** The name of the portal, i.e., ArcGIS Online. */
    portalName: string;
    /** Stores properties specific to the organization, for example the "contact us" link. */
    portalProperties: any;
    /** The URL to the thumbnail of the portal. */
    portalThumbnail: string;
    /** URL to the portal. */
    portalUrl: string;
    /** The region for the organization. */
    region: string;
    /** Custom HTML for the home page. */
    rotatorPanels: string[];
    /** Whether the description of your organization displays on the home page. */
    showHomePageDescription: boolean;
    /** Whether hosted services are supported. */
    supportsHostedServices: boolean;
    /** Whether OAuth is supported. */
    supportsOAuth: boolean;
    /** The query that defines the symbols sets used by the map viewer. */
    symbolSetsGroupQuery: string;
    /** The query that defines the collection of templates that will appear in the template gallery. */
    templatesGroupQuery: string;
    /** The URL to the thumbnail of the organization. */
    thumbnail: string;
    /** The url to the thumbnail of the organization (full path). */
    thumbnailUrl: string;
    /** Sets the units of measure for the organization's users. */
    units: string;
    /** The portal url. */
    url: string;
    /** The prefix selected by the organization's administrator to be used with the customBaseURL. */
    urlKey: string;
    /** User information for the accessing user is returned only when a token is passed in. */
    user: any;
    /** If true, only simple where clauses that are complaint with SQL92 can be used when querying layers and tables. */
    useStandardizedQuery: boolean;
    /**
     * Creates a new Portal object.
     * @param url The url to the ArcGIS.com site or in-house portal.
     */
    constructor(url: string);
    /** Returns a PortalUser object that describes the user currently signed in to the portal. */
    getPortalUser(): PortalUser;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalGroup objects for all the groups that match the input query.
     * @param queryParams The input query parameters.
     */
    queryGroups(queryParams?: PortalQueryParams): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalItem objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryItems(queryParams?: PortalQueryParams): any;
    /**
     * Execute a query against the Portal to return a deferred that when resolved returns PortalQueryResult that contain a results array of PortalUser objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryUsers(queryParams?: PortalQueryParams): any;
    /** Prompts the user using the IdentityManager and returns a deferred that when resolved returns the PortalUser for the input credentials. */
    signIn(): any;
    /** Sign out of the Portal which resets the Portal and disables identity checking. */
    signOut(): Portal;
    /** Fired when the portal has loaded. */
    on(type: "load", listener: (event: { target: Portal }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  /** Details about a comment on a Portal item.View the ArcGIS Portal API REST documentation for the item comment for more details. */
  export class PortalComment {
    /** The comment text. */
    comment: string;
    /** The date and time the comment was created. */
    created: string;
    /** The comment id. */
    id: string;
    /** The user name of the user who created the comment. */
    owner: string;
  }
  /** The PortalFolder class provides information about folders used to organize content in a portal. */
  export class PortalFolder {
    /** The date the folder was created. */
    created: Date;
    /** The id of the folder. */
    id: string;
    /** The portal for the folder. */
    portal: Portal;
    /** The title of the folder. */
    title: string;
    /** The url to to the folder. */
    url: string;
    /** Find all the items in the folder. */
    getItems(): any;
  }
  /** The group resource represents a group within the Portal. */
  export class PortalGroup {
    /** The access privileges on the group which determines who can see and access the group. */
    access: string;
    /** The date the group was created. */
    created: Date;
    /** A detailed description of the group. */
    description: string;
    /** The id for the group. */
    id: string;
    /** If this is set to true, then users will not be able to apply to join the group. */
    isInvitationOnly: boolean;
    /** Denotes a view only group where members are not able to share items. */
    isViewOnly: boolean;
    /** The date the group was last modified. */
    modified: Date;
    /** The username of the group's owner. */
    owner: Portal;
    /** The portal for the group. */
    portal: Portal;
    /** A short summary that describes the group. */
    snippet: string;
    /** User defined tags that describe the group. */
    tags: string[];
    /** The url to the thumbnail used for the group. */
    thumbnailUrl: string;
    /** The title for the group. */
    title: string;
    /** The url to the group. */
    url: string;
    /** Get the current members for the group. */
    getMembers(): any;
    /**
     * Execute a query against the group to return a deferred that when resolved returns PortalQueryResults that contain a results array of PortalItem objects that match the input query.
     * @param queryParams The input query parameters.
     */
    queryItems(queryParams?: PortalQueryParams): any;
  }
  /** List the users, owner and administrator of a group. */
  export class PortalGroupMembers {
    /** An array containing the user names for each administrator of the group. */
    admins: string[];
    /** The user name of the owner of the group. */
    owner: string;
    /** An array containing the user names for each user in the group. */
    users: string[];
  }
  /** An item (a unit of content) in the Portal. */
  export class PortalItem {
    /** Indicates the level of access: private, shared, org, or public. */
    access: string;
    /** Information on the source of the item. */
    accessInformation: string;
    /** Average rating. */
    avgRating: number;
    /** The date the item was created. */
    created: Date;
    /** The item locale information (language and country). */
    culture: string;
    /** The detailed description of the item. */
    description: string;
    /** The bounding rectangle of the item. */
    extent: any;
    /** The unique id for this item. */
    id: string;
    /** The url to the data resource associated with the item. */
    itemDataUrl: string;
    /** The url to the item. */
    itemUrl: string;
    /** Any license information or restrictions. */
    licenseInfo: string;
    /** Date the item was last modified. */
    modified: Date;
    /** The name of the item. */
    name: string;
    /** Number of comments on the item. */
    numComments: number;
    /** Number of ratings on the item. */
    numRatings: number;
    /** Number of views on the item. */
    numViews: number;
    /** The username of the user who owns this item. */
    owner: string;
    /** The portal that contains the item. */
    portal: Portal;
    /** The size of the item. */
    size: number;
    /** A summary description of the item. */
    snippet: string;
    /** The item's coordinate system. */
    spatialReference: string;
    /** User defined tags that describe the item. */
    tags: string[];
    /** The url to the thumbnail used for the item. */
    thumbnailUrl: string;
    /** The title for the item. */
    title: string;
    /** The gis content type of this item. */
    type: string;
    /** A set of keywords that further describes the type of this item. */
    typeKeywords: string[];
    /** The url for the resource represented by the item. */
    url: string;
    /** The url to the user item. */
    userItemUrl: string;
    /**
     * Add a comment to the item.
     * @param comment The text for the comment.
     */
    addComment(comment: string): any;
    /**
     * Add a rating to an item that you have access to.
     * @param rating Rating to set for the item.
     */
    addRating(rating: number): any;
    /**
     * Deletes an item comment.
     * @param comment The PortalComment to delete.
     */
    deleteComment(comment: PortalComment): any;
    /**
     * Delete a rating that you created for the specified item.
     * @param rating Rating to delete.
     */
    deleteRating(rating: PortalRating): any;
    /** Get the comments associated with the item. */
    getComments(): any;
    /** Returns the rating (if any) given to the item. */
    getRating(): any;
    /**
     * Updates an item comment.
     * @param comment A PortalComment that contains the comment updates.
     */
    updateComment(comment: PortalComment): any;
  }
  /** Define parameters to use when querying. */
  export class PortalQueryParams {
    /** The maximum number of results to be included in the result set response. */
    num: string;
    /** The query string to search with. */
    q: string;
    /** A comma seperated list of field(s) to sort by. */
    sortField: string;
    /** The number of the first entry in the result set response. */
    start: string;
  }
  /** Details about the result of a query. */
  export class PortalQueryResult {
    /** The query parameters for the next set of results. */
    nextQueryParams: PortalQueryParams;
    /** The query parameters for the first set of results. */
    queryParams: PortalQueryParams;
    /** An array of  result item objects. */
    results: any[];
    /** The total number of results. */
    total: number;
  }
  /** Details about the rating associated with a Portal item. */
  export class PortalRating {
    /** Date the rating was added to the item. */
    created: Date;
    /** A rating between 1.0 and 5.0 for the item. */
    rating: number;
  }
  /** Represents a registered user of the Portal. */
  export class PortalUser {
    /** The access level for the user: private, org or public. */
    access: string;
    /** The date the user was created. */
    created: Date;
    /** The default culture for the user. */
    culture: string;
    /** Description of the user. */
    description: string;
    /** The user's email address. */
    email: string;
    /** The user's full name. */
    fullName: string;
    /** The date the user was modified. */
    modified: Date;
    /** The id of the organization the user belongs to. */
    orgId: string;
    /** The portal. */
    portal: Portal;
    /** The user's preferred view for content, either Web or GIS. */
    preferredView: string;
    /** The user's preferred region, used to set the featured maps on the portal home page, content in the gallery and the default extent for new maps in the Viewer. */
    region: string;
    /** The user's role in the organization: administrator (org_admin), publisher (org_publisher), or user (org_user). */
    role: string;
    /** User-defined tags that describe the user. */
    tags: string[];
    /** The url to the thumbnail image for the user. */
    thumbnailUrl: string;
    /** The url for the user content. */
    userContentUrl: string;
    /** The username for the user. */
    username: string;
    /** Find folders for the portal user. */
    getFolders(): any;
    /** Provides access to the group invitations for the portal user. */
    getGroupInvitations(): any;
    /** Find all the groups that the portal user has permissions to access. */
    getGroups(): any;
    /**
     * Get the portal item along with folder info for the input item id.
     * @param itemId The id of the item.
     */
    getItem(itemId: string): any;
    /**
     * Retrieve all the items in the specified folder.
     * @param folderId The id of the folder that contains the items to retrieve.
     */
    getItems(folderId: string): any;
    /** Get information about any notifications for the portal user. */
    getNotifications(): any;
    /** Access the tag objects that have been created by the portal user. */
    getTags(): any;
  }
}

declare module "esri/arcgis/utils" {
  import Layer = require("esri/layers/layer");

  /** Utility methods to work with content from ArcGIS.com. */
  var utils: {
    /** Specify the domain where the map associated with the webmap id is located. */
    arcgisUrl: string;
    /**
     * Create a map using information from an ArcGIS.com item.
     * @param itemIdOrItemInfo An itemId for an ArcGIS.com item or the response object obtained from calling the esri.arcgis.utils.getItem method.
     * @param mapDiv Container ID for referencing map.
     * @param options Optional parameters that define the map functionality.
     */
    createMap(itemIdOrItemInfo: string, mapDiv: string, options?: any): any;
    /**
     * Create a map using information from an ArcGIS.com item.
     * @param itemIdOrItemInfo An itemId for an ArcGIS.com item or the response object obtained from calling the esri.arcgis.utils.getItem method.
     * @param mapDiv Container ID for referencing map.
     * @param options Optional parameters that define the map functionality.
     */
    createMap(itemIdOrItemInfo: any, mapDiv: string, options?: any): any;
    /**
     * Get details about the input ArcGIS.com item.
     * @param itemId The itemId for a publicly shared ArcGIS.com item.
     */
    getItem(itemId: string): any;
    /**
     * Can be used with esri.dijit.Legend to get the layerInfos list to be passed into the Legend constructor.
     * @param createMapResponse Object returned by .createMap() in the .then() callback.
     */
    getLegendLayers(createMapResponse: any): Layer[];
  };
  export = utils;
}

declare module "esri/config" {
  /** The default values for all JS API configuration options. */
  var config: {
    /** ArcGIS JavaScript API default configurations that can be overridden programmatically. */
    defaults: any;
  };
  export = config;
}

declare module "esri/dijit/AttributeInspector" {
  import esri = require("esri");
  import Graphic = require("esri/graphic");

  /** The attribute inspector displays the attributes of selected features from one or more feature layers. */
  class AttributeInspector {
    /** Field displayed as a rich text field. */
    static STRING_FIELD_OPTION_RICHTEXT: any;
    /** Field displayed as a text area. */
    static STRING_FIELD_OPTION_TEXTAREA: any;
    /** Field displays as a text box. */
    static STRING_FIELD_OPTION_TEXTBOX: any;
    /**
     * Creates a new Attribute Inspector object.
     * @param params See options list.
     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
     */
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Attribute Inspector object.
     * @param params See options list.
     * @param srcNodeRef HTML element where the attribute inspector should be rendered.
     */
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: string);
    /** Destroys the widget, used for page clean up. */
    destroy(): void;
    /** Moves to the first feature. */
    first(): void;
    /** Moves to the last feature. */
    last(): void;
    /** Move to the next feature. */
    next(): void;
    /** Move to the previous feature. */
    previous(): void;
    /** Updates the contents of the AttributeInspector. */
    refresh(): void;
    /** Fires when a fields value changes.. */
    on(type: "attribute-change", listener: (event: { feature: Graphic; fieldName: string; fieldValue: string; target: AttributeInspector }) => void): esri.Handle;
    /** Fires when the AttributeInspector's delete button is pressed. */
    on(type: "delete", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): esri.Handle;
    /** Fires when the AttributeInspector's next or back button is pressed. */
    on(type: "next", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = AttributeInspector;
}

declare module "esri/dijit/Attribution" {
  import esri = require("esri");
  import Map = require("esri/map");

  /** Displays attribution text for the layers in a map. */
  class Attribution {
    /** String used as the delimiter between attribution items. */
    itemDelimiter: string;
    /** Object containing elements where each element contains attribution text for a layer in the map. */
    itemNodes: any;
    /** Reference to the span element that contains all the attribution items. */
    listNode: HTMLSpanElement;
    /** Reference to the map object for which the widget is displaying attribution. */
    map: Map;
    /**
     * Creates a new Attribution object.
     * @param options An object that defines the attribution options.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(options: esri.AttributionOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Attribution object.
     * @param options An object that defines the attribution options.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(options: esri.AttributionOptions, srcNodeRef: string);
    /** Destroy the attribution widget. */
    destroy(): void;
  }
  export = Attribution;
}

declare module "esri/dijit/Basemap" {
  import esri = require("esri");
  import BasemapLayer = require("esri/dijit/BasemapLayer");

  /** Define a basemap to display in the BasemapGallery dijit. */
  class Basemap {
    /** The basemap's id. */
    id: string;
    /** The URL to the thumbnail image for the basemap. */
    thumbnailUrl: string;
    /** The title for the basemap. */
    title: string;
    /**
     * Creates a new Basemap Object.
     * @param params Set of parameters used to create a basemap.
     */
    constructor(params: esri.BasemapOptions);
    /** The list of layers contained in the basemap or a dojo.Deferred if a call to ArcGIS.com needs to be made to retrieve the list of ArcGIS.com basemaps. */
    getLayers(): BasemapLayer[];
  }
  export = Basemap;
}

declare module "esri/dijit/BasemapGallery" {
  import esri = require("esri");
  import Basemap = require("esri/dijit/Basemap");

  /** The BasemapGallery dijit displays a collection basemaps from ArcGIS.com or a user-defined set of map or image services. */
  class BasemapGallery {
    /** List of basemaps displayed in the BasemapGallery. */
    basemaps: Basemap[];
    /** This value is true after the BasemapGallery retrieves the ArcGIS.com basemaps. */
    loaded: boolean;
    /** Optional parameter to pass in a portal URL, including the instance name, used to access the group containing the basemap gallery items. */
    portalUrl: string;
    /**
     * Creates a new BasemapGallery dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: HTMLElement);
    /**
     * Creates a new BasemapGallery dijit.
     * @param params Parameters used to configure the widget.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: string);
    /**
     * Add a new basemap to the BasemapGallery's list of basemaps.
     * @param basemap The basemap to add to the map.
     */
    add(basemap: Basemap): boolean;
    /** Destroys the basemap gallery. */
    destroy(): void;
    /**
     * Return the basemap with the specified id.
     * @param id The basemap id.
     */
    get(id: string): Basemap;
    /** Gets the currently selected basemap. */
    getSelected(): Basemap;
    /**
     * Remove a basemap from the BasemapGallery's list of basemaps.
     * @param id The basemap id.
     */
    remove(id: string): Basemap;
    /**
     * Select a new basemap for the map.
     * @param id The basemap id.
     */
    select(id: string): Basemap;
    /** Finalizes the creation of the basemap gallery. */
    startup(): void;
    /** Fires when a basemap is added to the BasemapGallery's list of basemaps. */
    on(type: "add", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): esri.Handle;
    /** Fires when an error occurs while switching basemaps. */
    on(type: "error", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    /** Fires when the BasemapGallery retrieves the ArcGIS.com basemaps. */
    on(type: "load", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    /** Fires when a basemap is removed from the BasemapGallery's list of basemaps. */
    on(type: "remove", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): esri.Handle;
    /** Fires after the map is updated with a new basemap. */
    on(type: "selection-change", listener: (event: { target: BasemapGallery }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = BasemapGallery;
}

declare module "esri/dijit/BasemapLayer" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");
  import TileInfo = require("esri/layers/TileInfo");

  /** Defines a layer that will be added to a basemap and displayed in the BasemapGallery dijit. */
  class BasemapLayer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: Extent;
    /** The initial extent of the layer. */
    initialExtent: Extent;
    /** The subDomains where tiles are served to speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent requests to a domain). */
    subDomains: string[];
    /** The tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: TileInfo;
    /** Additional tile server domains for the layer. */
    tileServer: string[];
    /** The type of layer. */
    type: string;
    /**
     * Creates a new BasemapLayer object.
     * @param params Set of parameters used to create a basemap layer.
     */
    constructor(params: esri.BasemapLayerOptions);
  }
  export = BasemapLayer;
}

declare module "esri/dijit/BasemapToggle" {
  import esri = require("esri");
  import Map = require("esri/map");

  /** BasemapToggle provides a simple button to toggle between two basemaps. */
  class BasemapToggle {
    /** The secondary basemap to toggle to. */
    basemap: string;
    /** Object containing the labels and URLs for the image of each basemap. */
    basemaps: any;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
    /**
     * Creates a new BasemapToggle dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new BasemapToggle dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Toggles to the next basemap. */
    toggle(): void;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: BasemapToggle }) => void): esri.Handle;
    /** Fires when the toggle method has been called. */
    on(type: "toggle", listener: (event: { currentBasemap: string; error: any; previousBasemap: string; target: BasemapToggle }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = BasemapToggle;
}

declare module "esri/dijit/BookmarkItem" {
  import Extent = require("esri/geometry/Extent");

  /** Defines a bookmark for use in the Bookmark widget. */
  class BookmarkItem {
    /**
     * Creates a new BookmarkItem.
     * @param name The name for the bookmark item.
     * @param extent The extent for the specified bookmark item.
     */
    constructor(name: string, extent: Extent);
  }
  export = BookmarkItem;
}

declare module "esri/dijit/Bookmarks" {
  import esri = require("esri");
  import BookmarkItem = require("esri/dijit/BookmarkItem");

  /** The Bookmark widget is a ready to use tool for bookmarking the current map extent. */
  class Bookmarks {
    /** An array of BookmarkItem objects. */
    bookmarks: BookmarkItem[];
    /**
     * Creates a new Bookmark widget
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
     */
    constructor(params: esri.BookmarksOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Bookmark widget
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the bookmark widget should be rendered.
     */
    constructor(params: esri.BookmarksOptions, srcNodeRef: string);
    /**
     * Add a new bookmark to the bookmark widget.
     * @param bookmarkItem A BookmarkItem or json object with the same structure that defines the new location.
     */
    addBookmark(bookmarkItem: BookmarkItem): void;
    /** Destroy the bookmark widget. */
    destroy(): void;
    /** Hides the Bookmark widget. */
    hide(): void;
    /**
     * Remove a bookmark from the bookmark widget.
     * @param bookmarkName The name of the bookmark to remove from the bookmark widget.
     */
    removeBookmark(bookmarkName: string): void;
    /** Show the Bookmark widget. */
    show(): void;
    /** Returns an array of json objects with the following structure:  [{   name:bookmarkName,   extent:bookmarkExtent }]  */
    toJson(): any;
    /** Fired when a bookmark item is clicked. */
    on(type: "click", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    /** Fired after the bookmark item is edited. */
    on(type: "edit", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    /** Fired when a bookmark item is removed. */
    on(type: "remove", listener: (event: { target: Bookmarks }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Bookmarks;
}

declare module "esri/dijit/Directions" {
  import esri = require("esri");
  import DirectionsFeatureSet = require("esri/tasks/DirectionsFeatureSet");
  import Graphic = require("esri/graphic");
  import RouteParameters = require("esri/tasks/RouteParameters");
  import RouteTask = require("esri/tasks/RouteTask");
  import Point = require("esri/geometry/Point");
  import RouteResult = require("esri/tasks/RouteResult");

  /** The Directions widget makes it easy to calculate directions between two or more input locations. */
  class Directions {
    /** Get the directions to all the locations along the route. */
    directions: DirectionsFeatureSet;
    /** An array of  objects that defines the potential matches for the input locations. */
    geocoderResults: any[];
    /** When true the maximum number of stops for the route has been reached. */
    maxStopsReached: boolean;
    /** The graphic for the calculated route. */
    mergedRouteGraphic: Graphic;
    /** Routing parameters for the widget. */
    routeParams: RouteParameters;
    /** Routing task for the widget. */
    routeTask: RouteTask;
    /** An array of graphics that define the stop locations along the route. */
    stops: Graphic[];
    /** The css theme used to style the widget. */
    theme: string;
    /**
     * Creates a new Directions dijit using the given DOM node.
     * @param options Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(options: esri.DirectionsOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Directions dijit using the given DOM node.
     * @param options Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(options: esri.DirectionsOptions, srcNodeRef: string);
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: Point, index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: number[], index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: string, index?: number): any;
    /**
     * Add a stop to the directions widget at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index location where the stop should be added.
     */
    addStop(stop: any, index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: Point[], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: number[][], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: string[], index?: number): any;
    /**
     * Add multiple stops to the directions list starting at the specified location.
     * @param stops An array of points that define the stop locations.
     * @param index The index location where the stops will be added.
     */
    addStops(stops: any[], index?: number): any;
    /**
     * Center the map at the start of the specified route segment.
     * @param index The index of the segment where the map should be centered.
     */
    centerAtSegmentStart(index: number): void;
    /** Remove the route directions from the directions list. */
    clearDirections(): void;
    /** Destroy the Directions widget. */
    destroy(): void;
    /** Calculate the route to the input locations and display the list of directions. */
    getDirections(): any;
    /**
     * Highlight the specified route segment on the map.
     * @param index The index of the route segment to highlight.
     */
    highlightSegment(index: number): void;
    /**
     * Remove the stop at the specified index.
     * @param index The index of the stop to remove.
     */
    removeStop(index: number): any;
    /** Removes the existing stops from the directions widget. */
    removeStops(): void;
    /** Resets the directions widget removing any directions, stops and map graphics. */
    reset(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Removes the highlight symbol from the currently highlighted route segment. */
    unhighlightSegment(): void;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: Point, index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: number[], index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: string, index: number): any;
    /**
     * Update the existing stop at the specified index location.
     * @param stop A point that defines the stop location.
     * @param index The index of the stop to update.
     */
    updateStop(stop: any, index: number): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: Point[]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: number[][]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: string[]): any;
    /**
     * Update multiple stops in the directions widget by specifying an array of stops information.
     * @param stops An array of points that define the stop locations.
     */
    updateStops(stops: any[]): any;
    /** Zoom so that the full route is displayed within the current map extent. */
    zoomToFullRoute(): void;
    /**
     * Zoom to the specified route segment.
     * @param index The index for a route segment.
     */
    zoomToSegment(index: number): void;
    /** Fires when the directions display is reset. */
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the route service has calculated the route and the directions are ready for display. */
    on(type: "directions-finish", listener: (event: { result: RouteResult; target: Directions }) => void): esri.Handle;
    /** Fires when the route services starts to calculate the route. */
    on(type: "directions-start", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fires when the directions widget has fully loaded. */
    on(type: "load", listener: (event: { target: Directions }) => void): esri.Handle;
    /** Fired when you hover over a route segment in the directions display. */
    on(type: "segment-highlight", listener: (event: { graphic: Graphic; target: Directions }) => void): esri.Handle;
    /** Fires when a route segment is selected in the directions display. */
    on(type: "segment-select", listener: (event: { graphic: Graphic; target: Directions }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Directions;
}

declare module "esri/dijit/Gallery" {
  import esri = require("esri");

  /** The Gallery widget provides a touch-aware thumbnail gallery for mobile devices such as iPhone, iPad, Android and BlackBerry Torch. */
  class Gallery {
    /**
     * Creates a new mobile Gallery.
     * @param params See options list.
     * @param srcNodeRef HTML element where the  gallery should be rendered.
     */
    constructor(params: esri.GalleryOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new mobile Gallery.
     * @param params See options list.
     * @param srcNodeRef HTML element where the  gallery should be rendered.
     */
    constructor(params: esri.GalleryOptions, srcNodeRef: string);
    /** Removes any object references and associated objects created by the gallery. */
    destroy(): void;
    /** Gets the item with the current focus. */
    getFocusedItem(): any;
    /** Get the currently selected item. */
    getSelectedItem(): any;
    /** Move the gallery to the next page of items. */
    next(): void;
    /** Move the gallery to the previous page of items. */
    previous(): void;
    /**
     * Select an item in the gallery.
     * @param item The item to select.
     */
    select(item: any): void;
    /**
     * Set the focus to the specified item.
     * @param item The item which will have focus.
     */
    setFocus(item: any): void;
    /** Finalize the creation of the gallery. */
    startup(): void;
    /** Fires when the items setFocus method is called. */
    on(type: "focus", listener: (event: { item: any; target: Gallery }) => void): esri.Handle;
    /** Fires when an item is selected. */
    on(type: "select", listener: (event: { item: any; target: Gallery }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Gallery;
}

declare module "esri/dijit/Gauge" {
  import esri = require("esri");

  /** The gauge widget provides a streamlined way to create a dashboard-like interface and display data on a semi-circular gauge. */
  class Gauge {
    /**
     * Create a new Gauge object.
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the  gauge should be rendered.
     */
    constructor(params: esri.GaugeOptions, srcNodeRef: HTMLElement);
    /**
     * Create a new Gauge object.
     * @param params See options list for parameters.
     * @param srcNodeRef HTML element where the  gauge should be rendered.
     */
    constructor(params: esri.GaugeOptions, srcNodeRef: string);
    /** Destroy the gauge. */
    destroy(): void;
    /**
     * Get the value of the property from the Gauge.
     * @param name Property to get value.
     */
    get(name: string): any;
    /**
     * Set the value of a property from the Gauge.
     * @param name Property to set value.
     * @param value Value to set.
     */
    set(name: string, value: any): Gauge;
    /** Finalizes the creation of the gauge. */
    startup(): void;
  }
  export = Gauge;
}

declare module "esri/dijit/Geocoder" {
  import esri = require("esri");

  /** Add a geographic search box to an application. */
  class Geocoder {
    /** Currently selected locator object. */
    activeGeocoder: any;
    /** Current locator index to search by default. */
    activeGeocoderIndex: number;
    /** When true the auto-complete menu is enabled. */
    autoComplete: boolean;
    /** When true, the widget will navigate to the selected location. */
    autoNavigate: boolean;
    /** When true the geocoder menu is enabled. */
    geocoderMenu: boolean;
    /** List of geocoders the widget uses to find search results. */
    geocoders: any[];
    /** Maximum number of locations to display in the results menu. */
    maxLocations: number;
    /** Minimum number of characters required before the query is performed. */
    minCharacters: number;
    /** Current results from query or select. */
    results: any[];
    /** Delay in milliseconds before each keyUp calls for the query to be performed. */
    searchDelay: number;
    /** When true, suggestions are displayed as the user is typing. */
    showResults: boolean;
    /** Current theme being used to style the widget. */
    theme: string;
    /** Current value of the input textbox  */
    value: string;
    /** Scale to zoom to when geocoder does not return an extent. */
    zoomScale: number;
    /**
     * Create a new Geocoder widget using the given DOM node.
     * @param params Set of parameters used to specify Geocoder options.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.GeocoderOptions, srcNodeRef: HTMLElement);
    /**
     * Create a new Geocoder widget using the given DOM node.
     * @param params Set of parameters used to specify Geocoder options.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.GeocoderOptions, srcNodeRef: string);
    /** Unfocus the widget's text input. */
    blur(): void;
    /** Clears the values currently set in the widget. */
    clear(): void;
    /** Releases all the resources used by the widget. */
    destroy(): void;
    /** Executes a search using the current value of the geocoder. */
    find(): any;
    /** Brings focus to the widget's text input. */
    focus(): void;
    /** Hide the widget. */
    hide(): void;
    /**
     * Select a result using a result object.
     * @param result An object with the following properties.
     */
    select(result: any): void;
    /** Show the widget. */
    show(): void;
    /** Finalizes the creation of the widget. */
    startup(): void;
    /** Fired when results are returned from an auto-complete. */
    on(type: "auto-complete", listener: (event: { results : any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a result is cleared from the input box or a new result is selected. */
    on(type: "clear", listener: (event: { target: Geocoder }) => void): esri.Handle;
    /** Fired when results are returned from a search. */
    on(type: "find-results", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a geocoder is selected. */
    on(type: "geocoder-select", listener: (event: { geocoder: any; target: Geocoder }) => void): esri.Handle;
    /** Fired when a result has been selected, the submit button is pressed, or the enter key is fired. */
    on(type: "select", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Geocoder;
}

declare module "esri/dijit/HistogramTimeSlider" {
  import esri = require("esri");

  /** The HistogramTimeSlider dijit provides a histogram chart representation of data for time-enabled layers on a map. */
  class HistogramTimeSlider {
    /**
     * Creates a new HistogramTimeSlider dijit using the given DOM node.
     * @param params Input parameters.
     * @param srcNodeRef HTML element where the tool should be rendered.
     */
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new HistogramTimeSlider dijit using the given DOM node.
     * @param params Input parameters.
     * @param srcNodeRef HTML element where the tool should be rendered.
     */
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: string);
    /** Set related objects as null and hide the widget. */
    destroy(): void;
    /** Fires whenever the slider moved, and the visible time extent is changed. */
    on(type: "time-extent-change", listener: (event: { target: HistogramTimeSlider }) => void): esri.Handle;
    /** Fires fires each time the histogram is drawn. */
    on(type: "update", listener: (event: { target: HistogramTimeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = HistogramTimeSlider;
}

declare module "esri/dijit/HomeButton" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");
  import Map = require("esri/map");

  /** HomeButton provides a simple button to return to the map's default starting extent. */
  class HomeButton {
    /** The extent used to zoom to when clicked. */
    extent: Extent;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** Whether the widget is visible by default. */
    visible: boolean;
    /**
     * Creates a new HomeButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.HomeButtonOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new HomeButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.HomeButtonOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Goes to the home extent. */
    home(): void;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires when the home method has been called. */
    on(type: "home", listener: (event: { error: any; extent: Extent; target: HomeButton }) => void): esri.Handle;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: HomeButton }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = HomeButton;
}

declare module "esri/dijit/InfoWindow" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Point = require("esri/geometry/Point");

  /** An InfoWindow is an HTML popup. */
  class InfoWindow extends InfoWindowBase {
    /** InfoWindow is anchored to the lower left of the point. */
    static ANCHOR_LOWERLEFT: any;
    /** InfoWindow is anchored to the lower right of the point. */
    static ANCHOR_LOWERRIGHT: any;
    /** InfoWindow is anchored to the upper left of the point. */
    static ANCHOR_UPPERLEFT: any;
    /** InfoWindow is anchored to the upper right of the point. */
    static ANCHOR_UPPERRIGHT: any;
    /** Placement of the InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the InfoWindow in screen coordinates. */
    coords: Point;
    /** InfoWindow always show with the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the InfoWindow is currently shown on the map. */
    isShowing: boolean;
    /**
     * Create a new Info Window
     * @param params Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: any, srcNodeRef: HTMLElement);
    /**
     * Create a new Info Window
     * @param params Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindow.
     */
    move(point: Point): void;
    /**
     * Resizes the InfoWindow to the specified height and width in pixels.
     * @param width The new width of the InfoWindow in pixels.
     * @param height The new height of the InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Sets the content in the InfoWindow.
     * @param content The content for the InfoWindow.
     */
    setContent(content: any): InfoWindow;
    /**
     * Sets the fixed location of the InfoWindow anchor.
     * @param anchor Fixed anchor that cannot be overridden by InfoWindow.show().
     */
    setFixedAnchor(anchor: string): void;
    /**
     * Sets the title for the InfoWindow.
     * @param title The title for the InfoWindow.
     */
    setTitle(title: string): InfoWindow;
    /**
     * Display the InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the InfoWindow with respect to the graphic.
     */
    show(point: Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindow }) => void): esri.Handle;
    /** Fires when an InfoWindow is visible. */
    on(type: "show", listener: (event: { target: InfoWindow }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = InfoWindow;
}

declare module "esri/dijit/InfoWindowLite" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Point = require("esri/geometry/Point");
  import InfoWindow = require("esri/dijit/InfoWindow");

  /** Creates a new InfoWindowLite object. */
  class InfoWindowLite extends InfoWindowBase {
    /** Placement of the InfoWindow with respect to the graphic. */
    anchor: string;
    /** The anchor point of the InfoWindowLite in screen coordinates. */
    coords: Point;
    /** Always display the info window using the specified anchor. */
    fixedAnchor: string;
    /** Determines whether the InfoWindowLite is currently shown on the map. */
    isShowing: boolean;
    /** Hides the InfoWindow. */
    hide(): void;
    /**
     * Moves the InfoWindow to the specified screen point.
     * @param point The new anchor point when moving the InfoWindowLite.
     */
    move(point: Point): void;
    /**
     * Resizes the InfoWindowLite to the specified height and width in pixels.
     * @param width The new width of the InfoWindowLite in pixels.
     * @param height The new height of the InfoWindowLite in pixels.
     */
    resize(width: number, height: number): void;
    /**
     * Sets the content in the InfoWindow.
     * @param content The content for the InfoWindow.
     */
    setContent(content: any): void;
    /**
     * Set the fixed location of the InfoWindowLite anchor.
     * @param anchor Fixed anchor that cannot be overridden by InfoWindowLite.show().
     */
    setFixedAnchor(anchor: string): void;
    /**
     * Define the title for the InfoWindowLite.
     * @param title The title for the InfoWindowLite.
     */
    setTitle(title: string): InfoWindow;
    /**
     * Display the InfoWindow at the specified location.
     * @param point Location to place anchor.
     * @param placement Placement of the InfoWindow with respect to the graphic.
     */
    show(point: Point, placement?: string): void;
    /** Fires when an infoWindow is hidden. */
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    /** Fires when an InfoWindowLite is displayed. */
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = InfoWindowLite;
}

declare module "esri/dijit/LayerSwipe" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Map = require("esri/map");

  /** LayerSwipe provides a simple tool to show a portion of a layer or layers on top of a map. */
  class LayerSwipe {
    /** The number of pixels to clip the swipe tool. */
    clip: number;
    /** If the widget is enabled and layers can be swiped. */
    enabled: boolean;
    /** The layers to be swiped. */
    layers: Layer[];
    /** The number of pixels to place the tool from the left of the map. */
    left: number;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** Class used for styling the widget. */
    theme: string;
    /** The number of pixels to place the tool from the top of the map. */
    top: number;
    /** Type of swipe tool to use. */
    type: string;
    /**
     * Creates a new LayerSwipe dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new LayerSwipe dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: string);
    /** Destroys the widget. */
    destroy(): void;
    /** Disables the widget. */
    disable(): void;
    /** Enables the widget. */
    enable(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Updates the map to the position of the swipe node. */
    swipe(): void;
    /** Event is fired when the widget has been loaded. */
    on(type: "load", listener: (event: { target: LayerSwipe }) => void): esri.Handle;
    /** Event is fired when the tool has moved. */
    on(type: "swipe", listener: (event: { layers: any[]; target: LayerSwipe }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = LayerSwipe;
}

declare module "esri/dijit/Legend" {
  import esri = require("esri");

  /** The legend dijit displays a label and symbol for some or all of the layers in the map. */
  class Legend {
    /**
     * Creates a new Legend dijit.
     * @param params Parameters used to configure the dijit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.LegendOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Legend dijit.
     * @param params Parameters used to configure the dijit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.LegendOptions, srcNodeRef: string);
    /** Destroys the legend. */
    destroy(): void;
    /** Refresh the legend. */
    refresh(): void;
    /** Finalizes the creation of the legend . */
    startup(): void;
  }
  export = Legend;
}

declare module "esri/dijit/LocateButton" {
  import esri = require("esri");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");
  import InfoTemplate = require("esri/InfoTemplate");
  import Map = require("esri/map");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** LocateButton provides a simple button to locate and zoom to the users current location. */
  class LocateButton {
    /** Centers the map to the location when a new position is returned. */
    centerAt: boolean;
    /** The HTML5 Geolocation Position options for locating. */
    geolocationOptions: any;
    /** Layer in which the highlighted graphic is set to. */
    graphicsLayer: GraphicsLayer;
    /** If true, the users location will be highlighted with a point. */
    highlightLocation: boolean;
    /** The infoTemplate used for the highlight graphic. */
    infoTemplate: InfoTemplate;
    /** Whether the widget has been loaded. */
    loaded: boolean;
    /** Map object that this dijit is associated with. */
    map: Map;
    /** The scale to zoom to when a users location has been found. */
    scale: number;
    /** Sets the maps scale when a new position is returned. */
    setScale: boolean;
    /** The symbol used on the highlight graphic to highlight the users location on the map. */
    symbol: Symbol;
    /** Class used for styling the widget. */
    theme: string;
    /** Shows the current tracking state. */
    tracking: boolean;
    /** When enabled, the button becomes a toggle that creates an event to watch for location changes. */
    useTracking: boolean;
    /** Whether the widget is visible. */
    visible: boolean;
    /**
     * Creates a new LocateButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LocateButtonOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new LocateButton dijit using the given DOM node.
     * @param params Various parameters to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.LocateButtonOptions, srcNodeRef: string);
    /** Clears the point graphic. */
    clear(): void;
    /** Destroys the widget. */
    destroy(): void;
    /** Hides the widget. */
    hide(): void;
    /** Goes to the users extent. */
    locate(): any;
    /** Shows the widget. */
    show(): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires when the widget has been loaded. */
    on(type: "load", listener: (event: { target: LocateButton }) => void): esri.Handle;
    /** Fires when the locate method has been called. */
    on(type: "locate", listener: (event: { error: any; graphic: Graphic; position: any; scale: number; target: LocateButton }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = LocateButton;
}

declare module "esri/dijit/Measurement" {
  import esri = require("esri");
  import Geometry = require("esri/geometry/Geometry");

  /** The Measurement widget provides tools for calculating the current location (Get Location) and measuring distance (Measure Distance) and area (Measure Area). */
  class Measurement {
    /**
     * Creates a new Measurement widget.
     * @param params See options list for parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.MeasurementOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Measurement widget.
     * @param params See options list for parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.MeasurementOptions, srcNodeRef: string);
    /** Remove the measurement graphics and results. */
    clearResult(): void;
    /** Destroy the measurement widget. */
    destroy(): void;
    /** Hide the measurement widget. */
    hide(): void;
    /**
     * Hide the specified tool.
     * @param toolName Valid values are "area", "distance" or "location".
     */
    hideTool(toolName: string): void;
    /**
     * Activate or deactivate a tool.
     * @param toolName The name of the tool to activate or deactivate.
     * @param activate When true, the specified tool is activated.
     */
    setTool(toolName: string, activate: boolean): void;
    /** Show the measurement widget after it has been hidden using the hide method. */
    show(): void;
    /**
     * Display the specified tool.
     * @param toolName Valid values are "area", "distance" or "location".
     */
    showTool(toolName: string): void;
    /** Finalizes the creation of the measurement widget . */
    startup(): void;
    /** Fired when the measurement is complete. */
    on(type: "measure-end", listener: (event: { activeToolName: string; geometry: Geometry; target: Measurement }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Measurement;
}

declare module "esri/dijit/OverviewMap" {
  import esri = require("esri");

  /** The OverviewMap widget displays the current extent of the map within the context of a larger area. */
  class OverviewMap {
    /**
     * Creates a new OverviewMap object.
     * @param params Parameters that define the functionality of the OverviewMap widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.OverviewMapOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new OverviewMap object.
     * @param params Parameters that define the functionality of the OverviewMap widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.OverviewMapOptions, srcNodeRef: string);
    /** Releases  the resources used by the dijit. */
    destroy(): void;
    /** Hide the overview map. */
    hide(): void;
    /** Show the overview map. */
    show(): void;
    /** Finalizes the creation of the OverviewMap dijit. */
    startup(): void;
  }
  export = OverviewMap;
}

declare module "esri/dijit/Popup" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Graphic = require("esri/graphic");
  import Point = require("esri/geometry/Point");

  /** The Popup class is an implementation of InfoWindow that inherits from InfoWindowBase to provide additional capabilities. */
  class Popup extends InfoWindowBase {
    /** The number of features associated with the info window. */
    count: number;
    /** An array of  pending deferreds, null if there are not any pending deferreds. */
    deferreds: any[];
    /** The HTML element (reference to a DOM Node) where the info window is constructed. */
    domNode: any;
    /** The array of features currently associated with the info window. */
    features: Graphic[];
    /** Number of milliseconds after which the popup window will be hidden when visibleWhenEmpty is false and there are no features to be displayed. */
    hideDelay: number;
    /** Indicates whether popup should highlight features. */
    highlight: boolean;
    /** Indicates if the info window is visible. */
    isShowing: boolean;
    /** The index of the currently selected feature in the features array. */
    selectedIndex: number;
    /** Indicates whether the popup window remains visible when there are no features to be displayed. */
    visibleWhenEmpty: boolean;
    /**
     * Create a new Popup object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupOptions, srcNodeRef: HTMLElement);
    /**
     * Create a new Popup object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupOptions, srcNodeRef: string);
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): Graphic;
    /** Hide the info window. */
    hide(): void;
    /** Maximize the info window. */
    maximize(): void;
    /** Re-calculates the popup's position with respect to the map location it is pointing to. */
    reposition(): void;
    /**
     * Resize the info window to the specified height (in pixels).
     * @param width The new width of the InfoWindow in pixels.
     * @param height The new height of the InfoWindow in pixels.
     */
    resize(width: number, height: number): void;
    /** Restore the info window to the pre-maximized state. */
    restore(): void;
    /**
     * Selects the feature at the specified index.
     * @param index The index of the feature to select.
     */
    select(index: number): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: string): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: Graphic[]): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: any[]): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.Point that represents the geographic location to display the popup.
     * @param options Optional parameters.
     */
    show(location: Point, options?: any): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the popup has finished maximizing. */
    on(type: "maximize", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the popup has been restored from its maximized state. */
    on(type: "restore", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: Popup }) => void): esri.Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: Popup }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Popup;
}

declare module "esri/dijit/PopupMobile" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Graphic = require("esri/graphic");
  import Point = require("esri/geometry/Point");

  /** The PopupMobile class is an implementation of InfoWindow that inherits from InfoWindowBase to provide additional capabilities. */
  class PopupMobile extends InfoWindowBase {
    /**
     * Create a new PopupMobile object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupMobileOptions, srcNodeRef: HTMLElement);
    /**
     * Create a new PopupMobile object.
     * @param options Optional parameters.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(options: esri.PopupMobileOptions, srcNodeRef: string);
    /** Removes all features and destroys any pending deferreds. */
    clearFeatures(): void;
    /** Destroy the popup. */
    destroy(): void;
    /** Get the currently selected feature. */
    getSelectedFeature(): Graphic;
    /** Hide the info window. */
    hide(): void;
    /**
     * Selects the feature at the specified index.
     * @param index The index of the feature to select.
     */
    select(index: number): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: string): void;
    /**
     * Set the content for the info window.
     * @param content The content for the info window.
     */
    setContent(content: Function): void;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: Graphic[]): any;
    /**
     * Associate an array of features or an array of deferreds that return features with the info window.
     * @param features An array of features or deferreds.
     */
    setFeatures(features: any[]): any;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: string): void;
    /**
     * Sets the info window title.
     * @param title The text for the title.
     */
    setTitle(title: Function): void;
    /**
     * Display the info window at the specified location.
     * @param location An instance of esri.geometry.Point that represents the geographic location to display the popup.
     */
    show(location: Point): void;
    /** Fired when clearFeatures is called. */
    on(type: "clear-features", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the info window is hidden. */
    on(type: "hide", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the selection changes. */
    on(type: "selection-change", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired after registering an array of features. */
    on(type: "set-features", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    /** Fired when the info window becomes visible. */
    on(type: "show", listener: (event: { target: PopupMobile }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = PopupMobile;
}

declare module "esri/dijit/PopupTemplate" {
  import esri = require("esri");
  import InfoTemplate = require("esri/InfoTemplate");

  /** The PopupTemplate class extends esri.InfoTemplate and provides support for defining a layout. */
  class PopupTemplate extends InfoTemplate {
    /** The popup definition defined as a JavaScript object. */
    info: any;
    /**
     * Create a new PopupTemplate object.
     * @param popupInfo An object that defines popup content.
     * @param options Optional parameters.
     */
    constructor(popupInfo: any, options?: esri.PopupTemplateOptions);
  }
  export = PopupTemplate;
}

declare module "esri/dijit/Print" {
  import esri = require("esri");

  /** Widget that simplifies the process of printing a map using a default or user-defined layout. */
  class Print {
    /**
     * Creates a new Print widget.
     * @param params Parameters for the print widget.
     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
     */
    constructor(params: esri.PrintOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Print widget.
     * @param params Parameters for the print widget.
     * @param srcNodeRef HTML element where the print widget button and drop down list will be rendered.
     */
    constructor(params: esri.PrintOptions, srcNodeRef: string);
    /** Destroys the print widget. */
    destroy(): void;
    /** Hide the print widget. */
    hide(): void;
    /** Set the print widget's visibility to true. */
    show(): void;
    /** Finalizes the creation of the print widget. */
    startup(): void;
    /** Fired when an error occurs during the print request. */
    on(type: "error", listener: (event: { error: Error; target: Print }) => void): esri.Handle;
    /** Fired when the print job has succeeded. */
    on(type: "print-complete", listener: (event: { value: any; target: Print }) => void): esri.Handle;
    /** Fired when the request is sent to the print service. */
    on(type: "print-start", listener: (event: { target: Print }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Print;
}

declare module "esri/dijit/Scalebar" {
  import esri = require("esri");

  /** The scalebar widget displays a scalebar on the map or in a specified HTML node. */
  class Scalebar {
    /**
     * Creates a new Scalebar dijit.
     * @param params Parameters used to configure the widgit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ScalebarOptions, srcNodeRef?: HTMLElement);
    /**
     * Creates a new Scalebar dijit.
     * @param params Parameters used to configure the widgit.
     * @param srcNodeRef Reference or id of the HTML element where the widget should be rendered.
     */
    constructor(params: esri.ScalebarOptions, srcNodeRef?: string);
    /** Destroy the scalebar. */
    destroy(): void;
    /** Hide the scalebar dijit. */
    hide(): void;
    /** Set the scalebar's visibility to true. */
    show(): void;
  }
  export = Scalebar;
}

declare module "esri/dijit/TimeSlider" {
  import esri = require("esri");
  import TimeExtent = require("esri/TimeExtent");

  /** Widget for visualizing time enabled layers. */
  class TimeSlider {
    /** Default value is false. */
    loop: boolean;
    /** Default value is false. */
    playing: boolean;
    /** Default value is 1. */
    thumbCount: number;
    /** Rate at which the time animation plays. */
    thumbMovingRate: number;
    /** An array of dates representing the stops (tics) on the TimeSlider. */
    timeStops: Date[];
    /**
     * Creates a new TimeSlider object.
     * @param params Parameters for the time slider object.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(params: esri.TimeSliderOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new TimeSlider object.
     * @param params Parameters for the time slider object.
     * @param srcNodeRef HTML element where the time slider should be rendered.
     */
    constructor(params: esri.TimeSliderOptions, srcNodeRef: string);
    /**
     * The specified number of time stops are created for the input time extent.
     * @param timeExtent The time extent used to define the time slider's start and end time stops.
     * @param count The number of time stops to create.
     */
    createTimeStopsByCount(timeExtent: TimeExtent, count?: number): void;
    /**
     * Create a time stop for each interval specified, i.e., (week, month, day).
     * @param timeExtent The time extent used to define the time slider's start and end time stops.
     * @param timeInterval The length of the time interval.
     * @param timeIntervalUnits  Valid values are listed in the TimeInfo constants table.
     */
    createTimeStopsByTimeInterval(timeExtent: TimeExtent, timeInterval?: number, timeIntervalUnits?: string): void;
    /** Gets the current time extent for the time slider. */
    getCurrentTimeExtent(): TimeExtent;
    /** Move to the next time step. */
    next(): void;
    /** Pause the time slider. */
    pause(): void;
    /** Play the time slider. */
    play(): void;
    /** Move to the previous time step. */
    previous(): void;
    /**
     * Specify an array of strings to be used as labels.
     * @param labels An array of strings that define the labels for each tick.
     */
    setLabels(labels: string[]): void;
    /**
     * Determines whether or not loop.
     * @param loop True plays the time slider continuously.
     */
    setLoop(loop: boolean): void;
    /**
     * The number of thumbs to display.
     * @param thumbCount The number of thumbs to display.
     */
    setThumbCount(thumbCount: number): void;
    /**
     * Array of two integers, the first value determines where to put the first thumb.
     * @param indexes Array of two integers.
     */
    setThumbIndexes(indexes: number[]): void;
    /**
     * Change the rate at which the time animation plays.
     * @param thumbMovingRate The rate at which the time slider plays.
     */
    setThumbMovingRate(thumbMovingRate: number): void;
    /**
     * Specify the number of ticks to display on the time slider.
     * @param count The number of ticks to display on the slider.
     */
    setTickCount(count: number): void;
    /**
     * Manually define the time stop locations by providing an array of dates.
     * @param timeStops Array of dates
     */
    setTimeStops(timeStops: Date[]): void;
    /**
     * Determine if the time is displayed for an instant in time.
     * @param createTimeInstants When true, the time slider displays features for the current point in time.
     */
    singleThumbAsTimeInstant(createTimeInstants: boolean): void;
    /** Fires when the timeExtent of the TimeSlider is changed. */
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = TimeSlider;
}

declare module "esri/dijit/analysis/AggregatePoints" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** The AggregatePoints dijit works with point feature layer and a polygon feature layer. */
  class AggregatePoints extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** A field name from pointLayer based on which the points will be grouped. */
    groupByField: string;
    /** When true, the polygons that have no points within them will be returned in the output. */
    keepBoundariesWithNoPoints: boolean;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The point feature layer that will be aggregated into the polygons in the polygon feature layer. */
    pointLayer: FeatureLayer;
    /** The polygon layer to be shown selected in in the Choose area menu. */
    polygonLayer: FeatureLayer;
    /** An array of feature layer candidates to be selected as the input polygon layer. */
    polygonLayers: FeatureLayer[];
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of attribute field names and statistic types that you would like to aggregate for all points within each polygon. */
    summaryFields: string[];
    /**
     * Creates a new AggregatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new AggregatePoints dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: string);
  }
  export = AggregatePoints;
}

declare module "esri/dijit/analysis/AnalysisBase" {
  import esri = require("esri");

  /** The AnalysisBase dijit is the base class for all other dijits under esri.dijit.analysis. */
  class AnalysisBase {
    /**
     * Cancels an analysis job that is being processed.
     * @param jobInfo An object containing job information including job ID, status, message, etc.
     */
    cancel(jobInfo: any): void;
    /**
     * Starts an analysis tool.
     * @param params An object contains the following properties.
     */
    execute(params: string): void;
    /**
     * Gets credits estimate for a specific analysis job.
     * @param toolName The name of the analysis tool from which a credits estimate will be returned.
     * @param jobParams The input job parameters.
     */
    getCreditsEstimate(toolName: string, jobParams: string): any;
    /** Fires when close icon is clicked or when run analysis button is clicked. */
    on(type: "close", listener: (event: { target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the drawn boundaries option is activated. */
    on(type: "drawtool-activate", listener: (event: { target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the drawn boundaries option is deactivated. */
    on(type: "drawtool-deactivate", listener: (event: { target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the job in cancelled. */
    on(type: "job-cancel", listener: (event: { response: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the job fails. */
    on(type: "job-fail", listener: (event: { error: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires after the job fetches result data. */
    on(type: "job-result", listener: (event: { result: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the job execution status is received. */
    on(type: "job-status", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the job is submitted to the server for asynchronous processing. */
    on(type: "job-submit", listener: (event: { params: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the job succeeds. */
    on(type: "job-success", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): esri.Handle;
    /** Fires when the execute method is called. */
    on(type: "start", listener: (event: { params: any; target: AnalysisBase }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = AnalysisBase;
}

declare module "esri/dijit/analysis/CreateBuffers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The CreateBuffers dijit creates polygons that cover a given distance from an input point, line, or polygon feature layer. */
  class CreateBuffers extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** An array of buffer distances to buffer the input feature layer. */
    bufferDistance: number[];
    /** The input point, line, or polygon feature layer to be buffered. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: string;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new CreateBuffers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new CreateBuffers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: string);
  }
  export = CreateBuffers;
}

declare module "esri/dijit/analysis/CreateDriveTimeAreas" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The CreateDriveTimeAreas dijit creates drive-time (or drive-distance) polygons around input points for the given drive-time values. */
  class CreateDriveTimeAreas extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The units of the breakValues parameter. */
    breakUnits: string;
    /** An array of driving time break values. */
    breakValues: number[];
    /** The point feature layer around which drive-time areas will be drawn. */
    inputLayer: FeatureLayer;
    /** The geometry type of the input layer. */
    inputType: string;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The rule of overlap. */
    overlapPolicy: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new CreateDriveTimeAreas dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: string);
  }
  export = CreateDriveTimeAreas;
}

declare module "esri/dijit/analysis/DissolveBoundaries" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The DissolveBoundaries dijit finds polygons that overlap or share a common boundary, and merges them together to form a single polygon. */
  class DissolveBoundaries extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** An array of field names based on which polygons are merged. */
    dissolveFields: string[];
    /** The layer containing polygon features that will be dissolved. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of field names and statistical summary types that you wish to calculate from the polygons that are dissolved together. */
    summaryFields: string[];
    /**
     * Creates a new DissolveBoundaries dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new DissolveBoundaries dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: string);
  }
  export = DissolveBoundaries;
}

declare module "esri/dijit/analysis/EnrichLayer" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The EnrichLayer dijit enriches an input layer with facts about the people, places, and businesses nearby. */
  class EnrichLayer extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** An buffer distance or driving time value to buffer the input feature layer. */
    distance: number;
    /** The input feature layer to enrich with new data. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When true, you can specify a time for traffic condition under Define areas to enrich - Driving Time. */
    showTrafficWidget: boolean;
    /**
     * Creates a new EnrichLayer dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new EnrichLayer dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: string);
  }
  export = EnrichLayer;
}

declare module "esri/dijit/analysis/ExtractData" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The ExtractData dijit is used to extract data from one or more layers within a given extent. */
  class ExtractData extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** If true, the Clip features option in Study area will be ckecked. */
    clip: boolean;
    /** The format of output data shown as the default selection in the Output data format menu. */
    dataFormat: string;
    /** An array for feature layers to be extracted. */
    featureLayers: FeatureLayer[];
    /** An array for feature layers to be shown in the Layers to extract menu as selected. */
    inputLayers: FeatureLayer[];
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new ExtractData dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ExtractDataOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new ExtractData dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.ExtractDataOptions, srcNodeRef: string);
  }
  export = ExtractData;
}

declare module "esri/dijit/analysis/FindHotSpots" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The FindHotSpots dijit finds statistically significant clusters of incident points, weighted points, or weighted polygons. */
  class FindHotSpots extends AnalysisBase {
    /** An array of feature layer candidates to be selected as the aggregation polygon layer. */
    aggregationPolygonLayers: FeatureLayer[];
    /** The numeric field in the AnalysisLayer that will be analyzed. */
    analysisField: string;
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer for which hot spots will be calculated. */
    analysisLayer: FeatureLayer;
    /** An array of feature layer candidates to be selected as the bounding polygon layer. */
    boundingPolygonLayers: FeatureLayer[];
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindHotSpots dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new FindHotSpots dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: string);
  }
  export = FindHotSpots;
}

declare module "esri/dijit/analysis/FindNearest" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The FindNearest dijit works with two layers: an analysis layer and a near layer. */
  class FindNearest extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer from which the nearest features are found. */
    analysisLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The maximum number of nearest locations to find for each feature in analysisLayer. */
    maxCount: number;
    /** The feature layer to be shown selected in the "1. */
    nearLayer: FeatureLayer;
    /** An array of near layer candidates. */
    nearLayers: FeatureLayer[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** The maximum range to search for nearest locations from each feature in the analysisLayer. */
    searchCutoff: number;
    /** The units of the searchCutoff parameter. */
    searchCutoffUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new FindNearest dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindNearestOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new FindNearest dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.FindNearestOptions, srcNodeRef: string);
  }
  export = FindNearest;
}

declare module "esri/dijit/analysis/MergeLayers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The MergeLayers dijit copies features from two layers into a new layer. */
  class MergeLayers extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer to be merged with the mergeLayer. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** An array of feature layer candidates to be selected as the merge layer. */
    mergeLayers: FeatureLayer[];
    /** An array of values that describe how fields from the mergeLayer are to be modified. */
    mergingAttributes: string[];
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /**
     * Creates a new MergeLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.MergeLayersOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new MergeLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.MergeLayersOptions, srcNodeRef: string);
  }
  export = MergeLayers;
}

declare module "esri/dijit/analysis/OverlayLayers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The OverlayLayers dijit combines two or more layers into one single layer containing all the information found in the stack. */
  class OverlayLayers extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** The feature layer that will be overlayed with the overlayLayer. */
    inputLayer: FeatureLayer;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** An array of feature layers to be overlaid with inputLayer. */
    overlayLayer: FeatureLayer[];
    /** Defines how two input layers are combined. */
    overlayType: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** When the distance between features is less than the tolerance, the features in the overlay layer will snap to the features in the input layer. */
    snapToInput: boolean;
    /** The minimum distance separating all feature coordinates (nodes and vertices) as well as the distance a coordinate can move in X or Y (or both). */
    tolerance: number;
    /**
     * Creates a new OverlayLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new OverlayLayers dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: string);
  }
  export = OverlayLayers;
}

declare module "esri/dijit/analysis/SummarizeNearby" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** The FindNearest dijit works with two layers: an summarize nearby layer and a summary layer. */
  class SummarizeNearby extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** An array of numbers that defines the search distance (for StraightLine or DrivingDistance) or time (for DrivingTime) shown in the distance input in the Find nearest features using a option. */
    distance: number[];
    /** A field of the summarizeLayer features that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: Map;
    /** Type of distance measurement shown as the defeault value in the Find nearest features using a option. */
    nearType: string;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** Type of units shown under the Total Area checkbox in the Add statistics from option. */
    shapeUnits: string;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** An array of possible statistics attribute field names and summary types that you wish to calculate for all nearby features. */
    summaryFields: string[];
    /** The feature layer to be shown selected in the Choose layer to summarize dropdown. */
    summaryLayer: FeatureLayer;
    /** An array of possible feature layers summarizing toward. */
    summaryLayers: FeatureLayer[];
    /** The point, line, or polygon feature layer from which distances will be measured to features in summarizeLayer. */
    sumNearbyLayer: FeatureLayer;
    /** If true. */
    sumShape: boolean;
    /** Type of units shown as the defeault value in the Find nearest features using a option. */
    units: string;
    /**
     * Creates a new SummarizeNearby dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new SummarizeNearby dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: string);
  }
  export = SummarizeNearby;
}

declare module "esri/dijit/analysis/SummarizeWithin" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** The SummarizeWithin dijit works with two layers: an summarize within layer and a summary layer. */
  class SummarizeWithin extends AnalysisBase {
    /** URL to the GPServer to be used for this analysis. */
    analysisGpServer: string;
    /** A field name from summaryLayer that you can use to calculate statistics separately for each unique attribute value. */
    groupByField: string;
    /** Reference to the map object. */
    map: Map;
    /** The name of the output layer to be shown in the Result layer name inputbox. */
    outputLayerName: string;
    /** The url to the ArcGIS.com site or in-house portal where the GP server is hosted. */
    portalUrl: string;
    /** When true, returns the result of analysis as feature collection and creates a feature service. */
    returnFeatureCollection: boolean;
    /** When true, the choose extent checkbox will be shown. */
    showChooseExtent: boolean;
    /** When true, the show credit option is visible. */
    showCredits: boolean;
    /** When true, the help links will be shown. */
    showHelp: boolean;
    /** When true, the select folder dropdown will be shown. */
    showSelectFolder: boolean;
    /** A list of field names and statistical summary type that you wish to calculate for all features in SummaryLayer that are within each polygon in sumWithinLayer. */
    summaryFields: string;
    /** The summary layer to be shown selected in in the Choose layer to summarize menu. */
    summaryLayer: FeatureLayer;
    /** An array of summarize layer candidates. */
    summaryLayers: FeatureLayer[];
    /** The polygon feature layer to be summarized toward. */
    sumWithinLayer: FeatureLayer;
    /**
     * Creates a new SummarizeWithin dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new SummarizeWithin dijit using the given DOM node.
     * @param params Various options to configure this dijit.
     * @param srcNodeRef Reference or id of a HTML element that this dijit is rendered into.
     */
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: string);
  }
  export = SummarizeWithin;
}

declare module "esri/dijit/editing/Add" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The esri.dijit.editing namespace contains editing related opertions that inherit from OperationBase. */
  class Add extends OperationBase {
    /**
     * Create a new Add operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.AddOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export = Add;
}

declare module "esri/dijit/editing/AttachmentEditor" {
  import Graphic = require("esri/graphic");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** Widget that supports viewing attachments for feature layers that have attachments enabled. */
  class AttachmentEditor {
    /**
     * Creates a new AttachmentEditor object.
     * @param params No parameter options.
     * @param srcNodeRef HTML element where the widget is rendered.
     */
    constructor(params: any, srcNodeRef: HTMLElement);
    /**
     * Creates a new AttachmentEditor object.
     * @param params No parameter options.
     * @param srcNodeRef HTML element where the widget is rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /**
     * Display the attachment editor.
     * @param graphic Graphic, with attachments, to display in the attachment editor.
     * @param featureLayer The feature layer to display attachments for.
     */
    showAttachments(graphic: Graphic, featureLayer: FeatureLayer): void;
    /** Finalizes the creation of the attachment editor. */
    startup(): void;
  }
  export = AttachmentEditor;
}

declare module "esri/dijit/editing/Cut" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The esri.dijit.editing namespace contains editing related opertions that inherit from OperationBase. */
  class Cut extends OperationBase {
    /**
     * Create a new Cut operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.CutOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export = Cut;
}

declare module "esri/dijit/editing/Delete" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The esri.dijit.editing namespace contains editing related opertions that inherit from OperationBase. */
  class Delete extends OperationBase {
    /**
     * Create a new Delete operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.DeleteOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export = Delete;
}

declare module "esri/dijit/editing/Editor" {
  import esri = require("esri");

  /** Load the Editor using one of the dojo.require statements below. */
  class Editor {
    /** Arrow tool */
    static CREATE_TOOL_ARROW: any;
    /** Autocomplete polygon tool */
    static CREATE_TOOL_AUTOCOMPLETE: any;
    /** Circle tool */
    static CREATE_TOOL_CIRCLE: any;
    /** Ellipse tool */
    static CREATE_TOOL_ELLIPSE: any;
    /** Freehand polygon tool */
    static CREATE_TOOL_FREEHAND_POLYGON: any;
    /** Freehand polyline tool */
    static CREATE_TOOL_FREEHAND_POLYLINE: any;
    /** Polygon tool */
    static CREATE_TOOL_POLYGON: any;
    /** Polyline tool */
    static CREATE_TOOL_POLYLINE: any;
    /** Rectangle tool */
    static CREATE_TOOL_RECTANGLE: any;
    /** Triangle tool */
    static CREATE_TOOL_TRIANGLE: any;
    /**
     * Creates a new Editor object.
     * @param params Parameters that define the functionality of the editor widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.EditorOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a new Editor object.
     * @param params Parameters that define the functionality of the editor widget.
     * @param srcNodeRef HTML element where the widget should be rendered.
     */
    constructor(params: esri.EditorOptions, srcNodeRef: string);
  }
  export = Editor;
}

declare module "esri/dijit/editing/TemplatePicker" {
  import esri = require("esri");

  /** Load the TemplatePicker using one of the dojo.require statements below. */
  class TemplatePicker {
    /** Reference to the data grid used to display the templates. */
    grid: any;
    /** If tooltips are enabled the reference to the tooltip div. */
    tooltip: HTMLDivElement;
    /**
     * Creates a  new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
     * @param params FeatureLayers or items are required all other parameters are optional.
     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
     */
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: HTMLElement);
    /**
     * Creates a  new TemplatePicker object that displays a gallery of templates from the input feature layers or items.
     * @param params FeatureLayers or items are required all other parameters are optional.
     * @param srcNodeRef HTML element where the TemplatePicker will be rendered.
     */
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: string);
    /**
     * Get or set the properties of the template picker.
     * @param name Name of the attribute of interest.
     * @param value Value for the specified attribute.
     */
    attr(name: string, value?: any): void;
    /** Clears the current selection. */
    clearSelection(): void;
    /** Destroys the template picker. */
    destroy(): void;
    /** Gets the selected item picked by the user. */
    getSelected(): any;
    /** Finalizes the creation of the template picker. */
    startup(): void;
    /** Updates the templatePicker after modifying the properties of the widget. */
    update(): void;
    /** Fires when an item is selected or unselected in the template picker. */
    on(type: "selection-change", listener: (event: { target: TemplatePicker }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = TemplatePicker;
}

declare module "esri/dijit/editing/Union" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The esri.dijit.editing namespace contains editing related opertions that inherit from OperationBase. */
  class Union extends OperationBase {
    /**
     * Create a new Union operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.UnionOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export = Union;
}

declare module "esri/dijit/editing/Update" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The esri.dijit.editing namespace contains editing related opertions that inherit from OperationBase. */
  class Update extends OperationBase {
    /**
     * Create a new Update operation.
     * @param params See options list for parameters.
     */
    constructor(params: esri.UpdateOptions);
    /** Redo the current operation. */
    performRedo(): void;
    /** Undo the current operation. */
    performUndo(): void;
  }
  export = Update;
}

declare module "esri/dijit/geoenrichment/InfoGraphic" {
  import esri = require("esri");
  import GeometryStudyArea = require("esri/tasks/geoenrichment/GeometryStudyArea");
  import FeatureSet = require("esri/tasks/FeatureSet");

  /** Displays an Infographic of one or more variables that describe the geographic context of a location. */
  class Infographic {
    /** The number of Infographic's for which data retrieved is cached for that browser session. */
    cacheLimit: number;
    /** The ID of the country for which data is retrieved. */
    countryID: string;
    /** The ID of the dataset to which variables used in this Infographic belong. */
    datasetID: string;
    /** If true, the Infographic will be displayed in its expanded state. */
    expanded: boolean;
    /** When true, output geomentry will be available as the geometry property in the returned object of the "data-ready" event handler. */
    returnGeometry: boolean;
    /** The study area for this Infographic. */
    studyArea: GeometryStudyArea;
    /** The options to apply to the study area. */
    studyAreaOptions: any;
    /** An HTML template string used to define the Infographic subtitle. */
    subtitle: string;
    /** The title of the Infographic. */
    title: string;
    /** The type of the Infographic. */
    type: string;
    /** The set of variables displayed in this Infographic. */
    variables: string[];
    /**
     * Creates a new Infographic dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: HTMLElement);
    /**
     * Creates a new Infographic dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /**
     * Define the infographic data.
     * @param data Specify the FeatureSet containing the custom data to display in the Infographic.
     * @param metadata Define the mappings of feature set attributes to Infographic display fields.
     */
    setData(data: FeatureSet, metadata?: any): void;
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: Infographic }) => void): esri.Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: Infographic }) => void): esri.Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: Infographic }) => void): esri.Handle;
    /** Fires when requesting data for the study area. */
    on(type: "data-request", listener: (event: { target: Infographic }) => void): esri.Handle;
    /** Fires when the Infographic is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: Infographic }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Infographic;
}

declare module "esri/dijit/geoenrichment/InfographicsCarousel" {
  import esri = require("esri");
  import InfographicsOptions = require("esri/dijit/geoenrichment/InfographicsOptions");
  import GeometryStudyArea = require("esri/tasks/geoenrichment/GeometryStudyArea");

  /** Displays a set of Infographic dijits in a carousel. */
  class InfographicsCarousel {
    /** If true, the Infographic will be displayed in its expanded state. */
    expanded: boolean;
    /** Describes the options used to configure the contents of the carousel. */
    options: InfographicsOptions;
    /** When true, output geomentry will be available as the geometry property in the returned object of the "data-ready" event handler. */
    returnGeometry: boolean;
    /** The index of the currently selected InfoGraphic in this InfographicsCarousel. */
    selectedIndex: number;
    /** The study area for this InfographicsCarousel. */
    studyArea: GeometryStudyArea;
    /** The name of the study area to be shown in this InfographicsCarousel. */
    studyAreaTitle: string;
    /**
     * Creates a new InfographicsCarousel dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: HTMLElement);
    /**
     * Creates a new InfographicsCarousel dijit using the given DOM node.
     * @param params Various optional parameters that can be used to configure the dijit.
     * @param srcNodeRef Reference or id of an HTML element where the Directions widget should be rendered.
     */
    constructor(params: any, srcNodeRef: string);
    /** Finalizes the creation of this dijit. */
    startup(): void;
    /** Fires if an error occurs in retrieving data for the study area. */
    on(type: "data-error", listener: (event: { error: any; target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when loading data for the study area. */
    on(type: "data-load", listener: (event: { target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when data for the study area is ready. */
    on(type: "data-ready", listener: (event: { provider: any; target: InfographicsCarousel }) => void): esri.Handle;
    /** Fires when the InfographicsCarousel is resized. */
    on(type: "resize", listener: (event: { size: number[]; target: InfographicsCarousel }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = InfographicsCarousel;
}

declare module "esri/dijit/geoenrichment/InfographicsOptions" {
  /** InfographicsOptions is used to customize and configure the Infographic's included in a InfographicCarousel. */
  class InfographicsOptions {
    /** The options to apply to the study area. */
    studyAreaOptions: any;
    /** The name of the css theme used to format the InfographicsCarousel. */
    theme: string;
    /**
     * Constructs instance from serialized state.
     * @param json Various options to configure this InfographicsOptions.
     */
    constructor(json?: Object);
    /**
     * Gets an array of default InfographicsOptions.Item's in the InfographicsCarousel with a countryID.
     * @param countryID The ID of the country for which data is retrieved.
     */
    getItems(countryID: string): any;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = InfographicsOptions;
}

declare module "esri/dijit/geoenrichment/InfographicsOptionsItem" {
  /** Defines the options for each Infographic in an InfographicsCarousel. */
  class InfographicsOptionsItem {
    /** The ID of the dataset to which variables used in this Infographic belong. */
    datasetID: string;
    /** When true, the Infographic is configured to be visible. */
    isVisible: boolean;
    /** The title or name of the Infographic. */
    title: string;
    /** The type of the Infographic. */
    type: string;
    /** The set of variables displayed in this Infographic. */
    variables: string[];
    /**
     * Constructs an InfographicsOptionsItem object.
     * @param type The type of the Infographic.
     * @param variables The set of variables displayed in this InfographicsOptionsItem.
     */
    constructor(type: string, variables: string[]);
  }
  export = InfographicsOptionsItem;
}

declare module "esri/domUtils" {
  /** Utility methods related to working with a DOM. */
  var domUtils: {
    /** Represents the size of the client side window or document at first load. */
    documentBox: any;
    /**
     * Hides an HTML element such as a DIV or TABLE.
     * @param element The name of the HTML element.
     */
    hide(element: HTMLElement): void;
    /**
     * Shows an HTML element such as a DIV or TABLE.
     * @param element The name of the HTML element.
     */
    show(element: HTMLElement): void;
    /**
     * If an HTML element is currently visible, the element is hidden.
     * @param element The name of the HTML element.
     */
    toggle(element: HTMLElement): void;
  };
  export = domUtils;
}

declare module "esri/geometry/Circle" {
  import esri = require("esri");
  import Polygon = require("esri/geometry/Polygon");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");

  /** A circle (polygon) created by a specified center point. */
  class Circle extends Polygon {
    /** Center point of the circle. */
    center: any;
    /** The radius of the circle based. */
    radius: number;
    /** Unit of the radius. */
    radiusUnit: string;
    /** Array of coordinate values constituting the circle like [[x1, y1], [x2, y2],...]. */
    rings: number[][][];
    /** The spatial reference of the circle will be the same as the spatial reference of the center point. */
    spatialReference: SpatialReference;
    /**
     * Create a new Circle by specifying an input center location using either an esri.geometry.Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusUnits, geodesic and numberOfPoints.
     * @param center Center point of the circle.
     * @param options See options descriptions for further information.
     */
    constructor(center: Point, options?: esri.CircleOptions1);
    /**
     * Create a new Circle by specifying an input center location using either an esri.geometry.Point object or a latitude/longitude array and an object with the following optional properties: radius, radiusUnits, geodesic and numberOfPoints.
     * @param center Center point of the circle.
     * @param options See options descriptions for further information.
     */
    constructor(center: number[], options?: esri.CircleOptions1);
    /**
     * Create a new Circle by specifying an object with a required center location, defined as a longitude/latitude array or an esri.geometry.Point, and the following additional optional parameters: radius, radiusUnits, geodesic, and numberOfPoints.
     * @param params If no center parameter is provided, it must be set within the options.
     */
    constructor(params: esri.CircleOptions2);
  }
  export = Circle;
}

declare module "esri/geometry/Extent" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");

  /** The minimum and maximum X- and Y- coordinates of a bounding box. */
  class Extent extends Geometry {
    /** Top-right X-coordinate of an extent envelope. */
    xmax: number;
    /** Bottom-left X-coordinate of an extent envelope. */
    xmin: number;
    /** Top-right Y-coordinate of an extent envelope. */
    ymax: number;
    /** Bottom-left Y-coordinate of an extent envelope. */
    ymin: number;
    /**
     * Creates a new Extent object.
     * @param xmin Bottom-left X-coordinate of an extent envelope.
     * @param ymin Bottom-left Y-coordinate of an extent envelope.
     * @param xmax Top-right X-coordinate of an extent envelope.
     * @param ymax Top-right Y-coordinate of an extent envelope.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference);
    /**
     * Creates a new Extent object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * A new extent is returned with the same width and height centered at the argument point.
     * @param point Centers the extent on the specified x,y location.
     */
    centerAt(point: Point): Extent;
    /**
     * When "true", the geometry in the argument is contained in this extent.
     * @param geometry Can be a Point or Extent.
     */
    contains(geometry: Geometry): boolean;
    /**
     * Expands the extent by the factor given.
     * @param factor The multiplier value.
     */
    expand(factor: number): Extent;
    /** Returns the center point of the extent in map units. */
    getCenter(): Point;
    /** Distance between ymin and ymax. */
    getHeight(): number;
    /** Distance between xmin and xmax. */
    getWidth(): number;
    /**
     * Returns the interesection extent if the input geometry is an extent that intersects this extent.
     * @param geometry The geometry used to test the intersection.
     */
    intersects(geometry: Geometry): any;
    /**
     * Offsets the current extent.
     * @param dx The offset distance in map units for the y-coordinate.
     * @param dy The offset distance in map units for the x-coordinate.
     */
    offset(dx: number, dy: number): Extent;
    /**
     * Expands this extent to include the extent of the argument.
     * @param extent The minx, miny, maxx, and maxy bounding box.
     */
    union(extent: Extent): Extent;
    /**
     * Updates this extent with the specified parameters.
     * @param xmin Bottom-left X-coordinate of an extent envelope.
     * @param ymin Bottom-left Y-coordinate of an extent envelope.
     * @param xmax Top-right X-coordinate of an extent envelope.
     * @param ymax Top-right Y-coordinate of an extent envelope.
     * @param spatialReference Spatial reference of the geometry.
     */
    update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): Extent;
  }
  export = Extent;
}

declare module "esri/geometry/Geometry" {
  import SpatialReference = require("esri/SpatialReference");

  /** The base class for geometry objects. */
  class Geometry {
    /** The spatial reference of the geometry. */
    spatialReference: SpatialReference;
    /** The type of geometry. */
    type: string;
    /**
     * Sets the spatial reference.
     * @param sr Spatial reference of the geometry.
     */
    setSpatialReference(sr: SpatialReference): Geometry;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Geometry;
}

declare module "esri/geometry/Multipoint" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Extent = require("esri/geometry/Extent");
  import Point = require("esri/geometry/Point");

  /** An ordered collection of points. */
  class Multipoint extends Geometry {
    /** An array of one or more points. */
    points: number[][];
    /**
     * Creates a new Multipoint object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new Multipoint object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /** Adds a point to the Multipoint. */
    addPoint(): Multipoint;
    /** Gets the extent of all the points. */
    getExtent(): Extent;
    /**
     * Returns the point at the specified index.
     * @param index Positional index of the point in the points property.
     */
    getPoint(index: number): Point;
    /**
     * Removes a point from the Multipoint.
     * @param index The index of the point to remove.
     */
    removePoint(index: number): Point;
    /**
     * Updates the point at the specified index.
     * @param index Positional index of the point in the points property.
     * @param point Point that specifies the new location.
     */
    setPoint(index: number, point: Point): Multipoint;
  }
  export = Multipoint;
}

declare module "esri/geometry/Point" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");

  /** A location defined by an X- and Y- coordinate. */
  class Point extends Geometry {
    /** X-coordinate of a point in map units. */
    x: number;
    /** Y-coordinate of a point in map units. */
    y: number;
    /**
     * Creates a new Point object using x, y, and a spatial reference.
     * @param x X-coordinate of a point in map units.
     * @param y Y-coordinate of a point in map units.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(x: number, y: number, spatialReference: SpatialReference);
    /**
     * Creates a new Point object using an array containing an x,y coordinate value and a spatial reference.
     * @param coords An array that includes an x,y coordinate.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(coords: number[], spatialReference: SpatialReference);
    /**
     * Creates a new Point object using a JSON object.
     * @param json A JSON object that contains an x,y coordinate.
     */
    constructor(json: Object);
    /**
     * Create a point object and initialize it with the specified longitude and latitude.
     * @param long Longitude value.
     * @param lat Latitude value.
     */
    constructor(long: number, lat: number);
    /**
     * Create a point object and initialize it with an array containing longitude and latitude values.
     * @param point An input array containing the longitude and latitude values for the point.
     */
    constructor(point: number[]);
    /**
     * Create a point object and initialize it with an object that has latitude and longitude properties.
     * @param point An object with latitude and longitude properties.
     */
    constructor(point: any);
    /** Returns the latitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLatitude(): number;
    /** Returns the longitude coordinate for this point if the spatial reference of the point is Web Mercator or Geographic (4326). */
    getLongitude(): number;
    /** Shifts the x coordinate to within +/- 180 span. */
    normalize(): void;
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): Point;
    /**
     * Sets the latitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lat Valid latitude value.
     */
    setLatitude(lat: number): Point;
    /**
     * Sets the longitude coordinate for this point to the specified value if the point's spatial reference is Web Mercator or Geographic (4326).
     * @param lon A valid longitude value.
     */
    setLongitude(lon: number): Point;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): Point;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): Point;
    /**
     * Updates a point.
     * @param x X-coordinate of the updated point.
     * @param y Y-coordinate of the updated point.
     */
    update(x: number, y: number): Point;
  }
  export = Point;
}

declare module "esri/geometry/Polygon" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import Extent = require("esri/geometry/Extent");

  /** An array of rings where each ring is an array points. */
  class Polygon extends Geometry {
    /** An array of rings. */
    rings: number[][][];
    /**
     * Creates a new Polygon object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new Polygon object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * Create a new polygon by providing an array of geographic coordinate pairs.
     * @param coordinates An array of geographic coordinates that define the polygon.
     */
    constructor(coordinates: number[][]);
    /**
     * Create a new polygon by providing an array of geographic coordinate pairs.
     * @param coordinates An array of geographic coordinates that define the polygon.
     */
    constructor(coordinates: number[][][]);
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: Point[]): Polygon;
    /**
     * Adds a ring to the Polygon.
     * @param ring A polygon ring.
     */
    addRing(ring: number[][]): Polygon;
    /**
     * Checks on the client if the specified point is inside the polygon.
     * @param point The location defined by an X- and Y- coordinate in map units.
     */
    contains(point: Point): boolean;
    /** Returns the centroid of the polygon as defined here. */
    getCentroid(): Point;
    /** Returns the extent of the polygon. */
    getExtent(): Extent;
    /**
     * Returns a point specified by a ring and point in the path.
     * @param ringIndex The index of a ring.
     * @param pointIndex The index of a point in a ring.
     */
    getPoint(ringIndex: number, pointIndex: number): Point;
    /**
     * Inserts a new point into a polygon.
     * @param ringIndex Ring index to insert point.
     * @param pointIndex The index of the inserted point in the ring.
     * @param point Point to insert into the ring.
     */
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
    /**
     * Checks if a Polygon ring is clockwise.
     * @param ring A polygon ring.
     */
    isClockwise(ring: Point[]): boolean;
    /**
     * Checks if a Polygon ring is clockwise.
     * @param ring A polygon ring.
     */
    isClockwise(ring: number[][]): boolean;
    /**
     * When true, the polygon is self-intersecting which means that the ring of the polygon crosses itself.
     * @param polygon The polygon to test for self-intersection.
     */
    isSelfIntersecting(polygon: Polygon): boolean;
    /**
     * Remove a point from the polygon at the given pointIndex within the ring identified by ringIndex.
     * @param ringIndex The index of the ring containing the point.
     * @param pointIndex The index of the point within the ring.
     */
    removePoint(ringIndex: number, pointIndex: number): Point;
    /**
     * Removes a ring from the Polygon.
     * @param ringIndex The index of the ring to remove.
     */
    removeRing(ringIndex: number): Point[];
    /**
     * Updates a point in a polygon.
     * @param ringIndex Ring index for updated point.
     * @param pointIndex The index of the updated point in the ring.
     * @param point Point to update in the ring.
     */
    setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
  }
  export = Polygon;
}

declare module "esri/geometry/Polyline" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import Extent = require("esri/geometry/Extent");

  /** An array of paths where each path is an array of points. */
  class Polyline extends Geometry {
    /** An array of paths. */
    paths: number[][][];
    /**
     * Creates a new Polyline object.
     * @param spatialReference Spatial reference of the geometry.
     */
    constructor(spatialReference: SpatialReference);
    /**
     * Creates a new Polyline object using a JSON object.
     * @param json JSON object representing the geometry.
     */
    constructor(json: Object);
    /**
     * Create a new polyline by providing an array of geographic coordinates.
     * @param coordinates An array of geographic coordinates that define the polyline.
     */
    constructor(coordinates: number[][]);
    /**
     * Create a new polyline by providing an array of geographic coordinates.
     * @param coordinates An array of geographic coordinates that define the polyline.
     */
    constructor(coordinates: number[][][]);
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: Point[]): Polyline;
    /**
     * Adds a path to the Polyline.
     * @param path Path to add to the Polyline.
     */
    addPath(path: number[][]): Polyline;
    /** Returns the extent of the Polyline. */
    getExtent(): Extent;
    /**
     * Returns a point specified by a path and point in the path.
     * @param pathIndex The index of a path in a polyline.
     * @param pointIndex The index of a point in a path.
     */
    getPoint(pathIndex: number, pointIndex: number): Point;
    /**
     * Inserts a new point into a polyline.
     * @param pathIndex Path index to insert point.
     * @param pointIndex The index of the inserted point in the path.
     * @param point Point to insert into the path.
     */
    insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
    /**
     * Removes a path from the Polyline.
     * @param pathIndex The index of a path to remove.
     */
    removePath(pathIndex: number): Point[];
    /**
     * Remove a point from the polyline at the given pointIndex within the path identified by the given pathIndex.
     * @param pathIndex The index of the path containing the point.
     * @param pointIndex The index of the point within the path.
     */
    removePoint(pathIndex: number, pointIndex: number): Point;
    /**
     * Updates a point in a polyline.
     * @param pathIndex Path index for updated point.
     * @param pointIndex The index of the updated point in the path.
     * @param point Point to update in the path.
     */
    setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
  }
  export = Polyline;
}

declare module "esri/geometry/ScreenPoint" {
  /** ScreenPoint represents a point in terms of pixels relative to the top-left corner of the map control. */
  class ScreenPoint {
    /** X-coordinate relative to the top-left corner of the map control in pixels. */
    x: number;
    /** Y-coordinate relative to the top-left corner of the map control in pixels. */
    y: number;
    /**
     * Creates a new ScreenPoint object with X-, Y- coordinates.
     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
     */
    constructor(x: number, y: number);
    /**
     * Creates a new ScreenPoint object with an array containing X-, Y- coordinates.
     * @param coords An array that includes X-, Y- coordinates.
     */
    constructor(coords: number[]);
    /**
     * Creates a new ScreenPoint object with a JSON object.
     * @param json A JSON object that includes X-, Y- coordinates.
     */
    constructor(json: Object);
    /**
     * Offsets the point in an x and y direction.
     * @param dx Value for x-coordinate of point.
     * @param dy Value for y-coordinate of point.
     */
    offset(dx: number, dy: number): ScreenPoint;
    /**
     * Sets x-coordinate of point.
     * @param x Value for x-coordinate of point.
     */
    setX(x: number): ScreenPoint;
    /**
     * Sets y-coordinate of point.
     * @param y Value for y-coordinate of point.
     */
    setY(y: number): ScreenPoint;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
    /**
     * Updates a ScreenPoint.
     * @param x X-coordinate relative to the top-left corner of the map control in pixels.
     * @param y Y-coordinate relative to the top-left corner of the map control in pixels.
     */
    update(x: number, y: number): ScreenPoint;
  }
  export = ScreenPoint;
}

declare module "esri/geometry/geodesicUtils" {
  import Polygon = require("esri/geometry/Polygon");
  import Geometry = require("esri/geometry/Geometry");
  import Polyline = require("esri/geometry/Polyline");

  /** Utility methods for various geodesic calculations. */
  var geodesicUtils: {
    /**
     * Determine the area for the input polygons.
     * @param polygons An array of polygons.
     * @param areaUnit The area unit.
     */
    geodesicAreas(polygons: Polygon[], areaUnit: string): number[];
    /**
     * Returns a densified geometry.
     * @param geometry A polyline or polygon to densify.
     * @param maxSegmentLength The maximum segment length in meters.
     */
    geodesicDensify(geometry: Geometry, maxSegmentLength: number): Geometry;
    /**
     * Determine the length for the input polylines using the specified length unit.
     * @param polylines An array of polylines.
     * @param lengthUnit The length unit.
     */
    geodesicLengths(polylines: Polyline[], lengthUnit: string): number[];
  };
  export = geodesicUtils;
}

declare module "esri/geometry/jsonUtils" {
  import Geometry = require("esri/geometry/Geometry");

  /** Utility methods for working with JSON geometry objects. */
  var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate esri.geometry.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): Geometry;
    /**
     * Requests the geometry type name as represented in the ArcGIS REST.
     * @param geometry The ArcGIS JavaScript API geometry type to be converted.
     */
    getJsonType(geometry: Geometry): string;
  };
  export = jsonUtils;
}

declare module "esri/geometry/mathUtils" {
  import Point = require("esri/geometry/Point");

  /** Utility methods for getting length of a line segment or intersection of two segments. */
  var mathUtils: {
    /**
     * Calculates the length of a line based on the input of two points.
     * @param point1 The beginning point.
     * @param point2 The ending point.
     */
    getLength(point1: Point, point2: Point): number;
    /**
     * Calculates the intersecting point of two lines.
     * @param line1start The beginning point of the first line.
     * @param line1end The ending point of the first line.
     * @param line2start The beginning point of the second line.
     * @param line2end The ending point of the second line.
     */
    getLineIntersection(line1start: Point, line1end: Point, line2start: Point, line2end: Point): Point;
  };
  export = mathUtils;
}

declare module "esri/geometry/normalizeUtils" {
  import Geometry = require("esri/geometry/Geometry");
  import GeometryService = require("esri/tasks/GeometryService");

  /** Normalizes geometries that intersect the central meridian or fall outside the world extent so they stay within the current coordinate system. */
  var normalizeUtils: {
    /**
     * Normalizes  geometries that intersect the central meridian or fall outside the world extent so they stay within the current coordinate system.
     * @param geometries An array of geometries to normalize.
     * @param geometryService Specify a valid geometry service.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned, if an error occurs on the Server during task execution.
     */
    normalizeCentralMeridian(geometries: Geometry[], geometryService: GeometryService, callback: Function, errback: Function): any;
  };
  export = normalizeUtils;
}

declare module "esri/geometry/scaleUtils" {
  import Map = require("esri/map");
  import Extent = require("esri/geometry/Extent");

  /** Utility methods to get map scale or extent for a given scale. */
  var scaleUtils: {
    /**
     * Get the extent for the specified scale.
     * @param map The input map.
     * @param scale The input scale.
     */
    getExtentForScale(map: Map, scale: number): Extent;
    /**
     * Gets the current scale of the map.
     * @param map The map whose scale should be calculated.
     */
    getScale(map: Map): number;
  };
  export = scaleUtils;
}

declare module "esri/geometry/screenUtils" {
  import Extent = require("esri/geometry/Extent");
  import Geometry = require("esri/geometry/Geometry");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import Point = require("esri/geometry/Point");

  /** Convert map coordinates to screen coordinates and vice versa. */
  var screenUtils: {
    /**
     * Converts the geometry argument to map coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in map units.
     * @param height The current width of the map in map units.
     * @param screenGeometry The geometry to convert from screen to map units.
     */
    toMapGeometry(extent: Extent, width: number, height: number, screenGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument screen point in map coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param screenPoint The screenPoint to convert from screen to map units.
     */
    toMapPoint(extent: Extent, width: number, height: number, screenPoint: ScreenPoint): Point;
    /**
     * Converts the geometry argument to screen coordinates based on the extent, width, and height of the Map.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapGeometry The geometry to convert from map to screen units.
     */
    toScreenGeometry(extent: Extent, width: number, height: number, mapGeometry: Geometry): Geometry;
    /**
     * Converts and returns the argument map point in screen coordinates.
     * @param extent The current extent of the map in map coordinates.
     * @param width The current width of the map in screen units.
     * @param height The current width of the map in screen units.
     * @param mapPoint The point to convert from map to screen units.
     */
    toScreenPoint(extent: Extent, width: number, height: number, mapPoint: Point): ScreenPoint;
  };
  export = screenUtils;
}

declare module "esri/geometry/webMercatorUtils" {
  import Geometry = require("esri/geometry/Geometry");

  /** Convert Web Mercator coordinates to geographic and vice versa. */
  var webMercatorUtils: {
    /**
     * Converts geometry from geographic units to Web Mercator units.
     * @param geometry The geometry to convert.
     */
    geographicToWebMercator(geometry: Geometry): Geometry;
    /**
     * Translates the given latitude and longitude values to Web Mercator.
     * @param long The longitude value to convert.
     * @param lat The latitude value to convert.
     * @param isLinear Set to true to normalize the output values so that they are within -180 and +180.
     */
    lngLatToXY(long: number, lat: number, isLinear: boolean): number[];
    /**
     * Converts geometry from Web Mercator units to geographic units.
     * @param geometry The geometry to convert.
     */
    webMercatorToGeographic(geometry: Geometry): Geometry;
    /**
     * Translates the given Web Mercator coordinates to Longitude and Latitude.
     * @param long The input longitude value.
     * @param lat The input latitude value.
     */
    xyToLngLat(long: number, lat: number): number[];
  };
  export = webMercatorUtils;
}

declare module "esri/graphic" {
  import Geometry = require("esri/geometry/Geometry");
  import InfoTemplate = require("esri/InfoTemplate");
  import Symbol = require("esri/symbols/Symbol");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");

  /** A Graphic can contain geometry, a symbol, attributes, or an infoTemplate. */
  class Graphic {
    /** Name value pairs of fields and field values associated with the graphic. */
    attributes: any;
    /** The geometry that defines the graphic. */
    geometry: Geometry;
    /** The content for display in an InfoWindow. */
    infoTemplate: InfoTemplate;
    /** The symbol for the graphic. */
    symbol: Symbol;
    /** Indicate the visibility of the graphic. */
    visible: boolean;
    /**
     * Creates a new Graphic object.
     * @param geometry The geometry that defines the graphic.
     * @param symbol Symbol used for drawing the graphic.
     * @param attributes Name value pairs of fields and field values associated with the graphic.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    constructor(geometry?: Geometry, symbol?: Symbol, attributes?: any, infoTemplate?: InfoTemplate);
    /**
     * Creates a new Graphic object using a JSON object.
     * @param json JSON object representing the graphic.
     */
    constructor(json: Object);
    /**
     * Adds a new attribute or changes the value of an existing attribute on the graphic's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Graphic;
    /** Draws the graphic. */
    draw(): Graphic;
    /** Returns the content string based on attributes and infoTemplate values. */
    getContent(): string;
    /** Returns the Dojo gfx shape of the ESRI graphic. */
    getDojoShape(): any;
    /** Returns the info template associated with the graphic. */
    getInfoTemplate(): InfoTemplate;
    /** Returns the graphics layer that contains the graphic. */
    getLayer(): GraphicsLayer;
    /** Returns the DOM node used to draw the graphic. */
    getNode(): any;
    /** Returns one or more DOM nodes used to draw the graphic. */
    getNodes(): any;
    /** Returns the Dojo gfx shape of the ESRI graphic. */
    getShape(): any;
    /** Returns one or more Dojo GFX shapes used to draw the graphic. */
    getShapes(): any;
    /** Returns the title string based on attributes and infoTemplate values. */
    getTitle(): string;
    /** Hides the graphic. */
    hide(): void;
    /**
     * Defines the attributes of the graphic.
     * @param attributes The name value pairs of fields and field values associated with the graphic.
     */
    setAttributes(attributes: any): Graphic;
    /**
     * Defines the geometry of the graphic.
     * @param geometry The geometry that defines the graphic.
     */
    setGeometry(geometry: Geometry): Graphic;
    /**
     * Defines the InfoTemplate for the InfoWindow of the graphic.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): Graphic;
    /**
     * Sets the symbol of the graphic.
     * @param symbol The symbol for the graphic.
     */
    setSymbol(symbol: Symbol): Graphic;
    /** Shows the graphic. */
    show(): void;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Graphic;
}

declare module "esri/graphicsUtils" {
  import Graphic = require("esri/graphic");
  import Geometry = require("esri/geometry/Geometry");
  import Extent = require("esri/geometry/Extent");

  /** Utility methods for working with graphics. */
  var graphicsUtils: {
    /**
     * Converts an array of graphics to an array of geometries.
     * @param graphics Array of graphics to convert to geometries
     */
    getGeometries(graphics: Graphic[]): Geometry[];
    /**
     * Utility function that returns the extent of an array of graphics.
     * @param graphics The input graphics array.
     */
    graphicsExtent(graphics: Graphic[]): Extent;
  };
  export = graphicsUtils;
}

declare module "esri/kernel" {
  /** Utility methods for retrieving API version. */
  var kernel: {
    /** Current version of the JavaScript API. */
    version: number;
  };
  export = kernel;
}

declare module "esri/lang" {
  /** Utility methods for working with strings, arrays and objects. */
  var lang: {
    /**
     * Creates a new object with all properties that pass the test implemented by the filter provided in the function.
     * @param object Object  to filter.
     * @param callback Function or string implementing the filtering.
     * @param thisObject Optional object used to scope the call to the callback.
     */
    filter(object: any, callback: Function, thisObject: any): any;
    /**
     * Returns true when the value is neither null or undefined.
     * @param value The value to test.
     */
    isDefined(value: any): boolean;
    /**
     * A wrapper around dojo.string.substitute that can also handle wildcard substitution.
     * @param data The data object used in the substitution.
     * @param template The template used for the substitution.
     * @param first When true, returns only the first property found in the data object.
     */
    substitute(data: any, template?: string, first?: boolean): string;
    /**
     * Iterates through the argument array and searches for the identifier to which the argument value matches.
     * @param array The argument array for testing.
     * @param value The value used in the search.
     */
    valueOf(array: any[], value: any): any;
  };
  export = lang;
}

declare module "esri/layers/ArcGISDynamicMapServiceLayer" {
  import esri = require("esri");
  import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
  import DynamicLayerInfo = require("esri/layers/DynamicLayerInfo");
  import LayerDrawingOptions = require("esri/layers/LayerDrawingOptions");
  import LayerInfo = require("esri/layers/LayerInfo");
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import TimeInfo = require("esri/layers/TimeInfo");
  import ImageParameters = require("esri/layers/ImageParameters");
  import MapImage = require("esri/layers/MapImage");

  /** Allows you to work with a dynamic map service resource exposed by the ArcGIS Server REST API. */
  class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are Map, Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** Map description as defined by the map service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output dpi of the dynamic map service layer. */
    dpi: number;
    /** Array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: DynamicLayerInfo[];
    /** When true the layer has attribution data. */
    hasAttributionData: boolean;
    /** The output image type. */
    imageFormat: string;
    /** Whether or not background of dynamic image is transparent. */
    imageTransparency: boolean;
    /** Sets the layer definitions used to filter the features of individual layers in the map service. */
    layerDefinitions: string[];
    /** Array of LayerDrawingOptions used to override the way layers are drawn. */
    layerDrawingOptions: LayerDrawingOptions[];
    /** Returns the available layers in service and their default visibility. */
    layerInfos: LayerInfo[];
    /** Returns the current layer time options if applicable. */
    layerTimeOptions: LayerTimeOptions[];
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** When true the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** When true the layer is suspended. */
    suspended: boolean;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: TimeInfo;
    /** Default units of the layer as defined by the service. */
    units: string;
    /** When true, the image is saved to the server, and a JSON formatted response is sent to the client with the URL location of the image. */
    useMapImage: boolean;
    /** The version of ArcGIS Server where the map service is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /** Gets the visible layers of the exported map. */
    visibleLayers: number[];
    /**
     * Creates a new ArcGISDynamicMapServiceLayer object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISDynamicMapServiceLayerOptions);
    /** Create an array of DynamicLayerInfos based on the current set of LayerInfo. */
    createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
    /**
     * Exports a map using values as specified by ImageParameters.
     * @param imageParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageParameters?: ImageParameters, callback?: Function): void;
    /** Asynchronously returns custom data for the layer when available. */
    getAttributionData(): any;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Resets all layer definitions to those defined in the service.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
    /**
     * Clears the visible layers as defined in setVisibleLayers, and resets to the default layers of the map service.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setDefaultVisibleLayers(doNotRefresh?: boolean): void;
    /**
     * Sets whether images are always requested from the server and the browser's cache is ignored.
     * @param disable When true, client side caching is disabled.
     */
    setDisableClientCaching(disable: boolean): void;
    /**
     * Sets the dpi of the exported map.
     * @param dpi DPI value.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setDPI(dpi: number, doNotRefresh?: boolean): void;
    /**
     * Specify an array of DynamicLayerInfos used to change the layer ordering or to redefine the map.
     * @param dynamicLayerInfos An array of dynamic layer infos.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setDynamicLayerInfos(dynamicLayerInfos: DynamicLayerInfo[], doNotRefresh?: boolean): void;
    /**
     * Set the version for the ArcGIS DynamicMapServiceLayer.
     * @param gdbVersion The name of the version to display.
     * @param doNotRefresh Added at version 2.7 When true the layer will not refresh the map image.
     */
    setGDBVersion(gdbVersion: string, doNotRefresh?: boolean): void;
    /**
     * Sets the image format of the exported map.
     * @param imageFormat Valid values are png | png8 | png24 | png32 | jpg | pdf | bmp | gif | svg.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    /**
     * Sets the background of a dynamic image to transparent.
     * @param transparent Valid values are true | false.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
    /**
     * Sets the layer definitions used to filter the features of individual layers in the map service.
     * @param layerDefinitions An array containing each layer's definition.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
    /**
     * Specify an array of LayerDrawingOptions that override the way the layers are drawn.
     * @param layerDrawingOptions An array of layer drawing options.
     * @param doNotRefresh When true the layer will not refresh the map image.
     */
    setLayerDrawingOptions(layerDrawingOptions: LayerDrawingOptions[], doNotRefresh?: boolean): void;
    /**
     * Sets the time-related options for the layer.
     * @param options Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setLayerTimeOptions(options: LayerTimeOptions[], doNotRefresh?: boolean): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /**
     * Sets the visible layers of the exported map.
     * @param ids Array of layer IDs.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fired when the geodatabase version is switched. */
    on(type: "gdbversion-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ArcGISDynamicMapServiceLayer;
}

declare module "esri/layers/ArcGISImageServiceLayer" {
  import esri = require("esri");
  import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
  import MosaicRule = require("esri/layers/MosaicRule");
  import InfoTemplate = require("esri/InfoTemplate");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeInfo = require("esri/layers/TimeInfo");
  import ImageServiceParameters = require("esri/layers/ImageServiceParameters");
  import Graphic = require("esri/graphic");
  import Query = require("esri/tasks/query");
  import MapImage = require("esri/layers/MapImage");

  /** Allows you to work with an image map service resource exposed by the ArcGIS Server REST API. */
  class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
    /** Number of bands in ArcGISImageServiceLayer. */
    bandCount: number;
    /** Array of current band selections. */
    bandIds: number[];
    /** The raster bands that the raster dataset is composed of and their statistics. */
    bands: any[];
    /** Current compression quality value. */
    compressionQuality: number;
    /** Copyright string as defined by the image service. */
    copyrightText: string;
    /** Returns a MosaicRule object that defines the default mosaic properties published by the image service. */
    defaultMosaicRule: MosaicRule;
    /** Description as defined by the image service. */
    description: string;
    /** When true, images are always requested from the server and the browser's cache is ignored. */
    disableClientCaching: boolean;
    /** The output image type. */
    format: string;
    /** The template that defines the content to display in the map info window when the user clicks on a raster. */
    infoTemplate: InfoTemplate;
    /** Current interpolation method. */
    interpolation: string;
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidgth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: MosaicRule;
    /** Size of pixel in X direction. */
    pixelSizeX: number;
    /** Size of pixel in Y direction. */
    pixelSizeY: number;
    /** The pixel type of the image service. */
    pixelType: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: RasterFunction;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: TimeInfo;
    /** By default, images are exported in MIME format, and the image is streamed to the client. */
    useMapImage: boolean;
    /** The version of ArcGIS Server the image service is published to, e.g. */
    version: number;
    /**
     * Creates a new ArcGISImageServiceLayer object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISImageServiceLayerOptions);
    /**
     * Exports a map using values as specified by ImageServiceParameters.
     * @param imageServiceParameters Input parameters assigned before exporting the map image.
     * @param callback The function to call when the method has completed.
     */
    exportMapImage(imageServiceParameters?: ImageServiceParameters, callback?: Function): void;
    /** Returns the current definition expression. */
    getDefinitionExpression(): string;
    /** Get key properties of an ImageService including information such as the band names associated with the imagery. */
    getKeyProperties(): any;
    /** Asynchronously returns the raster attribute table of an ImageService which returns categorical mapping of pixel values (e.g. */
    getRasterAttributeTable(): any;
    /** Gets the currently visible rasters. */
    getVisibleRasters(): Graphic[];
    /**
     * Returns the rasters that are visible in the area defined by the geometry in the query parameter.
     * @param query The esri.tasks.Query to be passed as the input to query visible rasters.
     * @param options Options for query.
     * @param callback The function to call when the method has completed.
     * @param errback The function to call when an error occurs.
     */
    queryVisibleRasters(query: Query, options?: any, callback?: Function, errback?: string): void;
    /**
     * Sets the R,G,B of the exported image to the appropriate ImageService Band ID.
     * @param bandIds Array of band IDs to use in the exported image.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setBandIds(bandIds: number[], doNotRefresh?: boolean): void;
    /**
     * Sets the compression quality of the exported image.
     * @param quality A value from 0 to 100.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setCompressionQuality(quality: number, doNotRefresh?: boolean): void;
    /**
     * Sets the definition expression for the ImageService Layer.
     * @param expression The definition expression to be set.
     * @param doNotRefresh Whether or not the expression definition will be refreshed.
     */
    setDefinitionExpression(expression: string, doNotRefresh: boolean): void;
    /**
     * Sets whether images are always requested from the server and the browser's cache is ignored.
     * @param disable When true, browser client side caching is disabled.
     */
    setDisableClientCaching(disable: boolean): void;
    /**
     * Set the image format.
     * @param imageFormat Valid values are png | png8 | png24 |   jpg | pdf | bmp | gif | svg.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The content for display in an InfoWindow.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Sets the interpolation method.
     * @param interpolation Interpolation value defined in ImageServiceParameters Constants Table.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setInterpolation(interpolation: string, doNotRefresh?: boolean): void;
    /**
     * Sets the mosaic rule of the layer to the specified value.
     * @param mosaicRule The mosaic rule.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): void;
    /**
     * Sets the rendering rule of the layer to the given value.
     * @param renderingRule The new rendering rule.
     * @param doNotRefresh Added at version 2.2 When true the layer will not refresh the map image.
     */
    setRenderingRule(renderingRule: RasterFunction, doNotRefresh?: boolean): void;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISImageServiceLayer }) => void): esri.Handle;
    /** Fired when the layers mosaic rule is changed. */
    on(type: "mosaic-rule-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): esri.Handle;
    /** Fired when the layers band ids are changed or if a raster function is applied. */
    on(type: "rendering-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ArcGISImageServiceLayer;
}

declare module "esri/layers/ArcGISTiledMapServiceLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");
  import LayerInfo = require("esri/layers/LayerInfo");
  import TimeInfo = require("esri/layers/TimeInfo");

  /** Allows you to work with a cached map service resource exposed by the ArcGIS Server REST API. */
  class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Capabilities of the map service, possible values are Map, Query and Data. */
    capabilities: string;
    /** Copyright string as defined by the map service. */
    copyright: string;
    /** Map description as defined by the map service. */
    description: string;
    /** When true the layer has attribution data. */
    hasAttributionData: boolean;
    /** Returns the available layers in service and their default visibility. */
    layerInfos: LayerInfo[];
    /** The maximum image height, in pixels, that the map service will export. */
    maxImageHeight: number;
    /** The maximum image width, in pixels, that the map service will export. */
    maxImageWidth: number;
    /** The maximum number of results that can be returned from query, identify and find operations. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** When true the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** When true the layer is suspended. */
    suspended: boolean;
    /** Temporal information for the layer, such as time extent. */
    timeInfo: TimeInfo;
    /** Default units of the layer as defined by the service. */
    units: string;
    /** The version of ArcGIS Server where the map service is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new ArcGISTiledMapServiceLayer object.
     * @param url URL to the ArcGIS Server REST resource at represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.ArcGISTiledMapServiceLayerOptions);
    /** Asynchronously returns custom data for the layer when available. */
    getAttributionData(): any;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ArcGISTiledMapServiceLayer;
}

declare module "esri/layers/CSVLayer" {
  import esri = require("esri");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** CSVLayer extends FeatureLayer to create a layer based on a CSV file (.csv, .txt). */
  class CSVLayer extends FeatureLayer {
    /** The column delimiter. */
    columnDelimiter: string;
    /** The latitude field name. */
    latitudeFieldName: string;
    /** The longitude field name. */
    longitudeFieldName: string;
    /** The url to a CSV resource. */
    url: string;
    /**
     * Creates a CSV layer.
     * @param url The url to a CSV resource.
     * @param options The optional parameters.
     */
    constructor(url: string, options?: esri.CSVLayerOptions);
  }
  export = CSVLayer;
}

declare module "esri/layers/CodedValueDomain" {
  import Domain = require("esri/layers/Domain");

  /** Information about the coded values belonging to the domain. */
  class CodedValueDomain extends Domain {
    /** An array of the coded values in the domain. */
    codedValues: any[];
  }
  export = CodedValueDomain;
}

declare module "esri/layers/Domain" {
  /** Domains define constraints on a layer field. */
  class Domain {
    /** The domain name. */
    name: string;
    /** The domain type. */
    type: string;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Domain;
}

declare module "esri/layers/DynamicLayerInfo" {
  /** Information about each layer in a map service. */
  class DynamicLayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** The source for the dynamic layer can be either a LayerMapSource or LayerDataSource. */
    source: any;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
    /**
     * Creates a new DynamicLayerInfo object.
     * @param json JSON object representing the DynamicLayerInfo.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = DynamicLayerInfo;
}

declare module "esri/layers/DynamicMapServiceLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import MapImage = require("esri/layers/MapImage");

  /** The base class for ArcGIS Server dynamic map services. */
  class DynamicMapServiceLayer extends Layer {
    /** Full extent as defined by the map service. */
    fullExtent: Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: Extent;
    /** The spatial reference of the map service. */
    spatialReference: SpatialReference;
    /**
     * Method to implement when extending DynamicMapServiceLayer.
     * @param extent Current extent of the map.
     * @param width Current width of the map in pixels.
     * @param height Current height of the map in pixels.
     * @param callback The function to call when the method has completed.
     */
    getImageUrl(extent: Extent, width: number, height: number, callback: Function): string;
    /** Refreshes the map by making a new request to the server. */
    refresh(): void;
    /** Fired when the geodatabase version is switched. */
    on(type: "gdb-version-change", listener: (event: { target: DynamicMapServiceLayer }) => void): esri.Handle;
    /** Fires when the map export is completed. */
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: DynamicMapServiceLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = DynamicMapServiceLayer;
}

declare module "esri/layers/FeatureEditResult" {
  /** The results of a feature edit such as add, update or delete. */
  class FeatureEditResult {
    /** Unique ID of the attachment. */
    attachmentId: number;
    /** Information about  errors that occur if the edit operation failed. */
    error: Error;
    /** Unique ID of the feature or object. */
    objectId: number;
    /** If true the operation was successful. */
    success: boolean;
  }
  export = FeatureEditResult;
}

declare module "esri/layers/FeatureLayer" {
  import esri = require("esri");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");
  import Field = require("esri/layers/Field");
  import Extent = require("esri/geometry/Extent");
  import Graphic = require("esri/graphic");
  import Renderer = require("esri/renderers/Renderer");
  import FeatureTemplate = require("esri/layers/FeatureTemplate");
  import TimeInfo = require("esri/layers/TimeInfo");
  import FeatureType = require("esri/layers/FeatureType");
  import Symbol = require("esri/symbols/Symbol");
  import TimeExtent = require("esri/TimeExtent");
  import Query = require("esri/tasks/query");
  import RelationshipQuery = require("esri/tasks/RelationshipQuery");
  import InfoTemplate = require("esri/InfoTemplate");
  import FeatureEditResult = require("esri/layers/FeatureEditResult");
  import FeatureSet = require("esri/tasks/FeatureSet");

  /** The feature layer inherits from the graphics layer and can be used to display features from a single layer in either a Map Service or Feature Service. */
  class FeatureLayer extends GraphicsLayer {
    /** In on-demand mode, the feature layer retrieves features from the server when needed. */
    static MODE_ONDEMAND: any;
    /** In selection mode, features are retrieved from the server only when they are selected. */
    static MODE_SELECTION: any;
    /** In snapshot mode, the feature layer retrieves all the features from the associated layer resource and displays them as graphics on the client. */
    static MODE_SNAPSHOT: any;
    /** The popup displays content in HTML/TEXT */
    static POPUP_HTML_TEXT: any;
    /** No popup type defined */
    static POPUP_NONE: any;
    /** The popup displays the contents of a URL. */
    static POPUP_URL: any;
    /** Adds features to the current selection set */
    static SELECTION_ADD: any;
    /** Creates a new selection. */
    static SELECTION_NEW: any;
    /** Removes features from the current selection */
    static SELECTION_SUBTRACT: any;
    /** Returns true if the geometry of the features in the layer can be edited, false otherwise. */
    allowGeometryUpdates: boolean;
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** Information about the capabilities enabled for this layer. */
    capabilities: string;
    /** Copyright information for the layer. */
    copyright: string;
    /** Metadata describing the default definition expression for the layer as defined by the service. */
    defaultDefinitionExpression: string;
    /** Indicates the default visibility for the layer. */
    defaultVisibility: boolean;
    /** The description of the layer as defined in the map service. */
    description: string;
    /** The name of the layer's primary display field. */
    displayField: string;
    /** Indicates the field names for the editor fields. */
    editFieldsInfo: any;
    /** The array of fields in the layer. */
    fields: Field[];
    /** The full extent of the layer. */
    fullExtent: Extent;
    /** Geometry type of the features in the layer. */
    geometryType: string;
    /** The globalIdField for the layer. */
    globalIdField: string;
    /** Array of features in the layer. */
    graphics: Graphic[];
    /** True if attachments are enabled on the feature layer. */
    hasAttachments: boolean;
    /** When true the layer has attribution data. */
    hasAttributionData: boolean;
    /** The html popup type defined for the layer. */
    htmlPopupType: string;
    /** Unique ID of the layer that the FeatureLayer was constructed against. */
    layerId: number;
    /** The maximum number of results that will be returned from a query. */
    maxRecordCount: number;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** The name of the layer as defined in the map service. */
    name: string;
    /** The name of the field that contains the Object ID field for the layer. */
    objectIdField: string;
    /** Indicates the ownership access control configuration. */
    ownershipBasedAccessControlForFeatures: any;
    /** Each element in the array is an object that describes the layer's relationship with another layer or table. */
    relationships: any[];
    /** The renderer for the layer. */
    renderer: Renderer;
    /** When true the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** The dynamic layer or table source. */
    source: any;
    /** When true, the layer supports orderByFields in a query operation. */
    supportsAdvancedQueries: boolean;
    /** When true, the layer supports statistical functions in query operations. */
    supportsStatistics: boolean;
    /** When true the layer is suspended. */
    suspended: boolean;
    /** An array of feature templates defined in the Feature Service layer. */
    templates: FeatureTemplate[];
    /** Time information for the layer, such as start time field, end time field, track id field, layers time extent and the draw time interval. */
    timeInfo: TimeInfo;
    /** Specifies the type of layer. */
    type: string;
    /** The field that represents the Type ID field. */
    typeIdField: string;
    /** An array of sub types defined in the Feature Service layer. */
    types: FeatureType[];
    /** The version of ArcGIS Server where the layer is published. */
    version: number;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new instance of a feature layer object from the ArcGIS Server REST resource identified by the input URL.
     * @param url URL to the ArcGIS Server REST resource that represents a feature service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.FeatureLayerOptions);
    /**
     * Creates a new instance of a feature layer using a FeatureCollection object.
     * @param featureCollectionObject A feature collection is an object with the following properties.
     * @param options Optional parameters.
     */
    constructor(featureCollectionObject: any, options?: esri.FeatureLayerOptions);
    /**
     * Add an attachment to the feature specified by the ObjectId.
     * @param objectId The ObjectId of the feature to which the attachment is added.
     * @param formNode HTML form that contains a file upload field pointing to the file to be added as an attachment.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    addAttachment(objectId: number, formNode: HTMLFormElement, callback?: Function, errback?: Function): any;
    /**
     * Apply edits to the feature layer.
     * @param adds Array of features to add to the layer in the feature service.
     * @param updates Array of features whose geometry and/or attributes have changed.
     * @param deletes Array of features to delete.
     * @param callback This function will be called when the operation is complete.
     * @param errback An error object is returned if an error occurs.
     */
    applyEdits(adds?: Graphic[], updates?: Graphic[], deletes?: Graphic[], callback?: Function, errback?: Function): any;
    /** Clears the current selection. */
    clearSelection(): FeatureLayer;
    /**
     * Delete one or more attachments for the feature specified by the input ObjectId.
     * @param objectId The ObjectId of the feature from which the attachment is removed.
     * @param attachmentIds The array of attachment ids to delete.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    deleteAttachments(objectId: number, attachmentIds: number[], callback?: Function, errback?: Function): any;
    /** Asynchrously returns custom data for the layer when available. */
    getAttributionData(): any;
    /** Returns the current definition expression. */
    getDefinitionExpression(): string;
    /**
     * Returns an object that describes the edit capabilities of the layer.
     * @param options If the layer supports ownership based access control, use the options to determine if the specified user can edit features.
     */
    getEditCapabilities(options?: any): any;
    /**
     * Returns an object describing the most recent edit operation performed on the given feature, if available.
     * @param feature The feature to get the edit info for.
     * @param options The options object may have the following properties.
     */
    getEditInfo(feature: Graphic, options?: any): any;
    /**
     * Returns a localized summary of the last edit operation performed on the given feature, if available.
     * @param feature The feature to get the edit summary for.
     * @param options The options object may have the following properties.
     */
    getEditSummary(feature: Graphic, options?: any): string;
    /** Returns the current value of the maxAllowableOffset used by the layer. */
    getMaxAllowableOffset(): number;
    /** Returns the list of fields used to order features by. */
    getOrderByFields(): string[];
    /** Gets the currently selected features. */
    getSelectedFeatures(): Graphic[];
    /** Gets the current selection symbol. */
    getSelectionSymbol(): Symbol;
    /** Get the current time definition applied to the feature layer. */
    getTimeDefinition(): TimeExtent;
    /** Returns true if the FeatureLayer is editable. */
    isEditable(): boolean;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /**
     * Query for information about attachments associated with the specified ObjectIds.
     * @param objectId The ObjectId for the feature to query for attachment information.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): any;
    /**
     * Get a count of the number of features that satisfy the input query.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryCount(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of features that satisfy the input query.
     * @param query The query definition.
     * @param callback The function called when the method has completed.
     * @param errback The function called when error occurred.
     */
    queryExtent(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Query features from the feature layer.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryFeatures(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Query for ObjectIds.
     * @param query The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryIds(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Query features or records, from another layer or table, related to features in this layer.
     * @param relQuery The input query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    queryRelatedFeatures(relQuery: RelationshipQuery, callback?: Function, errback?: Function): any;
    /** Redraws all the graphics in the graphics layer. */
    redraw(): void;
    /** Refreshes the features in the feature layer. */
    refresh(): void;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Selects features from the FeatureLayer.
     * @param query The input query.
     * @param selectionMethod The selection method defines how the restful of the selection is combined with the existing selection.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs.
     */
    selectFeatures(query: Query, selectionMethod?: number, callback?: Function, errback?: Function): any;
    /**
     * Enable or disable auto generalization for the layer.
     * @param enable When true, auto generalize is enabled.
     */
    setAutoGeneralize(enable: boolean): FeatureLayer;
    /**
     * Set's the definition expression for the FeatureLayer.
     * @param expression The definition expression to apply.
     */
    setDefinitionExpression(expression: string): FeatureLayer;
    /**
     * Set the editability of feature layers created from a feature collection.
     * @param editable When true, the layer will be set as editable.
     */
    setEditable(editable: boolean): FeatureLayer;
    /**
     * Set the layer's data source to the specified geodatabase version.
     * @param versionName The name of the geodatabase version to use as the layer's data source.
     */
    setGDBVersion(versionName: string): FeatureLayer;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The new info template.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Sets the maximum allowable offset used when generalizing geometries.
     * @param offset The maximum allowable offset.
     */
    setMaxAllowableOffset(offset: number): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Initial opacity or transparency of layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Set the renderer for the feature layer.
     * @param renderer The renderer to apply to the feature layer
     */
    setRenderer(renderer: Renderer): void;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale for the layer.
     * @param maxScale The maximum scale for the layer.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Set's the selection symbol for the feature layer.
     * @param symbol Symbol for the current selection.
     */
    setSelectionSymbol(symbol: Symbol): FeatureLayer;
    /**
     * Set's the time definition for the feature layer.
     * @param definition The new time extent used to filter the layer.
     */
    setTimeDefinition(definition: TimeExtent): FeatureLayer;
    /**
     * Time offset allows you to display the features at a different time so they can be overlaid on top of previous or future time periods.
     * @param offsetValue The length of time to offset from "this" time.
     * @param offsetUnits Units in which the offset is specified.
     */
    setTimeOffset(offsetValue: number, offsetUnits: string): FeatureLayer;
    /**
     * Determine if the layer will update its content based on the map's current time extent.
     * @param update When false the layer will not update its content based on the map's time extent.
     */
    setUseMapTime(update: boolean): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Returns an easily serializable object representation of the layer. */
    toJson(): any;
    /** Fires when addAttachments() is complete. */
    on(type: "add-attachment-complete", listener: (event: { result: FeatureEditResult; target: FeatureLayer }) => void): esri.Handle;
    /** Fired before edits are applied to the feature layer. */
    on(type: "before-apply-edits", listener: (event: { adds: Graphic[]; deletes: Graphic[]; updates: Graphic[]; target: FeatureLayer }) => void): esri.Handle;
    /** Fired when the capabilities of the layer are modified using the setEditable method. */
    on(type: "capabilities-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires when a feature has been double clicked. */
    on(type: "dbl-click", listener: (event: { event: any; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when deleteAttachments is complete. */
    on(type: "delete-attachments-complete", listener: (event: { results: any[]; target: FeatureLayer }) => void): esri.Handle;
    /** Fires after applyEdits() is complete. */
    on(type: "edits-complete", listener: (event: { adds: FeatureEditResult[]; deletes: FeatureEditResult[]; updates: FeatureEditResult[]; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when queryAttachmentInfos method is called. */
    on(type: "query-attachment-infos-complete", listener: (event: { info: any[]; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when the query for the count is complete. */
    on(type: "query-count-complete", listener: (event: { count: number; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when queryExtent method has completed. */
    on(type: "query-extent-complete", listener: (event: { count: number; extent: Extent; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when queryFeatures() is complete. */
    on(type: "query-features-complete", listener: (event: { featureSet: FeatureSet; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when queryIds() is complete. */
    on(type: "query-ids-complete", listener: (event: { objectIds: number[]; target: FeatureLayer }) => void): esri.Handle;
    /** Fired when the feature layer could not draw all the features due to a maxRecordCount limitation on a query operation. */
    on(type: "query-limit-exceeded", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires when queryRelatedFeatures() is complete. */
    on(type: "query-related-features-complete", listener: (event: { relatedFeatures: any; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires after clearSelection has been called. */
    on(type: "selection-clear", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fires when selectFeatures() completes. */
    on(type: "selection-complete", listener: (event: { features: Graphic[]; method: number; target: FeatureLayer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    /** Fired when the layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; info: any; target: FeatureLayer }) => void): esri.Handle;
    /** Fired when the layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: FeatureLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = FeatureLayer;
}

declare module "esri/layers/FeatureTemplate" {
  import Graphic = require("esri/graphic");

  /** Feature templates define the information required to create a new feature. */
  class FeatureTemplate {
    /** The default drawing tool specified for this template is the arrow tool. */
    static TOOL_ARROW: any;
    /** The default drawing tool specified for this template is a auto complete polygon tool. */
    static TOOL_AUTO_COMPLETE_POLYGON: any;
    /** The default drawing tool specified for this template is the circle tool. */
    static TOOL_CIRCLE: any;
    /** The default drawing tool specified for this template is a ellipse tool. */
    static TOOL_ELLIPSE: any;
    /** The default drawing tool specified for this template is the freehand tool. */
    static TOOL_FREEHAND: any;
    /** The default drawing tool specified for this template is the line tool. */
    static TOOL_LINE: any;
    /** No default tool is specified. */
    static TOOL_NONE: any;
    /** The default drawing tool specified for this template is the point tool. */
    static TOOL_POINT: any;
    /** The default drawing tool specified for this template is the polygon tool. */
    static TOOL_POLYGON: any;
    /** The default drawing tool specified for this template is the rectangle. */
    static TOOL_RECTANGLE: any;
    /** The default drawing tool specified for this template is the triangle. */
    static TOOL_TRIANGLE: any;
    /** The description of the template. */
    description: string;
    /** The default drawing tool defined for the template. */
    drawingTool: string;
    /** The templates name. */
    name: string;
    /** An instance of the prototypical feature described by the template. */
    prototype: Graphic;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = FeatureTemplate;
}

declare module "esri/layers/FeatureType" {
  import FeatureTemplate = require("esri/layers/FeatureTemplate");

  /** A type defined by a feature layer. */
  class FeatureType {
    /** Map of field names to domains. */
    domains: any;
    /** The feature type identifier. */
    id: number;
    /** The feature type name. */
    name: string;
    /** Array of feature templates associated with this feature type. */
    templates: FeatureTemplate[];
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = FeatureType;
}

declare module "esri/layers/Field" {
  import Domain = require("esri/layers/Domain");

  /** Information about each field in a layer. */
  class Field {
    /** The alias name for the field. */
    alias: string;
    /** Domain associated with the field. */
    domain: Domain;
    /** Indicates whether the field is editable. */
    editable: boolean;
    /** The field length */
    length: number;
    /** The name of the field. */
    name: string;
    /** Indicates if the field can accept null values. */
    nullable: boolean;
    /** The data type of the field. */
    type: string;
  }
  export = Field;
}

declare module "esri/layers/GeoRSSLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Graphic = require("esri/graphic");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** The GeoRSSLayer class is used to create a layer based on GeoRSS. */
  class GeoRSSLayer extends Layer {
    /** The copyright information for the layer. */
    copyright: string;
    /** The default visibility of the layer. */
    defaultVisibility: boolean;
    /** The layer description. */
    description: string;
    /** An array that contains all the graphics in the GeoRSSLayer. */
    items: Graphic[];
    /** The name of the layer. */
    name: string;
    /**
     * Creates a new GeoRSSLayer object.
     * @param url URL to the GeoRSS resource.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.GeoRSSLayerOptions);
    /** An array of feature layers for the GeoRSSLayer. */
    getFeatureLayers(): FeatureLayer[];
    /** Fires when the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: GeoRSSLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = GeoRSSLayer;
}

declare module "esri/layers/GraphicsLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Graphic = require("esri/graphic");
  import InfoTemplate = require("esri/InfoTemplate");
  import Renderer = require("esri/renderers/Renderer");

  /** A layer that contains one or more Graphic features. */
  class GraphicsLayer extends Layer {
    /** List of attribute fields added as custom data attributes to graphics node. */
    dataAttributes: any;
    /** The array of graphics that make up the layer. */
    graphics: Graphic[];
    /** The info template for the layer. */
    infoTemplate: InfoTemplate;
    /** Renderer assigned to the GraphicsLayer. */
    renderer: Renderer;
    /** Indicates whether the layer is responsible for styling graphics. */
    styling: boolean;
    /** Type of vector graphics surface used to draw graphics. */
    surfaceType: string;
    /** Creates a new GraphicsLayer object. */
    constructor();
    /**
     * Creates a new GraphicsLayer object with parameters.
     * @param options See options list for parameters.
     */
    constructor(options?: esri.GraphicsLayerOptions);
    /**
     * Adds a graphic.
     * @param graphic The graphic to add.
     */
    add(graphic: Graphic): Graphic;
    /** Clears all graphics. */
    clear(): void;
    /** Disables all mouse events on the graphics layer. */
    disableMouseEvents(): void;
    /** Enables all mouse events on the graphics layer. */
    enableMouseEvents(): void;
    /** Redraws all the graphics in the layer. */
    redraw(): void;
    /**
     * Removes a graphic.
     * @param graphic The graphic to remove.
     */
    remove(graphic: Graphic): Graphic;
    /**
     * Specify or change the info template for a layer.
     * @param infoTemplate The new info template.
     */
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    /**
     * Initial opacity or transparency of layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Sets the renderer for the graphics layer.
     * @param renderer The renderer used for the graphic.
     */
    setRenderer(renderer: Renderer): void;
    /** Fires when a graphic has been clicked. */
    on(type: "click", listener: (event: { event: any; target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a graphic has been double clicked. */
    on(type: "dbl-click", listener: (event: { target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a graphic is added to the GraphicsLayer. */
    on(type: "graphic-add", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a graphic is drawn. */
    on(type: "graphic-draw", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a graphic's DOM node is created and added to the layer. */
    on(type: "graphic-node-add", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): esri.Handle;
    /** This event is fired when a graphic's DOM node is removed (consider the node destroyed). */
    on(type: "graphic-node-remove", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a graphic is removed from the GraphicsLayer. */
    on(type: "graphic-remove", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when all graphics in the GraphicsLayer are cleared. */
    on(type: "graphics-clear", listener: (event: { target: GraphicsLayer }) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is on a graphic. */
    on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires as the mouse moves through a graphic on the GraphicsLayer. */
    on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires as the mouse exits a graphic on the GraphicsLayer. */
    on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse first enters into a graphic on the GraphicsLayer. */
    on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is released and the mouse cursor is on a graphic. */
    on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = GraphicsLayer;
}

declare module "esri/layers/ImageParameters" {
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import TimeExtent = require("esri/TimeExtent");

  /** Represents the image parameter options used when calling ArcGISDynamicMapServiceLayer.exportMapImage, Geoprocessor.getResultImage, and Geoprocessor.getResultImageLayer. */
  class ImageParameters {
    /** Shows all layers visible by default except the specified layer ID's. */
    static LAYER_OPTION_EXCLUDE: any;
    /** Shows all layers except the specified layer ID's. */
    static LAYER_OPTION_HIDE: any;
    /** Shows specified layer ID's in addition to layers visible by default. */
    static LAYER_OPTION_INCLUDE: any;
    /** Shows only the specified layer ID's. */
    static LAYER_OPTION_SHOW: any;
    /** Extent of map to be exported. */
    bbox: Extent;
    /** Dots per inch setting for an ArcGISDynamicMapServiceLayer. */
    dpi: number;
    /** Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Spatial reference of exported map. */
    imageSpatialReference: SpatialReference;
    /** Array of layer definition expressions that allows you to filter the features of individual layers in the exported map image. */
    layerDefinitions: string[];
    /** A list of layer ID's, that represent which layers to include in the exported map. */
    layerIds: number[];
    /** The option for displaying or hiding the layer. */
    layerOption: string;
    /** Array of LayerTimeOptions objects that allow you to override how a layer is exported in reference to the map's time extent. */
    layerTimeOptions: LayerTimeOptions[];
    /** The time extent for the map image. */
    timeExtent: TimeExtent;
    /** Whether or not background of dynamic image is transparent. */
    transparent: boolean;
    /** Requested image width in pixels. */
    width: number;
    /** Creates a new ImageParameters object. */
    constructor();
  }
  export = ImageParameters;
}

declare module "esri/layers/ImageServiceParameters" {
  import Extent = require("esri/geometry/Extent");
  import MosaicRule = require("esri/layers/MosaicRule");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeExtent = require("esri/TimeExtent");

  /** Represents the image service parameter options used when calling ArcGISImageServiceLayer.exportMapImage. */
  class ImageServiceParameters {
    /** Resamples pixel by bilinear interpolation. */
    static INTERPOLATION_BILINEAR: any;
    /** Resamples pixel by cubic convolution. */
    static INTERPOLATION_CUBICCONVOLUTION: any;
    /** Resamples pixel by majority value. */
    static INTERPOLATION_MAJORITY: any;
    /** Resamples pixel by nearest neighbor. */
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    /** Array of current band selections. */
    bandIds: number[];
    /** Current compression quality value. */
    compressionQuality: number;
    /** Extent of the exported image. */
    extent: Extent;
    /** Map image format. */
    format: string;
    /** Requested image height in pixels. */
    height: number;
    /** Current interpolation method. */
    interpolation: string;
    /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
    mosaicRule: MosaicRule;
    /** The pixel value that represents no information. */
    noData: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: RasterFunction;
    /** Define the time extent for the image. */
    timeExtent: TimeExtent;
    /** Requested image width in pixels. */
    width: number;
    /** Creates a new ImageServiceParameters object. */
    constructor();
  }
  export = ImageServiceParameters;
}

declare module "esri/layers/InheritedDomain" {
  import Domain = require("esri/layers/Domain");

  /** Subclass of esri.layers.Domain. */
  class InheritedDomain extends Domain {
  }
  export = InheritedDomain;
}

declare module "esri/layers/JoinDataSource" {
  /** The JoinDataSource class defines and provides information about the result of a join operation. */
  class JoinDataSource {
    /** The type of join that will be performed. */
    joinType: string;
    /** The key field used for the left table source for the join. */
    leftTableKey: string;
    /** The data source to be used as the left table for the join operation. */
    leftTableSource: any;
    /** The key field used for the right table source for the join. */
    rightTableKey: string;
    /** The data source to be used as the right table for the join operation. */
    rightTableSource: any;
    /**
     * Creates a new JoinDataSource object.
     * @param json JSON object representing the JoinDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = JoinDataSource;
}

declare module "esri/layers/KMLFolder" {
  /** Defines information about a KML folder. */
  class KMLFolder {
    /** The KML folder description. */
    description: string;
    /** An array of objects that describe top-level KML features ids and their types. */
    featureInfos: any[];
    /** The KML folder id. */
    id: number;
    /** The KML folder name. */
    name: string;
    /** The id of the parent folder. */
    parentFolderId: number;
    /** The KML folder snippet. */
    snippet: string;
    /** An array of ids for the KML folder's subfolders. */
    subFolderIds: number[];
    /** The visibility of the KML folder. */
    visibility: number;
  }
  export = KMLFolder;
}

declare module "esri/layers/KMLGroundOverlay" {
  import Extent = require("esri/geometry/Extent");

  /** The KMLGroundOverlay class provides details about a KML ground overlay. */
  class KMLGroundOverlay {
    /** KML ground overlay description. */
    description: string;
    /** Extent of image. */
    extent: Extent;
    /** Requested image height in pixels. */
    height: number;
    /** URL to returned image. */
    href: string;
    /** The id of the KML ground overlay. */
    id: number;
    /** The name of the KML ground overlay. */
    name: string;
    /** Scale of requested dynamic map. */
    scale: number;
    /** Short snippet describing the KML ground overlay. */
    Snippet: string;
    /** The KML ground overlay visibility. */
    visibility: number;
    /** Requested image width in pixels. */
    width: number;
  }
  export = KMLGroundOverlay;
}

declare module "esri/layers/KMLLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import KMLFolder = require("esri/layers/KMLFolder");

  /** The KMLLayer class is used to create a layer based on a KML file (.kml,.kmz). */
  class KMLLayer extends Layer {
    /** An array of objects that describe top-level KML features ids and their types. */
    featureInfos: any[];
    /** An array of KMLFolder objects that describe the folders and nested folders defined in the KML file. */
    folders: KMLFolder[];
    /** A link info object with properties that describe the network link. */
    linkInfo: any;
    /**
     * Creates a new KMLLayer object.
     * @param id Id to assign to the layer.
     * @param url The url for a .kml or .kmz file.
     * @param options Optional parameters.
     */
    constructor(id: string, url: string, options?: esri.KMLLayerOptions);
    /**
     * Get the KML feature identified by the input feature info.
     * @param featureInfo Feature info for the kml feature.
     */
    getFeature(featureInfo: any): any;
    /** Get an array of map layers that were created to draw placemarks, ground and screen overlays. */
    getLayers(): Layer[];
    /**
     * Set the visibility for the specified folder.
     * @param folder A KML folder.
     * @param isVisible The visibility of the folder and all kml features within the folder.
     */
    setFolderVisibility(folder: KMLFolder, isVisible: boolean): void;
    /** Fired after the layer is refreshed. */
    on(type: "refresh", listener: (event: { target: KMLLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = KMLLayer;
}

declare module "esri/layers/LOD" {
  /** An ArcGISTiledMapServiceLayer has a number of LODs (Levels of Detail). */
  class LOD {
    /** ID for each level. */
    level: number;
    /** String to be used when constructing URL to access a tile from this LOD. */
    levelValue: string;
    /** Resolution in map units of each pixel in a tile for each level. */
    resolution: number;
    /** Scale for each level. */
    scale: number;
  }
  export = LOD;
}

declare module "esri/layers/LabelClass" {
  import TextSymbol = require("esri/symbols/TextSymbol");

  /** LabelClass defines the styles of labels for ArcGISDynamicMapServiceLayer. */
  class LabelClass {
    /** Adjusts the formatting of labels. */
    labelExpression: string;
    /** The position of the label. */
    labelPlacement: string;
    /** The maximum scale to show labels. */
    maxScale: number;
    /** The minimum scale to show labels. */
    minScale: number;
    /** Sets the Rendering symbol for the label. */
    symbol: TextSymbol;
    /** When true, show the fields in the labelExpression that have domains using the domain's name. */
    useCodedValues: boolean;
    /** A where clause determining which features are labeled. */
    where: string;
    /**
     * Create a LabelClass, in order to be added to layerDrawingOption.labelingInfo.
     * @param json Various options to configure this LabelClass.
     */
    constructor(json?: Object);
  }
  export = LabelClass;
}

declare module "esri/layers/LabelLayer" {
  import GraphicsLayer = require("esri/layers/GraphicsLayer");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import SimpleRenderer = require("esri/renderers/SimpleRenderer");
  import UniqueValueRenderer = require("esri/renderers/UniqueValueRenderer");
  import ClassBreaksRenderer = require("esri/renderers/ClassBreaksRenderer");

  /** The LabelLayer inherits from the graphics layer and can be used to display texts and symbols on map. */
  class LabelLayer extends GraphicsLayer {
    /** Creates a new Label layer. */
    constructor();
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer: SimpleRenderer, textExpression: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer: UniqueValueRenderer, textExpression: any, labelOptions?: any): void;
    /**
     * Adds reference to the feature layer which is labeled.
     * @param featureLayer The feature layer to be added to the label layer.
     * @param renderer The renderer used to render text labels.
     * @param textExpression An expression determining what text and field(s) will be displayed as in labels.
     * @param labelOptions An object providing additional options for changing label visibility and placement.
     */
    addFeatureLayer(featureLayer: FeatureLayer, renderer: ClassBreaksRenderer, textExpression: any, labelOptions?: any): void;
    /**
     * Returns reference to the feature layer which features will be labeled.
     * @param index Index of the referenced feature layer.
     */
    getFeatureLayer(index: number): FeatureLayer;
  }
  export = LabelLayer;
}

declare module "esri/layers/LayerDataSource" {
  /** The LayerDataSource class defines and provides information about a layer created on the fly from a data source. */
  class LayerDataSource {
    /** The data source used to create a dynamic data layer on the fly. */
    dataSource: any;
    /**
     * Creates a new LayerDataSource object.
     * @param json JSON object representing the LayerDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = LayerDataSource;
}

declare module "esri/layers/LayerDrawingOptions" {
  import LabelClass = require("esri/layers/LabelClass");
  import Renderer = require("esri/renderers/Renderer");

  /** The LayerDrawingOptions class provides options for setting ArcGISDynamicMapServiceLayer rendering options. */
  class LayerDrawingOptions {
    /** Define labels of dynamicLayers. */
    labelingInfo: LabelClass[];
    /** The renderer to use for the dynamic layer. */
    renderer: Renderer;
    /** Determines if the layer renders the symbols based on scale. */
    scaleSymbols: boolean;
    /** Determines if labels are displayed. */
    showLabels: boolean;
    /** The transparency of the layer. */
    transparency: number;
    /**
     * Creates a new LayerDrawingOptions object.
     * @param json JSON object representing the LayerDrawingOptions.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = LayerDrawingOptions;
}

declare module "esri/layers/LayerInfo" {
  /** Contains information about each layer in a map service. */
  class LayerInfo {
    /** Default visibility of the layers in the map service. */
    defaultVisibility: boolean;
    /** Layer ID assigned by ArcGIS Server for a layer. */
    id: number;
    /** The maximum visible scale for each layer in the map service. */
    maxScale: number;
    /** The minimum visible scale for each layer in the map service. */
    minScale: number;
    /** Layer name as defined in the  map service. */
    name: string;
    /** If the layer is part of a group layer, it will include the parent ID of the group layer. */
    parentLayerId: number;
    /** If the layer is a parent layer, it will have one or more sub layers included in an array. */
    subLayerIds: number[];
  }
  export = LayerInfo;
}

declare module "esri/layers/LayerMapSource" {
  /** The LayerMapSource class defines and provides information about an existing map service layer. */
  class LayerMapSource {
    /** When supported, specify the version in an SDE workspace that the layer will use. */
    gdbVersion: string;
    /** The layer id for a sub-layer in the current map service. */
    mapLayerId: number;
    /**
     * Creates a new LayerMapSource object.
     * @param json JSON object representing the LayerMapSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = LayerMapSource;
}

declare module "esri/layers/LayerTimeOptions" {
  /** Defines the time options for the layer. */
  class LayerTimeOptions {
    /** If true, the layer will draw all features from the beginning of the data's time extent. */
    timeDataCumulative: boolean;
    /** The length of time the data is offset from the time when the data was recorded. */
    timeOffset: number;
    /** Temporal unit in which the time offset is measured. */
    timeOffsetUnits: string;
    /** If true, the layer participates in time-related rendering and query operations. */
    useTime: boolean;
  }
  export = LayerTimeOptions;
}

declare module "esri/layers/MapImage" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");

  /** Represents the data object for the dynamically generated map. */
  class MapImage {
    /** Extent of exported map. */
    extent: Extent;
    /** Requested image height in pixels. */
    height: number;
    /** URL to returned image. */
    href: string;
    /** Scale of requested dynamic map. */
    scale: number;
    /** Requested image width in pixels. */
    width: number;
    /**
     * Creates a new Map Image object.
     * @param options An object that defines the map image options.
     */
    constructor(options: esri.MapImageOptions);
  }
  export = MapImage;
}

declare module "esri/layers/MapImageLayer" {
  import Layer = require("esri/layers/layer");
  import MapImage = require("esri/layers/MapImage");

  /** The MapImageLayer class is used to add georeferenced images to the map. */
  class MapImageLayer extends Layer {
    /**
     * Creates a new MapImageLayer object
     * @param options Optional parameters.
     */
    constructor(options?: any);
    /**
     * Add an image to the map.
     * @param mapImage A MapImage object that defines the image to add to the map.
     */
    addImage(mapImage: MapImage): void;
    /** Get an array of MapImage objects that define the images in the MapImageLayer. */
    getImages(): MapImage[];
    /** Remove all images from the layer. */
    removeAllImages(): void;
    /**
     * Remove the specified image from the layer.
     * @param mapImage The MapImage object that defines the image to remove.
     */
    removeImage(mapImage: MapImage): void;
  }
  export = MapImageLayer;
}

declare module "esri/layers/MosaicRule" {
  import Point = require("esri/geometry/Point");

  /** Specifies the mosaic rule when defining how individual images should be mosaicked. */
  class MosaicRule {
    /** Sorts rasters based on an attribute field and its difference from a base value. */
    static METHOD_ATTRIBUTE: any;
    /** Sorts rasters where rasters that have their centers closest to the view center or center of view extent are placed on top. */
    static METHOD_CENTER: any;
    /** Specifies that only rasters in the given list of raster Ids participate in the mosaic. */
    static METHOD_LOCKRASTER: any;
    /** Sorts rasters by the distance between the nadir position and view center. */
    static METHOD_NADIR: any;
    /** No mosaic method specified. */
    static METHOD_NONE: any;
    /** Sorts rasters in a view independent way, where rasters with their centers most northwest are displayed on top. */
    static METHOD_NORTHWEST: any;
    /** Cuts the raster using the predefined seamline shape. */
    static METHOD_SEAMLINE: any;
    /** Sorts rasters based on a user-defined viewpoint location and nadir location. */
    static METHOD_VIEWPOINT: any;
    /** Takes the blended value of all overlapping pixels. */
    static OPERATION_BLEND: any;
    /** Takes the first value of all overlapping pixels. */
    static OPERATION_FIRST: any;
    /** Takes the last value of all overlapping pixels. */
    static OPERATION_LAST: any;
    /** Takes the maximum value of all overlapping pixels. */
    static OPERATION_MAX: any;
    /** Takes the mean value of all overlapping pixels. */
    static OPERATION_MEAN: any;
    /** Takes the minimum value of all overlapping pixels. */
    static OPERATION_MIN: any;
    /** Indicates whether the sort should be ascending or not. */
    ascending: boolean;
    /** An array of raster Ids. */
    lockRasterIds: number[];
    /** The mosaic method determines how the selected rasters are ordered. */
    method: string;
    /** Defines a selection using a set of ObjectIds. */
    objectIds: number[];
    /** Defines the mosaic operation used to resolve overlapping pixels. */
    operation: string;
    /** The name of the attribute field that is used together with a constant sortValue to define the mosaicking order when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortField: string;
    /** A constant value defining a reference or base value for the sort field when the mosaic method is set to METHOD_ATTRIBUTE. */
    sortValue: string;
    /** Defines the viewpoint location on which the ordering is defined based on the distance from the viewpoint and the nadir of rasters. */
    viewpoint: Point;
    /** The where clause determines which rasters will participate in the mosaic. */
    where: string;
    /** Creates a new MosaicRule object */
    constructor();
    /**
     * Create a new mosaic rule object using a json string representing a serialized version of the mosaic rule.
     * @param json A json string representing a serialized version of the mosaic rule.
     */
    constructor(json: Object);
    /** Returns an easily serializable object representation of the mosaic rule. */
    toJson(): any;
  }
  export = MosaicRule;
}

declare module "esri/layers/OpenStreetMapLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");

  /** Allows you to use basemaps from  OpenStreetMap . */
  class OpenStreetMapLayer extends TiledMapServiceLayer {
    /** The copyright text. */
    copyright: string;
    /**
     * Creates a new OpenStreetMapLayer object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.OpenStreetMapLayerOptions);
  }
  export = OpenStreetMapLayer;
}

declare module "esri/layers/QueryDataSource" {
  import SpatialReference = require("esri/SpatialReference");

  /** The QueryDataSource class defines and provides information about a layer or table that is defined by a SQL query. */
  class QueryDataSource {
    /** The geometry type of the data source. */
    geometryType: string;
    /** An array of field names that define a unique identifier for the feature. */
    oidFields: string[];
    /** The SQL query string that defines the data source output. */
    query: string;
    /** The spatial reference for the data source. */
    spatialReference: SpatialReference;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /**
     * Creates a new QueryDataSource object.
     * @param json JSON object representing the QueryDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = QueryDataSource;
}

declare module "esri/layers/RangeDomain" {
  import Domain = require("esri/layers/Domain");

  /** Information about the range of values belonging to the domain. */
  class RangeDomain extends Domain {
    /** The maximum valid value. */
    maxValue: number;
    /** The minimum valid value. */
    minValue: number;
  }
  export = RangeDomain;
}

declare module "esri/layers/RasterDataSource" {
  /** The RasterDataSource class defines and provides information about a file-based raster that resides in a registered raster workspace. */
  class RasterDataSource {
    /** The name of a raster that resides in the registered workspace. */
    dataSourceName: string;
    /** The workspace id for the registered raster workspace. */
    workspaceId: string;
    /**
     * Creates a new RasterDataSource object.
     * @param json JSON object representing the RasterDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = RasterDataSource;
}

declare module "esri/layers/RasterFunction" {
  /** Specifies the processing to be done to the image service. */
  class RasterFunction {
    /** The arguments for the raster function. */
    arguments: any;
    /** The raster function name. */
    functionName: string;
    /** Variable name for the raster function. */
    variableName: string;
    /** Creates a new RasterFunction object. */
    constructor();
    /**
     * Create a new Raster Function object using a json string representing a serialized version of a raster function.
     * @param json A json string representing a serialized version of a raster function.
     */
    constructor(json: Object);
    /** Returns an easily serializable object representation of the raster function. */
    toJson(): any;
  }
  export = RasterFunction;
}

declare module "esri/layers/StreamLayer" {
  import esri = require("esri");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Graphic = require("esri/graphic");

  /** The stream layer extends the feature layer to add the ability to connect to a stream of data using HTML5 WebSockets. */
  class StreamLayer extends FeatureLayer {
    /** Raw access to the connected websocket. */
    socket: any;
    /** Url used to make the socket connection. */
    socketUrl: string;
    /**
     * Creates a new StreamLayer with a service URL.
     * @param url Url to an ArcGIS Server Stream Service or Feature Service.
     * @param options Optional parameters used to create the layer.
     */
    constructor(url: string, options?: esri.StreamLayerOptions);
    /**
     * Creates a new StreamLayer with a FeatureCollection object.
     * @param featureCollectionObject A feature collection object.
     * @param options Optional parameters used to create the layer.
     */
    constructor(featureCollectionObject: any, options?: esri.StreamLayerOptions);
    /**
     * Connect to the Stream Server socket.
     * @param callback The function to call when the method has completed.
     */
    connect(callback?: Function): void;
    /**
     * Disconnect from the Stream Server socket.
     * @param callback The function to call when the method has completed.
     */
    disconnect(callback?: Function): void;
    /** Fires when connection is successfully made to socket. */
    on(type: "connect", listener: (event: { target: StreamLayer }) => void): esri.Handle;
    /** Fires when disconnect from socket. */
    on(type: "disconnect", listener: (event: { target: StreamLayer }) => void): esri.Handle;
    /** Fires after a message is pushed to the layer. */
    on(type: "message", listener: (event: { graphic: Graphic; type: string; target: StreamLayer }) => void): esri.Handle;
    /** Fires after a message is purged (removed) from the layer. */
    on(type: "remove", listener: (event: { graphic: Graphic; target: StreamLayer }) => void): esri.Handle;
    /** Fires after a graphic's attributes have been updated */
    on(type: "update", listener: (event: { graphic: Graphic; target: StreamLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = StreamLayer;
}

declare module "esri/layers/TableDataSource" {
  /** The TableDataSource class defines and provides information about a table, feature class, or raster that resides in a registered file geodatabase, SDE or Shapefile workspace. */
  class TableDataSource {
    /** The name of a table, feature class or raster that resides in the registered workspace. */
    dataSourceName: string;
    /** For versioned SDE workspaces, use this property to point to an alternate version. */
    gdbVersion: string;
    /** The workspace id for the registered file geodatabase, SDE or Shapefile workspace. */
    workspaceId: string;
    /**
     * Creates a new TableDataSource object.
     * @param json JSON object representing the TableDataSource.
     */
    constructor(json?: Object);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = TableDataSource;
}

declare module "esri/layers/TileInfo" {
  import LOD = require("esri/layers/LOD");
  import Point = require("esri/geometry/Point");
  import SpatialReference = require("esri/SpatialReference");

  /** Contains information about the tiling scheme for an ArcGISTiledMapServiceLayer. */
  class TileInfo {
    /** The dpi of the tiling scheme. */
    dpi: number;
    /** Image format of the cached tiles. */
    format: string;
    /** Height of each tile in pixels. */
    height: number;
    /** An array of levels of detail that define the tiling scheme. */
    lods: LOD[];
    /** The tiling scheme origin. */
    origin: Point;
    /** The spatial reference of the tiling schema. */
    spatialReference: SpatialReference;
    /** Width of each tile in pixels. */
    width: number;
    /**
     * Creates a new object describing the given tiling scheme.
     * @param properties Properties describing the tiling scheme.
     */
    constructor(properties: any);
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = TileInfo;
}

declare module "esri/layers/TiledMapServiceLayer" {
  import Layer = require("esri/layers/layer");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import TileInfo = require("esri/layers/TileInfo");

  /** The base class for all tiled map service layers. */
  class TiledMapServiceLayer extends Layer {
    /** Full extent as defined by the map service. */
    fullExtent: Extent;
    /** Initial extent as defined by the map service. */
    initialExtent: Extent;
    /** The spatial reference of the map service. */
    spatialReference: SpatialReference;
    /** Returns TileInfo, which has information on the tiling schema. */
    tileInfo: TileInfo;
    /** Creates a new TiledMapServiceLayer object. */
    constructor();
    /**
     * Method to implement when extending TiledMapServiceLayer.
     * @param level Requested tile's level.
     * @param row Requested tile's row.
     * @param column Requested tile's column.
     */
    getTileUrl(level: number, row: number, column: number): string;
    /** Reloads all the tiles in the current view. */
    refresh(): void;
  }
  export = TiledMapServiceLayer;
}

declare module "esri/layers/TimeInfo" {
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import TimeExtent = require("esri/TimeExtent");
  import TimeReference = require("esri/layers/TimeReference");

  /** Time information details. */
  class TimeInfo {
    /** Indicates a value measured in centuries. */
    static UNIT_CENTURIES: any;
    /** Indicates a value measured in days. */
    static UNIT_DAYS: any;
    /** Indicates a value measured in decades. */
    static UNIT_DECADES: any;
    /** Indicates a value measured in hours. */
    static UNIT_HOURS: any;
    /** Indicates a value measured in milliseconds. */
    static UNIT_MILLISECONDS: any;
    /** Indicates a value measured in minutes. */
    static UNIT_MINUTES: any;
    /** Indicates a value measured in months. */
    static UNIT_MONTHS: any;
    /** Indicates a value measured in seconds. */
    static UNIT_SECONDS: any;
    /** Indicates a value measured in unknown units. */
    static UNIT_UNKNOWN: any;
    /** Indicates a value measured in weeks. */
    static UNIT_WEEKS: any;
    /** Indicates a value measured in years. */
    static UNIT_YEARS: any;
    /** The name of the attribute field that contains the end time information. */
    endTimeField: string;
    /** Default time-related export options for the layer. */
    exportOptions: LayerTimeOptions;
    /** The name of the attribute field that contains the start time information. */
    startTimeField: string;
    /** The time extent for all the data in the layer. */
    timeExtent: TimeExtent;
    /** Time interval of the data in the layer. */
    timeInterval: number;
    /** Temporal unit in which the time interval is measured. */
    timeIntervalUnits: string;
    /** Information about how the time was measured. */
    timeReference: TimeReference;
    /** The field that contains the trackId. */
    trackIdField: string;
  }
  export = TimeInfo;
}

declare module "esri/layers/TimeReference" {
  /** TimeReference contains information about how the time was measured. */
  class TimeReference {
    /** Indicates whether the time reference respects daylight savings time. */
    respectsDaylightSaving: boolean;
    /** The time zone information associated with the time reference. */
    timeZone: string;
  }
  export = TimeReference;
}

declare module "esri/layers/WMSLayer" {
  import esri = require("esri");
  import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
  import Extent = require("esri/geometry/Extent");
  import WMSLayerInfo = require("esri/layers/WMSLayerInfo");
  import SpatialReference = require("esri/SpatialReference");

  /** A layer for OGC Web Map Services (WMS). */
  class WMSLayer extends DynamicMapServiceLayer {
    /** Copyright of the WMS service. */
    copyright: string;
    /** Description of the WMS service. */
    description: string;
    /** Extent of the WMS service. */
    extent: Extent;
    /** The URL for the WMS GetMap call. */
    getMapUrl: string;
    /** The map image format. */
    imageFormat: string;
    /** List of layers in the WMS service. */
    layerInfos: WMSLayerInfo[];
    /** Maximum height in pixels the WMS service supports. */
    maxHeight: number;
    /** Maximum width in pixels the WMS service supports. */
    maxWidth: number;
    /** Spatial reference of the WMS service. */
    spatialReference: SpatialReference;
    /** Title of the WMS service. */
    title: string;
    /** Version of the WMS service. */
    version: string;
    /**
     * Creates a new WMSLayer object.
     * @param url URL to the OGC Web Map Service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WMSLayerOptions);
    /**
     * Set the map image format; valid values are "png", "jpg", "pdf", "bmp", "gif" and "svg".
     * @param format The image format.
     */
    setImageFormat(format: string): void;
    /**
     * Specify whether the background image is transparent.
     * @param transparency When true the background image is transparent.
     */
    setImageTransparency(transparency: boolean): void;
    /**
     * Specify a list of layer names to updates the visible layers.
     * @param layers An array of layer ids.
     */
    setVisibleLayers(layers: string[]): void;
  }
  export = WMSLayer;
}

declare module "esri/layers/WMSLayerInfo" {
  import Extent = require("esri/geometry/Extent");

  /** The WMSLayerInfo class defines and provides information about layers in a WMS service. */
  class WMSLayerInfo {
    /** The layer description defines the value of the Abstract capabilities property. */
    description: string;
    /** The layer extent. */
    extent: Extent;
    /** The layer  name. */
    name: string;
    /** The layer title. */
    title: string;
    /**
     * Creates a new WMSLayerInfo object.
     * @param layer WMSLayerInfo layer object.
     */
    constructor(layer: any);
  }
  export = WMSLayerInfo;
}

declare module "esri/layers/WMTSLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import TileInfo = require("esri/layers/TileInfo");
  import WMTSLayerInfo = require("esri/layers/WMTSLayerInfo");

  /** The WMTSLayer class is used to create a layer based on an OGC Web Map Tile Service layer. */
  class WMTSLayer extends TiledMapServiceLayer {
    /** Copyright information for the service. */
    copyright: string;
    /** The description of the active layer if specified in the capabilties file or the resource info. */
    description: string;
    /** The tile format. */
    format: string;
    /** The full extent of the active layer. */
    fullExtent: Extent;
    /** The initial extent of the active layer. */
    initialExtent: Extent;
    /** An array of WMTSLayerInfo objects. */
    layerInfos: any[];
    /** The service mode for the WMTS layer. */
    serviceMode: string;
    /** The spatial reference for the WMTS service. */
    spatialReference: SpatialReference;
    /** The tile info for the active layer. */
    tileInfo: TileInfo;
    /** Title of the WMTS service. */
    title: string;
    /** Version of the WMTS service. */
    version: string;
    /**
     * Creates a new WMTSLayer object.
     * @param url The url for the WMTS endpoint.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.WMTSLayerOptions);
    /**
     * Set the active layer for the WMTS service.
     * @param WMTSLayerInfo The WMTSLayerInfo for the layer to make active.
     */
    setActiveLayer(WMTSLayerInfo: WMTSLayerInfo): void;
  }
  export = WMTSLayer;
}

declare module "esri/layers/WMTSLayerInfo" {
  import esri = require("esri");

  /** The WMTSLayerInfo class defines and provides information about layers in a WMTS service. */
  class WMTSLayerInfo {
    /**
     * Creates a new WMTSLayerInfo object.
     * @param options An object that defines the layer info options.
     */
    constructor(options: esri.WMTSLayerInfoOptions);
  }
  export = WMTSLayerInfo;
}

declare module "esri/layers/WebTiledLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import TileInfo = require("esri/layers/TileInfo");

  /** The WebTiledLayer class provides a simple way to add non-ArcGIS Server map tiles as a layer to a map. */
  class WebTiledLayer extends TiledMapServiceLayer {
    /** The attribution information for the layer. */
    copyright: string;
    /** The full extent of the layer. */
    fullExtent: Extent;
    /** The initial extent of the layer. */
    initialExtent: Extent;
    /** The spatial reference of the layer. */
    spatialReference: SpatialReference;
    /** Define the tile info for the layer including lods, rows, cols, origin and spatial reference. */
    tileInfo: TileInfo;
    /** The tile server names for the layer. */
    tileServers: string[];
    /**
     * Creates a new WebTiledLayer
     * @param urlTemplate The url template to retrieve the tiles.
     * @param options Optional parameters.
     */
    constructor(urlTemplate: string, options?: esri.WebTiledLayerOptions);
  }
  export = WebTiledLayer;
}

declare module "esri/layers/layer" {
  import esri = require("esri");
  import Credential = require("esri/Credential");
  import Map = require("esri/map");

  /** The base class for all layers that can be added to a map. */
  class Layer {
    /** The URL, when available, where the layer's attribution data is stored. */
    attributionDataUrl: string;
    /** class attribute of the layer's node. */
    className: string;
    /** Provides credential information for the layer such as userid and token if the layer represents a resource that is secured with token-based authentication. */
    credential: Credential;
    /** When true the layer has attribution data. */
    hasAttributionData: boolean;
    /** ID assigned to the layer. */
    id: string;
    /** When the layer is loaded, the value becomes "true", and layer properties can be accessed. */
    loaded: boolean;
    /** Set if the layer failed to load. */
    loadError: Error;
    /** Maximum visible scale for the layer. */
    maxScale: number;
    /** Minimum visible scale for the layer. */
    minScale: number;
    /** Opacity or transparency of layer. */
    opacity: number;
    /** Refresh interval of the layer in minutes. */
    refreshInterval: number;
    /** When true the layer's attribution is displayed on the map. */
    showAttribution: boolean;
    /** When true the layer is suspended. */
    suspended: boolean;
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /** Visibility of the layer. */
    visible: boolean;
    /** When true, the layer is visible at the current map scale. */
    visibleAtMapScale: boolean;
    /**
     * Creates a new Layer object.
     * @param options Optional parameters.
     */
    constructor(options?: esri.LayerOptions);
    /**
     * Adds a new attribute or changes the value of an existing attribute on the layer's node.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Layer;
    /** Asynchrously returns custom data for the layer when available. */
    getAttributionData(): any;
    /** Returns reference to the map control the layer is added to. */
    getMap(): Map;
    /** Returns the layer's DOM node. */
    getNode(): HTMLElement;
    /** Sets the visibility of the layer to "false". */
    hide(): void;
    /**
     * Returns true if the layer is visible at the given scale.
     * @param scale The scale at which to check if the layer is visible.
     */
    isVisibleAtScale(scale: number): boolean;
    /** Resumes layer drawing. */
    resume(): void;
    /**
     * Set the maximum scale for the layer.
     * @param scale The maximum scale at which the layer is visible.
     */
    setMaxScale(scale: number): void;
    /**
     * Set the minimum scale for the layer.
     * @param scale The minimum scale at which the layer is visible.
     */
    setMinScale(scale: number): void;
    /**
     * Sets the opacity of the layer.
     * @param opacity Value from 0 to 1, where 0 is 100% transparent and 1 has no transparency.
     */
    setOpacity(opacity: number): void;
    /**
     * Changes the layer's refresh interval to the given value (in minutes).
     * @param interval Refresh interval of the layer in minutes.
     */
    setRefreshInterval(interval: number): Layer;
    /**
     * Set the scale range for the layer.
     * @param minScale The minimum scale at which the layer is visible.
     * @param maxScale The maximum scale at which the layer is visible.
     */
    setScaleRange(minScale: number, maxScale: number): void;
    /**
     * Sets the visibility of the layer.
     * @param isVisible Set the visibility of the layer.
     */
    setVisibility(isVisible: boolean): void;
    /** Sets the visibility of the layer to "true". */
    show(): void;
    /** Suspends layer drawing. */
    suspend(): void;
    /** Fires when there is a problem retrieving a layer. */
    on(type: "error", listener: (event: { error: Error; target: Layer }) => void): esri.Handle;
    /** Fires after layer properties for the layer are successfully populated. */
    on(type: "load", listener: (event: { layer: Layer; target: Layer }) => void): esri.Handle;
    /** Fires when the layer opacity has been changed, and returns an object with the opacity value. */
    on(type: "opacity-change", listener: (event: { opacity: number; target: Layer }) => void): esri.Handle;
    /** This event is fired when the layer's refreshInterval is modified. */
    on(type: "refresh-interval-change", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when a layer resumes drawing. */
    on(type: "resume", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when a layer's minScale and/or maxScale is changed. */
    on(type: "scale-range-change", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when a layer's scale visibility changes. */
    on(type: "scale-visibility-change", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when a layer suspends drawing. */
    on(type: "suspend", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires any time a layer has finished loading or updating itself. */
    on(type: "update", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when a layer has finished updating its content. */
    on(type: "update-end", listener: (event: { error: Error; target: Layer }) => void): esri.Handle;
    /** Fires when a layer begins to update its content. */
    on(type: "update-start", listener: (event: { target: Layer }) => void): esri.Handle;
    /** Fires when the layer visibility has been changed, and returns an object with a Boolean visible property containing the new visibility value of the layer. */
    on(type: "visibility-change", listener: (event: { visible: boolean; target: Layer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Layer;
}

declare module "esri/map" {
  import esri = require("esri");
  import Attribution = require("esri/dijit/Attribution");
  import Extent = require("esri/geometry/Extent");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Point = require("esri/geometry/Point");
  import SnappingManager = require("esri/SnappingManager");
  import SpatialReference = require("esri/SpatialReference");
  import TimeExtent = require("esri/TimeExtent");
  import Layer = require("esri/layers/layer");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import TimeSlider = require("esri/dijit/TimeSlider");
  import LOD = require("esri/layers/LOD");

  /** The Map class creates a container and required DOM structure for adding layers, graphics, an info window, and other navigation controls. */
  class Map {
    /** Reference to the attribution widget created by the map when map attribution is enabled. */
    attribution: Attribution;
    /** Value is true when the map automatically resizes if the browser window or ContentPane widget enclosing the map is resized. */
    autoResize: boolean;
    /** An array of IDs corresponding to the layers that make up the map's current basemap. */
    basemapLayerIds: string[];
    /** The current extent of the map in map units. */
    extent: Extent;
    /** Indicates if the fade effect is enabled while zooming. */
    fadeOnZoom: boolean;
    /** When the mapNavigation mode is set to 'css-transforms', CSS3 transforms will be used for map navigation when supported by the browser. */
    force3DTransforms: boolean;
    /** The extent (or bounding box) of the map in geographic coordinates. */
    geographicExtent: Extent;
    /** Provides access to the Map's GraphicsLayer. */
    graphics: GraphicsLayer;
    /** An array of the current GraphicsLayers in the map. */
    graphicsLayerIds: string[];
    /** Current height of the map in screen pixels. */
    height: number;
    /** Reference to HTML DIV or other element where the map is placed on the page. */
    id: string;
    /** Displays the InfoWindow on a map. */
    infoWindow: InfoWindowBase;
    /** When true, the key sequence of shift then click to recenter the map is enabled. */
    isClickRecenter: boolean;
    /** When true, double click zoom is enabled. */
    isDoubleClickZoom: boolean;
    /** When true, keyboard navigation is enabled. */
    isKeyboardNavigation: boolean;
    /** When true, map panning is enabled using the mouse. */
    isPan: boolean;
    /** When true, pan arrows are displayed around the edge of the map. */
    isPanArrows: boolean;
    /** When true, rubberband zoom is enabled. */
    isRubberBandZoom: boolean;
    /** When true, the mouse scroll wheel zoom is enabled. */
    isScrollWheelZoom: boolean;
    /** When true, shift double click zoom is enabled. */
    isShiftDoubleClickZoom: boolean;
    /** When true, the zoom slider is displayed on the map. */
    isZoomSlider: boolean;
    /** Array of current TiledMapServiceLayers and DynamicMapServiceLayers added to the map. */
    layerIds: string[];
    /** After the first layer is loaded, the value is set to true. */
    loaded: boolean;
    /** Indicates whether the map uses CSS3 transformations when panning and zooming. */
    navigationMode: string;
    /** This point geometry in screen coordinates represent the top-left corner of the map container. */
    position: Point;
    /** The DOM node that contains the container of layers, build-in info window, logo and slider. */
    root: HTMLElement;
    /** When true, map attribution is enabled. */
    showAttribution: boolean;
    /** If snapping is enabled on the map using map.enableSnapping() this property provides access to the SnappingManager. */
    snappingManager: SnappingManager;
    /** The spatial reference of the map. */
    spatialReference: SpatialReference;
    /** The current TimeExtent for the map. */
    timeExtent: TimeExtent;
    /** Indicates whether map is visible. */
    visible: boolean;
    /** Current width of the map in screen pixels. */
    width: number;
    /**
     * Creates a new map inside of the given HTML container, which is often a DIV element.
     * @param divId Container id for the referencing map.
     * @param options Optional parameters.
     */
    constructor(divId: string, options?: esri.MapOptions);
    /**
     * Adds an Esri Layer to the map.
     * @param layer Layer to be added to the map.
     * @param index A layer can be added at a specified index in the map.
     */
    addLayer(layer: Layer, index?: number): Layer;
    /**
     * Adds multiple layers to a map.
     * @param layers Layers to be added to the map.
     */
    addLayers(layers: Layer[]): void;
    /**
     * Adds a new attribute or changes the value of an existing attribute on the map container.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     */
    attr(name: string, value: string): Map;
    /**
     * Centers and zooms the map.
     * @param mapPoint Centers the map on the specified x,y location.
     * @param levelOrFactor When using an ArcGISTiledMapServiceLayer, the map is zoomed to the level specified.
     */
    centerAndZoom(mapPoint: Point, levelOrFactor: number): any;
    /**
     * Centers the map based on map coordinates as the center point.
     * @param mapPoint Centers the map on the specified x,y location.
     */
    centerAt(mapPoint: Point): any;
    /** Destroys the map instance. */
    destroy(): void;
    /** Disallows clicking on a map to center it. */
    disableClickRecenter(): void;
    /** Disallows double clicking on a map to zoom in a level and center the map. */
    disableDoubleClickZoom(): void;
    /** Disallows panning and zooming using the keyboard. */
    disableKeyboardNavigation(): void;
    /** Disallows all map navigation except the slider and pan arrows. */
    disableMapNavigation(): void;
    /** Disallows panning a map using the mouse. */
    disablePan(): void;
    /** Disallows zooming in or out on a map using a bounding box. */
    disableRubberBandZoom(): void;
    /** Disallows zooming in or out on a map using the mouse scroll wheel. */
    disableScrollWheelZoom(): void;
    /** Disallows shift double clicking on a map to zoom in a level and center the map. */
    disableShiftDoubleClickZoom(): void;
    /** Disables snapping on the map. */
    disableSnapping(): void;
    /** Permits users to click on a map to center it. */
    enableClickRecenter(): void;
    /** Permits users to double click on a map to zoom in a level and center the map. */
    enableDoubleClickZoom(): void;
    /** Permits users to pan and zoom using the keyboard. */
    enableKeyboardNavigation(): void;
    /** Allows all map navigation. */
    enableMapNavigation(): void;
    /** Permits users to pan a map using the mouse. */
    enablePan(): void;
    /** Permits users to zoom in or out on a map using a bounding box. */
    enableRubberBandZoom(): void;
    /** Permits users to zoom in or out on a map using the mouse scroll wheel. */
    enableScrollWheelZoom(): void;
    /** Permits users to shift double click on a map to zoom in a level and center the map. */
    enableShiftDoubleClickZoom(): void;
    /**
     * Enable snapping on the map when working with the Editor, Measurement widget or the Draw and Edit toolbars.
     * @param snapOptions An object with the following properties.
     */
    enableSnapping(snapOptions?: any): SnappingManager;
    /** Returns the name of the current basemap. */
    getBasemap(): string;
    /**
     * Sets an InfoWindow's anchor when calling InfoWindow.show.
     * @param screenCoords The anchor point in screen units.
     */
    getInfoWindowAnchor(screenCoords: ScreenPoint): string;
    /**
     * Returns an individual layer of a map.
     * @param id ID assigned to the layer.
     */
    getLayer(id: string): Layer;
    /** Return an array of layers visible at the current scale. */
    getLayersVisibleAtScale(): Layer[];
    /** Gets the current level of detail  for the map. */
    getLevel(): number;
    /** Returns the maximum visible scale of the map. */
    getMaxScale(): number;
    /** Returns the maximum zoom level of the map. */
    getMaxZoom(): number;
    /** Returns the minimum visible scale of the map. */
    getMinScale(): number;
    /** Returns the minimum zoom level of the map.You cannot zoom out beyond this value. */
    getMinZoom(): number;
    /** Returns the current map scale. */
    getScale(): number;
    /** Returns the current zoom level of the map. */
    getZoom(): number;
    /** Hides the pan arrows from the map. */
    hidePanArrows(): void;
    /** Hides the zoom slider from the map. */
    hideZoomSlider(): void;
    /** Pans the map south. */
    panDown(): any;
    /** Pans the map west. */
    panLeft(): any;
    /** Pans the map southwest. */
    panLowerLeft(): any;
    /** Pans the map southeast. */
    panLowerRight(): any;
    /** Pans the map east. */
    panRight(): any;
    /** Pans the map north. */
    panUp(): any;
    /** Pans the map northwest. */
    panUpperLeft(): any;
    /** Pans the map northeast. */
    panUpperRight(): any;
    /** Removes all layers from the map. */
    removeAllLayers(): void;
    /**
     * Removes the specified layer from the map.
     * @param layer Layer to be removed from the map.
     */
    removeLayer(layer: Layer): void;
    /**
     * Changes the layer order in the map.
     * @param layer The layer to be moved.
     * @param index Refers to the location for placing the layer.
     */
    reorderLayer(layer: Layer, index: number): void;
    /** Repositions the map DIV on the page. */
    reposition(): void;
    /**
     * Resizes the map DIV.
     * @param immediate By default, the actual resize logic is delayed internally in order to throttle spurious resize events dispatched by some browsers.
     */
    resize(immediate?: boolean): void;
    /**
     * Change the map's current basemap.
     * @param basemap A valid basemap name.
     */
    setBasemap(basemap: string): void;
    /**
     * Sets the extent of the map.
     * @param extent Sets the minx, miny, maxx, and maxy for a map.
     * @param fit When true, for maps that contain tiled map service layers, you are guaranteed to have the input extent shown completely on the map.
     */
    setExtent(extent: Extent, fit?: boolean): any;
    /**
     * Sets the map to the specified level.
     * @param level The level ID.
     */
    setLevel(level: number): any;
    /**
     * Sets the default cursor for the map.
     * @param cursor A standard CSS cursor value.
     */
    setMapCursor(cursor: string): void;
    /**
     * Sets the map scale to the specified value.
     * @param scale A map scale value greater than 0.
     */
    setScale(scale: number): any;
    /**
     * Sets the TimeExtent for the map.
     * @param timeExtent Set the time extent for which data is displayed on the map.
     */
    setTimeExtent(timeExtent: TimeExtent): void;
    /**
     * Set the time slider associated with the map.
     * @param timeSlider The time slider dijit to associate with the map.
     */
    setTimeSlider(timeSlider: TimeSlider): void;
    /**
     * Show or hide the map.
     * @param visible If true, map will be visible.
     */
    setVisibility(visible: boolean): Map;
    /**
     * Set the map zoom level to the given value.
     * @param zoom A valid zoom level value.
     */
    setZoom(zoom: number): any;
    /** Shows the pan arrows on the map. */
    showPanArrows(): void;
    /** Shows the zoom slider on the map. */
    showZoomSlider(): void;
    /**
     * Converts a single screen point to map coordinates.
     * @param screenPoint Converts screen coordinates to map coordinates.
     */
    toMap(screenPoint: ScreenPoint): Point;
    /**
     * Converts a single map point to screen coordinate.
     * @param mapPoint Converts map coordinates to screen coordinates.
     */
    toScreen(mapPoint: Point): ScreenPoint;
    /** Fired when the map's basemap is changed. */
    on(type: "basemap-change", listener: (event: { current: any; previous: any; target: Map }) => void): esri.Handle;
    /** Event is fired before the map gets destroyed. */
    on(type: "before-unload", listener: (event: { map: Map; target: Map }) => void): esri.Handle;
    /** Fires when a user single clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a user double clicks on the map using the mouse and the mouse pointer is within the map region of the HTML page. */
    on(type: "dbl-click", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the extent of the map has changed. */
    on(type: "extent-change", listener: (event: { delta: Point; extent: Extent; levelChange: boolean; lod: LOD; target: Map }) => void): esri.Handle;
    /** Fires when a keyboard key is pressed. */
    on(type: "key-down", listener: (event: KeyboardEvent) => void): esri.Handle;
    /** Fires when a keyboard key is released. */
    on(type: "key-up", listener: (event: KeyboardEvent) => void): esri.Handle;
    /** Fires any time a layer is added to the map. */
    on(type: "layer-add", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires after specified layer has been added to the map. */
    on(type: "layer-add-result", listener: (event: { error: Error; layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires after the layer has been removed. */
    on(type: "layer-remove", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires when the map layer order has been changed. */
    on(type: "layer-reorder", listener: (event: { index: number; layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires when a map layer resumes drawing. */
    on(type: "layer-resume", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires after all layers are added to the map using the map.addLayers method. */
    on(type: "layers-add-result", listener: (event: { layers: Layer[]; target: Map }) => void): esri.Handle;
    /** Fires after all the layers have been removed. */
    on(type: "layers-removed", listener: (event: { target: Map }) => void): esri.Handle;
    /** Fires when all the layers have been reordered. */
    on(type: "layers-reordered", listener: (event: { layerIds: string[]; target: Map }) => void): esri.Handle;
    /** Fires when a map layer suspends drawing. */
    on(type: "layer-suspend", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle;
    /** Fires when the first or base layer has been successfully added to the map. */
    on(type: "load", listener: (event: { map: Map; target: Map }) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the mouse cursor is in the map region of the HTML page. */
    on(type: "mouse-down", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires while the mouse is being dragged until the mouse button is released. */
    on(type: "mouse-drag", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is released and the user stops dragging the mouse. */
    on(type: "mouse-drag-end", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when a mouse button is pressed down and the user starts to drag the mouse. */
    on(type: "mouse-drag-start", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires any time the mouse pointer moves over the map region. */
    on(type: "mouse-move", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse moves out of the map region of the HTML page. */
    on(type: "mouse-out", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse moves into the map region of the HTML page.. */
    on(type: "mouse-over", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse button is released and the mouse pointer is within the map region of the HTML page. */
    on(type: "mouse-up", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires when the mouse wheel is scrolled. */
    on(type: "mouse-wheel", listener: (event: esri.AGSMouseEvent) => void): esri.Handle;
    /** Fires during the pan process. */
    on(type: "pan", listener: (event: { delta: Point; extent: Extent; target: Map }) => void): esri.Handle;
    /** Fires when the pan is complete. */
    on(type: "pan-end", listener: (event: { delta: Point; extent: Extent; target: Map }) => void): esri.Handle;
    /** Fires when a user commences panning. */
    on(type: "pan-start", listener: (event: { extent: Extent; target: Map }) => void): esri.Handle;
    /** Fires when the map DIV is repositioned. */
    on(type: "reposition", listener: (event: { x: number; y: number; target: Map }) => void): esri.Handle;
    /** Fires when the map's container has been resized. */
    on(type: "resize", listener: (event: { extent: Extent; height: number; width: number; target: Map }) => void): esri.Handle;
    /** Fires when the map's timeExtent property is set. */
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: Map }) => void): esri.Handle;
    /** Fires when the page is refreshed. */
    on(type: "unload", listener: (event: { map: Map; target: Map }) => void): esri.Handle;
    /** Fires after layers that are updating their content have completed. */
    on(type: "update-end", listener: (event: { error: Error; target: Map }) => void): esri.Handle;
    /** Fires when one or more layers begins updating their content. */
    on(type: "update-start", listener: (event: { target: Map }) => void): esri.Handle;
    /** Fires during the zoom process. */
    on(type: "zoom", listener: (event: { anchor: Point; extent: Extent; zoomFactor: number; target: Map }) => void): esri.Handle;
    /** Fires when the zoom is complete. */
    on(type: "zoom-end", listener: (event: { anchor: Point; extent: Extent; level: number; zoomFactor: number; target: Map }) => void): esri.Handle;
    /** Fires when a user commences zooming. */
    on(type: "zoom-start", listener: (event: { anchor: Point; extent: Extent; level: number; zoomFactor: number; target: Map }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Map;
}

declare module "esri/plugins/spatialIndex" {
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  /** A static utility module that adds or removes a SpatialIndex instance on a Map or FeatureLayer. */
  var spatialIndex: {
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options Index options.
     */
    add(target: Map, options?: any): void;
    /**
     * Adds an index property to the target instance.
     * @param target The map or feature layer to which the index is connected.
     * @param options Index options.
     */
    add(target: FeatureLayer, options?: any): void;
    /** Removes the index plugin. */
    remove(): void;
  };
  export = spatialIndex;
}

declare module "esri/process/Processor" {
  import esri = require("esri");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  /** The base processor class provides the generic api for processors and provides an extension point from which developers can create and extend additional processors. */
  class Processor {
    /** Allow the feature layer to draw the features. */
    drawFeatures: boolean;
    /** Should features be fetched through the Worker. */
    fetchWithWorker: boolean;
    /** Layer(s) connected to the processor. */
    layers: FeatureLayer[];
    /** Pass features back to layer without delay before processing. */
    passFeatures: boolean;
    /** Require support for Worker in order to use this processor. */
    requireWorkerSupport: boolean;
    /**
     * Creates a processor.
     * @param options Configuration options for the processor.
     */
    constructor(options?: esri.ProcessorOptions);
    /**
     * Add layer to processor.
     * @param layer FeatureLayer to be added.
     */
    addLayer(layer: FeatureLayer): void;
    /**
     * Remove layer from processor.
     * @param layer FeatureLayer to be removed.
     */
    removeLayer(layer: FeatureLayer): void;
    /**
     * Synchronize the layers the processor handles with the map's GraphicsLayer and GraphicsLayer subclasses (FeatureLayer, etc...).
     * @param map The map instance to synchronize layers with.
     */
    setMap(map: Map): void;
    /** Start the processor. */
    start(): void;
    /** Stop the processor. */
    stop(): void;
    /** Unset the map and detach processor from all layers. */
    unsetMap(): void;
    /** Fires when the processor is started. */
    on(type: "start", listener: (event: { target: Processor }) => void): esri.Handle;
    /** Fires when the processor is stopped. */
    on(type: "stop", listener: (event: { target: Processor }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Processor;
}

declare module "esri/process/SpatialIndex" {
  import esri = require("esri");
  import Processor = require("esri/process/Processor");
  import Point = require("esri/geometry/Point");
  import Graphic = require("esri/graphic");
  import Extent = require("esri/geometry/Extent");

  /** Builds and maintains a spatial index of feature geometry in one or more FeatureLayer. */
  class SpatialIndex extends Processor {
    /**
     * Creates a SpatialIndex.
     * @param options Configuration options for the processor.
     */
    constructor(options?: esri.SpatialIndexOptions);
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: Point, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: Graphic, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: Extent, layerId?: string, getRects?: boolean): any;
    /**
     * Searches index for items which intersect the test object.
     * @param test The point or area to intersect.
     * @param layerId ID assigned to the layer.
     * @param getRects Whether to get the rectangle object with data in leaf, otherwise just get the stored data.
     */
    intersects(test: number[], layerId?: string, getRects?: boolean): any;
    /**
     * Searches for the nearest point(s) to the passed point within the specified criteria.
     * @param criteria See following parameters for valid members of criteria.
     * @param layerId ID assigned to the layer.
     */
    nearest(criteria: any, layerId?: string): any;
  }
  export = SpatialIndex;
}

declare module "esri/renderers/ClassBreaksRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import FillSymbol = require("esri/symbols/FillSymbol");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** A class breaks renderer symbolizes each graphic based on the value of some numeric attribute. */
  class ClassBreaksRenderer extends Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** To symbolize polygon features with graduated symbols, use backgroundFillSymbol to specify a simple fill symbol to represent polygon features, and use marker symbols of varying sizes in class breaks to indicate the quantity. */
    backgroundFillSymbol: FillSymbol;
    /** Deprecated at v2.0, use infos instead. */
    breaks: any[];
    /** The classification method used to generate class breaks. */
    classificationMethod: string;
    /** Each element in the array is an object that provides information about the class breaks associated with the renderer. */
    infos: any[];
    /** When normalizationType is "field", this property contains the attribute field name used for normalization. */
    normalizationField: string;
    /** When normalizationType is "percent-of-total", this property contains the total of all data values. */
    normalizationTotal: number;
    /** Indicates how the data is normalized. */
    normalizationType: string;
    /**
     * Creates a new ClassBreaksRenderer object.
     * @param defaultSymbol Default symbol for the renderer.
     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
     */
    constructor(defaultSymbol: Symbol, attributeField: string);
    /**
     * Creates a new ClassBreaksRenderer object.
     * @param defaultSymbol Default symbol for the renderer.
     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against class breaks.
     */
    constructor(defaultSymbol: Symbol, attributeField: Function);
    /**
     * Creates a new ClassBreaksRenderer.
     * @param json JSON object representing the ClassBreaksRenderer.
     */
    constructor(json: Object);
    /**
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object with the following properties.
     * @param maxValue Maximum value in the break.
     * @param symbol Symbol used for the break.
     */
    addBreak(minValueOrInfo: number, maxValue?: number, symbol?: Symbol): void;
    /**
     * Adds a class break.
     * @param minValueOrInfo The value can be provided as individual arguments or as an info object with the following properties.
     * @param maxValue Maximum value in the break.
     * @param symbol Symbol used for the break.
     */
    addBreak(minValueOrInfo: any, maxValue?: number, symbol?: Symbol): void;
    /** Remove all existing class breaks for this renderer. */
    clearBreaks(): void;
    /**
     * Returns the index at which rendering and legend information can be found in the break infos array for the given graphic.
     * @param graphic The graphic whose rendering and legend information index in the break infos array will be returned.
     */
    getBreakIndex(graphic: Graphic): number;
    /**
     * Returns rendering and legend information (as defined by the renderer) associated with the given graphic.
     * @param graphic The graphic whose rendering and legend information will be returned.
     */
    getBreakInfo(graphic: Graphic): any;
    /**
     * Removes a break.
     * @param minValue Minimum value in the break to remove.
     * @param maxValue Maximum value in the break to remove.
     */
    removeBreak(minValue: number, maxValue: number): void;
    /**
     * By default, a graphic or feature is considered a match for a class break if the graphic's attribute value is greater than or equal to its min value and less than its max value.
     * @param enable Set true to enable the max inclusive behavior.
     */
    setMaxInclusive(enable: boolean): void;
  }
  export = ClassBreaksRenderer;
}

declare module "esri/renderers/DotDensityRenderer" {
  import esri = require("esri");
  import Renderer = require("esri/renderers/Renderer");
  import Color = require("esri/Color");
  import LineSymbol = require("esri/symbols/LineSymbol");

  /** The DotDensityRenderer provides the ability to create dot density visualizations on data. */
  class DotDensityRenderer extends Renderer {
    /** The color to be used for the background of the symbol. */
    backgroundColor: Color;
    /** The shape to be used for the dot. */
    dotShape: string;
    /** The size of the dot in pixels. */
    dotSize: number;
    /** The value that a dot represents. */
    dotValue: number;
    /** An array of objects, where each object defines a field to be mapped and its color. */
    fields: any[];
    /** The line symbol to use on the outline of the feature. */
    outline: LineSymbol;
    /**
     * Creates a new instance of dot density renderer.
     * @param params An object with various options.
     */
    constructor(params: esri.DotDensityRendererOptions);
    /**
     * Updates the background color of the shape.
     * @param color Background color.
     */
    setBackgroundColor(color: Color): void;
    /**
     * Updates the size of the dot.
     * @param size The size of the dot in pixels.
     */
    setDotSize(size: number): void;
    /**
     * Updates the value that a dot represents.
     * @param value The value that a dot represents.
     */
    setDotValue(value: number): void;
    /**
     * Updates the outline symbol of the shape.
     * @param outline The line symbol to use on the outline of the feature.
     */
    setOutline(outline: LineSymbol): void;
  }
  export = DotDensityRenderer;
}

declare module "esri/renderers/Renderer" {
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");
  import Color = require("esri/Color");

  /** Base class for the renderers - SimpleRenderer, ClassBreaksRenderer, UniqueValueRenderer. */
  class Renderer {
    /** An object defining a color ramp used to render the layer. */
    colorInfo: any;
    /** Default symbol used when a value or break cannot be matched. */
    defaultSymbol: Symbol;
    /** Defines the proportional symbol rendering where feature size is proportional to data value. */
    proportionalSymbol: any;
    /** Defines how marker symbols are rotated. */
    rotationInfo: any;
    /**
     * Gets the color for the Graphic.
     * @param graphic Graphic to get color from.
     */
    getColor(graphic: Graphic): Color;
    /**
     * Returns the angle of rotation (in degrees) for the graphic calculated using rotationInfo.
     * @param graphic An input graphic for which you want to get the angle of rotation.
     */
    getRotationAngle(graphic: Graphic): number;
    /**
     * Return the symbol size (in pixels) for the graphic, calculated using proportionalSymbolInfo.
     * @param graphic The graphic for which you want to calculate the symbol size.
     */
    getSize(graphic: Graphic): number;
    /**
     * Gets the symbol for the Graphic.
     * @param graphic Graphic to symbolize.
     */
    getSymbol(graphic: Graphic): Symbol;
    /**
     * Sets the colorInfo property.
     * @param info An info object that defines the color.
     */
    setColorInfo(info: any): Renderer;
    /**
     * Modify proportional symbol info for the renderer.
     * @param info An info object that defines the proportional symbol.
     */
    setProportionalSymbolInfo(info: any): Renderer;
    /**
     * Modifies rotation info for the renderer.
     * @param info An object with the same properties as rotationInfo.
     */
    setRotationInfo(info: any): Renderer;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Renderer;
}

declare module "esri/renderers/ScaleDependentRenderer" {
  import esri = require("esri");
  import Renderer = require("esri/renderers/Renderer");
  import Graphic = require("esri/graphic");

  /** ScaleDependentRenderer provides the capability to apply multiple scale-dependent renderers to a layer. */
  class ScaleDependentRenderer extends Renderer {
    /** Indicates whether rendererInfos uses zoom range or scale range. */
    rangeType: string;
    /** An array of objects, where each object defines a renderer and the zoom/scale range to which it applies. */
    rendererInfos: any;
    /**
     * Create a ScaleDependentRenderer.
     * @param params Various parameters to configure this renderer.
     */
    constructor(params: esri.ScaleDependentRendererOptions);
    /**
     * Adds the specified renderer info to the array of existing renderers.
     * @param info An object as defined in the rendererInfos property.
     */
    addRendererInfo(info: any): ScaleDependentRenderer;
    /**
     * Returns the renderer info for the input graphic.
     * @param graphic The graphic for which you want to get renderer info.
     */
    getRendererInfo(graphic: Graphic): any;
    /**
     * Returns the renderer info for the specified scale.
     * @param scale Returns the renderer info for the specified scale.
     */
    getRendererInfoByScale(scale: number): any;
    /**
     * Returns the rendererInfo for the specified zoom level.
     * @param zoom Specify the zoom level for which you want to retrieve the renderer info.
     */
    getRenderInfoByZoom(zoom: number): any;
    /**
     * Replaces existing rendererInfos with new ones.
     * @param infos An array of objects as defined in the rendererInfos property.
     */
    setRendererInfos(infos: any): ScaleDependentRenderer;
  }
  export = ScaleDependentRenderer;
}

declare module "esri/renderers/SimpleRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import Symbol = require("esri/symbols/Symbol");

  /** A renderer that uses one symbol only. */
  class SimpleRenderer extends Renderer {
    /** Description for the renderer. */
    description: string;
    /** Label for the renderer. */
    label: string;
    /** The symbol for the renderer. */
    symbol: Symbol;
    /**
     * Creates a new SimpleRenderer object with a Symbol parameter.
     * @param defaultSymbol Symbol to use for the renderer.
     */
    constructor(defaultSymbol: Symbol);
    /**
     * Creates a new Simple Renderer
     * @param json JSON object representing the SimpleRenderer.
     */
    constructor(json: Object);
  }
  export = SimpleRenderer;
}

declare module "esri/renderers/SymbolAger" {
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** Base class for agers. */
  class SymbolAger {
    /**
     * All subclasses override this method to provide their own implementation to calculate aging and return the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = SymbolAger;
}

declare module "esri/renderers/TemporalRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Graphic = require("esri/graphic");
  import Symbol = require("esri/symbols/Symbol");

  /** Temporal renderers provide time-based rendering of features in a feature layer. */
  class TemporalRenderer extends Renderer {
    /**
     * Creates a new TemporalRenderer object that can be used with a time-aware feature layer.
     * @param observationRenderer Renderer for regular/historic observations.
     * @param latestObservationRenderer Renderer for the most current observations.In the snippet below RouteID is the field that contains the trackID for the feature layer this is used to display the  latest observation for the specified tracks.
     * @param trackRenderer Renderer for the tracks.
     * @param observationAger Symbol ager for regular observations.
     */
    constructor(observationRenderer: Renderer, latestObservationRenderer?: Renderer, trackRenderer?: Renderer, observationAger?: SymbolAger);
    /**
     * Returns the symbol used to render the graphic.
     * @param graphic The input graphic.
     */
    getSymbol(graphic: Graphic): Symbol;
  }
  export = TemporalRenderer;
}

declare module "esri/renderers/TimeClassBreaksAger" {
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** Time class breaks ager displays aging by classifying features based on an age range. */
  class TimeClassBreaksAger extends SymbolAger {
    /** Time breaks are measured in days. */
    static UNIT_DAYS: any;
    /** Time breaks are measured in hours. */
    static UNIT_HOURS: any;
    /** Time breaks are measured in milliseconds. */
    static UNIT_MILLISECONDS: any;
    /** Time breaks are measured in minutes. */
    static UNIT_MINUTES: any;
    /** Time breaks are measured in months. */
    static UNIT_MONTHS: any;
    /** Time breaks are measured in seconds. */
    static UNIT_SECONDS: any;
    /** Time breaks are measured in weeks. */
    static UNIT_WEEKS: any;
    /** Time breaks are measured in years. */
    static UNIT_YEARS: any;
    /**
     * Creates a new TimeClassBreaksAgerObject with the specified time breaks inforamtion.
     * @param infos Each element in the array is an object that describes the class breaks information.
     */
    constructor(infos: any[]);
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = TimeClassBreaksAger;
}

declare module "esri/renderers/TimeRampAger" {
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Color = require("esri/Color");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** Time ramp agers display aging using a gradual change in symbology. */
  class TimeRampAger extends SymbolAger {
    /**
     * Creates a new TimeRampAger object with the specified color and size ranges.
     * @param colorRange An array containing the minimum and maximum color values.
     * @param sizeRange An array containing the minimum and maximum size in  pixels.
     * @param alphaRange An array containing the minimum and maximum alpha opacity values.
     */
    constructor(colorRange?: Color[], sizeRange?: number[], alphaRange?: number[]);
    /**
     * Calculates aging and returns the appropriate symbol.
     * @param symbol The symbol to age.
     * @param graphic Feature being rendered.
     */
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = TimeRampAger;
}

declare module "esri/renderers/UniqueValueRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  /** A unique value renderer symbolizes groups of graphics that have matching attributes. */
  class UniqueValueRenderer extends Renderer {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField2: string;
    /** If needed, specify an additional attribute field the renderer uses to match values. */
    attributeField3: string;
    /** Label for the default symbol used to draw unspecified values. */
    defaultLabel: string;
    /** String inserted between the values if multiple attribute fields are specified. */
    fieldDelimiter: string;
    /** Each element in the array is an object that provides information about the unique values associated with the renderer. */
    infos: any[];
    /** Deprecated at v2.0, use infos instead. */
    values: string[];
    /**
     * Creates a new UniqueValueRenderer object.
     * @param defaultSymbol Default symbol for the renderer.
     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
     * @param fieldDelimeter String inserted between the values of different fields.
     */
    constructor(defaultSymbol: Symbol, attributeField: string, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    /**
     * Creates a new UniqueValueRenderer object.
     * @param defaultSymbol Default symbol for the renderer.
     * @param attributeField Specify either the attribute field the renderer uses to match values or starting at version 3.3, a function that returns a value to be compared against unique values.
     * @param attributeField2 If needed, specify an additional attribute field the renderer uses to match values.
     * @param attributeField3 If needed, specify an additional attribute field the renderer uses to match values.
     * @param fieldDelimeter String inserted between the values of different fields.
     */
    constructor(defaultSymbol: Symbol, attributeField: Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    /**
     * Creates a new Unique Value Renderer.
     * @param json JSON object representing the UniqueValueRenderer.
     */
    constructor(json: Object);
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol Symbol used for the value.
     */
    addValue(valueOrInfo: string, symbol?: Symbol): void;
    /**
     * Adds a unique value and symbol.
     * @param valueOrInfo Value to match with.
     * @param symbol Symbol used for the value.
     */
    addValue(valueOrInfo: any, symbol?: Symbol): void;
    /**
     * Returns rendering and legend information (as defined by the renderer) associated with the given graphic.
     * @param graphic The graphic whose rendering and legend information will be returned.
     */
    getUniqueValueInfo(graphic: Graphic): any;
    /**
     * Removes a unique value.
     * @param value Value to remove.
     */
    removeValue(value: string): void;
  }
  export = UniqueValueRenderer;
}

declare module "esri/renderers/jsonUtils" {
  import Renderer = require("esri/renderers/Renderer");

  /** Utility method to create a renderer from JSON. */
  var jsonUtils: {
    /**
     * Converts the input JSON object to the appropriate esri.renderer.* object.
     * @param json The JSON object.
     */
    fromJson(json: Object): Renderer;
  };
  export = jsonUtils;
}

declare module "esri/request" {
  /** Retrieve data from a remote server or upload a file. */
  var request: {
    /**
     * Retrieve data from a remote server or upload a file from a user's computer.
     * @param request The request parameter is an object with the following properties that describe the request.
     * @param options The options parameter is an object with the following properties representing various options supported by this function.
     */
    (request: any, options?: any): any;
    /**
     * Define a callback function that will be called just before esri.request calls into dojo IO functions such as dojo.rawXhrPost and dojo.io.script.get.
     * @param callbackFunction The callback function that will be executed prior to esri.request calls into dojo IO functions.
     */
    setRequestPreCallback(callbackFunction: Function): void;
  };
  export = request;
}

declare module "esri/symbols/CartographicLineSymbol" {
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
  import Color = require("esri/Color");

  /** Line symbols are used to draw linear features on the graphics layer. */
  class CartographicLineSymbol extends SimpleLineSymbol {
    /** Line ends square at the end point. */
    static CAP_BUTT: any;
    /** Line is rounded just beyond the end point. */
    static CAP_ROUND: any;
    /** Line is squared just beyond the end point. */
    static CAP_SQUARE: any;
    /** The joined lines are beveled. */
    static JOIN_BEVEL: any;
    /** The joined lines are not rounded or beveled. */
    static JOIN_MITER: any;
    /** The joined lines are rounded. */
    static JOIN_ROUND: any;
    /** The line is made of a long dash pattern. */
    static STYLE_LONGDASH: any;
    /** The line is made of a long dash-dot pattern. */
    static STYLE_LONGDASHDOT: any;
    /** The line is made of a short dash pattern. */
    static STYLE_SHORTDASH: any;
    /** The line is made of a short dash-dot pattern. */
    static STYLE_SHORTDASHDOT: any;
    /** The line is made of a short dash-dot-dot pattern. */
    static STYLE_SHORTDASHDOTDOT: any;
    /** The line is made of a short dot pattern. */
    static STYLE_SHORTDOT: any;
    /** The cap style. */
    cap: string;
    /** The join style. */
    join: string;
    /** Size threshold for showing mitered line joins. */
    miterLimit: string;
    /** Creates a new empty CartographicLineSymbol object. */
    constructor();
    /**
     * Creates a new CartographicLineSymbol object with parameters.
     * @param style See Constants table for values.
     * @param color Symbol color.
     * @param width Width of the line in pixels.
     * @param cap See Constants table for values.
     * @param join See Constants table for values.
     * @param miterLimit Size threshold for showing mitered line joins.
     */
    constructor(style?: string, color?: Color, width?: number, cap?: string, join?: string, miterLimit?: string);
    /**
     * Creates a new CartographicLineSymbol object using a JSON object.
     * @param json JSON object representing the CartographicLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the cap style.
     * @param cap Cap style.
     */
    setCap(cap: string): CartographicLineSymbol;
    /**
     * Sets the join style.
     * @param join Join style.
     */
    setJoin(join: string): CartographicLineSymbol;
    /**
     * Sets the size threshold for showing mitered line joins.
     * @param miterLimit Miter limit.
     */
    setMiterLimit(miterLimit: string): CartographicLineSymbol;
  }
  export = CartographicLineSymbol;
}

declare module "esri/symbols/FillSymbol" {
  import Symbol = require("esri/symbols/Symbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class FillSymbol extends Symbol {
    /** Outline of the polygon. */
    outline: SimpleLineSymbol;
    /**
     * Sets the outline of the fill symbol.
     * @param outline Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): FillSymbol;
  }
  export = FillSymbol;
}

declare module "esri/symbols/Font" {
  /** Font used for text symbols added to the graphics layer. */
  class Font {
    /** Text is in italics. */
    static STYLE_ITALIC: any;
    /** Text style is normal. */
    static STYLE_NORMAL: any;
    /** Text is slanted. */
    static STYLE_OBLIQUE: any;
    /** Text variant is normal. */
    static VARIANT_NORMAL: any;
    /** Text is in all small caps. */
    static VARIANT_SMALLCAPS: any;
    /** Text weight is bold. */
    static WEIGHT_BOLD: any;
    /** Text weight is extra bold. */
    static WEIGHT_BOLDER: any;
    /** Text weight is lighter than normal. */
    static WEIGHT_LIGHTER: any;
    /** Text weight is normal. */
    static WEIGHT_NORMAL: any;
    /** Text decoration. */
    decoration: string;
    /** Font family. */
    family: string;
    /** Font size. */
    size: number;
    /** Text style. */
    style: string;
    /** Text variant. */
    variant: string;
    /** Text weight. */
    weight: string;
    /** Creates a new Font object. */
    constructor();
    /**
     * Creates a new Font object.
     * @param size Font size.
     * @param style Font style.
     * @param variant Font variant.
     * @param weight Font weight.
     * @param family Font family.
     */
    constructor(size?: number, style?: string, variant?: string, weight?: string, family?: string);
    /**
     * Creates a new Font object.
     * @param size Font size.
     * @param style Font style.
     * @param variant Font variant.
     * @param weight Font weight.
     * @param family Font family.
     */
    constructor(size?: string, style?: string, variant?: string, weight?: string, family?: string);
    /**
     * Creates a new Font object using a JSON object.
     * @param json JSON object representing the font.
     */
    constructor(json: Object);
    /**
     * Updates the font with the given decoration.
     * @param decoration Text decoration.
     */
    setDecoration(decoration: string): Font;
    /**
     * Sets the font family.
     * @param family Font family.
     */
    setFamily(family: string): Font;
    /**
     * Sets the font size.
     * @param size Font size.
     */
    setSize(size: number): Font;
    /**
     * Sets the font size.
     * @param size Font size.
     */
    setSize(size: string): Font;
    /**
     * Sets the font style.
     * @param style Font style.
     */
    setStyle(style: string): Font;
    /**
     * Sets the font variant.
     * @param variant Font variant.
     */
    setVariant(variant: string): Font;
    /**
     * Sets the font weight.
     * @param weight Font weight.
     */
    setWeight(weight: string): Font;
  }
  export = Font;
}

declare module "esri/symbols/LineSymbol" {
  import Symbol = require("esri/symbols/Symbol");

  /** Line symbols are used to draw linear features on the graphics layer. */
  class LineSymbol extends Symbol {
    /** Width of line symbol in pixels. */
    width: number;
    /**
     * Sets the LineSymbol width.
     * @param width Width of line symbol in pixels.
     */
    setWidth(width: number): LineSymbol;
  }
  export = LineSymbol;
}

declare module "esri/symbols/MarkerSymbol" {
  import Symbol = require("esri/symbols/Symbol");

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class MarkerSymbol extends Symbol {
    /** The angle of the marker. */
    angle: number;
    /** Size of the marker in pixels. */
    size: number;
    /** The offset on the x-axis in pixels. */
    xoffset: number;
    /** The offset on the y-axis in pixels. */
    yoffset: number;
    /**
     * Rotates the symbol clockwise around its center by the specified angle.
     * @param angle The angle value.
     */
    setAngle(angle: number): MarkerSymbol;
    /**
     * Sets the x and y offset of a marker in screen units.
     * @param x The X offset value in pixels.
     * @param y The Y offset value in pixels.
     */
    setOffset(x: number, y: number): MarkerSymbol;
    /**
     * Sets the size of a marker in pixels.
     * @param size The width of the symbol in pixels.
     */
    setSize(size: number): MarkerSymbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = MarkerSymbol;
}

declare module "esri/symbols/PictureFillSymbol" {
  import FillSymbol = require("esri/symbols/FillSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class PictureFillSymbol extends FillSymbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /** The offset on the x-axis in pixels. */
    xoffset: number;
    /** Scale factor in x direction. */
    xscale: number;
    /** The offset on the y-axis in pixels. */
    yoffset: number;
    /** Scale factor in y direction. */
    yscale: number;
    /**
     * Creates a new PictureFillSymbol object.
     * @param url URL of the image.
     * @param outline Outline of the symbol.
     * @param width Width of the image in pixels.
     * @param height Height of the image in pixels.
     */
    constructor(url: string, outline: SimpleLineSymbol, width: number, height: number);
    /**
     * Creates a new PictureFillSymbol object using a JSON object.
     * @param json JSON object representing the PictureFillSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the height of the symbol.
     * @param height Height in pixels.
     */
    setHeight(height: number): PictureFillSymbol;
    /**
     * Sets the symbol offset.
     * @param x Offset in x direction in pixels.
     * @param y Offset in y direction in pixels.
     */
    setOffset(x: number, y: number): PictureFillSymbol;
    /**
     * Sets the URL to the location of the symbol.
     * @param url URL string.
     */
    setUrl(url: string): PictureFillSymbol;
    /**
     * Sets the width of the symbol.
     * @param width Width in pixels.
     */
    setWidth(width: number): PictureFillSymbol;
    /**
     * Sets the scale factor in x direction.
     * @param scale Scale factor in x direction.
     */
    setXScale(scale: number): PictureFillSymbol;
    /**
     * Sets the scale factor in y direction.
     * @param scale Scale factor in y direction.
     */
    setYScale(scale: number): PictureFillSymbol;
  }
  export = PictureFillSymbol;
}

declare module "esri/symbols/PictureMarkerSymbol" {
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class PictureMarkerSymbol extends MarkerSymbol {
    /** Height of the image in pixels. */
    height: number;
    /** URL of the image. */
    url: string;
    /** Width of the image in pixels. */
    width: number;
    /**
     * Creates a new PictureMarkerSymbol object.
     * @param url URL of the image.
     * @param width Width of the image in pixels.
     * @param height Height of the image in pixels.
     */
    constructor(url: string, width: number, height: number);
    /**
     * Creates a new PictureMarkerSymbol object using a JSON object.
     * @param json JSON object representing the PictureMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the height of the image for display.
     * @param height Height of marker in pixels.
     */
    setHeight(height: number): PictureMarkerSymbol;
    /**
     * Sets the URL where the image is located.
     * @param url URL location of marker image.
     */
    setUrl(url: string): PictureMarkerSymbol;
    /**
     * Sets the width of the image for display.
     * @param width Width of marker in pixels.
     */
    setWidth(width: number): PictureMarkerSymbol;
  }
  export = PictureMarkerSymbol;
}

declare module "esri/symbols/ShieldLabelSymbol" {
  import Color = require("esri/Color");
  import Font = require("esri/symbols/Font");

  /** The ShieldLabelSymbol is helper class which designed for drawing image with text over the image. */
  class ShieldLabelSymbol {
    /**
     * Construct a ShieldLabelSymbol.
     * @param imageUrl Url to shield image.
     * @param textColor Text color.
     * @param width Image width.
     * @param height Image height.
     * @param font Font used for drawing text.
     */
    constructor(imageUrl: string, textColor?: Color, width?: number, height?: number, font?: Font);
  }
  export = ShieldLabelSymbol;
}

declare module "esri/symbols/SimpleFillSymbol" {
  import FillSymbol = require("esri/symbols/FillSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
  import Color = require("esri/Color");

  /** Fill symbols are used to draw polygon features on the graphics layer. */
  class SimpleFillSymbol extends FillSymbol {
    /** The fill is backward diagonal lines. */
    static STYLE_BACKWARD_DIAGONAL: any;
    /** The fill is a cross. */
    static STYLE_CROSS: any;
    /** The fill is a diagonal cross. */
    static STYLE_DIAGONAL_CROSS: any;
    /** The fill is forward diagonal lines. */
    static STYLE_FORWARD_DIAGONAL: any;
    /** The fill is horizontal lines. */
    static STYLE_HORIZONTAL: any;
    /** The polygon has no fill. */
    static STYLE_NULL: any;
    /** The fill is solid. */
    static STYLE_SOLID: any;
    /** The fill is vertical lines. */
    static STYLE_VERTICAL: any;
    /** The fill style. */
    style: string;
    /** Creates a new empty SimpleFillSymbol object. */
    constructor();
    /**
     * Creates a new SimpleFillSymbol object with parameters.
     * @param style See Constants table for values.
     * @param outline See SimpleLineSymbol.
     * @param color Symbol color.
     */
    constructor(style: string, outline: SimpleLineSymbol, color: Color);
    /**
     * Creates a new SimpleFillSymbol object using a JSON object.
     * @param json JSON object representing the SimpleFillSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the fill symbol style.
     * @param style Fill style.
     */
    setStyle(style: string): SimpleFillSymbol;
  }
  export = SimpleFillSymbol;
}

declare module "esri/symbols/SimpleLineSymbol" {
  import LineSymbol = require("esri/symbols/LineSymbol");
  import Color = require("esri/Color");

  /** Line symbols are used to draw linear features on the graphics layer. */
  class SimpleLineSymbol extends LineSymbol {
    /** The line is made of dashes. */
    static STYLE_DASH: any;
    /** The line is made of a dash-dot pattern. */
    static STYLE_DASHDOT: any;
    /** The line is made of a dash-dot-dot pattern. */
    static STYLE_DASHDOTDOT: any;
    /** The line is made of dots. */
    static STYLE_DOT: any;
    /** Line is constructed of a series of dashes. */
    static STYLE_LONGDASH: any;
    /** Line is constructed of a series of short dashes. */
    static STYLE_LONGDASHDOT: any;
    /** The line has no symbol. */
    static STYLE_NULL: any;
    /** Line is constructed of a series of short dashes. */
    static STYLE_SHORTDASH: any;
    /** Line is constructed of a dash followed by a dot. */
    static STYLE_SHORTDASHDOT: any;
    /** Line is constructed of a series of a dash and two dots. */
    static STYLE_SHORTDASHDOTDOT: any;
    /** Line is constructed of a series of short dots. */
    static STYLE_SHORTDOT: any;
    /** The line is solid. */
    static STYLE_SOLID: any;
    /** The line style. */
    style: string;
    /** Creates a new empty SimpleLineSymbol object. */
    constructor();
    /**
     * Creates a new SimpleLineSymbol object with parameters.
     * @param style See Constants table for values.
     * @param color Symbol color.
     * @param width Width of the line in pixels.
     */
    constructor(style: string, color: Color, width: number);
    /**
     * Creates a new SimpleLineSymbol object using a JSON object.
     * @param json JSON object representing the SimpleLineSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the line symbol style.
     * @param style Line style.
     */
    setStyle(style: string): SimpleLineSymbol;
  }
  export = SimpleLineSymbol;
}

declare module "esri/symbols/SimpleMarkerSymbol" {
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
  import Color = require("esri/Color");

  /** Marker symbols are used to draw points and multipoints on the graphics layer. */
  class SimpleMarkerSymbol extends MarkerSymbol {
    /** The marker is a circle. */
    static STYLE_CIRCLE: any;
    /** The marker is a cross. */
    static STYLE_CROSS: any;
    /** The marker is a diamond. */
    static STYLE_DIAMOND: any;
    /** The marker is a shape defined using an SVG Path string. */
    static STYLE_PATH: any;
    /** The marker is a square. */
    static STYLE_SQUARE: any;
    /** The marker is a diagonal cross. */
    static STYLE_X: any;
    /** Outline of the marker. */
    outline: SimpleLineSymbol;
    /** Size of the marker in pixels. */
    size: number;
    /** The marker style. */
    style: string;
    /** Creates a new empty SimpleMarkerSymbol object. */
    constructor();
    /**
     * Creates a new SimpleMarkerSymbol object with parameters.
     * @param style See Constants table for values.
     * @param size Size of the marker in pixels.
     * @param outline See SimpleLineSymbol.
     * @param color Symbol color.
     */
    constructor(style: string, size: number, outline: SimpleLineSymbol, color: Color);
    /**
     * Creates a new SimpleMarkerSymbol object using a JSON object.
     * @param json JSON object representing the SimpleMarkerSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the outline of the marker symbol.
     * @param outline Symbol used for outline.
     */
    setOutline(outline: SimpleLineSymbol): SimpleMarkerSymbol;
    /**
     * Sets the marker shape to the given path string and switches the marker style to STYLE_PATH.
     * @param path SVG path of the icon.
     */
    setPath(path: string): SimpleMarkerSymbol;
    /**
     * Sets the marker symbol style.
     * @param style Marker style.
     */
    setStyle(style: string): SimpleMarkerSymbol;
  }
  export = SimpleMarkerSymbol;
}

declare module "esri/symbols/Symbol" {
  import Color = require("esri/Color");

  /** Symbols are used to display points, lines, and polygons on the graphics layer. */
  class Symbol {
    /** Symbol color. */
    color: Color;
    /** The type of symbol. */
    type: string;
    /**
     * Sets the symbol color.
     * @param color Symbol color.
     */
    setColor(color: Color): Symbol;
    /** Converts object to its ArcGIS Server JSON representation. */
    toJson(): any;
  }
  export = Symbol;
}

declare module "esri/symbols/TextSymbol" {
  import Symbol = require("esri/symbols/Symbol");
  import Font = require("esri/symbols/Font");
  import Color = require("esri/Color");

  /** Text symbols are used to add text on the graphics layer. */
  class TextSymbol extends Symbol {
    /** The end of the text string is aligned with the point. */
    static ALIGN_END: any;
    /** The center of the text string is aligned with the point. */
    static ALIGN_MIDDLE: any;
    /** The beginning of the text string is aligned with the point. */
    static ALIGN_START: any;
    /** Text has a lined striked through it. */
    static DECORATION_LINETHROUGH: any;
    /** Text has no decoration. */
    static DECORATION_NONE: any;
    /** Text has a line along the top. */
    static DECORATION_OVERLINE: any;
    /** Text is underlined. */
    static DECORATION_UNDERLINE: any;
    /** The text alignment in relation to the point. */
    align: string;
    /** Text angle. */
    angle: number;
    /** The decoration on the text. */
    decoration: string;
    /** Font for displaying text. */
    font: Font;
    /** Horizontal alignment of the text with respect to the graphic. */
    horizontalAlignment: string;
    /** Determines whether to adjust the spacing between characters in the text string. */
    kerning: boolean;
    /** Determines whether every character in the text string is rotated. */
    rotated: boolean;
    /** Text string for display in the graphics layer. */
    text: string;
    /** Vertical alignment of the text with respect to the graphic. */
    verticalAlignment: string;
    /** The offset on the x-axis in pixels from the point. */
    xoffset: number;
    /** The offset on the y-axis in pixels from the point. */
    yoffset: number;
    /**
     * Creates a new TextSymbol object that includes only the text.
     * @param text Text string for display in the graphics layer.
     */
    constructor(text: string);
    /**
     * Creates a new TextSymbol object.
     * @param text Text string for display in the graphics layer.
     * @param font Font for displaying text.
     * @param color Symbol color.
     */
    constructor(text: string, font: Font, color: Color);
    /**
     * Creates a new TextSymbol object using a JSON object.
     * @param json JSON object representing the TextSymbol.
     */
    constructor(json: Object);
    /**
     * Sets the alignment of the text.
     * @param align The text alignment.
     */
    setAlign(align: string): TextSymbol;
    /**
     * Sets the angle of the text.
     * @param angle Angle value between 0 and 359.
     */
    setAngle(angle: number): TextSymbol;
    /**
     * Sets the decoration for the text.
     * @param decoration The decoration on the text.
     */
    setDecoration(decoration: string): TextSymbol;
    /**
     * Sets the text font.
     * @param font Text font.
     */
    setFont(font: Font): TextSymbol;
    /**
     * Updates the horizontal alignment of the text symbol.
     * @param alignment Horizontal alignment of the text with respect to the graphic.
     */
    setHorizontalAlignment(alignment: string): TextSymbol;
    /**
     * Sets whether to adjust the spacing between characters in the text string.
     * @param kerning Set to true for kerning.
     */
    setKerning(kerning: boolean): TextSymbol;
    /**
     * Sets the x and y offset of the text.
     * @param x X offset value in pixels.
     * @param y Y offset value in pixels.
     */
    setOffset(x: number, y: number): TextSymbol;
    /**
     * Sets whether every character in the text string is rotated.
     * @param rotated Set to true to rotate all characters in the string.
     */
    setRotated(rotated: boolean): TextSymbol;
    /**
     * Sets the text string.
     * @param text The text string.
     */
    setText(text: string): TextSymbol;
    /**
     * Updates the vertical alignment of the text symbol.
     * @param alignment Vertical alignment of the text with respect to the graphic.
     */
    setVerticalAlignment(alignment: string): TextSymbol;
  }
  export = TextSymbol;
}

declare module "esri/symbols/jsonUtils" {
  import Symbol = require("esri/symbols/Symbol");

  /** Utility methods for working with symbols. */
  var jsonUtils: {
    /**
     * Converts input json into a symbol, returns null if the input json represents an unknown or unsupported symbol type.
     * @param json The input JSON.
     */
    fromJson(json: Object): Symbol;
    /**
     * Returns the shape description properties for the given symbol as defined by the Dojo GFX API.
     * @param symbol The input symbol.
     */
    getShapeDescriptors(symbol: Symbol): any;
  };
  export = jsonUtils;
}

declare module "esri/tasks/AddressCandidate" {
  import Point = require("esri/geometry/Point");

  /** Represents an address and its location. */
  class AddressCandidate {
    /** Address of the candidate. */
    address: any;
    /** Name value pairs of field name and field value as defined in outFields in Locator.addressToLocations. */
    attributes: any;
    /** X- and y-coordinate of the candidate. */
    location: Point;
    /** Numeric score between 0 and 100 for geocode candidates. */
    score: number;
  }
  export = AddressCandidate;
}

declare module "esri/tasks/AlgorithmicColorRamp" {
  import Color = require("esri/Color");

  /** Create an algorithmic color ramp to define the range of colors used in the renderer generated by the GenerateRendererTask. */
  class AlgorithmicColorRamp {
    /** The algorithm used to generate the colors between the fromColor and toColor. */
    algorithm: string;
    /** The first color in the color ramp. */
    fromColor: Color;
    /** The last color in the color ramp. */
    toColor: Color;
    /** Creates a new AlgorithmicColorRamp object. */
    constructor();
    /** Returns an easily serializable object representation of an algorithmic color ramp. */
    toJson(): any;
  }
  export = AlgorithmicColorRamp;
}

declare module "esri/tasks/AreasAndLengthsParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Input parameters for the areasAndLengths() method on the Geometry Service. */
  class AreasAndLengthsParameters {
    /** The area unit in which areas of polygons will be calculated. */
    areaUnit: any;
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** Polygon geometries for which to compute areas and lengths */
    polygons: Geometry[];
    /** Creates a new AreasAndLengthsParameters object. */
    constructor();
  }
  export = AreasAndLengthsParameters;
}

declare module "esri/tasks/BufferParameters" {
  import SpatialReference = require("esri/SpatialReference");
  import Geometry = require("esri/geometry/Geometry");

  /** Sets the distances, units, and other parameters for a buffer operation. */
  class BufferParameters {
    /** The spatial reference in which the geometries are buffered. */
    bufferSpatialReference: SpatialReference;
    /** The distances the input features are buffered. */
    distances: number[];
    /** If the input geometries are in geographic coordinate system set geodesic to true in order to generate a buffer polygon using a geodesic distance. */
    geodesic: boolean;
    /** The input geometries to buffer. */
    geometries: Geometry[];
    /** The spatial reference for the returned geometries. */
    outSpatialReference: SpatialReference;
    /** If true, all geometries buffered at a given distance are unioned into a single (possibly multipart) polygon, and the unioned geometry is placed in the output array. */
    unionResults: boolean;
    /** The units for calculating each buffer distance. */
    unit: string;
    /** Creates a new BufferParameters object. */
    constructor();
  }
  export = BufferParameters;
}

declare module "esri/tasks/ClassBreaksDefinition" {
  import ClassificationDefinition = require("esri/tasks/ClassificationDefinition");
  import Symbol = require("esri/symbols/Symbol");
  import Color = require("esri/Color");

  /** Define a class breaks classification scheme used by the GenerateDataTask to generate classes. */
  class ClassBreaksDefinition extends ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: Symbol;
    /** The number of class breaks. */
    breakCount: number;
    /** The name of the field used to match values. */
    classificationField: string;
    /** The name of the classification method. */
    classificationMethod: string;
    /** Define a color ramp for the classification. */
    colorRamp: Color;
    /** The name of the field that contains the values used to normalize class breaks when normalizationType is set to 'field'. */
    normalizationField: string;
    /** The type of normalization used to normalize class breaks. */
    normalizationType: string;
    /** The standard deviation interval. */
    standardDeviationInterval: number;
    /** Creates a new ClassBreaksDefinition object */
    constructor();
    /** Returns an easily serializable object representation of the class breaks definition. */
    toJson(): any;
  }
  export = ClassBreaksDefinition;
}

declare module "esri/tasks/ClassificationDefinition" {
  import Symbol = require("esri/symbols/Symbol");
  import Color = require("esri/Color");

  /** The super class for the classification definition objects used by the GenerateRendererTask class to generate data classes. */
  class ClassificationDefinition {
    /** Define a default symbol for the classification. */
    baseSymbol: Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: Color;
    /** The type of classification definition. */
    type: string;
  }
  export = ClassificationDefinition;
}

declare module "esri/tasks/ClosestFacilityParameters" {
  import SpatialReference = require("esri/SpatialReference");

  /** Input parameters for the ClosestFacilityTask. */
  class ClosestFacilityParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** An array of attribute parameter values that determine which network elements can be used by a vehicle. */
    attributeParameterValues: any[];
    /** The cutoff value used to determine when to stop traversing. */
    defaultCutoff: number;
    /** The  number of facilities to find. */
    defaultTargetFacilityCount: number;
    /** The language used when computing directions. */
    directionsLanguage: string;
    /** The length units used when computing directions. */
    directionsLengthUnits: string;
    /** Defines the amount of direction information returned. */
    directionsOutputType: string;
    /** The style to be used when returning directions. */
    directionsStyleName: string;
    /** The name of the attribute field that contains the drive time values. */
    directionsTimeAttribute: string;
    /** When true, restricted network elements should be considered when finding network locations. */
    doNotLocateOnRestrictedElements: boolean;
    /** The set of facilities loaded as network locations during analysis. */
    facilities: any;
    /** The network attribute field name used as the impedance attribute during analysis. */
    impedenceAttribute: string;
    /** The set of incidents loaded as network locations during analysis. */
    incidents: any;
    /** The output geometry precision. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The well-known id  of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: SpatialReference;
    /** The set of point barriers loaded as network locations during analysis. */
    pointBarriers: any;
    /** The set of polygon barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, directions will be generated and returned in the directions property of each RouteResult and RouteSolveResult. */
    returnDirections: boolean;
    /** If true, facilities will be returned with the analysis results. */
    returnFacilities: boolean;
    /** If true, incidents will be returned with the analysis results. */
    returnIncidents: boolean;
    /** If true, barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPointBarriers: boolean;
    /** If true, polygon barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers will be returned in the barriers property of the ClosestFacilitySolveResult. */
    returnPolylineBarriers: boolean;
    /** When true, closest facility routes will be generated and returned in the route property of each ClosestFacilityResult and ClosestFacilitySolveResult. */
    returnRoutes: boolean;
    /** The arrival or departure date and time. */
    timeOfDay: Date;
    /** Defines the way the timeOfDay value is used. */
    timeOfDayUsage: string;
    /** Options for traveling to or from the facility. */
    travelDirection: string;
    /** If true, the hierarchy attribute for the network will be used in analysis. */
    useHierarchy: boolean;
    /** Creates a new ClosestFacilityParameters object */
    constructor();
  }
  export = ClosestFacilityParameters;
}

declare module "esri/tasks/ClosestFacilitySolveResult" {
  import DirectionsFeatureSet = require("esri/tasks/DirectionsFeatureSet");
  import Point = require("esri/geometry/Point");
  import NAMessage = require("esri/tasks/NAMessage");
  import Polygon = require("esri/geometry/Polygon");
  import Polyline = require("esri/geometry/Polyline");
  import Graphic = require("esri/graphic");

  /** The result from a ClosestFacilityTask operation. */
  class ClosestFacilitySolveResult {
    /** An array of directions. */
    directions: DirectionsFeatureSet;
    /** An array of points, only returned when ClosestFacilityParameters.returnFacilities is true. */
    facilities: Point[];
    /** An array of points, only returned when ClosestFacilityParameters.returnIncidents is true. */
    incidents: Point[];
    /** Message received when the solve is complete. */
    messages: NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: Polyline[];
    /** The array of routes. */
    routes: Graphic[];
  }
  export = ClosestFacilitySolveResult;
}

declare module "esri/tasks/ClosestFacilityTask" {
  import esri = require("esri");
  import ClosestFacilityParameters = require("esri/tasks/ClosestFacilityParameters");
  import ClosestFacilitySolveResult = require("esri/tasks/ClosestFacilitySolveResult");

  /** Helps you find closest facilities around any location (incident) on a network.When finding closest facilities, you can specify how many to find and whether the direction of travel is toward or away from them. */
  class ClosestFacilityTask {
    /** Creates a new ClosestFacilityTask object. */
    constructor();
    /**
     * Solve the closest facility.
     * @param params The ClosestFacilityParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: ClosestFacilityParameters, callback?: Function, errback?: Function): any;
    /** Fires when ClosestFacilityTask has completed. */
    on(type: "solve-complete", listener: (event: { result: ClosestFacilitySolveResult; target: ClosestFacilityTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ClosestFacilityTask;
}

declare module "esri/tasks/DataFile" {
  /** A geoprocessing data object containing a data source. */
  class DataFile {
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the data file. */
    url: string;
    /** Creates a new DataFile object. */
    constructor();
  }
  export = DataFile;
}

declare module "esri/tasks/DataLayer" {
  import Geometry = require("esri/geometry/Geometry");

  /** Input for properties of ClosestFacilityParameters,RouteParameters or ServiceAreaParameters. */
  class DataLayer {
    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
    static SPATIAL_REL_CONTAINS: any;
    /** The feature from feature class 1 crosses a feature from feature class 2. */
    static SPATIAL_REL_CROSSES: any;
    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    /** The envelope of the query feature class intersects the index entry for the target feature class. */
    static SPATIAL_REL_INDEXINTERSECTS: any;
    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
    static SPATIAL_REL_INTERSECTS: any;
    /** Features from feature class 1 overlap features in feature class 2. */
    static SPATIAL_REL_OVERLAPS: any;
    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
    static SPATIAL_REL_TOUCHES: any;
    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
    static SPATIAL_REL_WITHIN: any;
    /** The geometry to apply to the spatial filter. */
    geometry: Geometry;
    /** The name of the data layer in the map service that is being referenced. */
    name: string;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** A where clause for the query. */
    where: string;
    /** Creates a new DataLayer object. */
    constructor();
  }
  export = DataLayer;
}

declare module "esri/tasks/Date" {
  /** Date used in geoprocessing. */
  class AGSDate {
    /** Date value returned from server. */
    date: Date;
    /** The format of the date used in the date property. */
    format: string;
    /** Creates a new Date object. */
    constructor();
  }
  export = AGSDate;
}

declare module "esri/tasks/DirectionsFeatureSet" {
  import FeatureSet = require("esri/tasks/FeatureSet");
  import Extent = require("esri/geometry/Extent");
  import Polyline = require("esri/geometry/Polyline");

  /** A FeatureSet that has properties specific to routing. */
  class DirectionsFeatureSet extends FeatureSet {
    /** The extent of the route. */
    extent: Extent;
    /** A single polyline representing the route. */
    mergedGeometry: Polyline;
    /** The ID of the route returned from the server. */
    routeId: string;
    /** Name specified in RouteParameters.stops. */
    routeName: string;
    /** Lists additional information about the direction depending on the value of directionsOutputType. */
    strings: any[];
    /** Actual drive time calculated for the route. */
    totalDriveTime: number;
    /** The length of the route as specified in RouteParameters.directionsLengthUnits. */
    totalLength: number;
    /** The total time calculated for the route as specified in RouteParameters.directionsTimeAttribute. */
    totalTime: number;
  }
  export = DirectionsFeatureSet;
}

declare module "esri/tasks/DistanceParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Input parameters for the distance  method on the GeometryService. */
  class DistanceParameters {
    /** Specifies the units for measuring distance between geometry1 and geometry2. */
    distanceUnit: any;
    /** Default value is false. */
    geodesic: boolean;
    /** The geometry from which the distance is to measured. */
    geometry1: Geometry;
    /** The geometry to which the distance is measured. */
    geometry2: Geometry;
    /** Creates a new DistanceParameters object. */
    constructor();
  }
  export = DistanceParameters;
}

declare module "esri/tasks/FeatureSet" {
  import Graphic = require("esri/graphic");
  import SpatialReference = require("esri/SpatialReference");

  /** A collection of features returned from ArcGIS Server or used as input to tasks. */
  class FeatureSet {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** Typically a layer has a limit on the number of features (i.e., records) returned by the query operation. */
    exceededTransferLimit: boolean;
    /** The array of graphics returned. */
    features: Graphic[];
    /** Set of name-value pairs for the attribute's field and alias names. */
    fieldAliases: any;
    /** The geometry type of the FeatureSet. */
    geometryType: string;
    /** When a FeatureSet is used as input to Geoprocessor, the spatial reference is set to the map's spatial reference by default. */
    spatialReference: SpatialReference;
    /** Creates a new FeatureSet object. */
    constructor();
    /**
     * Creates a new FeatureSet object using a JSON object.
     * @param json A JSON object that contains feature set.
     */
    constructor(json: Object);
  }
  export = FeatureSet;
}

declare module "esri/tasks/FindParameters" {
  import DynamicLayerInfo = require("esri/layers/DynamicLayerInfo");
  import SpatialReference = require("esri/SpatialReference");

  /** This data object  is used as the findParameters argument to FindTask.execute method. */
  class FindParameters {
    /** The contains parameter determines whether to look for an exact match of the search text or not. */
    contains: boolean;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: DynamicLayerInfo[];
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the find operation on. */
    layerIds: number[];
    /** The maximum allowable offset used for generalizing geometries returned by the find operation. */
    maxAllowableOffset: number;
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** If "true", the result set include the geometry associated with each result. */
    returnGeometry: boolean;
    /** The names of the fields of a layer to search. */
    searchFields: string[];
    /** The search string text that is searched across the layers and the fields as specified in the layers and searchFields parameters. */
    searchText: string;
    /** Creates a new FindParameters object. */
    constructor();
  }
  export = FindParameters;
}

declare module "esri/tasks/FindResult" {
  import Graphic = require("esri/graphic");

  /** Represents a result of a find operation. */
  class FindResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** The found feature. */
    feature: Graphic;
    /** The name of the field that contains the search text. */
    foundFieldName: string;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export = FindResult;
}

declare module "esri/tasks/FindTask" {
  import esri = require("esri");
  import FindParameters = require("esri/tasks/FindParameters");
  import FindResult = require("esri/tasks/FindResult");

  /** Search a map service exposed by the ArcGIS Server REST API based on a string value. */
  class FindTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Creates a new FindTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.FindTaskOptions);
    /**
     * Sends a request to the ArcGIS REST map service resource to perform a search based on the FindParameters specified in the findParameters argument.
     * @param findParameters Specifies the layers and fields that are used to search against.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(findParameters: FindParameters, callback?: Function, errback?: Function): any;
    /** Fires when the find operation is complete. */
    on(type: "complete", listener: (event: { results: FindResult[]; target: FindTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: FindTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = FindTask;
}

declare module "esri/tasks/GPMessage" {
  /** Represents a message generated during the execution of a geoprocessing task. */
  class GPMessage {
    /** esriJobMessageTypeAbort */
    static TYPE_ABORT: any;
    /** esriGPMessageTypeEmpty */
    static TYPE_EMPTY: any;
    /** esriGPMessageTypeError */
    static TYPE_ERROR: any;
    /** esriGPMessageTypeInformative */
    static TYPE_INFORMATIVE: any;
    /** TBA */
    static TYPE_PROCESS_DEFINITION: any;
    /** TBA */
    static TYPE_PROCESS_START: any;
    /** TBA */
    static TYPE_PROCESS_STOP: any;
    /** esriGPMessageTypeWarning */
    static TYPE_WARNING: any;
    /** A description of the geoprocessing message. */
    description: string;
    /** The geoprocessing message type. */
    type: number;
  }
  export = GPMessage;
}

declare module "esri/tasks/GeneralizeParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Sets the geometries, maximum deviation and units for the generalize operation. */
  class GeneralizeParameters {
    /** The maximum deviation unit. */
    deviationUnit: any;
    /** The array of input geometries to generalize. */
    geometries: Geometry[];
    /** The maximum deviation for constructing a generalized geometry based on the input geometries. */
    maxDeviation: number;
    /** Creates a new GeneralizeParameters object. */
    constructor();
  }
  export = GeneralizeParameters;
}

declare module "esri/tasks/GenerateRendererParameters" {
  import ClassificationDefinition = require("esri/tasks/ClassificationDefinition");

  /** Define the classification definition and optional where clause for the GenerateRendererTask operation. */
  class GenerateRendererParameters {
    /** A ClassBreaksDefinition or UniqueValueDefinition classification definition used to generate the data classes. */
    classificationDefinition: ClassificationDefinition;
    /** Indicate if the label should be formatted */
    formatLabel: boolean;
    /** Round values for the renderer. */
    precision: number;
    /** The label in the legend will have this prefix */
    prefix: string;
    /** The label in the legend will have this at the end of each label */
    unitLabel: string;
    /** A where clause used to generate the data classes. */
    where: string;
    /** Creates a new GenerateRendererParameters object. */
    constructor();
  }
  export = GenerateRendererParameters;
}

declare module "esri/tasks/GenerateRendererTask" {
  import esri = require("esri");
  import GenerateRendererParameters = require("esri/tasks/GenerateRendererParameters");
  import Renderer = require("esri/renderers/Renderer");

  /** The GenerateRendererTask class creates a renderer based on a classification definition and optional where clause. */
  class GenerateRendererTask {
    /**
     * Creates a new GenerateRendererTask object.
     * @param url The url to a layer in a map service or table.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.GenerateRendererTaskOptions);
    /**
     * Perform a classification on the layer or table resource.
     * @param generateRendererParameters A GenerateRendererParameters object that defines the classification definition and an optional where clause.
     * @param callback This function will be called when the operation is complete.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(generateRendererParameters: GenerateRendererParameters, callback?: Function, errback?: Function): any;
    /** Fired when the classification operation is complete. */
    on(type: "complete", listener: (event: { renderer: Renderer; target: GenerateRendererTask }) => void): esri.Handle;
    /** Fired when an error occurs during task execution. */
    on(type: "error", listener: (event: { error: Error; target: GenerateRendererTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = GenerateRendererTask;
}

declare module "esri/tasks/GeometryService" {
  import esri = require("esri");
  import AreasAndLengthsParameters = require("esri/tasks/AreasAndLengthsParameters");
  import Polygon = require("esri/geometry/Polygon");
  import Polyline = require("esri/geometry/Polyline");
  import BufferParameters = require("esri/tasks/BufferParameters");
  import Geometry = require("esri/geometry/Geometry");
  import DistanceParameters = require("esri/tasks/DistanceParameters");
  import GeneralizeParameters = require("esri/tasks/GeneralizeParameters");
  import LengthsParameters = require("esri/tasks/LengthsParameters");
  import OffsetParameters = require("esri/tasks/OffsetParameters");
  import ProjectParameters = require("esri/tasks/ProjectParameters");
  import RelationParameters = require("esri/tasks/RelationParameters");
  import TrimExtendParameters = require("esri/tasks/TrimExtendParameters");

  /** Represents a geometry service resource exposed by the ArcGIS Server REST API. */
  class GeometryService {
    /** Acres (areal unit) */
    static UNIT_ACRES: any;
    /** Ares (areal unit) */
    static UNIT_ARES: any;
    /** International foot (0.3048 meters) */
    static UNIT_FOOT: any;
    /** Hectares (areal unit) */
    static UNIT_HECTARES: any;
    /** Kilometer */
    static UNIT_KILOMETER: any;
    /** International meters */
    static UNIT_METER: any;
    /** Nautical Miles (1,852 meters) */
    static UNIT_NAUTICAL_MILE: any;
    /** Square Centimeters (areal unit) */
    static UNIT_SQUARE_CENTIMETERS: any;
    /** Square Decimeters (areal unit) */
    static UNIT_SQUARE_DECIMETERS: any;
    /** Square Feet (areal unit) */
    static UNIT_SQUARE_FEET: any;
    /** Square Inches (areal unit) */
    static UNIT_SQUARE_INCHES: any;
    /** Square Kilometers (areal unit) */
    static UNIT_SQUARE_KILOMETERS: any;
    /** Square Meters (areal unit) */
    static UNIT_SQUARE_METERS: any;
    /** Square Miles (areal unit) */
    static UNIT_SQUARE_MILES: any;
    /** Square Millimeters (areal unit) */
    static UNIT_SQUARE_MILLIMETERS: any;
    /** Square Yards (areal unit) */
    static UNIT_SQUARE_YARDS: any;
    /** Miles (5,280 feet, 1,760 yards, or exactly 1,609.344 meters) */
    static UNIT_STATUTE_MILE: any;
    /** US Nautical Mile */
    static UNIT_US_NAUTICAL_MILE: any;
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
    /**
     * Creates a new GeometryService object.
     * @param url Set the url to the ArcGIS Server REST resource that represents a GeometryService, e.g., http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer.
     */
    constructor(url: string);
    /**
     * Computes the area and length for the input polygons.
     * @param areasAndLengthsParameters Specify the input polygons and optionally the linear and areal units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * The Auto Complete operation is performed on a geometry service resource.
     * @param polygons The array of polygons that will provide some boundaries for new polygons.
     * @param polylines An array of polylines that will provide the remaining boundaries for new polygons.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    autoComplete(polygons: Polygon[], polylines: Polyline[], callback?: Function, errback?: Function): any;
    /**
     * Creates buffer polygons at a specified distance around the given geometries.
     * @param bufferParameters Specifies the input geometries, buffer distances, and other options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    buffer(bufferParameters: BufferParameters, callback?: Function, errback?: Function): any;
    /**
     * The convexHull operation is performed on a geometry service resource.
     * @param geometries The geometries whose convex hull is to be created.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    convexHull(geometries: Geometry[], callback?: Function, errback?: Function): any;
    /**
     * The cut operation is performed on a geometry service resource.
     * @param geometries The polyline or polygon to be cut.
     * @param cutterGeometry The polyline that will be used to divide the target into pieces where it crosses the target.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    cut(geometries: Geometry[], cutterGeometry: Geometry, callback?: Function, errback?: Function): any;
    /**
     * The difference operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    difference(geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function): any;
    /**
     * Measures the planar or geodesic distance between geometries.
     * @param params Sets the input geometries to measure, distance units and other parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    distance(params: DistanceParameters, callback?: Function, errback?: Function): any;
    /**
     * Generalizes the input geometries using the Douglas-Peucker algorithm.
     * @param params An array of geometries to generalize and a maximum deviation.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    generalize(params: GeneralizeParameters, callback?: Function, errback?: Function): any;
    /**
     * The intersect operation is performed on a geometry service resource.
     * @param geometries An array of points, multipoints, polylines or polygons.
     * @param geometry A single geometry of any type, of dimension equal to or greater than the elements of geometries.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    intersect(geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function): any;
    /**
     * Calculates an interior point for each polygon specified.
     * @param polygons The graphics to process.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    labelPoints(polygons: Geometry[], callback?: Function, errback?: Function): any;
    /**
     * Gets the lengths for a Geometry[] when the geometry type is Polyline.
     * @param lengthsParameter Specify the polylines and optionally the length unit and the geodesic length option.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    lengths(lengthsParameter: LengthsParameters, callback?: Function, errback?: Function): any;
    /**
     * Constructs the offset of the input geometries.
     * @param params Set the geometries to offset, distance and units.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    offset(params: OffsetParameters, callback?: Function, errback?: Function): any;
    /**
     * Projects a set of geometries into a new spatial reference.
     * @param params The input projection parameters.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    project(params: ProjectParameters, callback?: Function, errback?: Function): any;
    /**
     * Computes the set of pairs of geometries from the input geometry arrays that belong to the specified relation.
     * @param relationParameters The set of parameters required to perform the comparison.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    relation(relationParameters: RelationParameters, callback?: Function, errback?: Function): any;
    /**
     * The reshape operation is performed on a geometry service resource.
     * @param targetGeometry The polyline or polygon to be reshaped.
     * @param reshaperGeometry The single-part polyline that does the reshaping.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    reshape(targetGeometry: Geometry, reshaperGeometry: Geometry, callback?: Function, errback?: Function): any;
    /**
     * Alters the given geometries to make their definitions topologically legal with respect to their geometry type.
     * @param geometries The geometries to simplify
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    simplify(geometries: Geometry[], callback?: Function, errback?: Function): any;
    /**
     * Trims or extends the input polylines using the user specified guide polyline.
     * @param params Input parameters for the trimExtend operation.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    trimExtend(params: TrimExtendParameters, callback?: Function, errback?: Function): any;
    /**
     * The union operation is performed on a geometry service resource.
     * @param geometries The array of geometries to be unioned.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    union(geometries: Geometry[], callback?: Function, errback?: Function): any;
    /** Fires when the areasAndLengths operation is complete. */
    on(type: "areas-and-lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle;
    /** Fires when the autoComplete operation is complete. */
    on(type: "auto-complete-complete", listener: (event: { geometries: Polygon[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the buffer operation is complete. */
    on(type: "buffer-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the convexHull operation is complete. */
    on(type: "convex-hull-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle;
    /** Fires when the cut operation is complete. */
    on(type: "cut-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle;
    /** Fires when the difference operation is complete. */
    on(type: "difference-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the distance operation is complete. */
    on(type: "distance-complete", listener: (event: { distance: number; target: GeometryService }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { target: GeometryService }) => void): esri.Handle;
    /** Fires when the generalize operation is complete. */
    on(type: "generalize-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the intersect operation is complete. */
    on(type: "intersect-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the labelPoints operation is complete. */
    on(type: "label-points-complete ", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the labelPoints operation is complete. */
    on(type: "label-points-complete", listener: (event: { labelPoints: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the lengths operation is complete. */
    on(type: "lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle;
    /** Fires when the offset operation is complete. */
    on(type: "offset-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the project operation is complete. */
    on(type: "project-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the relation operation is complete. */
    on(type: "relation-complete", listener: (event: { target: GeometryService }) => void): esri.Handle;
    /** Fires when the reshape operation is complete. */
    on(type: "reshape-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle;
    /** Fires when the simplify operation is complete. */
    on(type: "simplify-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the trimExtend operation is complete. */
    on(type: "trim-extend-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle;
    /** Fires when the union operation is complete. */
    on(type: "union-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = GeometryService;
}

declare module "esri/tasks/Geoprocessor" {
  import esri = require("esri");
  import SpatialReference = require("esri/SpatialReference");
  import ImageParameters = require("esri/layers/ImageParameters");
  import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");
  import GPMessage = require("esri/tasks/GPMessage");
  import ParameterValue = require("esri/tasks/ParameterValue");
  import MapImage = require("esri/layers/MapImage");

  /** Represents a GP Task resource exposed by the ArcGIS Server REST API. */
  class Geoprocessor {
    /** Deprecated at v2.0. */
    outputSpatialReference: SpatialReference;
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** The spatial reference that the model will use to perform geometry operations. */
    processSpatialReference: SpatialReference;
    /** The time interval in milliseconds between each job status request sent to an asynchronous GP task. */
    updateDelay: number;
    /** ArcGIS Server Rest API endpoint to the resource that receives the geoprocessing request. */
    url: string;
    /**
     * Creates a new Geoprocessor object that represents the GP Task identifed by a URL.
     * @param url URL to the ArcGIS Server REST resource that represents a geoprocessing service.
     */
    constructor(url: string);
    /**
     * Cancel an asynchronous geoprocessing job.
     * @param jobId A string that uniquely identifies a job on the server.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    cancelJob(jobId: string, callback: Function, errback: Function): any;
    /**
     * Cancels the periodic job status updates initiated automatically when submitJob() is invoked for the job identified by jobId.
     * @param jobId A string that uniquely identifies the job for which the job updates are cancelled.
     */
    cancelJobStatusUpdates(jobId: string): void;
    /**
     * Sends a request to the GP Task for the current state of the job identified by jobId.
     * @param jobId A string that uniquely identifies a job on the server.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    checkJobStatus(jobId: string, callback?: Function, errback?: Function): void;
    /**
     * Sends a request to the server to execute a synchronous GP task.
     * @param inputParameters The inputParameters argument specifies the input parameters accepted by the task and their corresponding values.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(inputParameters: any, callback?: Function, errback?: Function): any;
    /**
     * Sends a request to the GP Task to get the task result identified by jobId and resultParameterName.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    getResultData(jobId: string, parameterName: string, callback?: Function, errback?: Function): any;
    /**
     * Sends a request to the GP Task to get the task result identified by jobId and resultParameterName as an image.The return object of dojo.Deferred was added at v1.4.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param imageParameters Specifies the properties of the result image.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    getResultImage(jobId: string, parameterName: string, imageParameters: ImageParameters, callback?: Function, errback?: Function): any;
    /**
     * Get the task result identified by jobId and resultParameterName as an ArcGISDynamicMapServiceLayer.
     * @param jobId The jobId returned from JobInfo.
     * @param parameterName The name of the result parameter as defined in Services Directory.
     * @param imageParameters Contains various options that can be specified when generating a dynamic map image.
     * @param callback The function to call when the method has completed.
     */
    getResultImageLayer(jobId: string, parameterName?: string, imageParameters?: ImageParameters, callback?: Function): ArcGISDynamicMapServiceLayer;
    /**
     * Deprecated at v2.0.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutputSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the well-known ID of the spatial reference of the output geometries.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the well-known ID of the spatial reference that the model uses to perform geometry operations.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setProcessSpatialReference(spatialReference: SpatialReference): void;
    /**
     * Sets the time interval in milliseconds between each job status request sent to an asynchronous GP task.
     * @param delay The value in milliseconds.
     */
    setUpdateDelay(delay: number): void;
    /**
     * Submits a job to the server for asynchronous processing by the GP task.
     * @param inputParameters The inputParameters argument specifies the input parameters accepted by the task and their corresponding values.
     * @param callback The function to call when the method has completed.
     * @param statusCallback Checks the current status of the job.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    submitJob(inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function): void;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a synchronous GP task is completed. */
    on(type: "execute-complete", listener: (event: { messages: GPMessage[]; results: ParameterValue[]; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when the result of an asynchronous GP task execution is available. */
    on(type: "get-result-data-complete", listener: (event: { result: ParameterValue; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a map image is generated by invoking the getResultImage method. */
    on(type: "get-result-image-complete", listener: (event: { mapImage: MapImage; target: Geoprocessor }) => void): esri.Handle;
    /** Fires when getResultImageLayer method has completed. */
    on(type: "get-result-image-layer-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when the geoprocessing job is cancelled using the cancelJob method. */
    on(type: "job-cancel", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when an asynchronous GP task using submitJob is complete. */
    on(type: "job-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    /** Fires when a job status update is available. */
    on(type: "status-update", listener: (event: { target: Geoprocessor }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Geoprocessor;
}

declare module "esri/tasks/IdentifyParameters" {
  import DynamicLayerInfo = require("esri/layers/DynamicLayerInfo");
  import Geometry = require("esri/geometry/Geometry");
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import TimeExtent = require("esri/TimeExtent");

  /** This data object is used as the identifyParameters argument to IdentifyTask.execute method. */
  class IdentifyParameters {
    /** All layers are identified, even if they are not visible. */
    static LAYER_OPTION_ALL: any;
    /** Only the top-most visible layer is identified. */
    static LAYER_OPTION_TOP: any;
    /** All visible layers are identified. */
    static LAYER_OPTION_VISIBLE: any;
    /** Resolution of the current map view in dots per inch. */
    dpi: number;
    /** An array of DynamicLayerInfos used to change the layer ordering or redefine the map. */
    dynamicLayerInfos: DynamicLayerInfo[];
    /** The geometry used to select features during Identify. */
    geometry: Geometry;
    /** Height of the map currently being viewed in pixels. */
    height: number;
    /** Array of layer definition expressions that allows you to filter the features of individual layers. */
    layerDefinitions: string[];
    /** The layers to perform the identify operation on. */
    layerIds: number[];
    /** Specifies which layers to use when using Identify. */
    layerOption: string;
    /** Array of LayerTimeOptions objects that allow you to define time options for the specified layers. */
    layerTimeOptions: LayerTimeOptions[];
    /** The Extent or bounding box of the map currently being viewed. */
    mapExtent: Extent;
    /** The maximum allowable offset used for generalizing geometries returned by the identify operation. */
    maxAllowableOffset: number;
    /** If "true", the result set includes the geometry associated with each result. */
    returnGeometry: boolean;
    /** The spatial reference of the input and output geometries as well as of the mapExtent. */
    spatialReference: SpatialReference;
    /** Specify the time extent used by the identify task. */
    timeExtent: TimeExtent;
    /** The distance in screen pixels from the specified geometry within which the identify should be performed. */
    tolerance: number;
    /** Width of the map currently being viewed in pixels. */
    width: number;
    /** Creates a new IdentifyParameters object. */
    constructor();
  }
  export = IdentifyParameters;
}

declare module "esri/tasks/IdentifyResult" {
  import Graphic = require("esri/graphic");

  /** Represents a result of an identify operation. */
  class IdentifyResult {
    /** The name of the layer's primary display field. */
    displayFieldName: string;
    /** An identified feature. */
    feature: Graphic;
    /** Unique ID of the layer that contains the feature. */
    layerId: number;
    /** The layer name that contains the feature. */
    layerName: string;
  }
  export = IdentifyResult;
}

declare module "esri/tasks/IdentifyTask" {
  import esri = require("esri");
  import IdentifyParameters = require("esri/tasks/IdentifyParameters");
  import IdentifyResult = require("esri/tasks/IdentifyResult");

  /** Performs an identify operation on the layers of a map service resource exposed by the ArcGIS Server REST API. */
  class IdentifyTask {
    /** URL to the ArcGIS Server REST resource that represents a map service. */
    url: string;
    /**
     * Creates a new IdentifyTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a map service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.IdentifyTaskOptions);
    /**
     * Sends a request to the ArcGIS REST map service resource to identify features based on the IdentifyParameters specified in the identifyParameters argument.
     * @param identifyParameters Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(identifyParameters: IdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { results: IdentifyResult[]; target: IdentifyTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: IdentifyTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = IdentifyTask;
}

declare module "esri/tasks/ImageServiceIdentifyParameters" {
  import Geometry = require("esri/geometry/Geometry");
  import MosaicRule = require("esri/layers/MosaicRule");
  import Symbol = require("esri/symbols/Symbol");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeExtent = require("esri/TimeExtent");

  /** Input parameters for the ImageServiceIdentifyTask. */
  class ImageServiceIdentifyParameters {
    /** Input geometry that defines the location to be identified. */
    geometry: Geometry;
    /** Specifies the mosaic rules defining the image sorting order. */
    mosaicRule: MosaicRule;
    /** The pixel or RGB color value representing no information. */
    noData: any;
    /** Used along with the noData property. */
    noDataInterpretation: string;
    /** Specify the pixel level being identified on the x and y axis. */
    pixelSize: Symbol;
    /** The pixel level being identified (or the resolution being looked at) on the x-axis. */
    pixelSizeX: number;
    /** The pixel level being identified (or the resolution being looked at) on the y-axis. */
    pixelSizeY: number;
    /** Specifies the rendering rule for how the requested image should be rendered. */
    renderingRule: RasterFunction;
    /** If "true", returns both geometry and attributes of the catalog items. */
    returnCatalogItems: boolean;
    /** When true, each feature in the catalog items includes the geometry. */
    returnGeometry: boolean;
    /** Specify a time extent. */
    timeExtent: TimeExtent;
    /** Creates a new ImageServiceIdentifyParameters object. */
    constructor();
  }
  export = ImageServiceIdentifyParameters;
}

declare module "esri/tasks/ImageServiceIdentifyResult" {
  import FeatureSet = require("esri/tasks/FeatureSet");
  import Point = require("esri/geometry/Point");

  /** The results from an ImageServiceIdentifyTask. */
  class ImageServiceIdentifyResult {
    /** The set of catalog items that overlap the input geometry. */
    catalogItems: FeatureSet;
    /** The set of visible areas for the identified catalog items. */
    catalogItemVisibilities: number[];
    /** The identified location. */
    location: Point;
    /** The identify property name. */
    name: string;
    /** The identify property id. */
    objectId: number;
    /** The attributes of the identified object. */
    properties: any;
    /** The identify property pixel value. */
    value: string;
  }
  export = ImageServiceIdentifyResult;
}

declare module "esri/tasks/ImageServiceIdentifyTask" {
  import esri = require("esri");
  import ImageServiceIdentifyParameters = require("esri/tasks/ImageServiceIdentifyParameters");
  import ImageServiceIdentifyResult = require("esri/tasks/ImageServiceIdentifyResult");

  /** Performs an identify operation on an image service resource . */
  class ImageServiceIdentifyTask {
    /**
     * Creates a new ImageServiceIdentifyTask object.
     * @param url URL to the ArcGIS Server REST resource that represents an image service.
     */
    constructor(url: string);
    /**
     * Sends a request to the ArcGIS REST image service resource to identify content based on the ImageServiceIdentifyParameters specified in the imageServiceIdentifyParameters argument.
     * @param params Specifies the criteria used to identify the features.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(params: ImageServiceIdentifyParameters, callback?: Function, errback?: Function): any;
    /** Fires when the identify operation is complete. */
    on(type: "complete", listener: (event: { result: ImageServiceIdentifyResult; target: ImageServiceIdentifyTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ImageServiceIdentifyTask;
}

declare module "esri/tasks/JobInfo" {
  import GPMessage = require("esri/tasks/GPMessage");

  /** Represents information pertaining to the execution of an asynchronous GP task on the server. */
  class JobInfo {
    /** The job has been cancelled. */
    static STATUS_CANCELLED: any;
    /** The job is in the process of cancelling. */
    static STATUS_CANCELLING: any;
    /** The job has been deleted. */
    static STATUS_DELETED: any;
    /** The job is in the process of deleting. */
    static STATUS_DELETING: any;
    /** The job is being executed by job processor. */
    static STATUS_EXECUTING: any;
    /** The job execution has failed. */
    static STATUS_FAILED: any;
    /** The job is new. */
    static STATUS_NEW: any;
    /** The job is submitted for execution. */
    static STATUS_SUBMITTED: any;
    /** The job has completed successfully. */
    static STATUS_SUCCEEDED: any;
    /** The job execution has timed out. */
    static STATUS_TIMED_OUT: any;
    /** The job is waiting for available job processor. */
    static STATUS_WAITING: any;
    /** The unique job ID assigned by ArcGIS Server. */
    jobId: string;
    /** The job status. */
    jobStatus: string;
    /** An array of messages that include the message type and a description. */
    messages: GPMessage[];
  }
  export = JobInfo;
}

declare module "esri/tasks/LegendLayer" {
  /** Define layer properties for the legend layers associated with a PrintTemplate. */
  class LegendLayer {
    /** The id of the operational layer to include in the printout's legend. */
    layerId: string;
    /** The ids of the sublayers to include in the printout's legend. */
    subLayerIds: string[];
    /** Creates a new LegendLayer object. */
    constructor();
  }
  export = LegendLayer;
}

declare module "esri/tasks/LengthsParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Sets the length units and other parameters for Lengths operation. */
  class LengthsParameters {
    /** Defines the type of calculation for the geometry. */
    calculationType: string;
    /** If polylines are in geographic coordinate system, then geodesic needs to be set to true in order to calculate the ellipsoidal shortest path distance between each pair of the vertices in the polylines. */
    geodesic: boolean;
    /** The length unit in which perimeters of polygons will be calculated. */
    lengthUnit: any;
    /** The array of polylines whose lengths are to be computed. */
    polylines: Geometry[];
    /** Creates a new LengthsParameter object. */
    constructor();
  }
  export = LengthsParameters;
}

declare module "esri/tasks/LinearUnit" {
  /** A data object containing a linear distance. */
  class LinearUnit {
    /** Specifies the value of the linear distance. */
    distance: number;
    /** Specifies the unit type of the linear distance, such as "esriMeters", "esriMiles", "esriKilometers" etc. */
    units: string;
    /** Creates a new LinearUnit object. */
    constructor();
  }
  export = LinearUnit;
}

declare module "esri/tasks/MultipartColorRamp" {
  import AlgorithmicColorRamp = require("esri/tasks/AlgorithmicColorRamp");

  /** Create a multipart color ramp to concatenate multiple color ramps for use in the renderer generated by the GenerateRendererTask. */
  class MultipartColorRamp {
    /** Define an array of algorithmic color ramps used to generate the multi part ramp. */
    colorRamps: AlgorithmicColorRamp[];
    /** Creates a new MultipartColorRamp object. */
    constructor();
    /** Returns an easily serializable object representation of a multipart color ramp. */
    toJson(): any;
  }
  export = MultipartColorRamp;
}

declare module "esri/tasks/NAMessage" {
  /** Represents a message generated during the execution of a network analyst task. */
  class NAMessage {
    /** TBA */
    static TYPE_ABORT: any;
    /** TBA */
    static TYPE_EMPTY: any;
    /** TBA */
    static TYPE_ERROR: any;
    /** TBA */
    static TYPE_INFORMATIVE: any;
    /** TBA */
    static TYPE_PROCESS_DEFINITION: any;
    /** TBA */
    static TYPE_PROCESS_START: any;
    /** TBA */
    static TYPE_PROCESS_STOP: any;
    /** TBA */
    static TYPE_WARNING: any;
    /** A description of the network analyst message. */
    description: string;
    /** The network analyst message type, see constants table for a list of values. */
    type: number;
  }
  export = NAMessage;
}

declare module "esri/tasks/NATypes" {
  import esri = require("esri");

  var NATypes: {
    OutputLine: esri.NAOutputLine;
    OutputPolygon: esri.NAOutputPolygon;
    TravelDirection: esri.NATravelDirection;
    UTurn: esri.NAUTurn;
  };
  export = NATypes;
}

declare module "esri/tasks/OffsetParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Sets the offset distance, type and other parameters for the GeometryService.offset operation. */
  class OffsetParameters {
    /** The bevelRatio is multiplied by the offset distance and the result determines how far a mitered offset intersection can be located before it is beveled. */
    bevelRatio: number;
    /** The array of geometries to be offset. */
    geometries: Geometry[];
    /** Specifies the distance for constructing an offset based on the input geometries. */
    offsetDistance: number;
    /** Set to one of the following options. */
    offsetHow: string;
    /** The offset distance unit. */
    offsetUnit: string;
    /** Creates a new OffsetParameters object. */
    constructor();
  }
  export = OffsetParameters;
}

declare module "esri/tasks/ParameterValue" {
  /** Represent the output parameters of a GP task and their properties and values. */
  class ParameterValue {
    /** Specifies the type of data for the parameter. */
    dataType: string;
    /** The value of the parameter. */
    value: any;
  }
  export = ParameterValue;
}

declare module "esri/tasks/PrintParameters" {
  import Map = require("esri/map");
  import SpatialReference = require("esri/SpatialReference");
  import PrintTemplate = require("esri/tasks/PrintTemplate");

  /** Input parameters for the PrintTask. */
  class PrintParameters {
    /** Additional parameters for the print service. */
    extraParameters: any;
    /** The map to print. */
    map: Map;
    /** Specify the output spatial reference for the printout. */
    outSpatialReference: SpatialReference;
    /** Defines the layout template used for  the printed map. */
    template: PrintTemplate;
    /** Creates a new PrintParameters object. */
    constructor();
  }
  export = PrintParameters;
}

declare module "esri/tasks/PrintTask" {
  import esri = require("esri");
  import PrintParameters = require("esri/tasks/PrintParameters");

  /** The PrintTask class generates a printer-ready version of the map using an Export Web Map Task available with ArGIS Server 10.1 and later. */
  class PrintTask {
    /** The url to the Export Web Map Task. */
    url: string;
    /**
     * Creates a new PrintTask object.
     * @param url The url to the Export Web Map Task.
     * @param params Parameters for the print task.
     */
    constructor(url: string, params?: esri.PrintTaskOptions);
    /**
     * Sends a request to the print service resource to create a print page using the information specified in the printParameters argument.
     * @param printParameters A PrintParameters object that defines the printing options.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    execute(printParameters: PrintParameters, callback?: Function, errback?: Function): any;
    /** Fired when the print operation is complete. */
    on(type: "complete", listener: (event: { url: string; target: PrintTask }) => void): esri.Handle;
    /** Fired when an error occurs while executing the print task. */
    on(type: "error", listener: (event: { error: Error; target: PrintTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = PrintTask;
}

declare module "esri/tasks/PrintTemplate" {
  /** Define the layout template options used by the PrintTask and Print widget to generate the print page. */
  class PrintTemplate {
    /** Define the map width, height and dpi. */
    exportOptions: any;
    /** The print output format. */
    format: string;
    /** The text that appears on the PrintWidget's print button. */
    label: string;
    /** The layout used for the print output. */
    layout: string;
    /** Define the layout elements. */
    layoutOptions: any;
    /** Define whether the printed map will preserve the map scale or the map extent. */
    preserveScale: boolean;
    /** When false, attribution is not displayed on the printout. */
    showAttribution: boolean;
    /** Creates a new PrintTemplate object. */
    constructor();
  }
  export = PrintTemplate;
}

declare module "esri/tasks/ProjectParameters" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");

  /** Define the projection parameters used when calling the GeometryService project method. */
  class ProjectParameters {
    /** The input geometries to project. */
    geometries: Geometry[];
    /** The spatial reference to which you are projecting the geometries. */
    outSR: SpatialReference;
    /** The well-known id {wkid:number} or well-known text {wkt:string} or  for the datum transfomation to be applied on the projected geometries. */
    transformation: any;
    /** Indicates whether to transform forward or not. */
    transformationForward: boolean;
    /** Creates a new ProjectParameters object. */
    constructor();
  }
  export = ProjectParameters;
}

declare module "esri/tasks/QueryTask" {
  import esri = require("esri");
  import Query = require("esri/tasks/query");
  import RelationshipQuery = require("esri/tasks/RelationshipQuery");
  import FeatureSet = require("esri/tasks/FeatureSet");

  /** Executes a query operation on a layer resource of a map service exposed by the ArcGIS Server REST API. */
  class QueryTask {
    /** URL to the ArcGIS Server REST resource that represents a map service layer. */
    url: string;
    /**
     * Creates a new QueryTask object used to execute a query on the layer resource identified by the url.
     * @param url URL to the ArcGIS Server REST resource that represents a layer in a service.
     * @param options Optional parameters.
     */
    constructor(url: string, options?: esri.QueryTaskOptions);
    /**
     * Executes a Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    execute(parameters: Query, callback?: Function, errback?: Function): any;
    /**
     * Get a count of the number of features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForCount(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Get the extent of the features that satisfy the input query.
     * @param query Specify the input query object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForExtent(query: Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a Query against an ArcGIS Server map layer.
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeForIds(parameters: Query, callback?: Function, errback?: Function): any;
    /**
     * Executes a RelationshipQuery against an ArcGIS Server map layer (or table).
     * @param parameters Specifies the attributes and spatial filter of the query.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    executeRelationshipQuery(parameters: RelationshipQuery, callback?: Function, errback?: Function): any;
    /** Fires when the query operation is complete. */
    on(type: "complete", listener: (event: { featureSet: FeatureSet; target: QueryTask }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: QueryTask }) => void): esri.Handle;
    /** Fires when the query for the count is complete. */
    on(type: "execute-for-count-complete", listener: (event: { count: number; target: QueryTask }) => void): esri.Handle;
    /** Fires when the query for the extent is complete. */
    on(type: "execute-for-extent-complete", listener: (event: { count: number; extent: any; target: QueryTask }) => void): esri.Handle;
    /** Fires when the query on IDs is complete. */
    on(type: "execute-for-ids-complete", listener: (event: { objectIds: number[]; target: QueryTask }) => void): esri.Handle;
    /** Fires when the executeRelationshipQuery is complete. */
    on(type: "execute-relationship-query-complete", listener: (event: { featureSets: FeatureSet[]; target: QueryTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = QueryTask;
}

declare module "esri/tasks/RasterData" {
  /** A geoprocessing data object containing a raster data source. */
  class RasterData {
    /** Specifies the format of the raster data such as "jpg", "tif" etc. */
    format: string;
    /** The ID of the uploaded file returned as a result of the upload operation. */
    itemID: string;
    /** URL to the location of the raster data file. */
    url: string;
    /** Creates a new RasterData object. */
    constructor();
  }
  export = RasterData;
}

declare module "esri/tasks/RelationParameters" {
  import Geometry = require("esri/geometry/Geometry");

  /** Sets the relation and other parameters for Relation operation. */
  class RelationParameters {
    /** The boundaries of the geometries must share an intersection, but the relationship between the interiors of the shapes is not considered (they could overlap, one could be contained in the other, or their interiors could be disjoint). */
    static SPATIAL_REL_COINCIDENCE: any;
    /** Two polylines cross if they share only points in common, at least one of which is not an endpoint. */
    static SPATIAL_REL_CROSS: any;
    /** Two geometries are disjoint if their intersection is empty. */
    static SPATIAL_REL_DISJOINT: any;
    /** The base geometry is within the comparison geometry if the base geometry is the intersection of the geometries and the intersection of their interiors is not empty. */
    static SPATIAL_REL_IN: any;
    /** Geometries intersect excluding boundary touch. */
    static SPATIAL_REL_INTERIORINTERSECTION: any;
    /** Geometry interiors intersect or boundaries touch, same as 'not disjoint'. */
    static SPATIAL_REL_INTERSECTION: any;
    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
    static SPATIAL_REL_LINETOUCH: any;
    /** Two polylines share a common sub-line, or two polygons share a common sub-area. */
    static SPATIAL_REL_OVERLAP: any;
    /** Two geometries are said to touch when the intersection of the geometries is non-empty, but the intersection of their interiors is empty. */
    static SPATIAL_REL_POINTTOUCH: any;
    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
    static SPATIAL_REL_RELATION: any;
    /** The union of point touch and line touch. */
    static SPATIAL_REL_TOUCH: any;
    /** Same as SPATIAL_REL_IN but also allows polylines that are strictly on the boundaries of polygons to be considered in the polygon. */
    static SPATIAL_REL_WITHIN: any;
    /** The first array of geometries to compute the relations. */
    geometries1: Geometry[];
    /** The second array of geometries to compute the relations. */
    geometries2: Geometry[];
    /** The spatial relationship to be tested between the two input geometry arrays. */
    relation: string;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
    /** Creates a new RelationParameter object. */
    constructor();
  }
  export = RelationParameters;
}

declare module "esri/tasks/RelationshipQuery" {
  import SpatialReference = require("esri/SpatialReference");

  /** Define query parameters for the feature layer's queryRelatedFeatures method. */
  class RelationshipQuery {
    /** The definition expression to be applied to the related table or layer. */
    definitionExpression: string;
    /** Specify the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
    /** The maximum allowable offset used for generalizing geometries returned by the query operation. */
    maxAllowableOffset: number;
    /** A comma delimited list of ObjectIds for the features in the layer/table that you want to query. */
    objectIds: number[];
    /** Attribute fields to include in the FeatureSet. */
    outFields: string[];
    /** The spatial reference for the returned geometry. */
    outSpatialReference: SpatialReference;
    /** The ID of the relationship to test. */
    relationshipId: number;
    /** If "true", each feature in the FeatureSet includes the geometry. */
    returnGeometry: boolean;
    /** Creates a new RelationshipQuery object. */
    constructor();
  }
  export = RelationshipQuery;
}

declare module "esri/tasks/RouteParameters" {
  import SpatialReference = require("esri/SpatialReference");

  /** Input parameters for a RouteTask. */
  class RouteParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** Each element in the array is an object that describes the parameter values. */
    attributeParameterValues: any[];
    /** The set of point barriers loaded as network locations during analysis. */
    barriers: any;
    /** The language used when computing directions. */
    directionsLanguage: string;
    /** The length units to use when computing directions. */
    directionsLengthUnits: string;
    /** Defines the amount of direction information returned. */
    directionsOutputType: string;
    /** The style to be used when returning directions. */
    directionsStyleName: string;
    /** The name of network attribute to use for the drive time when computing directions. */
    directionsTimeAttribute: string;
    /** If true, avoids network elements restricted by barriers or due to restrictions specified in restrictionAttributes. */
    doNotLocateOnRestrictedElements: boolean;
    /** If true, optimizes the order of the stops in the route while taking into account preserveFirstStop and preserveLastStop, if they are set to true. */
    findBestSequence: boolean;
    /** In routes where a stop is not located on a network or a stop could not be reached, the results will differ depending on the value of ignoreInvalidLocations. */
    ignoreInvalidLocations: boolean;
    /** The network attribute name to be used as the impedance attribute in analysis. */
    impedanceAttribute: string;
    /** The precision of the output geometry after generalization. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The well-known ID of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: SpatialReference;
    /** The set of polygon barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** If true, keeps the first stop fixed in the sequence even when findBestSequence is true. */
    preserveFirstStop: boolean;
    /** If true, keeps the last stop fixed in the sequence even when findBestSequence is true. */
    preserveLastStop: boolean;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, barriers are returned as the second parameter of RouteTask.onSolveComplete. */
    returnBarriers: boolean;
    /** If true, directions are generated and returned in the directions property of each RouteResult. */
    returnDirections: boolean;
    /** If true, polygon barriers are returned as the third parameter of RouteTask.onSolveComplete. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers are returned as the fourth parameter of RouteTask.onSolveComplete. */
    returnPolylineBarriers: boolean;
    /** If true, routes are generated and returned in the route property of each RouteResult. */
    returnRoutes: boolean;
    /** If true, stops are returned in the stops property of each RouteResult. */
    returnStops: boolean;
    /** The time the route begins. */
    startTime: Date;
    /** Start time is in UTC format */
    startTimeIsUTC: boolean;
    /** The set of stops loaded as network locations during analysis. */
    stops: any;
    /** If true, the hierarchy attribute for the network should be used in analysis. */
    useHierarchy: boolean;
    /** If true, time windows should be used in the analysis. */
    useTimeWindows: boolean;
    /** Creates a new RouteParameters object. */
    constructor();
  }
  export = RouteParameters;
}

declare module "esri/tasks/RouteResult" {
  import DirectionsFeatureSet = require("esri/tasks/DirectionsFeatureSet");
  import Graphic = require("esri/graphic");

  /** The result from the Route Task. */
  class RouteResult {
    /** Route directions are returned if RouteParameters.returnDirections is set to true. */
    directions: DirectionsFeatureSet;
    /** The Route graphic that is returned if RouteParameters.returnRoutes is true. */
    route: Graphic;
    /** The name of the route. */
    routeName: string;
    /** Array of stops. */
    stops: Graphic[];
  }
  export = RouteResult;
}

declare module "esri/tasks/RouteTask" {
  import esri = require("esri");
  import RouteParameters = require("esri/tasks/RouteParameters");

  /** Solves a route on a route layer resource in a Network Analyst service exposed by the ArcGIS Server REST API. */
  class RouteTask {
    /** URL to the ArcGIS Server REST resource that represents a network analysis service. */
    url: string;
    /**
     * Creates a new RouteTask object.
     * @param url URL to the ArcGIS Server REST resource that represents a network analysis service.
     */
    constructor(url: string);
    /**
     * Solves the route against the route layer with the route parameters.
     * @param params Route parameters used as input to generate the route.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    solve(params: RouteParameters, callback?: Function, errback?: Function): any;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: RouteTask }) => void): esri.Handle;
    /** Fires when RouteTask.solve() has completed. */
    on(type: "solve-complete", listener: (event: { result: any; target: RouteTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = RouteTask;
}

declare module "esri/tasks/ServiceAreaParameters" {
  import SpatialReference = require("esri/SpatialReference");

  /** Input parameters for a ServiceAreaTask. */
  class ServiceAreaParameters {
    /** The list of network attribute names to be accumulated with the analysis, i.e., which attributes should be returned as part of the response. */
    accumulateAttributes: string[];
    /** A set of attribute parameter values that can be parameterized to determine which network elements can be used by a vehicle. */
    attributeParameterValues: any[];
    /** An array of numbers defining the breaks. */
    defaultBreaks: number[];
    /** When true, restricted network elements should be considered when finding network locations. */
    doNotLocateOnRestrictedElements: boolean;
    /** An array of network source names to NOT use when generating polygons. */
    excludeSourcesFromPolygons: string[];
    /** The set of facilities loaded as network locations during analysis. */
    facilities: any;
    /** The network attribute name used as the impedance attribute in analysis. */
    impedanceAttribute: string;
    /** If true, similar ranges will be merged in the result polygons. */
    mergeSimilarPolygonRanges: boolean;
    /** The precision of the output geometry after generalization. */
    outputGeometryPrecision: number;
    /** The units of the output geometry precision. */
    outputGeometryPrecisionUnits: string;
    /** The type of output lines to be generated in the result. */
    outputLines: string;
    /** The type of output polygons to be generated in the result. */
    outputPolygons: string;
    /** The well-known ID of the spatial reference for the geometries returned with the analysis results. */
    outSpatialReference: SpatialReference;
    /** Indicates if the lines should overlap from multiple facilities. */
    overlapLines: boolean;
    /** Indicates if the polygons should overlap from multiple facilities. */
    overlapPolygons: boolean;
    /** The set of point barriers loaded as network locations during analysis. */
    pointBarriers: any;
    /** The set of polygons barriers loaded as network locations during analysis. */
    polygonBarriers: any;
    /** The set of polyline barriers loaded as network locations during analysis. */
    polylineBarriers: any;
    /** The list of network attribute names to be used as restrictions with the analysis. */
    restrictionAttributes: string[];
    /** Specifies how U-Turns should be handled. */
    restrictUTurns: string;
    /** If true, facilities will be returned with the analysis results. */
    returnFacilities: boolean;
    /** If true, barriers will be returned in the barriers property of ClosestFacilitySolveResult. */
    returnPointBarriers: boolean;
    /** If true, polygon barriers will be returned in the polygonBarriers property of ClosestFacilitySolveResult. */
    returnPolygonBarriers: boolean;
    /** If true, polyline barriers will be returned in the polylineBarriers property of ClosestFacilitySolveResult. */
    returnPolylineBarriers: boolean;
    /** If true, lines will be split at breaks. */
    splitLinesAtBreaks: boolean;
    /** If true, polygons will be split at breaks. */
    splitPolygonsAtBreaks: boolean;
    /** Local date and time at the facility. */
    timeOfDay: Date;
    /** Options for traveling to or from the facility. */
    travelDirection: string;
    /** If true, the outermost polygon (at the maximum break value) will be trimmed. */
    trimOuterPolygon: boolean;
    /** If polygons are being trimmed, provides the distance to trim. */
    trimPolygonDistance: number;
    /** If polygons are being trimmed, specifies the units of the trimPolygonDistance. */
    trimPolygonDistanceUnits: string;
    /** When true, the hierarchy attributes for the network will be used in analysis. */
    useHierarchy: boolean;
    /** Creates a new ServiceAreaParameters object. */
    constructor();
  }
  export = ServiceAreaParameters;
}

declare module "esri/tasks/ServiceAreaSolveResult" {
  import Point = require("esri/geometry/Point");
  import NAMessage = require("esri/tasks/NAMessage");
  import Polygon = require("esri/geometry/Polygon");
  import Polyline = require("esri/geometry/Polyline");
  import Graphic = require("esri/graphic");

  /** The result from a ServiceAreaTask operation. */
  class ServiceAreaSolveResult {
    /** Array of points, only returned if ServiceAreaParameters.returnFacilities is set to true. */
    facilities: Point[];
    /** Message received when solve is completed. */
    messages: NAMessage[];
    /** The point barriers are an array of points. */
    pointBarriers: Point[];
    /** The polygon barriers are an array of polygons. */
    polygonBarriers: Polygon[];
    /** The polyline barriers are an array of polylines. */
    polylineBarriers: Polyline[];
    /** Array of service area polygon graphics. */
    serviceAreaPolygons: Graphic[];
    /** Array of service area polyline graphics. */
    serviceAreaPolylines: Graphic[];
  }
  export = ServiceAreaSolveResult;
}

declare module "esri/tasks/ServiceAreaTask" {
  import esri = require("esri");
  import ServiceAreaParameters = require("esri/tasks/ServiceAreaParameters");
  import ServiceAreaSolveResult = require("esri/tasks/ServiceAreaSolveResult");

  /** Helps you find service areas around any location on a network. */
  class ServiceAreaTask {
    /** Creates a new ServiceAreaTask object. */
    constructor();
    /**
     * Solve the service area.
     * @param params The ServiceAreaParameters object.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    solve(params: ServiceAreaParameters, callback?: Function, errback?: Function): any;
    /** Fires when ServiceAreaTask has completed. */
    on(type: "solve-complete", listener: (event: { result: ServiceAreaSolveResult; target: ServiceAreaTask }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = ServiceAreaTask;
}

declare module "esri/tasks/StatisticDefinition" {
  /** The StatisticDefinition class defines the type of statistics, the field used to calculate the statistics and the resulting output field name. */
  class StatisticDefinition {
    /** Define the field on which statistics will be calculated. */
    onStatisticField: string;
    /** Specify the output field name. */
    outStatisticFieldName: string;
    /** Define the type of statistic. */
    statisticType: string;
    /** Creates a new StatisticDefinition object. */
    constructor();
  }
  export = StatisticDefinition;
}

declare module "esri/tasks/TrimExtendParameters" {
  import Polyline = require("esri/geometry/Polyline");

  /** Sets the polylines and other parameters for the trimExtend operation. */
  class TrimExtendParameters {
    /** A flag used along with the trimExtend operation. */
    extendHow: string;
    /** The array of polylines to trim or extend. */
    polylines: Polyline[];
    /** A polyline used as a guide for trimming or extending input polylines. */
    trimExtendTo: Polyline;
    /** Creates a new TrimExtendParameters object. */
    constructor();
  }
  export = TrimExtendParameters;
}

declare module "esri/tasks/UniqueValueDefinition" {
  import ClassificationDefinition = require("esri/tasks/ClassificationDefinition");
  import Symbol = require("esri/symbols/Symbol");
  import Color = require("esri/Color");

  /** Define a unique value classification scheme used by the GenerateDataTask to generate a renderer that groups values based on a unique combination of one or more fields. */
  class UniqueValueDefinition extends ClassificationDefinition {
    /** Attribute field renderer uses to match values. */
    attributeField: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeField. */
    attributeField2: string;
    /** The name of the field that contains unique values when combined with the values specified by attributeField and attributeField2. */
    attributeField3: string;
    /** Define a default symbol for the classification. */
    baseSymbol: Symbol;
    /** Define a color ramp for the classification. */
    colorRamp: Color;
    /** Creates a new UniqueValueDefinition object. */
    constructor();
    /** Returns an easily serializable object representation of the unique value definition. */
    toJson(): any;
  }
  export = UniqueValueDefinition;
}

declare module "esri/tasks/geoenrichment/AddressStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");

  /** The study area that is based on an address. */
  class AddressStudyArea extends StudyArea {
    /** The address key value pairs to geocode to obtain this study area. */
    attributes: any;
  }
  export = AddressStudyArea;
}

declare module "esri/tasks/geoenrichment/DriveBuffer" {
  import esri = require("esri");

  /** The study area is created with a drive time or drive distance buffer. */
  class DriveBuffer {
    /** The radii to use to create ring buffers. */
    radius: number[];
    /** The units of the radii. */
    units: string;
    /**
     * Constructs a DriveBuffer.
     * @param params Various optional parameters that can be used to configure this class.
     */
    constructor(params: esri.DriveBufferOptions);
  }
  export = DriveBuffer;
}

declare module "esri/tasks/geoenrichment/DriveUnits" {
  /** DriveUnits provides various length units that can be passed as the units in the DriveBuffer. */
  class DriveUnits {
    /** Acres (esriAcres). */
    static ACRES: any;
    /** Ares (esriAres). */
    static ARES: any;
    /** Centimeters (esriCentimeters). */
    static CENTIMETERS: any;
    /** Decimal degrees (esriDecimalDegrees). */
    static DECIMAL_DEGREES: any;
    /** Decimeters (esriDecimeters). */
    static DECIMETERS: any;
    /** Degree minute seconds (esriDegreeMinuteSeconds). */
    static DEGREE_MINUTE_SECONDS: any;
    /** Feet (esriFeet). */
    static FEET: any;
    /** Hectares (esriHectares). */
    static HECTARES: any;
    /** Inches (esriInches). */
    static INCHES: any;
    /** Kilometers (esriKilometers). */
    static KILOMETERS: any;
    /** Meters (esriMeters). */
    static METERS: any;
    /** Miles (esriMiles). */
    static MILES: any;
    /** Millimeters (esriMillimeters). */
    static MILLIMETERS: any;
    /** Minutes (esriDriveTimeUnitsMinutes). */
    static MINUTES: any;
    /** Nautical miles (esriNauticalMiles). */
    static NAUTICAL_MILES: any;
    /** Points (esriPoints). */
    static POINTS: any;
    /** Square centimeters (esriSquareCentimeters). */
    static SQUARE_CENTIMETERS: any;
    /** Square decimeters (esriSquareDecimeters). */
    static SQUARE_DECIMETERS: any;
    /** Square feet (esriSquareFeet). */
    static SQUARE_FEET: any;
    /** Square inches (esriSquareInches). */
    static SQUARE_INCHES: any;
    /** Square kilometers (esriSquareKilometers). */
    static SQUARE_KILOMETERS: any;
    /** Square meters (esriSquareMeters). */
    static SQUARE_METERS: any;
    /** Square miles (esriSquareMiles). */
    static SQUARE_MILES: any;
    /** Square millimeters (esriSquareMillimeters). */
    static SQUARE_MILLIMETERS: any;
    /** Square yards (esriSquareYards). */
    static SQUARE_YARDS: any;
    /** Unknown (esriUnknownUnits). */
    static UNKNOWN: any;
    /** Yards (esriYards). */
    static YARDS: any;
  }
  export = DriveUnits;
}

declare module "esri/tasks/geoenrichment/GeographyLevel" {
  /** GeographicLevel works with IntersectingGeographies to define a study area of InfoGraphic with a feature from a standard geography layer. */
  class GeographyLevel {
    /** The ID of the country for which data is retrieved. */
    countryID: string;
    /** The ID of the dataset to which variables used in this GeographyLevel belong. */
    datasetID: string;
    /** The ID of the layer. */
    layerID: string;
    /**
     * Create a GeographyLevel objct.
     * @param json Various options to configure this GeographyLevel.
     */
    constructor(json?: Object);
  }
  export = GeographyLevel;
}

declare module "esri/tasks/geoenrichment/GeometryStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");
  import Geometry = require("esri/geometry/Geometry");

  /** The study area that is based on a geometry. */
  class GeometryStudyArea extends StudyArea {
    /** The geometry for this study area. */
    geometry: Geometry;
    /** Constructs a GeometryStudyArea. */
    constructor();
  }
  export = GeometryStudyArea;
}

declare module "esri/tasks/geoenrichment/IntersectingGeographies" {
  import GeographyLevel = require("esri/tasks/geoenrichment/GeographyLevel");

  /** The study area is created with the geometries intersecting the passed in geometry from specified layers. */
  class IntersectingGeographies {
    /** The layers from which intersecting geographies should be used as study areas. */
    levels: GeographyLevel[];
  }
  export = IntersectingGeographies;
}

declare module "esri/tasks/geoenrichment/RingBuffer" {
  import esri = require("esri");

  /** The study area is created with a simple ring buffer with a radius. */
  class RingBuffer {
    /** The radii to use to create ring buffers. */
    radii: number[];
    /** The units of the radii. */
    units: string;
    /**
     * Constructs a RingBuffer.
     * @param params Various optional parameters that can be used to configure this class.
     */
    constructor(params: esri.RingBufferOptions);
  }
  export = RingBuffer;
}

declare module "esri/tasks/geoenrichment/StandardGeographyStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");

  /** The study area that is based on a standard geography. */
  class StandardGeographyStudyArea extends StudyArea {
    /** The country to which this geography belongs. */
    countryID: string;
    /** The ID of the standard geography layer. */
    geographyLayerID: string;
    /** The IDs of the standard geographies. */
    ids: string[];
  }
  export = StandardGeographyStudyArea;
}

declare module "esri/tasks/geoenrichment/StudyArea" {
  import GeographyLevel = require("esri/tasks/geoenrichment/GeographyLevel");

  /** The study area that is used for enrichment or for display in an Infographic widget. */
  class StudyArea {
    /** Attributes of the study area. */
    attributes: any;
    /** The identifiers for layers used to find comparison geographies. */
    comparisonGeographyLevels: GeographyLevel[];
    /** The options to apply to the study area. */
    options: any;
    /** If true, geometry will be returned. */
    returnGeometry: boolean;
    /** Converts object to its JSON representation. */
    toJson(): any;
  }
  export = StudyArea;
}

declare module "esri/tasks/locator" {
  import esri = require("esri");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import AddressCandidate = require("esri/tasks/AddressCandidate");

  /** Represents a geocode service resource exposed by the ArcGIS Server REST API. */
  class Locator {
    /** The spatial reference of the output geometries. */
    outSpatialReference: SpatialReference;
    /** URL to the ArcGIS Server REST resource that represents a locator service. */
    url: string;
    /**
     * Creates a new Locator object.
     * @param url URL to the ArcGIS Server REST resource that represents a locator service.
     */
    constructor(url: string);
    /**
     * Find address candidates for the input addresses.
     * @param params The input addresses in the format supported by the geocoding service.
     * @param callback The function to call when the method has completed.
     * @param errback The function to call if an error occurs on the server during task execution.
     */
    addressesToLocations(params: any, callback: Function, errback: Function): any;
    /**
     * Sends a request to the ArcGIS REST geocode resource to find candidates for a single address specified in the address parameter.
     * @param params Specify the address and optionally specify the outFields and searchExtent.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    addressToLocations(params: any, callback?: Function, errback?: Function): any;
    /**
     * Locates an address based on a given point.The return object of dojo.Deferred was added at v1.4.
     * @param location The point at which to search for the closest address.
     * @param distance The distance in meters from the given location within which a matching address should be searched.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs on the Server during task execution.
     */
    locationToAddress(location: Point, distance: number, callback?: Function, errback?: Function): any;
    /**
     * Sets the well-known ID of the spatial reference of the output geometries.
     * @param spatialReference The well-known ID of a spatial reference.
     */
    setOutSpatialReference(spatialReference: SpatialReference): void;
    /** Fires when Locator.addressesToLocations method has completed. */
    on(type: "addresses-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): esri.Handle;
    /** Fires when Locator.addressToLocation method has completed. */
    on(type: "address-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: Locator }) => void): esri.Handle;
    /** Fires when Locator.locationToAddress method has completed. */
    on(type: "location-to-address-complete", listener: (event: { address: AddressCandidate; target: Locator }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Locator;
}

declare module "esri/tasks/query" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import StatisticDefinition = require("esri/tasks/StatisticDefinition");
  import Symbol = require("esri/symbols/Symbol");
  import TimeExtent = require("esri/TimeExtent");

  /** Query for input to the QueryTask. */
  class Query {
    /** Part or all of a feature from feature class 1 is contained within a feature from feature class 2. */
    static SPATIAL_REL_CONTAINS: any;
    /** The feature from feature class 1 crosses a feature from feature class 2. */
    static SPATIAL_REL_CROSSES: any;
    /** The envelope of feature class 1 intersects with the envelope of feature class 2. */
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    /** The envelope of the query feature class intersects the index entry for the target feature class. */
    static SPATIAL_REL_INDEXINTERSECTS: any;
    /** Part of a feature from feature class 1 is contained in a feature from feature class 2. */
    static SPATIAL_REL_INTERSECTS: any;
    /** Features from feature class 1 overlap features in feature class 2. */
    static SPATIAL_REL_OVERLAPS: any;
    /** Allows specification of any relationship defined   using the Shape Comparison Language. */
    static SPATIAL_REL_RELATION: any;
    /** The feature from feature class 1 touches the border of a feature from feature class 2. */
    static SPATIAL_REL_TOUCHES: any;
    /** The feature from feature class 1 is completely enclosed by the feature from feature class 2. */
    static SPATIAL_REL_WITHIN: any;
    /** Distance to buffer input geometry. */
    distance: number;
    /** The geometry to apply to the spatial filter. */
    geometry: Geometry;
    /** Specify the number of decimal places for the geometries returned by the query operation. */
    geometryPrecision: number;
    /** One or more field names that will be used to group the statistics. */
    groupByFieldsForStatistics: string[];
    /** The maximum allowable offset used for generalizing geometries returned by the query operation. */
    maxAllowableOffset: number;
    /** Number of features to retrieve. */
    num: number;
    /** A comma delimited list of ObjectIds for the features in the layer/table that you want to query. */
    objectIds: number[];
    /** One or more field names that will be used to order the query results. */
    orderByFields: string[];
    /** Attribute fields to include in the FeatureSet. */
    outFields: string[];
    /** The spatial reference for the returned geometry. */
    outSpatialReference: SpatialReference;
    /** The definitions for one or more field-based statistic to be calculated. */
    outStatistics: StatisticDefinition[];
    /** Specify the pixel level to be identified on the x and y axis. */
    pixelSize: Symbol;
    /** The 'Shape Comparison Language' string to evaluate. */
    relationParam: string;
    /** If "true", each feature in the FeatureSet includes the geometry. */
    returnGeometry: boolean;
    /** The spatial relationship to be applied on the input geometry while performing the query. */
    spatialRelationship: string;
    /** Zero-based index indicating where to begin retrieving features. */
    start: number;
    /** Shorthand for a where clause using "like". */
    text: string;
    /** Specify a time extent for the query. */
    timeExtent: TimeExtent;
    /** Distance unit. */
    units: string;
    /** A where clause for the query. */
    where: string;
    /** Creates a new Query object used to execute a query on the layer resource identified by the URL. */
    constructor();
  }
  export = Query;
}

declare module "esri/toolbars/draw" {
  import esri = require("esri");
  import SimpleFillSymbol = require("esri/symbols/SimpleFillSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");
  import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
  import Map = require("esri/map");
  import FillSymbol = require("esri/symbols/FillSymbol");
  import LineSymbol = require("esri/symbols/LineSymbol");
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");
  import Geometry = require("esri/geometry/Geometry");

  /** Toolbar that supports functionality to create new geometries by drawing them: points (POINT or MULTI_POINT), lines (LINE, POLYLINE, or FREEHAND_POLYLINE), polygons (FREEHAND_POLYGON or POLYGON), or rectangles (EXTENT). */
  class Draw {
    /** Draws an arrow. */
    static ARROW: any;
    /** Draws a circle. */
    static CIRCLE: any;
    /** Draws an arrow that points down. */
    static DOWN_ARROW: any;
    /** Draws an ellipse. */
    static ELLIPSE: any;
    /** Draws an extent box. */
    static EXTENT: any;
    /** Draws a freehand polygon. */
    static FREEHAND_POLYGON: any;
    /** Draws a freehand polyline. */
    static FREEHAND_POLYLINE: any;
    /** Draws an arrow that points left. */
    static LEFT_ARROW: any;
    /** Draws a line. */
    static LINE: any;
    /** Draws a Multipoint. */
    static MULTI_POINT: any;
    /** Draws a point. */
    static POINT: any;
    /** Draws a polygon. */
    static POLYGON: any;
    /** Draws a polyline. */
    static POLYLINE: any;
    /** Draws a rectangle. */
    static RECTANGLE: any;
    /** Draws an arrow that points right. */
    static RIGHT_ARROW: any;
    /** Draws a triangle. */
    static TRIANGLE: any;
    /** Draws an arrow that points up. */
    static UP_ARROW: any;
    /** Symbol to be used when drawing a Polygon or Extent. */
    fillSymbol: SimpleFillSymbol;
    /** Symbol to be used when drawing a Polyline. */
    lineSymbol: SimpleLineSymbol;
    /** Symbol to be used when drawing a Point or Multipoint. */
    markerSymbol: SimpleMarkerSymbol;
    /** When set to false, the geometry is modified to be topologically correct. */
    respectDrawingVertexOrder: boolean;
    /**
     * Creates a new Draw object.
     * @param map Map the toolbar is associated with.
     * @param options Parameters that define the functionality of the draw toolbar.
     */
    constructor(map: Map, options?: esri.DrawOptions);
    /**
     * Activates the toolbar for drawing geometries.
     * @param geometryType The type of geometry drawn.
     * @param options Options that define the functionality of the draw toolbar.
     */
    activate(geometryType: string, options?: any): void;
    /** Deactivates the toolbar and reactivates map navigation. */
    deactivate(): void;
    /** Finishes drawing the geometry and fires the onDrawEnd event. */
    finishDrawing(): void;
    /**
     * Sets the fill symbol.
     * @param fillSymbol The fill symbol.
     */
    setFillSymbol(fillSymbol: FillSymbol): void;
    /**
     * Sets the line symbol.
     * @param lineSymbol The line symbol.
     */
    setLineSymbol(lineSymbol: LineSymbol): void;
    /**
     * Sets the marker symbol.
     * @param markerSymbol The marker symbol.
     */
    setMarkerSymbol(markerSymbol: MarkerSymbol): void;
    /**
     * Sets whether the polygon geometry should be modified to be topologically correct.
     * @param set When set to false, the geometry is modified to be topologically correct.
     */
    setRespectDrawingVertexOrder(set: boolean): void;
    /** Fired when the user has ended drawing. */
    on(type: "draw-complete", listener: (event: { geographicGeometry: Geometry; geometry: Geometry; target: Draw }) => void): esri.Handle;
    /** Fires when drawing is complete. */
    on(type: "draw-end", listener: (event: { geometry: Geometry; target: Draw }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Draw;
}

declare module "esri/toolbars/edit" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Graphic = require("esri/graphic");

  /** The Edit toolbar is a helper class that provides functionality to move graphics or modify individual vertices, i.e., edit the geometry of existing graphics. */
  class Edit {
    /** When a textSymbol point is in edit mode, double-clicking leads to text editing mode, which is a text box where uses can change the text content. */
    static EDIT_TEXT: any;
    /** Display and edit vertices of a Polyline, Polygon, or Multipoint. */
    static EDIT_VERTICES: any;
    /** Move graphic to a new location on the map. */
    static MOVE: any;
    /** Rotate the graphic. */
    static ROTATE: any;
    /** Scale or resize a graphic. */
    static SCALE: any;
    /**
     * Creates a new Edit object.
     * @param map Map the toolbar is associated with.
     * @param options Optional parameters.
     */
    constructor(map: Map, options?: esri.EditOptions);
    /**
     * Activates the toolbar to edit the supplied graphic.
     * @param tool Specify the active tool(s).
     * @param graphic The graphic to edit.
     * @param options The following properties are valid options.
     */
    activate(tool: string, graphic: Graphic, options?: any): void;
    /** Deactivates the toolbar. */
    deactivate(): void;
    /** An object with the following properties that describe the current state. */
    getCurrentState(): any;
    /** Refreshes the internal state of the toolbar. */
    refresh(): void;
    /** Activates the toolbar for editing geometries. */
    on(type: "activate", listener: (event: { graphic: Graphic; tool: string; target: Edit }) => void): esri.Handle;
    /** Deactivates the toolbar and reactivates map navigation. */
    on(type: "deactivate", listener: (event: { graphic: Graphic; info: any; tool: string; target: Edit }) => void): esri.Handle;
    /** Fires when a graphic is clicked. */
    on(type: "graphic-click", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to move a graphic. */
    on(type: "graphic-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fired continuously as the graphic moves. */
    on(type: "graphic-move", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on the graphic, usually while moving a graphic. */
    on(type: "graphic-move-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released, usually after moving the graphic. */
    on(type: "graphic-move-stop", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): esri.Handle;
    /** Fires continuously as a graphic is rotated. */
    on(type: "rotate", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to rotate the graphic. */
    on(type: "rotate-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to begin rotating a graphic. */
    on(type: "rotate-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the rotate handle to finish rotating the graphic. */
    on(type: "rotate-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires continuously as the graphic is being scaled. */
    on(type: "scale", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fires when the user begins to drag a handle to scale the graphic. */
    on(type: "scale-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when a user clicks on the handle to scale or resize a graphic. */
    on(type: "scale-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle;
    /** Fires when the mouse button is released from the scale handle to finish scaling the graphic. */
    on(type: "scale-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle;
    /** Fired after a new vertex is added to a polyline or polygon or a new point is added to a multipoint. */
    on(type: "vertex-add", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is clicked on the vertex of a polyline or polygon or a point in a multipoint. */
    on(type: "vertex-click", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired after a vertex(polyline, polygon) or point(multipoint) is deleted. */
    on(type: "vertex-delete", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the user begins to move the vertex of a polyline or polygon or a point of a multipoint. */
    on(type: "vertex-first-move", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fires as the mouse exits a vertex(polyline, polygon) or a point(multipoint). */
    on(type: "vertex-mouse-out", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse moves over a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-mouse-over", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired continuously as the user is moving a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move", listener: (event: { graphic: Graphic; transform: any; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is pressed down on a vertex (polyline, polygon) or point (multipoint). */
    on(type: "vertex-move-start", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle;
    /** Fired when the mouse button is released from a vertex (polyline, polygon) or point(multipoint). */
    on(type: "vertex-move-stop", listener: (event: { graphic: Graphic; transform: any; vertexInfo: any; target: Edit }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Edit;
}

declare module "esri/toolbars/navigation" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Symbol = require("esri/symbols/Symbol");

  /** Toolbar that supports basic navigation such as pan and zoom. */
  class Navigation {
    /** Map is panned. */
    static PAN: any;
    /** Map zooms in. */
    static ZOOM_IN: any;
    /** Map zooms out. */
    static ZOOM_OUT: any;
    /**
     * Creates a new Navigation object.
     * @param map Map the toolbar is associated with.
     */
    constructor(map: Map);
    /**
     * Activates the toolbar for map navigation.
     * @param navType The navigation type.
     */
    activate(navType: string): void;
    /** Deactivates the toolbar and reactivates map navigation. */
    deactivate(): void;
    /** When "true", map is at the first extent. */
    isFirstExtent(): boolean;
    /** When "true", map is at the last extent. */
    isLastExtent(): boolean;
    /**
     * Set the SimpleFillSymbol used for the rubber band zoom.
     * @param symbol The SimpleFillSymbol used for the rubber band zoom.
     */
    setZoomSymbol(symbol: Symbol): void;
    /** Zoom to full extent of base layer. */
    zoomToFullExtent(): void;
    /** Zoom to next extent in extent history. */
    zoomToNextExtent(): void;
    /** Zoom to previous extent in extent history. */
    zoomToPrevExtent(): void;
    /** Fires when the extent history changes. */
    on(type: "extent-history-change", listener: (event: { target: Navigation }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = Navigation;
}

declare module "esri/undoManager" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  /** The Undo Manager is a utility object that allows you to easily build applications with undo/redo functionality. */
  class UndoManager {
    /** When true, there are redo operations available on the stack. */
    canRedo: boolean;
    /** When true, there are undo operations available on the stack. */
    canUndo: boolean;
    /** The number of operations stored in the history stack. */
    length: number;
    /** The current operation position. */
    position: number;
    /**
     * Creates a new UndoManager object.
     * @param options See options list for parameters.
     */
    constructor(options?: esri.UndoManagerOptions);
    /**
     * Adds an undo operation to the stack and clears the redo stack.
     * @param operation An operation to add to the stack.
     */
    add(operation: OperationBase): void;
    /** Clear the redo stack */
    clearRedo(): void;
    /** Clear the undo stack. */
    clearUndo(): void;
    /** Destroy the operation manager. */
    destroy(): void;
    /**
     * Get the specified operation from the stack.
     * @param operationId The operation id.
     */
    get(operationId: number): OperationBase;
    /** Get the next redo operation from the stack */
    peekRedo(): OperationBase;
    /** Get the next undo operation from the stack. */
    peekUndo(): OperationBase;
    /** Moves the current position to the next redo operation and calls the operation's performRedo() method. */
    redo(): void;
    /**
     * Remove the specified operation from the stack.
     * @param operationId The operation id.
     */
    remove(operationId: number): OperationBase;
    /** Moves the current position to the next undo operation and calls the operation's performUndo method. */
    undo(): void;
    /** Fires when the add method is called to add an operation is added to the stack. */
    on(type: "add", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the undo/redo stack changes. */
    on(type: "change", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the redo method is called. */
    on(type: "redo", listener: (event: { target: UndoManager }) => void): esri.Handle;
    /** Fires when the undo method is called. */
    on(type: "undo", listener: (event: { target: UndoManager }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = UndoManager;
}

declare module "esri/units" {
  /** ESRI unit constants. */
  class Units {
    /** Units are acres. */
    static ACRES: any;
    /** Units are ares. */
    static ARES: any;
    /** Units are centimeters. */
    static CENTIMETERS: any;
    /** Units are decimal degrees. */
    static DECIMAL_DEGREES: any;
    /** Units are decimeters. */
    static DECIMETERS: any;
    /** Units are feet. */
    static FEET: any;
    /** Units are hectares. */
    static HECTARES: any;
    /** Units are inches. */
    static INCHES: any;
    /** Units are kilometers. */
    static KILOMETERS: any;
    /** Units are meters. */
    static METERS: any;
    /** Units are miles. */
    static MILES: any;
    /** Units are millimeters. */
    static MILLIMETERS: any;
    /** Units are nautical miles. */
    static NAUTICAL_MILES: any;
    /** Units are points. */
    static POINTS: any;
    /** Units are square centimeters. */
    static SQUARE_CENTIMETERS: any;
    /** Units are square deciemeters. */
    static SQUARE_DECIMETERS: any;
    /** Units are square feet. */
    static SQUARE_FEET: any;
    /** Units are square inches. */
    static SQUARE_INCHES: any;
    /** Units are square kilometers. */
    static SQUARE_KILOMETERS: any;
    /** Units are square meters. */
    static SQUARE_METERS: any;
    /** Units are square miles. */
    static SQUARE_MILES: any;
    /** Units are square millimeters. */
    static SQUARE_MILLIMETERS: any;
    /** Units are square yards. */
    static SQUARE_YARDS: any;
    /** Units are unknown. */
    static UNKNOWN: any;
    /** Units are yards. */
    static YARDS: any;
  }
  export = Units;
}

declare module "esri/urlUtils" {
  /** Utility methods for working with URLs. */
  var urlUtils: {
    /**
     * Adds the given proxy rule to the proxy rules list: esri.config.defaults.io.proxyRules
     * @param rule The rule argument should have the following properties.
     */
    addProxyRule(rule: any): number;
    /** Returns the proxy rule that matches the given url. */
    getProxyRule(): any;
    /**
     * Converts the URL arguments to an object representation.
     * @param url The input URL.
     */
    urlToObject(url: string): any;
  };
  export = urlUtils;
}

declare module "esri/virtualearth/VEAddress" {
  /** The Bing Maps address details. */
  class VEAddress {
    /** Specifies the street line of an address. */
    addressLine: string;
    /** Specifies the subdivision name within the country or region for an address. */
    adminDistrict: string;
    /** Specifies the country or region name of an address. */
    countryRegion: string;
    /** Specifies the higher level administrative subdivision used in some countries or regions. */
    district: string;
    /** Contains the complete address. */
    formattedAddress: string;
    /** Specifies the populated place for the address. */
    locality: string;
    /** Specifies the post code, postal code, or ZIP Code of an address. */
    postalCode: string;
    /** Specifies the postal city of an address. */
    postalTown: string;
  }
  export = VEAddress;
}

declare module "esri/virtualearth/VEGeocodeResult" {
  import VEAddress = require("esri/virtualearth/VEAddress");
  import Extent = require("esri/geometry/Extent");
  import Point = require("esri/geometry/Point");

  /** Represents a Bing Maps address and its location. */
  class VEGeocodeResult {
    /** Specifies address properties for the result. */
    address: VEAddress;
    /** Best extent for displaying the result. */
    bestView: Extent;
    /** Contains values that indicate the geocode method used to match the location to the map. */
    calculationMethod: string;
    /** Value indicating how confident the service is about the result. */
    confidence: string;
    /** Contains a display name for the result. */
    displayName: string;
    /** Further refines the geocode results that have been returned. */
    entityType: string;
    /** The X and Y coordinates of the result in decimal degrees. */
    location: Point;
    /** An array of values that indicate the geocoding level of the location match. */
    matchCodes: string;
  }
  export = VEGeocodeResult;
}

declare module "esri/virtualearth/VEGeocoder" {
  import esri = require("esri");
  import VEGeocodeResult = require("esri/virtualearth/VEGeocodeResult");

  /** Bing Maps geocoder. */
  class VEGeocoder {
    /** Specifies the culture in which to return results. */
    culture: string;
    /**
     * Creates a new VEGeocoder object.
     * @param options See options list for parameters.
     */
    constructor(options: esri.VEGeocoderOptions);
    /**
     * Sends a geocode request to Bing Maps to find candidates for a single address specified in the query argument.
     * @param query The address to locate.
     * @param callback The function to call when the method has completed.
     * @param errback An error object is returned if an error occurs during task execution.
     */
    addressToLocations(query: string, callback?: Function, errback?: Function): any;
    /**
     * Sets the culture in which to return results.
     * @param culture The culture value.
     */
    setCulture(culture: string): void;
    /** Fires when VEGeocode.addressToLocation() has completed. */
    on(type: "address-to-locations-complete", listener: (event: { geocodeResults: VEGeocodeResult[]; target: VEGeocoder }) => void): esri.Handle;
    /** Fires when an error occurs when executing the task. */
    on(type: "error", listener: (event: { error: Error; target: VEGeocoder }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = VEGeocoder;
}

declare module "esri/virtualearth/VETiledLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");

  /** Bing Maps tiled layer. */
  class VETiledLayer extends TiledMapServiceLayer {
    /** Bing Maps Aerial layer. */
    static MAP_STYLE_AERIAL: any;
    /** Bing Maps Aerial with Labels layer. */
    static MAP_STYLE_AERIAL_WITH_LABELS: any;
    /** Bing Maps Roads layer. */
    static MAP_STYLE_ROAD: any;
    /** The copyright text. */
    copyright: string;
    /** Specifies the culture in which to return results. */
    culture: string;
    /** Bing Maps style. */
    mapStyle: string;
    /**
     * Creates a new VETiledLayer object.
     * @param options See options list for parameters.
     */
    constructor(options: esri.VETiledLayerOptions);
    /**
     * Sets the culture in which to return results.
     * @param culture The culture value.
     */
    setCulture(culture: string): void;
    /**
     * Sets the Bing Maps style.
     * @param style Bing Maps style.
     */
    setMapStyle(style: string): void;
    /** Fires when the map style is changed. */
    on(type: "map-style-change", listener: (event: { target: VETiledLayer }) => void): esri.Handle;
    on(type: string, listener: (event: any) => void): esri.Handle;
  }
  export = VETiledLayer;
}

declare module "esri/workers/WorkerClient" {
  /** The WorkerClient is the primary entry point for interfacing with background Workers. */
  class WorkerClient {
    /** Return Deferreds rather than Promises from postMessage. */
    returnDeferreds: boolean;
    /** Reference to the actual HTML5 Worker instance. */
    worker: Worker;
    /**
     * Creates a WorkerClient
     * @param path A require style string path to the worker script.
     * @param deferreds Whether to return Deferreds rather than Promises from methods.
     */
    constructor(path: string, deferreds?: boolean);
    /**
     * Adds a function to the worker that takes the worker's internal calls to postMessage and calls this function before sending the original message back to the main thread.
     * @param module A require path to a worker-compatible script containing the callback function.
     * @param name The name of the callback function.
     */
    addWorkerCallback(module: string, name?: string): any;
    /**
     * Import any script or function into the worker.
     * @param paths An AMD require path to a script file to import.
     */
    importScripts(paths: string): any;
    /**
     * Import any script or function into the worker.
     * @param paths An AMD require path to a script file to import.
     */
    importScripts(paths: string[]): any;
    /**
     * Posts a message to the worker.
     * @param msg The data to post to the worker.
     * @param transfers An optional array of transferable objects.
     */
    postMessage(msg: any, transfers?: any[]): any;
    /**
     * Posts a message to the worker.
     * @param msg The data to post to the worker.
     * @param transfers An optional array of transferable objects.
     */
    postMessage(msg: any[], transfers?: any[]): any;
    /**
     * Sets the worker that is used in the Worker Client.
     * @param paths An AMD require path to a script file to import.
     * @param path A require style string path to the worker script.
     */
    setWorker(paths: string, path: string): void;
    /**
     * Sets the worker that is used in the Worker Client.
     * @param paths An AMD require path to a script file to import.
     * @param path A require style string path to the worker script.
     */
    setWorker(paths: string[], path: string): void;
    /** Terminates the worker and cancels all unresolved messages. */
    terminate(): void;
  }
  export = WorkerClient;
}

