// Type definitions for ArcGIS API for JavaScript version 3.8
// Project: http://js.arcgis.com
// Updated: Mon Mar 24 2014

declare module "esri" {
  import Point = require("esri/geometry/Point");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import Graphic = require("esri/graphic");
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
    mapPoint: Point;
    screenPoint: ScreenPoint;
  }
  export interface AddOptions {
    addedGraphics?: Graphic[];
    featureLayer?: FeatureLayer;
  }
  export interface AggregatePointsOptions {
    analysisGpServer?: string;
    groupByField?: string;
    keepBoundariesWithNoPoints?: boolean;
    map?: Map;
    outputLayerName?: string;
    pointLayer: FeatureLayer;
    polygonLayer: FeatureLayer;
    polygonLayers: FeatureLayer[];
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    summaryFields?: string[];
  }
  export interface ArcGISDynamicMapServiceLayerOptions {
    className?: string;
    gdbVersion?: string;
    id?: string;
    imageParameters?: ImageParameters;
    opacity?: number;
    refreshInterval?: number;
    resourceInfo?: any;
    showAttribution?: boolean;
    useMapImage?: boolean;
    useMapTime?: boolean;
    visible?: boolean;
  }
  export interface ArcGISImageServiceLayerOptions {
    id?: string;
    imageServiceParameters?: ImageServiceParameters;
    infoTemplate?: InfoTemplate;
    opacity?: number;
    resourceInfo?: any;
    useMapTime?: boolean;
    visible?: boolean;
  }
  export interface ArcGISTiledMapServiceLayerOptions {
    className?: string;
    displayLevels?: number;
    id?: string;
    opacity?: number;
    refreshInterval?: number;
    resampling?: boolean;
    resamplingTolerance?: number;
    resourceInfo?: any;
    showAttribution?: boolean;
    tileServers?: string[];
    visible?: boolean;
  }
  export interface AttributeInspectorOptions {
    layerInfos: any[];
  }
  export interface AttributionOptions {
    itemDelimiter?: string;
    map: Map;
  }
  export interface BasemapGalleryOptions {
    basemapIds?: string[];
    basemaps?: Basemap[];
    basemapsGroup?: any;
    bingMapsKey?: string;
    map: Map;
    portalUrl?: string;
    referenceIds?: string[];
    showArcGISBasemaps?: boolean;
  }
  export interface BasemapLayerOptions {
    bandIds?: number[];
    copyright?: string;
    displayLevels?: number[];
    fullExtent?: Extent;
    initialExtent?: Extent;
    isReference?: boolean;
    opacity?: number;
    subDomains?: string[];
    tileInfo?: TileInfo;
    tileServer?: string[];
    type?: string;
    url?: string;
    visibleLayers?: number[];
  }
  export interface BasemapOptions {
    id?: string;
    layers: BasemapLayer[];
    thumbnailUrl?: string;
    title?: string;
  }
  export interface BasemapToggleOptions {
    basemap?: string;
    basemaps?: any;
    map: Map;
    theme?: string;
    visible?: boolean;
  }
  export interface BookmarksOptions {
    bookmarks?: BookmarkItem[];
    editable?: boolean;
    map: Map;
  }
  export interface CircleOptions1 {
    geodesic ?: boolean;
    numberOfPoints?: number;
    radius?: number;
    radiusUnit?: Units;
  }
  export interface CircleOptions2 {
    center: any;
    geodesic?: boolean;
    numberOfPoints?: number;
    radius?: number;
    radiusUnit?: Units;
  }
  export interface CreateBuffersOptions {
    analysisGpServer?: string;
    bufferDistance?: number[];
    inputLayer: FeatureLayer;
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: string;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface CreateDriveTimeAreasOptions {
    analysisGpServer?: string;
    breakUnits?: string;
    breakValues?: number[];
    inputLayer: FeatureLayer;
    inputType?: string;
    map?: Map;
    outputLayerName?: string;
    overlapPolicy?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface CutOptions {
    addedGraphics?: Graphic[];
    featureLayer?: FeatureLayer;
    postUpdatedGraphics?: Graphic[];
    preUpdatedGraphics?: Graphic[];
  }
  export interface DeleteOptions {
    deletedGraphics?: Graphic[];
    featureLayer?: FeatureLayer;
  }
  export interface DirectionsOptions {
    alphabet?: any;
    canModifyStops?: boolean;
    centerAtSegmentStart?: boolean;
    dragging?: boolean;
    focusOnNewStop?: boolean;
    fromSymbol?: PictureMarkerSymbol;
    fromSymbolDrag?: PictureMarkerSymbol;
    geocoderOptions?: any;
    locatorUrl?: string;
    map?: Map;
    routeParams?: RouteParameters;
    routeSymbol?: SimpleLineSymbol;
    routeTaskUrl?: string;
    segmentInfoTemplate?: InfoTemplate;
    segmentSymbol?: SimpleLineSymbol;
    showPrintPage?: boolean;
    showReverseStopsButton?: boolean;
    showSegmentHighlight?: boolean;
    showSegmentPopup?: boolean;
    stops?: any;
    stopsInfoTemplate?: InfoTemplate;
    stopSymbol?: PictureMarkerSymbol;
    stopSymbolDrag?: PictureMarkerSymbol;
    textSymbolColor?: any;
    textSymbolFont?: Font;
    textSymbolOffset?: any;
    theme?: string;
    toSymbol?: PictureMarkerSymbol;
    toSymbolDrag?: PictureMarkerSymbol;
  }
  export interface DissolveBoundariesOptions {
    analysisGpServer?: string;
    dissolveFields?: string[];
    inputLayer: FeatureLayer;
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    summaryFields?: string[];
  }
  export interface DrawOptions {
    drawTime?: number;
    showTooltips?: boolean;
    tolerance?: number;
    tooltipOffset?: number;
  }
  export interface DriveBufferOptions {
    radius: number[];
    units: string;
  }
  export interface EditOptions {
    allowAddVertices?: boolean;
    allowDeletevertices?: boolean;
    ghostLineSymbol?: LineSymbol;
    ghostVertexSymbol?: MarkerSymbol;
    textSymbolEditorHolder?: any;
    uniformScaling?: boolean;
    vertexSymbol?: MarkerSymbol;
  }
  export interface EditorOptions {
    settings?: any;
  }
  export interface EnrichLayerOptions {
    analysisGpServer?: string;
    distance?: number;
    inputLayer: FeatureLayer;
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    showTrafficWidget?: boolean;
  }
  export interface ExtractDataOptions {
    analysisGpServer?: string;
    clip?: boolean;
    dataFormat?: string;
    featureLayers: FeatureLayer[];
    inputLayers?: FeatureLayer[];
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface FeatureLayerOptions {
    autoGeneralize?: boolean;
    className?: string;
    displayOnPan?: boolean;
    editSummaryCallback?: Function;
    gdbVersion?: string;
    id?: string;
    infoTemplate?: InfoTemplate;
    maxAllowableOffset?: number;
    mode?: number;
    opacity?: number;
    orderByFields?: string[];
    outFields?: string[];
    refreshInterval?: number;
    resourceInfo?: any;
    showAttribution?: boolean;
    tileHeight?: number;
    tileWidth?: number;
    trackIdField?: string;
    useMapTime?: boolean;
    visible?: boolean;
  }
  export interface FindHotSpotsOptions {
    aggregationPolygonLayers: FeatureLayer[];
    analysisField?: string;
    analysisGpServer?: string;
    analysisLayer: FeatureLayer;
    boundingPolygonLayers: FeatureLayer[];
    isProcessInfo?: boolean;
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface FindNearestOptions {
    analysisGpServer?: string;
    analysisLayer: FeatureLayer;
    map?: Map;
    maxCount?: number;
    nearLayer: FeatureLayer;
    nearLayers: FeatureLayer[];
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    searchCutoff?: number;
    searchCutoffUnits?: string;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface FindTaskOptions {
    gdbVersion?: string;
  }
  export interface GalleryOptions {
    items: any[];
    showTitle?: boolean;
    thumbnailStyle?: string;
  }
  export interface GaugeOptions {
    caption?: string;
    color?: string;
    dataField?: string;
    dataFormat?: string;
    dataLabelField?: string;
    fromWebmap?: boolean;
    layer?: GraphicsLayer;
    maxDataValue?: number;
    noDataLabel?: string;
    numberFormat?: any;
    title?: string;
    unitLabel?: string;
  }
  export interface GenerateRendererTaskOptions {
    checkValueRange?: boolean;
    gdbVersion?: string;
  }
  export interface GeoRSSLayerOptions {
    outSpatialReference?: SpatialReference;
    pointSymbol?: Symbol;
    polygonSymbol?: Symbol;
    polylineSymbol?: Symbol;
    template?: InfoTemplate;
  }
  export interface GeocoderOptions {
    arcgisGeocoder?: any;
    autoComplete?: boolean;
    autoNavigate?: boolean;
    geocoderMenu?: boolean;
    geocoders?: any[];
    map: Map;
    maxLocations?: number;
    minCharacters?: number;
    searchDelay?: number;
    showResults?: boolean;
    theme?: string;
    value?: string;
    zoomScale?: number;
  }
  export interface GraphicsLayerOptions {
    className?: string;
    dataAttributes?: any;
    displayOnPan?: boolean;
    id?: string;
    opacity?: number;
    refreshInterval?: number;
    styling?: boolean;
    visible?: boolean;
  }
  export interface Handle {
    remove(): void;
  }
  export interface HistogramTimeSliderOptions {
    color?: string;
    dateFormat?: string;
    layers?: Layer[];
    mode?: string;
    timeInterval?: string;
  }
  export interface HomeButtonOptions {
    extent?: Extent;
    map: Map;
    theme?: string;
    visible?: boolean;
  }
  export interface IdentifyTaskOptions {
    gdbVersion?: string;
  }
  export interface KMLLayerOptions {
    className?: string;
    outSR?: SpatialReference;
    refreshInterval?: number;
  }
  export interface LayerOptions {
    className?: string;
    refreshInterval?: number;
    showAttribution?: boolean;
  }
  export interface LayerSwipeOptions {
    clip?: number;
    enabled?: boolean;
    layers: Layer[];
    left?: number;
    map: Map;
    theme?: string;
    top?: number;
    type?: string;
  }
  export interface LegendOptions {
    arrangement?: number;
    autoUpdate?: boolean;
    layerInfos?: any[];
    map: Map;
    respectCurrentMapScale?: boolean;
  }
  export interface LocateButtonOptions {
    centerAt?: boolean;
    geolocationOptions?: any;
    graphicsLayer?: GraphicsLayer;
    highlightLocation?: boolean;
    infoTemplate?: InfoTemplate;
    map: Map;
    scale?: number;
    setScale?: boolean;
    symbol?: Symbol;
    theme?: string;
    useTracking?: boolean;
    visible?: boolean;
  }
  export interface MapImageOptions {
    extent?: Extent;
    href?: string;
  }
  export interface MapOptions {
    attributionWidth?: number;
    autoResize?: boolean;
    basemap?: string;
    center?: any;
    displayGraphicsOnPan?: boolean;
    extent?: Extent;
    fadeOnZoom?: boolean;
    fitExtent?: boolean;
    force3DTransforms?: boolean;
    infoWindow?: InfoWindowBase;
    lods?: LOD[];
    logo?: boolean;
    maxScale?: number;
    maxZoom?: number;
    minScale?: number;
    minZoom?: number;
    nav?: boolean;
    navigationMode?: string;
    optimizePanAnimation?: boolean;
    resizeDelay?: number;
    scale?: number;
    showAttribution?: boolean;
    showInfoWindowOnClick?: boolean;
    slider?: boolean;
    sliderLabels?: string[];
    sliderOrientation?: string;
    sliderPosition?: string;
    sliderStyle?: string;
    wrapAround180?: boolean;
    zoom?: number;
  }
  export interface MeasurementOptions {
    defaultAreaUnit?: Units;
    defaultLengthUnit?: Units;
    lineSymbol?: SimpleLineSymbol;
    map: Map;
    pointSymbol?: MarkerSymbol;
  }
  export interface MergeLayersOptions {
    analysisGpServer?: string;
    inputLayer: FeatureLayer;
    map?: Map;
    mergeLayers: FeatureLayer[];
    mergingAttributes?: string[];
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
  }
  export interface NAOutputLine {
    NONE: any;
    STRAIGHT: any;
    TRUE_SHAPE: any;
    TRUE_SHAPE_WITH_MEASURE: any;
  }
  export interface NAOutputPolygon {
    DETAILED: any;
    NONE: any;
    SIMPLIFIED: any;
  }
  export interface NATravelDirection {
    FROM_FACILITY: any;
    TO_FACILITY: any;
  }
  export interface NAUTurn {
    ALLOW_BACKTRACK: any;
    AT_DEAD_ENDS_AND_INTERSECTIONS: any;
    AT_DEAD_ENDS_ONLY: any;
    NO_BACKTRACK: any;
  }
  export interface OpenStreetMapLayerOptions {
    displayLevels?: number[];
    id?: string;
    opacity?: number;
    resampling?: boolean;
    resamplingTolerance?: number;
    tileServers?: string[];
    visible?: boolean;
  }
  export interface OperationBaseOptions {
    label?: string;
    type?: string;
  }
  export interface OverlayLayersOptions {
    analysisGpServer?: string;
    inputLayer: FeatureLayer;
    map?: Map;
    outputLayerName?: string;
    overlayLayer: FeatureLayer[];
    overlayType?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    snapToInput?: boolean;
    tolerance?: number;
  }
  export interface OverviewMapOptions {
    attachTo?: string;
    baseLayer?: Layer;
    color?: string;
    expandFactor?: number;
    height?: number;
    id?: string;
    map: Map;
    maximizeButton?: boolean;
    opacity?: number;
    visible?: boolean;
    width?: number;
  }
  export interface PopupMobileOptions {
    fillSymbol?: FillSymbol;
    highlight?: boolean;
    lineSymbol?: LineSymbol;
    marginLeft?: number;
    marginTop?: number;
    markerSymbol?: MarkerSymbol;
    offsetX?: number;
    offsetY?: number;
    zoomFactor?: number;
  }
  export interface PopupOptions {
    anchor?: string;
    fillSymbol?: FillSymbol;
    highlight?: boolean;
    keepHighlightOnHide?: boolean;
    lineSymbol?: LineSymbol;
    marginLeft?: number;
    marginTop?: number;
    markerSymbol?: MarkerSymbol;
    offsetX?: number;
    offsetY?: number;
    pagingControls?: boolean;
    pagingInfo?: boolean;
    popupWindow?: boolean;
    titleInBody?: boolean;
    zoomFactor?: number;
  }
  export interface PopupTemplateOptions {
    utcOffset?: number;
  }
  export interface PrintOptions {
    async?: boolean;
    map?: Map;
    templates?: PrintTemplate[];
    url?: string;
  }
  export interface PrintTaskOptions {
    async?: boolean;
  }
  export interface QueryTaskOptions {
    gdbVersion?: string;
  }
  export interface RingBufferOptions {
    radii: number[];
    units: string;
  }
  export interface ScaleDependentRendererOptions {
    rendererInfos?: any[];
  }
  export interface ScalebarOptions {
    attachTo?: string;
    map: Map;
    scalebarStyle?: string;
    scalebarUnit?: string;
  }
  export interface SnappingManagerOptions {
    alwaysSnap?: boolean;
    layerInfos?: any[];
    map: Map;
    snapKey?: any;
    snapPointSymbol?: SimpleMarkerSymbol;
    tolerance?: number;
  }
  export interface StreamLayerOptions {
    className?: string;
    purgeOptions?: any;
    refreshInterval?: number;
    socketUrl?: string;
  }
  export interface SummarizeNearbyOptions {
    analysisGpServer?: string;
    distance?: number[];
    groupByField?: string;
    map?: Map;
    nearType?: string;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    shapeUnits?: string;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    summaryFields?: string[];
    summaryLayer?: FeatureLayer;
    summaryLayers: FeatureLayer[];
    sumNearbyLayer: FeatureLayer;
    sumShape?: boolean;
    units?: string;
  }
  export interface SummarizeWithinOptions {
    analysisGpServer?: string;
    groupByField?: string;
    map?: Map;
    outputLayerName?: string;
    portalUrl?: string;
    returnFeatureCollection?: boolean;
    showChooseExtent?: boolean;
    showCredits?: boolean;
    showHelp?: boolean;
    showSelectFolder?: boolean;
    summaryFields?: string;
    summaryLayer?: FeatureLayer;
    summaryLayers: FeatureLayer[];
    sumWithinLayer: FeatureLayer;
  }
  export interface TemplatePickerOptions {
    columns?: number;
    emptyMessage?: string;
    featureLayers?: FeatureLayer[];
    grouping?: boolean;
    items?: any[];
    maxLabelLength?: number;
    rows?: number;
    showTooltip?: boolean;
    style?: string;
    useLegend?: boolean;
  }
  export interface TimeSliderOptions {
    excludeDataAtLeadingThumb?: boolean;
    excludeDataAtTrailingThumb?: boolean;
  }
  export interface UndoManagerOptions {
    maxOperations?: number;
  }
  export interface UnionOptions {
    deletedGraphics?: Graphic[];
    featureLayer?: FeatureLayer;
    postUpdatedGraphics?: Graphic[];
    preUpdatedGraphics?: Graphic[];
  }
  export interface UpdateOptions {
    featureLayer?: FeatureLayer;
    postUpdatedGraphics?: Graphic[];
    preUpdatedGraphics?: Graphic[];
  }
  export interface VEGeocoderOptions {
    bingMapsKey?: string;
    culture?: string;
  }
  export interface VETiledLayerOptions {
    bingMapsKey?: string;
    className?: string;
    culture?: string;
    mapStyle?: string;
    refreshInterval?: number;
  }
  export interface WMSLayerOptions {
    format?: string;
    resourceInfo?: any;
    transparent?: boolean;
    visibleLayers?: string[];
  }
  export interface WMTSLayerInfoOptions {
    description?: string;
    format?: string;
    fullExtent?: Extent;
    identifier?: string;
    initialExtent?: Extent;
    style?: string;
    tileInfo?: TileInfo;
    tileMatrixSet?: string;
    title?: string;
  }
  export interface WMTSLayerOptions {
    layerInfo?: WMTSLayerInfo;
    resampling?: boolean;
    resamplingTolerance?: number;
    resourceInfo?: any;
    serviceMode?: string;
  }
  export interface WebTiledLayerOptions {
    copyright?: string;
    fullExtent?: Extent;
    initialExtent?: Extent;
    resampling?: boolean;
    resamplingTolerance?: number;
    subDomains?: string[];
    tileInfo?: TileInfo;
    tileServers?: string[];
  }
}

declare module "esri/IdentityManager" {
  import esri = require("esri");
  import IdentityManagerBase = require("esri/IdentityManagerBase");

  class IdentityManager extends IdentityManagerBase {
    dialog: any;
    signIn(): any;
    on(type: "dialog-cancel", listener: (event: { info: any; target: IdentityManager }) => void): esri.Handle
    on(type: "dialog-create", listener: (event: { target: IdentityManager }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = IdentityManager;
}

declare module "esri/IdentityManagerBase" {
  import ServerInfo = require("esri/ServerInfo");

  class IdentityManagerBase {
    tokenValidity: number;
    findCredential(url: string, userId?: string): any;
    findServerInfo(url: string): ServerInfo;
    generateToken(serverInfo: ServerInfo, userInfo: any, options?: any): any;
    getCredential(url: string, options?: any): any;
    initialize(json: Object): any;
    isBusy(): boolean;
    registerServers(serverInfos: ServerInfo[]): void;
    registerToken(properties: any): void;
    setProtocolErrorHandler(handlerFunction: Function): void;
    setRedirectionHandler(handler: any): void;
    signIn(url: string, serverInfo: ServerInfo, options?: any): any;
    toJson(): any;
  }
  export = IdentityManagerBase;
}

declare module "esri/InfoTemplate" {
  class InfoTemplate {
    content: any;
    title: any;
    constructor();
    constructor(title: string, content: string);
    constructor(json: Object);
    setContent(template: string): InfoTemplate;
    setContent(template: Function): InfoTemplate;
    setTitle(template: string): InfoTemplate;
    setTitle(template: Function): InfoTemplate;
    toJson(): any;
  }
  export = InfoTemplate;
}

declare module "esri/InfoWindowBase" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Point = require("esri/geometry/Point");

  class InfoWindowBase {
    domNode: any;
    isShowing: boolean;
    destroyDijits(): void;
    hide(): void;
    place(value: string, parentNode: HTMLElement): void;
    place(value: HTMLElement, parentNode: HTMLElement): void;
    resize(width: number, height: number): void;
    setContent(content: string): void;
    setContent(content: any): void;
    setMap(map: Map): void;
    setTitle(title: string): void;
    setTitle(title: any): void;
    show(location: Point): void;
    startupDijits(): void;
    unsetMap(map: Map): void;
    on(type: "hide", listener: (event: { target: InfoWindowBase }) => void): esri.Handle
    on(type: "show", listener: (event: { target: InfoWindowBase }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = InfoWindowBase;
}

declare module "esri/OperationBase" {
  import esri = require("esri");

  class OperationBase {
    label: string;
    type: string;
    constructor(params: esri.OperationBaseOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = OperationBase;
}

declare module "esri/ServerInfo" {
  class ServerInfo {
    adminTokenServiceUrl: string;
    currentVersion: number;
    server: string;
    shortLivedTokenValidity: number;
    tokenServiceUrl: string;
    toJson(): any;
  }
  export = ServerInfo;
}

declare module "esri/SnappingManager" {
  import esri = require("esri");
  import Point = require("esri/geometry/Point");

  class SnappingManager {
    constructor(options?: esri.SnappingManagerOptions);
    destroy(): void;
    getSnappingPoint(screenPoint: Point): any;
    setLayerInfos(setLayerInfos: any[]): void;
  }
  export = SnappingManager;
}

declare module "esri/SpatialReference" {
  class SpatialReference {
    wkid: number;
    wkt: string;
    constructor(json: Object);
    constructor(wkid: number);
    constructor(wkt: string);
    equals(sr: SpatialReference): boolean;
    isWebMercator(): boolean;
    toJson(): any;
  }
  export = SpatialReference;
}

declare module "esri/TimeExtent" {
  class TimeExtent {
    endTime: Date;
    startTime: Date;
    constructor(startTime: Date, endTime: Date);
    intersection(timeExtent: number): TimeExtent;
    offset(offsetValue: number, offsetUnits: string): TimeExtent;
  }
  export = TimeExtent;
}

declare module "esri/arcgis/Portal" {
  import esri = require("esri");

  export class Portal {
    access: string;
    allSSL: boolean;
    basemapGalleryGroupQuery: string;
    canSearchPublic: boolean;
    canSharePublic: boolean;
    created: Date;
    culture: string;
    defaultBasemap: any;
    defaultExtent: any;
    description: string;
    featuredGroups: any[];
    featuredItemsGroupQuery: string;
    id: string;
    isOrganization: boolean;
    layerTemplatesGroupQuery: string;
    modified: Date;
    name: string;
    portalMode: string;
    portalName: string;
    symbolSetsGroupQuery: string;
    templatesGroupQuery: string;
    thumbnailUrl: string;
    url: string;
    constructor(url: string);
    getPortalUser(): PortalUser;
    queryGroups(queryParams?: PortalQueryParams): any;
    queryItems(queryParams?: PortalQueryParams): any;
    queryUsers(queryParams?: PortalQueryParams): any;
    signIn(): any;
    signOut(): Portal;
    on(type: "load", listener: (event: { target: Portal }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export class PortalComment {
    comment: string;
    created: string;
    id: string;
    owner: string;
  }
  export class PortalFolder {
    created: Date;
    id: string;
    portal: Portal;
    title: string;
    url: string;
    getItems(): any;
  }
  export class PortalGroup {
    access: string;
    created: Date;
    description: string;
    id: string;
    isInvitationOnly: boolean;
    isViewOnly: boolean;
    modified: Date;
    owner: Portal;
    portal: Portal;
    snippet: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    url: string;
    getMembers(): any;
    queryItems(queryParams?: PortalQueryParams): any;
  }
  export class PortalGroupMembers {
    admins: string[];
    owner: string;
    users: string[];
  }
  export class PortalItem {
    access: string;
    accessInformation: string;
    avgRating: number;
    created: Date;
    culture: string;
    description: string;
    extent: any;
    id: string;
    itemDataUrl: string;
    itemUrl: string;
    licenseInfo: string;
    modified: Date;
    name: string;
    numComments: number;
    numRatings: number;
    numViews: number;
    owner: string;
    portal: Portal;
    size: number;
    snippet: string;
    spatialReference: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
    type: string;
    typeKeywords: string[];
    url: string;
    userItemUrl: string;
    addComment(comment: string): any;
    addRating(rating: number): any;
    deleteComment(comment: PortalComment): any;
    deleteRating(rating: PortalRating): any;
    getComments(): any;
    getRating(): any;
    updateComment(comment: PortalComment): any;
  }
  export class PortalQueryParams {
    num: string;
    q: string;
    sortField: string;
    start: string;
  }
  export class PortalQueryResult {
    nextQueryParams: PortalQueryParams;
    queryParams: PortalQueryParams;
    results: any[];
    total: number;
  }
  export class PortalRating {
    created: Date;
    rating: number;
  }
  export class PortalUser {
    access: string;
    created: Date;
    culture: string;
    description: string;
    email: string;
    fullName: string;
    modified: Date;
    orgId: string;
    portal: Portal;
    preferredView: string;
    region: string;
    role: string;
    tags: string[];
    thumbnailUrl: string;
    userContentUrl: string;
    username: string;
    getFolders(): any;
    getGroupInvitations(): any;
    getGroups(): any;
    getItem(itemId: string): any;
    getItems(folderId: string): any;
    getNotifications(): any;
    getTags(): any;
  }
}

declare module "esri/arcgis/utils" {
  import Layer = require("esri/layers/layer");

  var utils: {
    arcgisUrl: string;
    createMap(itemIdOrItemInfo: string, mapDiv: string, options?: any): any;
    createMap(itemIdOrItemInfo: any, mapDiv: string, options?: any): any;
    getItem(itemId: string): any;
    getLegendLayers(createMapResponse: any): Layer[];
  };
  export = utils;
}

declare module "esri/config" {
  var config: {
    defaults: any;
  };
  export = config;
}

declare module "esri/dijit/AttributeInspector" {
  import esri = require("esri");
  import Graphic = require("esri/graphic");

  class AttributeInspector {
    static STRING_FIELD_OPTION_RICHTEXT: any;
    static STRING_FIELD_OPTION_TEXTAREA: any;
    static STRING_FIELD_OPTION_TEXTBOX: any;
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.AttributeInspectorOptions, srcNodeRef: string);
    destroy(): void;
    first(): void;
    last(): void;
    next(): void;
    previous(): void;
    refresh(): void;
    on(type: "attribute-change", listener: (event: { feature: Graphic; fieldName: string; fieldValue: string; target: AttributeInspector }) => void): esri.Handle
    on(type: "delete", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): esri.Handle
    on(type: "next", listener: (event: { feature: Graphic; target: AttributeInspector }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = AttributeInspector;
}

declare module "esri/dijit/Attribution" {
  import esri = require("esri");
  import Map = require("esri/map");

  class Attribution {
    itemDelimiter: string;
    itemNodes: any;
    listNode: HTMLSpanElement;
    map: Map;
    constructor(options: esri.AttributionOptions, srcNodeRef: HTMLElement);
    constructor(options: esri.AttributionOptions, srcNodeRef: string);
    destroy(): void;
  }
  export = Attribution;
}

declare module "esri/dijit/Basemap" {
  import esri = require("esri");
  import BasemapLayer = require("esri/dijit/BasemapLayer");

  class Basemap {
    id: string;
    thumbnailUrl: string;
    title: string;
    constructor(params: esri.BasemapOptions);
    getLayers(): BasemapLayer[];
  }
  export = Basemap;
}

declare module "esri/dijit/BasemapGallery" {
  import esri = require("esri");
  import Basemap = require("esri/dijit/Basemap");

  class BasemapGallery {
    basemaps: Basemap[];
    loaded: boolean;
    portalUrl: string;
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: HTMLElement);
    constructor(params: esri.BasemapGalleryOptions, srcNodeRef?: string);
    add(basemap: Basemap): boolean;
    destroy(): void;
    get(id: string): Basemap;
    getSelected(): Basemap;
    remove(id: string): Basemap;
    select(id: string): Basemap;
    startup(): void;
    on(type: "add", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): esri.Handle
    on(type: "error", listener: (event: { target: BasemapGallery }) => void): esri.Handle
    on(type: "load", listener: (event: { target: BasemapGallery }) => void): esri.Handle
    on(type: "remove", listener: (event: { basemap: Basemap; target: BasemapGallery }) => void): esri.Handle
    on(type: "selection-change", listener: (event: { target: BasemapGallery }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = BasemapGallery;
}

declare module "esri/dijit/BasemapLayer" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");
  import TileInfo = require("esri/layers/TileInfo");

  class BasemapLayer {
    copyright: string;
    fullExtent: Extent;
    initialExtent: Extent;
    subDomains: string[];
    tileInfo: TileInfo;
    tileServer: string[];
    type: string;
    constructor(params: esri.BasemapLayerOptions);
  }
  export = BasemapLayer;
}

declare module "esri/dijit/BasemapToggle" {
  import esri = require("esri");
  import Map = require("esri/map");

  class BasemapToggle {
    basemap: string;
    basemaps: any;
    loaded: boolean;
    map: Map;
    theme: string;
    visible: boolean;
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.BasemapToggleOptions, srcNodeRef: string);
    destroy(): void;
    hide(): void;
    show(): void;
    startup(): void;
    toggle(): void;
    on(type: "load", listener: (event: { target: BasemapToggle }) => void): esri.Handle
    on(type: "toggle", listener: (event: { currentBasemap: string; error: any; previousBasemap: string; target: BasemapToggle }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = BasemapToggle;
}

declare module "esri/dijit/BookmarkItem" {
  import Extent = require("esri/geometry/Extent");

  class BookmarkItem {
    constructor(name: string, extent: Extent);
  }
  export = BookmarkItem;
}

declare module "esri/dijit/Bookmarks" {
  import esri = require("esri");
  import BookmarkItem = require("esri/dijit/BookmarkItem");

  class Bookmarks {
    bookmarks: BookmarkItem[];
    constructor(params: esri.BookmarksOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.BookmarksOptions, srcNodeRef: string);
    addBookmark(bookmarkItem: BookmarkItem): void;
    destroy(): void;
    hide(): void;
    removeBookmark(bookmarkName: string): void;
    show(): void;
    toJson(): any;
    on(type: "click", listener: (event: { target: Bookmarks }) => void): esri.Handle
    on(type: "edit", listener: (event: { target: Bookmarks }) => void): esri.Handle
    on(type: "remove", listener: (event: { target: Bookmarks }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
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

  class Directions {
    directions: DirectionsFeatureSet;
    geocoderResults: any[];
    maxStopsReached: boolean;
    mergedRouteGraphic: Graphic;
    routeParams: RouteParameters;
    routeTask: RouteTask;
    stops: Graphic[];
    theme: string;
    constructor(options: esri.DirectionsOptions, srcNodeRef: HTMLElement);
    constructor(options: esri.DirectionsOptions, srcNodeRef: string);
    addStop(stop: Point, index?: number): any;
    addStop(stop: number[], index?: number): any;
    addStop(stop: string, index?: number): any;
    addStop(stop: any, index?: number): any;
    addStops(stops: Point[], index?: number): any;
    addStops(stops: number[][], index?: number): any;
    addStops(stops: string[], index?: number): any;
    addStops(stops: any[], index?: number): any;
    centerAtSegmentStart(index: number): void;
    clearDirections(): void;
    destroy(): void;
    getDirections(): any;
    highlightSegment(index: number): void;
    removeStop(index: number): any;
    removeStops(): void;
    reset(): void;
    startup(): void;
    unhighlightSegment(): void;
    updateStop(stop: Point, index: number): any;
    updateStop(stop: number[], index: number): any;
    updateStop(stop: string, index: number): any;
    updateStop(stop: any, index: number): any;
    updateStops(stops: Point[]): any;
    updateStops(stops: number[][]): any;
    updateStops(stops: string[]): any;
    updateStops(stops: any[]): any;
    zoomToFullRoute(): void;
    zoomToSegment(index: number): void;
    on(type: "directions-clear", listener: (event: { target: Directions }) => void): esri.Handle
    on(type: "directions-finish", listener: (event: { result: RouteResult; target: Directions }) => void): esri.Handle
    on(type: "directions-start", listener: (event: { target: Directions }) => void): esri.Handle
    on(type: "load", listener: (event: { target: Directions }) => void): esri.Handle
    on(type: "segment-highlight", listener: (event: { graphic: Graphic; target: Directions }) => void): esri.Handle
    on(type: "segment-select", listener: (event: { graphic: Graphic; target: Directions }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Directions;
}

declare module "esri/dijit/Gallery" {
  import esri = require("esri");

  class Gallery {
    constructor(params: esri.GalleryOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.GalleryOptions, srcNodeRef: string);
    destroy(): void;
    getFocusedItem(): any;
    getSelectedItem(): any;
    next(): void;
    previous(): void;
    select(item: any): void;
    setFocus(item: any): void;
    startup(): void;
    on(type: "focus", listener: (event: { item: any; target: Gallery }) => void): esri.Handle
    on(type: "select", listener: (event: { item: any; target: Gallery }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Gallery;
}

declare module "esri/dijit/Gauge" {
  import esri = require("esri");

  class Gauge {
    constructor(params: esri.GaugeOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.GaugeOptions, srcNodeRef: string);
    destroy(): void;
    get(name: string): any;
    set(name: string, value: any): Gauge;
    startup(): void;
  }
  export = Gauge;
}

declare module "esri/dijit/Geocoder" {
  import esri = require("esri");

  class Geocoder {
    activeGeocoder: any;
    activeGeocoderIndex: number;
    autoComplete: boolean;
    autoNavigate: boolean;
    geocoderMenu: boolean;
    geocoders: any[];
    maxLocations: number;
    minCharacters: number;
    results: any[];
    searchDelay: number;
    showResults: boolean;
    theme: string;
    value: string;
    zoomScale: number;
    constructor(params: esri.GeocoderOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.GeocoderOptions, srcNodeRef: string);
    blur(): void;
    clear(): void;
    destroy(): void;
    find(): any;
    focus(): void;
    hide(): void;
    select(result: any): void;
    show(): void;
    startup(): void;
    on(type: "auto-complete", listener: (event: { results : any; target: Geocoder }) => void): esri.Handle
    on(type: "clear", listener: (event: { target: Geocoder }) => void): esri.Handle
    on(type: "find-results", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle
    on(type: "geocoder-select", listener: (event: { geocoder: any; target: Geocoder }) => void): esri.Handle
    on(type: "select", listener: (event: { results: any; target: Geocoder }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Geocoder;
}

declare module "esri/dijit/HistogramTimeSlider" {
  import esri = require("esri");

  class HistogramTimeSlider {
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.HistogramTimeSliderOptions, srcNodeRef: string);
    destroy(): void;
    on(type: "time-extent-change", listener: (event: { target: HistogramTimeSlider }) => void): esri.Handle
    on(type: "update", listener: (event: { target: HistogramTimeSlider }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = HistogramTimeSlider;
}

declare module "esri/dijit/HomeButton" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");
  import Map = require("esri/map");

  class HomeButton {
    extent: Extent;
    loaded: boolean;
    map: Map;
    theme: string;
    visible: boolean;
    constructor(params: esri.HomeButtonOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.HomeButtonOptions, srcNodeRef: string);
    destroy(): void;
    hide(): void;
    home(): void;
    show(): void;
    startup(): void;
    on(type: "home", listener: (event: { error: any; extent: Extent; target: HomeButton }) => void): esri.Handle
    on(type: "load", listener: (event: { target: HomeButton }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = HomeButton;
}

declare module "esri/dijit/InfoWindow" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Point = require("esri/geometry/Point");

  class InfoWindow extends InfoWindowBase {
    static ANCHOR_LOWERLEFT: any;
    static ANCHOR_LOWERRIGHT: any;
    static ANCHOR_UPPERLEFT: any;
    static ANCHOR_UPPERRIGHT: any;
    anchor: string;
    coords: Point;
    fixedAnchor: string;
    isShowing: boolean;
    constructor(params: any, srcNodeRef: HTMLElement);
    constructor(params: any, srcNodeRef: string);
    hide(): void;
    move(point: Point): void;
    resize(width: number, height: number): void;
    setContent(content: any): InfoWindow;
    setFixedAnchor(anchor: string): void;
    setTitle(title: string): InfoWindow;
    show(point: Point, placement?: string): void;
    on(type: "hide", listener: (event: { target: InfoWindow }) => void): esri.Handle
    on(type: "show", listener: (event: { target: InfoWindow }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = InfoWindow;
}

declare module "esri/dijit/InfoWindowLite" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Point = require("esri/geometry/Point");
  import InfoWindow = require("esri/dijit/InfoWindow");

  class InfoWindowLite extends InfoWindowBase {
    anchor: string;
    coords: Point;
    fixedAnchor: string;
    isShowing: boolean;
    hide(): void;
    move(point: Point): void;
    resize(width: number, height: number): void;
    setContent(content: any): void;
    setFixedAnchor(anchor: string): void;
    setTitle(title: string): InfoWindow;
    show(point: Point, placement?: string): void;
    on(type: "hide", listener: (event: { target: InfoWindowLite }) => void): esri.Handle
    on(type: "show", listener: (event: { target: InfoWindowLite }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = InfoWindowLite;
}

declare module "esri/dijit/LayerSwipe" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Map = require("esri/map");

  class LayerSwipe {
    clip: number;
    enabled: boolean;
    layers: Layer[];
    left: number;
    loaded: boolean;
    map: Map;
    theme: string;
    top: number;
    type: string;
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.LayerSwipeOptions, srcNodeRef: string);
    destroy(): void;
    disable(): void;
    enable(): void;
    startup(): void;
    swipe(): void;
    on(type: "load", listener: (event: { target: LayerSwipe }) => void): esri.Handle
    on(type: "swipe", listener: (event: { layers: any[]; target: LayerSwipe }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = LayerSwipe;
}

declare module "esri/dijit/Legend" {
  import esri = require("esri");

  class Legend {
    constructor(params: esri.LegendOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.LegendOptions, srcNodeRef: string);
    destroy(): void;
    refresh(): void;
    startup(): void;
  }
  export = Legend;
}

declare module "esri/dijit/LocateButton" {
  import esri = require("esri");
  import InfoTemplate = require("esri/InfoTemplate");
  import Map = require("esri/map");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class LocateButton {
    centerAt: boolean;
    geolocationOptions: any;
    highlightLocation: boolean;
    infoTemplate: InfoTemplate;
    loaded: boolean;
    map: Map;
    scale: number;
    setScale: boolean;
    symbol: Symbol;
    theme: string;
    tracking: boolean;
    useTracking: boolean;
    visible: boolean;
    constructor(params: esri.LocateButtonOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.LocateButtonOptions, srcNodeRef: string);
    clear(): void;
    destroy(): void;
    hide(): void;
    locate(): any;
    show(): void;
    startup(): void;
    on(type: "load", listener: (event: { target: LocateButton }) => void): esri.Handle
    on(type: "locate", listener: (event: { error: any; graphic: Graphic; position: any; scale: number; target: LocateButton }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = LocateButton;
}

declare module "esri/dijit/Measurement" {
  import esri = require("esri");
  import Geometry = require("esri/geometry/Geometry");

  class Measurement {
    constructor(params: esri.MeasurementOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.MeasurementOptions, srcNodeRef: string);
    clearResult(): void;
    destroy(): void;
    hide(): void;
    hideTool(toolName: string): void;
    setTool(toolName: string, activate: boolean): void;
    show(): void;
    showTool(toolName: string): void;
    startup(): void;
    on(type: "measure-end", listener: (event: { activeToolName: string; geometry: Geometry; target: Measurement }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Measurement;
}

declare module "esri/dijit/OverviewMap" {
  import esri = require("esri");

  class OverviewMap {
    constructor(params: esri.OverviewMapOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.OverviewMapOptions, srcNodeRef: string);
    destroy(): void;
    hide(): void;
    show(): void;
    startup(): void;
  }
  export = OverviewMap;
}

declare module "esri/dijit/Popup" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Graphic = require("esri/graphic");
  import Point = require("esri/geometry/Point");

  class Popup extends InfoWindowBase {
    count: number;
    deferreds: any[];
    domNode: any;
    features: Graphic[];
    hideDelay: number;
    highlight: boolean;
    isShowing: boolean;
    selectedIndex: number;
    visibleWhenEmpty: boolean;
    constructor(options: esri.PopupOptions, srcNodeRef: HTMLElement);
    constructor(options: esri.PopupOptions, srcNodeRef: string);
    clearFeatures(): void;
    destroy(): void;
    getSelectedFeature(): Graphic;
    hide(): void;
    maximize(): void;
    reposition(): void;
    resize(width: number, height: number): void;
    restore(): void;
    select(index: number): void;
    setContent(content: string): void;
    setContent(content: Function): void;
    setFeatures(features: Graphic[]): void;
    setFeatures(features: any[]): void;
    setTitle(title: string): void;
    setTitle(title: Function): void;
    show(location: Point, options?: any): void;
    on(type: "clear-features", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "hide", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "maximize", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "restore", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "selection-change", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "set-features", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: "show", listener: (event: { target: Popup }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Popup;
}

declare module "esri/dijit/PopupMobile" {
  import esri = require("esri");
  import InfoWindowBase = require("esri/InfoWindowBase");
  import Graphic = require("esri/graphic");
  import Point = require("esri/geometry/Point");

  class PopupMobile extends InfoWindowBase {
    constructor(options: esri.PopupMobileOptions, srcNodeRef: HTMLElement);
    constructor(options: esri.PopupMobileOptions, srcNodeRef: string);
    clearFeatures(): void;
    destroy(): void;
    getSelectedFeature(): Graphic;
    hide(): void;
    select(index: number): void;
    setContent(content: string): void;
    setContent(content: Function): void;
    setFeatures(features: Graphic[]): any;
    setFeatures(features: any[]): any;
    setTitle(title: string): void;
    setTitle(title: Function): void;
    show(location: Point): void;
    on(type: "clear-features", listener: (event: { target: PopupMobile }) => void): esri.Handle
    on(type: "hide", listener: (event: { target: PopupMobile }) => void): esri.Handle
    on(type: "selection-change", listener: (event: { target: PopupMobile }) => void): esri.Handle
    on(type: "set-features", listener: (event: { target: PopupMobile }) => void): esri.Handle
    on(type: "show", listener: (event: { target: PopupMobile }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = PopupMobile;
}

declare module "esri/dijit/PopupTemplate" {
  import esri = require("esri");

  class PopupTemplate {
    info: any;
    constructor(popupInfo: any, options?: esri.PopupTemplateOptions);
  }
  export = PopupTemplate;
}

declare module "esri/dijit/Print" {
  import esri = require("esri");

  class Print {
    constructor(params: esri.PrintOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.PrintOptions, srcNodeRef: string);
    destroy(): void;
    hide(): void;
    show(): void;
    startup(): void;
    on(type: "error", listener: (event: { error: Error; target: Print }) => void): esri.Handle
    on(type: "print-complete", listener: (event: { value: any; target: Print }) => void): esri.Handle
    on(type: "print-start", listener: (event: { target: Print }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Print;
}

declare module "esri/dijit/Scalebar" {
  import esri = require("esri");

  class Scalebar {
    constructor(params: esri.ScalebarOptions, srcNodeRef?: HTMLElement);
    constructor(params: esri.ScalebarOptions, srcNodeRef?: string);
    destroy(): void;
    hide(): void;
    show(): void;
  }
  export = Scalebar;
}

declare module "esri/dijit/TimeSlider" {
  import esri = require("esri");
  import TimeExtent = require("esri/TimeExtent");

  class TimeSlider {
    loop: boolean;
    playing: boolean;
    thumbCount: number;
    thumbMovingRate: number;
    timeStops: Date[];
    constructor(params: esri.TimeSliderOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.TimeSliderOptions, srcNodeRef: string);
    createTimeStopsByCount(timeExtent: TimeExtent, count?: number): void;
    createTimeStopsByTimeInterval(timeExtent: TimeExtent, timeInterval?: number, timeIntervalUnits?: string): void;
    getCurrentTimeExtent(): TimeExtent;
    next(): void;
    pause(): void;
    play(): void;
    previous(): void;
    setLabels(labels: string[]): void;
    setLoop(loop: boolean): void;
    setThumbCount(thumbCount: number): void;
    setThumbIndexes(indexes: number[]): void;
    setThumbMovingRate(thumbMovingRate: number): void;
    setTickCount(count: number): void;
    setTimeStops(timeStops: Date[]): void;
    singleThumbAsTimeInstant(createTimeInstants: boolean): void;
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: TimeSlider }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = TimeSlider;
}

declare module "esri/dijit/analysis/AggregatePoints" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  class AggregatePoints extends AnalysisBase {
    analysisGpServer: string;
    groupByField: string;
    keepBoundariesWithNoPoints: boolean;
    map: Map;
    outputLayerName: string;
    pointLayer: FeatureLayer;
    polygonLayer: FeatureLayer;
    polygonLayers: FeatureLayer[];
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    summaryFields: string[];
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.AggregatePointsOptions, srcNodeRef: string);
  }
  export = AggregatePoints;
}

declare module "esri/dijit/analysis/AnalysisBase" {
  import esri = require("esri");

  class AnalysisBase {
    cancel(jobInfo: any): void;
    execute(params: string): void;
    getCreditsEstimate(toolName: string, jobParams: string): any;
    on(type: "close", listener: (event: { target: AnalysisBase }) => void): esri.Handle
    on(type: "drawtool-activate", listener: (event: { target: AnalysisBase }) => void): esri.Handle
    on(type: "drawtool-deactivate", listener: (event: { target: AnalysisBase }) => void): esri.Handle
    on(type: "job-cancel", listener: (event: { response: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "job-fail", listener: (event: { error: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "job-result", listener: (event: { result: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "job-status", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "job-submit", listener: (event: { params: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "job-success", listener: (event: { jobInfo: any; target: AnalysisBase }) => void): esri.Handle
    on(type: "start", listener: (event: { params: any; target: AnalysisBase }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = AnalysisBase;
}

declare module "esri/dijit/analysis/CreateBuffers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class CreateBuffers extends AnalysisBase {
    analysisGpServer: string;
    bufferDistance: number[];
    inputLayer: FeatureLayer;
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: string;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.CreateBuffersOptions, srcNodeRef: string);
  }
  export = CreateBuffers;
}

declare module "esri/dijit/analysis/CreateDriveTimeAreas" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class CreateDriveTimeAreas extends AnalysisBase {
    analysisGpServer: string;
    breakUnits: string;
    breakValues: number[];
    inputLayer: FeatureLayer;
    inputType: string;
    map: Map;
    outputLayerName: string;
    overlapPolicy: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.CreateDriveTimeAreasOptions, srcNodeRef: string);
  }
  export = CreateDriveTimeAreas;
}

declare module "esri/dijit/analysis/DissolveBoundaries" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class DissolveBoundaries extends AnalysisBase {
    analysisGpServer: string;
    dissolveFields: string[];
    inputLayer: FeatureLayer;
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    summaryFields: string[];
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.DissolveBoundariesOptions, srcNodeRef: string);
  }
  export = DissolveBoundaries;
}

declare module "esri/dijit/analysis/EnrichLayer" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class EnrichLayer extends AnalysisBase {
    analysisGpServer: string;
    distance: number;
    inputLayer: FeatureLayer;
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    showTrafficWidget: boolean;
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.EnrichLayerOptions, srcNodeRef: string);
  }
  export = EnrichLayer;
}

declare module "esri/dijit/analysis/ExtractData" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class ExtractData extends AnalysisBase {
    analysisGpServer: string;
    clip: boolean;
    dataFormat: string;
    featureLayers: FeatureLayer[];
    inputLayers: FeatureLayer[];
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.ExtractDataOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.ExtractDataOptions, srcNodeRef: string);
  }
  export = ExtractData;
}

declare module "esri/dijit/analysis/FindHotSpots" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class FindHotSpots extends AnalysisBase {
    aggregationPolygonLayers: FeatureLayer[];
    analysisField: string;
    analysisGpServer: string;
    analysisLayer: FeatureLayer;
    boundingPolygonLayers: FeatureLayer[];
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.FindHotSpotsOptions, srcNodeRef: string);
  }
  export = FindHotSpots;
}

declare module "esri/dijit/analysis/FindNearest" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class FindNearest extends AnalysisBase {
    analysisGpServer: string;
    analysisLayer: FeatureLayer;
    map: Map;
    maxCount: number;
    nearLayer: FeatureLayer;
    nearLayers: FeatureLayer[];
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    searchCutoff: number;
    searchCutoffUnits: string;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.FindNearestOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.FindNearestOptions, srcNodeRef: string);
  }
  export = FindNearest;
}

declare module "esri/dijit/analysis/MergeLayers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class MergeLayers extends AnalysisBase {
    analysisGpServer: string;
    inputLayer: FeatureLayer;
    map: Map;
    mergeLayers: FeatureLayer[];
    mergingAttributes: string[];
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    constructor(params: esri.MergeLayersOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.MergeLayersOptions, srcNodeRef: string);
  }
  export = MergeLayers;
}

declare module "esri/dijit/analysis/OverlayLayers" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Map = require("esri/map");

  class OverlayLayers extends AnalysisBase {
    analysisGpServer: string;
    inputLayer: FeatureLayer;
    map: Map;
    outputLayerName: string;
    overlayLayer: FeatureLayer[];
    overlayType: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    snapToInput: boolean;
    tolerance: number;
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.OverlayLayersOptions, srcNodeRef: string);
  }
  export = OverlayLayers;
}

declare module "esri/dijit/analysis/SummarizeNearby" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  class SummarizeNearby extends AnalysisBase {
    analysisGpServer: string;
    distance: number[];
    groupByField: string;
    map: Map;
    nearType: string;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    shapeUnits: string;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    summaryFields: string[];
    summaryLayer: FeatureLayer;
    summaryLayers: FeatureLayer[];
    sumNearbyLayer: FeatureLayer;
    sumShape: boolean;
    units: string;
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.SummarizeNearbyOptions, srcNodeRef: string);
  }
  export = SummarizeNearby;
}

declare module "esri/dijit/analysis/SummarizeWithin" {
  import esri = require("esri");
  import AnalysisBase = require("esri/dijit/analysis/AnalysisBase");
  import Map = require("esri/map");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  class SummarizeWithin extends AnalysisBase {
    analysisGpServer: string;
    groupByField: string;
    map: Map;
    outputLayerName: string;
    portalUrl: string;
    returnFeatureCollection: boolean;
    showChooseExtent: boolean;
    showCredits: boolean;
    showHelp: boolean;
    showSelectFolder: boolean;
    summaryFields: string;
    summaryLayer: FeatureLayer;
    summaryLayers: FeatureLayer[];
    sumWithinLayer: FeatureLayer;
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.SummarizeWithinOptions, srcNodeRef: string);
  }
  export = SummarizeWithin;
}

declare module "esri/dijit/editing/Add" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class Add extends OperationBase {
    constructor(params: esri.AddOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = Add;
}

declare module "esri/dijit/editing/AttachmentEditor" {
  import Graphic = require("esri/graphic");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  class AttachmentEditor {
    constructor(params: any, srcNodeRef: HTMLElement);
    constructor(params: any, srcNodeRef: string);
    showAttachments(graphic: Graphic, featureLayer: FeatureLayer): void;
    startup(): void;
  }
  export = AttachmentEditor;
}

declare module "esri/dijit/editing/Cut" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class Cut extends OperationBase {
    constructor(params: esri.CutOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = Cut;
}

declare module "esri/dijit/editing/Delete" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class Delete extends OperationBase {
    constructor(params: esri.DeleteOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = Delete;
}

declare module "esri/dijit/editing/Editor" {
  import esri = require("esri");

  class Editor {
    static CREATE_TOOL_ARROW: any;
    static CREATE_TOOL_AUTOCOMPLETE: any;
    static CREATE_TOOL_CIRCLE: any;
    static CREATE_TOOL_ELLIPSE: any;
    static CREATE_TOOL_FREEHAND_POLYGON: any;
    static CREATE_TOOL_FREEHAND_POLYLINE: any;
    static CREATE_TOOL_POLYGON: any;
    static CREATE_TOOL_POLYLINE: any;
    static CREATE_TOOL_RECTANGLE: any;
    static CREATE_TOOL_TRIANGLE: any;
    constructor(params: esri.EditorOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.EditorOptions, srcNodeRef: string);
  }
  export = Editor;
}

declare module "esri/dijit/editing/TemplatePicker" {
  import esri = require("esri");

  class TemplatePicker {
    grid: any;
    tooltip: HTMLDivElement;
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: HTMLElement);
    constructor(params: esri.TemplatePickerOptions, srcNodeRef: string);
    attr(name: string, value?: any): void;
    clearSelection(): void;
    destroy(): void;
    getSelected(): any;
    startup(): void;
    update(): void;
    on(type: "selection-change", listener: (event: { target: TemplatePicker }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = TemplatePicker;
}

declare module "esri/dijit/editing/Union" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class Union extends OperationBase {
    constructor(params: esri.UnionOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = Union;
}

declare module "esri/dijit/editing/Update" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class Update extends OperationBase {
    constructor(params: esri.UpdateOptions);
    performRedo(): void;
    performUndo(): void;
  }
  export = Update;
}

declare module "esri/dijit/geoenrichment/InfoGraphic" {
  import esri = require("esri");
  import GeometryStudyArea = require("esri/tasks/geoenrichment/GeometryStudyArea");
  import FeatureSet = require("esri/tasks/FeatureSet");

  class Infographic {
    cacheLimit: number;
    countryID: string;
    datasetID: string;
    expanded: boolean;
    returnGeometry: boolean;
    studyArea: GeometryStudyArea;
    studyAreaOptions: any;
    subtitle: string;
    title: string;
    type: string;
    variables: string[];
    constructor(params: any, srcNodeRef: HTMLElement);
    constructor(params: any, srcNodeRef: string);
    setData(data: FeatureSet, metadata?: any): void;
    startup(): void;
    on(type: "data-error", listener: (event: { error: any; target: Infographic }) => void): esri.Handle
    on(type: "data-load", listener: (event: { target: Infographic }) => void): esri.Handle
    on(type: "data-ready", listener: (event: { provider: any; target: Infographic }) => void): esri.Handle
    on(type: "data-request", listener: (event: { target: Infographic }) => void): esri.Handle
    on(type: "resize", listener: (event: { size: number[]; target: Infographic }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Infographic;
}

declare module "esri/dijit/geoenrichment/InfographicsCarousel" {
  import esri = require("esri");
  import InfographicsOptions = require("esri/dijit/geoenrichment/InfographicsOptions");
  import GeometryStudyArea = require("esri/tasks/geoenrichment/GeometryStudyArea");

  class InfographicsCarousel {
    expanded: boolean;
    options: InfographicsOptions;
    returnGeometry: boolean;
    selectedIndex: number;
    studyArea: GeometryStudyArea;
    studyAreaTitle: string;
    constructor(params: any, srcNodeRef: HTMLElement);
    constructor(params: any, srcNodeRef: string);
    startup(): void;
    on(type: "data-error", listener: (event: { error: any; target: InfographicsCarousel }) => void): esri.Handle
    on(type: "data-load", listener: (event: { target: InfographicsCarousel }) => void): esri.Handle
    on(type: "data-ready", listener: (event: { provider: any; target: InfographicsCarousel }) => void): esri.Handle
    on(type: "resize", listener: (event: { size: number[]; target: InfographicsCarousel }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = InfographicsCarousel;
}

declare module "esri/dijit/geoenrichment/InfographicsOptions" {
  class InfographicsOptions {
    studyAreaOptions: any;
    theme: string;
    constructor(json?: Object);
    getItems(countryID: string): any;
    toJson(): any;
  }
  export = InfographicsOptions;
}

declare module "esri/domUtils" {
  var domUtils: {
    documentBox: any;
    hide(element: HTMLElement): void;
    show(element: HTMLElement): void;
    toggle(element: HTMLElement): void;
  };
  export = domUtils;
}

declare module "esri/geometry/Circle" {
  import esri = require("esri");
  import Polygon = require("esri/geometry/Polygon");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");

  class Circle extends Polygon {
    center: any;
    radius: number;
    radiusUnit: string;
    rings: number[][][];
    spatialReference: SpatialReference;
    constructor(center: Point, options?: esri.CircleOptions1);
    constructor(center: number[], options?: esri.CircleOptions1);
    constructor(params: esri.CircleOptions2);
  }
  export = Circle;
}

declare module "esri/geometry/Extent" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");

  class Extent extends Geometry {
    xmax: number;
    xmin: number;
    ymax: number;
    ymin: number;
    constructor(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference);
    constructor(json: Object);
    centerAt(point: Point): Extent;
    contains(geometry: Geometry): boolean;
    expand(factor: number): Extent;
    getCenter(): Point;
    getHeight(): number;
    getWidth(): number;
    intersects(geometry: Geometry): any;
    offset(dx: number, dy: number): Extent;
    union(extent: Extent): Extent;
    update(xmin: number, ymin: number, xmax: number, ymax: number, spatialReference: SpatialReference): Extent;
  }
  export = Extent;
}

declare module "esri/geometry/Geometry" {
  import SpatialReference = require("esri/SpatialReference");

  class Geometry {
    spatialReference: SpatialReference;
    type: string;
    setSpatialReference(sr: SpatialReference): Geometry;
    toJson(): any;
  }
  export = Geometry;
}

declare module "esri/geometry/Multipoint" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Extent = require("esri/geometry/Extent");
  import Point = require("esri/geometry/Point");

  class Multipoint extends Geometry {
    points: number[][];
    constructor(spatialReference: SpatialReference);
    constructor(json: Object);
    addPoint(): Multipoint;
    getExtent(): Extent;
    getPoint(index: number): Point;
    removePoint(index: number): Point;
    setPoint(index: number, point: Point): Multipoint;
  }
  export = Multipoint;
}

declare module "esri/geometry/Point" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");

  class Point extends Geometry {
    x: number;
    y: number;
    constructor(x: number, y: number, spatialReference: SpatialReference);
    constructor(coords: number[], spatialReference: SpatialReference);
    constructor(json: Object);
    constructor(long: number, lat: number);
    constructor(point: number[]);
    constructor(point: any);
    getLatitude(): number;
    getLongitude(): number;
    normalize(): void;
    offset(dx: number, dy: number): Point;
    setLatitude(lat: number): Point;
    setLongitude(lon: number): Point;
    setX(x: number): Point;
    setY(y: number): Point;
    update(x: number, y: number): Point;
  }
  export = Point;
}

declare module "esri/geometry/Polygon" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import Extent = require("esri/geometry/Extent");

  class Polygon extends Geometry {
    rings: number[][][];
    constructor(spatialReference: SpatialReference);
    constructor(json: Object);
    constructor(coordinates: number[][]);
    constructor(coordinates: number[][][]);
    addRing(ring: Point[]): Polygon;
    addRing(ring: number[][]): Polygon;
    contains(point: Point): boolean;
    getCentroid(): Point;
    getExtent(): Extent;
    getPoint(ringIndex: number, pointIndex: number): Point;
    insertPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
    isClockwise(ring: Point[]): boolean;
    isClockwise(ring: number[][]): boolean;
    isSelfIntersecting(polygon: Polygon): boolean;
    removePoint(ringIndex: number, pointIndex: number): Point;
    removeRing(ringIndex: number): Point[];
    setPoint(ringIndex: number, pointIndex: number, point: Point): Polygon;
  }
  export = Polygon;
}

declare module "esri/geometry/Polyline" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import Extent = require("esri/geometry/Extent");

  class Polyline extends Geometry {
    paths: number[][][];
    constructor(spatialReference: SpatialReference);
    constructor(json: Object);
    constructor(coordinates: number[][]);
    constructor(coordinates: number[][][]);
    addPath(path: Point[]): Polyline;
    addPath(path: number[][]): Polyline;
    getExtent(): Extent;
    getPoint(pathIndex: number, pointIndex: number): Point;
    insertPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
    removePath(pathIndex: number): Point[];
    removePoint(pathIndex: number, pointIndex: number): Point;
    setPoint(pathIndex: number, pointIndex: number, point: Point): Polyline;
  }
  export = Polyline;
}

declare module "esri/geometry/ScreenPoint" {
  class ScreenPoint {
    x: number;
    y: number;
    constructor(x: number, y: number);
    constructor(coords: number[]);
    constructor(json: Object);
    toJson(): any;
    update(x: number, y: number): ScreenPoint;
  }
  export = ScreenPoint;
}

declare module "esri/geometry/geodesicUtils" {
  import Polygon = require("esri/geometry/Polygon");
  import Geometry = require("esri/geometry/Geometry");
  import Polyline = require("esri/geometry/Polyline");

  var geodesicUtils: {
    geodesicAreas(polygons: Polygon[], areaUnit: string): number[];
    geodesicDensify(geometry: Geometry, maxSegmentLength: number): Geometry;
    geodesicLengths(polylines: Polyline[], lengthUnit: string): number[];
  };
  export = geodesicUtils;
}

declare module "esri/geometry/jsonUtils" {
  import Geometry = require("esri/geometry/Geometry");

  var jsonUtils: {
    fromJson(json: Object): Geometry;
    getJsonType(geometry: Geometry): string;
  };
  export = jsonUtils;
}

declare module "esri/geometry/mathUtils" {
  import Point = require("esri/geometry/Point");

  var mathUtils: {
    getLength(point1: Point, point2: Point): number;
    getLineIntersection(line1start: Point, line1end: Point, line2start: Point, line2end: Point): Point;
  };
  export = mathUtils;
}

declare module "esri/geometry/normalizeUtils" {
  import Geometry = require("esri/geometry/Geometry");
  import GeometryService = require("esri/tasks/GeometryService");

  var normalizeUtils: {
    normalizeCentralMeridian(geometries: Geometry[], geometryService: GeometryService, callback: Function, errback: Function): any;
  };
  export = normalizeUtils;
}

declare module "esri/geometry/scaleUtils" {
  import Map = require("esri/map");
  import Extent = require("esri/geometry/Extent");

  var scaleUtils: {
    getExtentForScale(map: Map, scale: number): Extent;
    getScale(map: Map): number;
  };
  export = scaleUtils;
}

declare module "esri/geometry/screenUtils" {
  import Extent = require("esri/geometry/Extent");
  import Geometry = require("esri/geometry/Geometry");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import Point = require("esri/geometry/Point");

  var screenUtils: {
    toMapGeometry(extent: Extent, width: number, height: number, screenGeometry: Geometry): Geometry;
    toMapPoint(extent: Extent, width: number, height: number, screenPoint: ScreenPoint): Point;
    toScreenGeometry(extent: Extent, width: number, height: number, mapGeometry: Geometry): Geometry;
    toScreenPoint(extent: Extent, width: number, height: number, mapPoint: Point): ScreenPoint;
  };
  export = screenUtils;
}

declare module "esri/geometry/webMercatorUtils" {
  import Geometry = require("esri/geometry/Geometry");

  var webMercatorUtils: {
    geographicToWebMercator(geometry: Geometry): Geometry;
    lngLatToXY(long: number, lat: number, isLinear: boolean): number[];
    webMercatorToGeographic(geometry: Geometry): Geometry;
    xyToLngLat(long: number, lat: number): number[];
  };
  export = webMercatorUtils;
}

declare module "esri/graphic" {
  import Geometry = require("esri/geometry/Geometry");
  import InfoTemplate = require("esri/InfoTemplate");
  import Symbol = require("esri/symbols/Symbol");
  import GraphicsLayer = require("esri/layers/GraphicsLayer");

  class Graphic {
    attributes: any;
    geometry: Geometry;
    infoTemplate: InfoTemplate;
    symbol: Symbol;
    visible: boolean;
    constructor(geometry?: Geometry, symbol?: Symbol, attributes?: any, infoTemplate?: InfoTemplate);
    constructor(json: Object);
    attr(name: string, value: string): Graphic;
    draw(): Graphic;
    getContent(): string;
    getDojoShape(): any;
    getInfoTemplate(): InfoTemplate;
    getLayer(): GraphicsLayer;
    getNode(): any;
    getNodes(): any;
    getShape(): any;
    getShapes(): any;
    getTitle(): string;
    hide(): void;
    setAttributes(attributes: any): Graphic;
    setGeometry(geometry: Geometry): Graphic;
    setInfoTemplate(infoTemplate: InfoTemplate): Graphic;
    setSymbol(symbol: Symbol): Graphic;
    show(): void;
    toJson(): any;
  }
  export = Graphic;
}

declare module "esri/graphicsUtils" {
  import Graphic = require("esri/graphic");
  import Geometry = require("esri/geometry/Geometry");
  import Extent = require("esri/geometry/Extent");

  var graphicsUtils: {
    getGeometries(graphics: Graphic[]): Geometry[];
    graphicsExtent(graphics: Graphic[]): Extent;
  };
  export = graphicsUtils;
}

declare module "esri/kernel" {
  var kernel: {
    version: number;
  };
  export = kernel;
}

declare module "esri/lang" {
  var lang: {
    filter(object: any, callback: Function, thisObject: any): any;
    isDefined(value: any): boolean;
    substitute(data: any, template?: string, first?: boolean): string;
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

  class ArcGISDynamicMapServiceLayer extends DynamicMapServiceLayer {
    attributionDataUrl: string;
    capabilities: string;
    copyright: string;
    description: string;
    disableClientCaching: boolean;
    dpi: number;
    dynamicLayerInfos: DynamicLayerInfo[];
    hasAttributionData: boolean;
    imageFormat: string;
    imageTransparency: boolean;
    layerDefinitions: string[];
    layerDrawingOptions: LayerDrawingOptions[];
    layerInfos: LayerInfo[];
    layerTimeOptions: LayerTimeOptions[];
    maxImageHeight: number;
    maxImageWidth: number;
    maxRecordCount: number;
    maxScale: number;
    minScale: number;
    showAttribution: boolean;
    suspended: boolean;
    timeInfo: TimeInfo;
    units: string;
    useMapImage: boolean;
    version: number;
    visibleAtMapScale: boolean;
    visibleLayers: number[];
    constructor(url: string, options?: esri.ArcGISDynamicMapServiceLayerOptions);
    createDynamicLayerInfosFromLayerInfos(): DynamicLayerInfo[];
    exportMapImage(imageParameters?: ImageParameters, callback?: Function): void;
    getAttributionData(): any;
    isVisibleAtScale(scale: number): boolean;
    resume(): void;
    setDefaultLayerDefinitions(doNotRefresh?: boolean): void;
    setDefaultVisibleLayers(doNotRefresh?: boolean): void;
    setDisableClientCaching(disable: boolean): void;
    setDPI(dpi: number, doNotRefresh?: boolean): void;
    setDynamicLayerInfos(dynamicLayerInfos: DynamicLayerInfo[], doNotRefresh?: boolean): void;
    setGDBVersion(gdbVersion: string, doNotRefresh?: boolean): void;
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    setImageTransparency(transparent: boolean, doNotRefresh?: boolean): void;
    setLayerDefinitions(layerDefinitions: string[], doNotRefresh?: boolean): void;
    setLayerDrawingOptions(layerDrawingOptions: LayerDrawingOptions[], doNotRefresh?: boolean): void;
    setLayerTimeOptions(options: LayerTimeOptions[], doNotRefresh?: boolean): void;
    setMaxScale(scale: number): void;
    setMinScale(scale: number): void;
    setScaleRange(minScale: number, maxScale: number): void;
    setUseMapTime(update: boolean): void;
    setVisibleLayers(ids: number[], doNotRefresh?: boolean): void;
    suspend(): void;
    on(type: "gdbversion-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: "resume", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: "scale-range-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: "suspend", listener: (event: { target: ArcGISDynamicMapServiceLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ArcGISDynamicMapServiceLayer;
}

declare module "esri/layers/ArcGISImageServiceLayer" {
  import esri = require("esri");
  import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
  import MosaicRule = require("esri/layers/MosaicRule");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeInfo = require("esri/layers/TimeInfo");
  import ImageServiceParameters = require("esri/layers/ImageServiceParameters");
  import Graphic = require("esri/graphic");
  import Query = require("esri/tasks/query");
  import InfoTemplate = require("esri/InfoTemplate");
  import MapImage = require("esri/layers/MapImage");

  class ArcGISImageServiceLayer extends DynamicMapServiceLayer {
    bandCount: number;
    bandIds: number[];
    bands: any[];
    compressionQuality: number;
    copyrightText: string;
    defaultMosaicRule: MosaicRule;
    description: string;
    disableClientCaching: boolean;
    format: string;
    interpolation: string;
    maxImageHeight: number;
    maxImageWidgth: number;
    maxRecordCount: number;
    maxScale: number;
    minScale: number;
    mosaicRule: MosaicRule;
    pixelSizeX: number;
    pixelSizeY: number;
    pixelType: number;
    renderingRule: RasterFunction;
    timeInfo: TimeInfo;
    version: number;
    constructor(url: string, options?: esri.ArcGISImageServiceLayerOptions);
    exportMapImage(imageServiceParameters?: ImageServiceParameters, callback?: Function): void;
    getDefinitionExpression(): string;
    getKeyProperties(): any;
    getRasterAttributeTable(): any;
    getVisibleRasters(): Graphic[];
    queryVisibleRasters(query: Query, options?: any, callback?: Function, errback?: string): void;
    setBandIds(bandIds: number[], doNotRefresh?: boolean): void;
    setCompressionQuality(quality: number, doNotRefresh?: boolean): void;
    setDefinitionExpression(expression: string, doNotRefresh: boolean): void;
    setDisableClientCaching(disable: boolean): void;
    setImageFormat(imageFormat: string, doNotRefresh?: boolean): void;
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    setInterpolation(interpolation: string, doNotRefresh?: boolean): void;
    setMosaicRule(mosaicRule: MosaicRule, doNotRefresh?: boolean): void;
    setRenderingRule(renderingRule: RasterFunction, doNotRefresh?: boolean): void;
    setUseMapTime(update: boolean): void;
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: ArcGISImageServiceLayer }) => void): esri.Handle
    on(type: "mosaic-rule-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): esri.Handle
    on(type: "rendering-change", listener: (event: { target: ArcGISImageServiceLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ArcGISImageServiceLayer;
}

declare module "esri/layers/ArcGISTiledMapServiceLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");
  import LayerInfo = require("esri/layers/LayerInfo");
  import TimeInfo = require("esri/layers/TimeInfo");

  class ArcGISTiledMapServiceLayer extends TiledMapServiceLayer {
    attributionDataUrl: string;
    capabilities: string;
    copyright: string;
    description: string;
    hasAttributionData: boolean;
    layerInfos: LayerInfo[];
    maxImageHeight: number;
    maxImageWidth: number;
    maxRecordCount: number;
    maxScale: number;
    minScale: number;
    showAttribution: boolean;
    suspended: boolean;
    timeInfo: TimeInfo;
    units: string;
    version: number;
    visibleAtMapScale: boolean;
    constructor(url: string, options?: esri.ArcGISTiledMapServiceLayerOptions);
    getAttributionData(): any;
    isVisibleAtScale(scale: number): boolean;
    resume(): void;
    setMaxScale(scale: number): void;
    setMinScale(scale: number): void;
    setScaleRange(minScale: number, maxScale: number): void;
    suspend(): void;
    on(type: "resume", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle
    on(type: "scale-range-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle
    on(type: "scale-visibility-change", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle
    on(type: "suspend", listener: (event: { target: ArcGISTiledMapServiceLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ArcGISTiledMapServiceLayer;
}

declare module "esri/layers/CodedValueDomain" {
  import Domain = require("esri/layers/Domain");

  class CodedValueDomain extends Domain {
    codedValues: any[];
  }
  export = CodedValueDomain;
}

declare module "esri/layers/Domain" {
  class Domain {
    name: string;
    type: string;
    toJson(): any;
  }
  export = Domain;
}

declare module "esri/layers/DynamicLayerInfo" {
  class DynamicLayerInfo {
    defaultVisibility: boolean;
    id: number;
    maxScale: number;
    minScale: number;
    name: string;
    parentLayerId: number;
    source: any;
    subLayerIds: number[];
    constructor(json?: Object);
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

  class DynamicMapServiceLayer extends Layer {
    fullExtent: Extent;
    initialExtent: Extent;
    spatialReference: SpatialReference;
    getImageUrl(extent: Extent, width: number, height: number, callback: Function): string;
    refresh(): void;
    on(type: "gdb-version-change", listener: (event: { target: DynamicMapServiceLayer }) => void): esri.Handle
    on(type: "map-image-export", listener: (event: { mapImage: MapImage; target: DynamicMapServiceLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = DynamicMapServiceLayer;
}

declare module "esri/layers/FeatureEditResult" {
  class FeatureEditResult {
    attachmentId: number;
    error: Error;
    objectId: number;
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

  class FeatureLayer extends GraphicsLayer {
    static MODE_ONDEMAND: any;
    static MODE_SELECTION: any;
    static MODE_SNAPSHOT: any;
    static POPUP_HTML_TEXT: any;
    static POPUP_NONE: any;
    static POPUP_URL: any;
    static SELECTION_ADD: any;
    static SELECTION_NEW: any;
    static SELECTION_SUBTRACT: any;
    allowGeometryUpdates: boolean;
    attributionDataUrl: string;
    capabilities: string;
    copyright: string;
    defaultDefinitionExpression: string;
    defaultVisibility: boolean;
    description: string;
    displayField: string;
    editFieldsInfo: any;
    fields: Field[];
    fullExtent: Extent;
    geometryType: string;
    globalIdField: string;
    graphics: Graphic[];
    hasAttachments: boolean;
    hasAttributionData: boolean;
    htmlPopupType: string;
    layerId: number;
    maxRecordCount: number;
    maxScale: number;
    minScale: number;
    name: string;
    objectIdField: string;
    ownershipBasedAccessControlForFeatures: any;
    relationships: any[];
    renderer: Renderer;
    showAttribution: boolean;
    source: any;
    supportsAdvancedQueries: boolean;
    supportsStatistics: boolean;
    suspended: boolean;
    templates: FeatureTemplate[];
    timeInfo: TimeInfo;
    type: string;
    typeIdField: string;
    types: FeatureType[];
    version: number;
    visibleAtMapScale: boolean;
    constructor(url: string, options?: esri.FeatureLayerOptions);
    constructor(featureCollectionObject: any, options?: esri.FeatureLayerOptions);
    addAttachment(objectId: number, formNode: HTMLFormElement, callback?: Function, errback?: Function): any;
    applyEdits(adds?: Graphic[], updates?: Graphic[], deletes?: Graphic[], callback?: Function, errback?: Function): any;
    clearSelection(): FeatureLayer;
    deleteAttachments(objectId: number, attachmentIds: number[], callback?: Function, errback?: Function): any;
    getAttributionData(): any;
    getDefinitionExpression(): string;
    getEditCapabilities(options?: any): any;
    getEditInfo(feature: Graphic, options?: any): any;
    getEditSummary(feature: Graphic, options?: any): string;
    getMaxAllowableOffset(): number;
    getOrderByFields(): string[];
    getSelectedFeatures(): Graphic[];
    getSelectionSymbol(): Symbol;
    getTimeDefinition(): TimeExtent;
    isEditable(): boolean;
    isVisibleAtScale(scale: number): boolean;
    queryAttachmentInfos(objectId: number, callback?: Function, errback?: Function): any;
    queryCount(query: Query, callback?: Function, errback?: Function): any;
    queryFeatures(query: Query, callback?: Function, errback?: Function): any;
    queryIds(query: Query, callback?: Function, errback?: Function): any;
    queryRelatedFeatures(relQuery: RelationshipQuery, callback?: Function, errback?: Function): any;
    redraw(): void;
    refresh(): void;
    resume(): void;
    selectFeatures(query: Query, selectionMethod?: number, callback?: Function, errback?: Function): any;
    setAutoGeneralize(enable: boolean): FeatureLayer;
    setDefinitionExpression(expression: string): FeatureLayer;
    setEditable(editable: boolean): FeatureLayer;
    setGDBVersion(versionName: string): FeatureLayer;
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    setMaxAllowableOffset(offset: number): void;
    setMaxScale(scale: number): void;
    setMinScale(scale: number): void;
    setOpacity(opacity: number): void;
    setRenderer(renderer: Renderer): void;
    setScaleRange(minScale: number, maxScale: number): void;
    setSelectionSymbol(symbol: Symbol): FeatureLayer;
    setTimeDefinition(definition: TimeExtent): FeatureLayer;
    setTimeOffset(offsetValue: number, offsetUnits: string): FeatureLayer;
    setUseMapTime(update: boolean): void;
    suspend(): void;
    toJson(): any;
    on(type: "add-attachment-complete", listener: (event: { result: FeatureEditResult; target: FeatureLayer }) => void): esri.Handle
    on(type: "before-apply-edits", listener: (event: { adds: Graphic[]; deletes: Graphic[]; updates: Graphic[]; target: FeatureLayer }) => void): esri.Handle
    on(type: "capabilities-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "dbl-click", listener: (event: { event: any; target: FeatureLayer }) => void): esri.Handle
    on(type: "delete-attachments-complete", listener: (event: { results: any[]; target: FeatureLayer }) => void): esri.Handle
    on(type: "edits-complete", listener: (event: { adds: FeatureEditResult[]; deletes: FeatureEditResult[]; updates: FeatureEditResult[]; target: FeatureLayer }) => void): esri.Handle
    on(type: "query-attachment-infos-complete", listener: (event: { info: any[]; target: FeatureLayer }) => void): esri.Handle
    on(type: "query-count-complete", listener: (event: { count: number; target: FeatureLayer }) => void): esri.Handle
    on(type: "query-features-complete", listener: (event: { featureSet: FeatureSet; target: FeatureLayer }) => void): esri.Handle
    on(type: "query-ids-complete", listener: (event: { objectIds: number[]; target: FeatureLayer }) => void): esri.Handle
    on(type: "query-limit-exceeded", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "query-related-features-complete", listener: (event: { relatedFeatures: any; target: FeatureLayer }) => void): esri.Handle
    on(type: "resume", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "scale-range-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "scale-visibility-change", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "selection-clear", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "selection-complete", listener: (event: { features: Graphic[]; method: number; target: FeatureLayer }) => void): esri.Handle
    on(type: "suspend", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: "update-end", listener: (event: { error: Error; info: any; target: FeatureLayer }) => void): esri.Handle
    on(type: "update-start", listener: (event: { target: FeatureLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = FeatureLayer;
}

declare module "esri/layers/FeatureTemplate" {
  import Graphic = require("esri/graphic");

  class FeatureTemplate {
    static TOOL_ARROW: any;
    static TOOL_AUTO_COMPLETE_POLYGON: any;
    static TOOL_CIRCLE: any;
    static TOOL_ELLIPSE: any;
    static TOOL_FREEHAND: any;
    static TOOL_LINE: any;
    static TOOL_NONE: any;
    static TOOL_POINT: any;
    static TOOL_POLYGON: any;
    static TOOL_RECTANGLE: any;
    static TOOL_TRIANGLE: any;
    description: string;
    drawingTool: string;
    name: string;
    prototype: Graphic;
    toJson(): any;
  }
  export = FeatureTemplate;
}

declare module "esri/layers/FeatureType" {
  import FeatureTemplate = require("esri/layers/FeatureTemplate");

  class FeatureType {
    domains: any;
    id: number;
    name: string;
    templates: FeatureTemplate[];
    toJson(): any;
  }
  export = FeatureType;
}

declare module "esri/layers/Field" {
  import Domain = require("esri/layers/Domain");

  class Field {
    alias: string;
    domain: Domain;
    editable: boolean;
    length: number;
    name: string;
    nullable: boolean;
    type: string;
  }
  export = Field;
}

declare module "esri/layers/GeoRSSLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Graphic = require("esri/graphic");
  import FeatureLayer = require("esri/layers/FeatureLayer");

  class GeoRSSLayer extends Layer {
    copyright: string;
    defaultVisibility: boolean;
    description: string;
    items: Graphic[];
    name: string;
    constructor(url: string, options?: esri.GeoRSSLayerOptions);
    getFeatureLayers(): FeatureLayer[];
    on(type: "refresh", listener: (event: { target: GeoRSSLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = GeoRSSLayer;
}

declare module "esri/layers/GraphicsLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import Graphic = require("esri/graphic");
  import Renderer = require("esri/renderers/Renderer");
  import InfoTemplate = require("esri/InfoTemplate");

  class GraphicsLayer extends Layer {
    dataAttributes: any;
    graphics: Graphic[];
    renderer: Renderer;
    styling: boolean;
    surfaceType: string;
    constructor();
    constructor(options?: esri.GraphicsLayerOptions);
    add(graphic: Graphic): Graphic;
    clear(): void;
    disableMouseEvents(): void;
    enableMouseEvents(): void;
    redraw(): void;
    remove(graphic: Graphic): Graphic;
    setInfoTemplate(infoTemplate: InfoTemplate): void;
    setOpacity(opacity: number): void;
    setRenderer(renderer: Renderer): void;
    on(type: "click", listener: (event: { event: any; target: GraphicsLayer }) => void): esri.Handle
    on(type: "dbl-click", listener: (event: { target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphic-add", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphic-draw", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphic-node-add", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphic-node-remove", listener: (event: { graphic: Graphic; node: HTMLElement; target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphic-remove", listener: (event: { graphic: Graphic; target: GraphicsLayer }) => void): esri.Handle
    on(type: "graphics-clear", listener: (event: { target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-down", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-drag", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-move", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-out", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-over", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: "mouse-up", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: GraphicsLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = GraphicsLayer;
}

declare module "esri/layers/ImageParameters" {
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import TimeExtent = require("esri/TimeExtent");

  class ImageParameters {
    static LAYER_OPTION_EXCLUDE: any;
    static LAYER_OPTION_HIDE: any;
    static LAYER_OPTION_INCLUDE: any;
    static LAYER_OPTION_SHOW: any;
    bbox: Extent;
    dpi: number;
    format: string;
    height: number;
    imageSpatialReference: SpatialReference;
    layerDefinitions: string[];
    layerIds: number[];
    layerOption: string;
    layerTimeOptions: LayerTimeOptions[];
    timeExtent: TimeExtent;
    transparent: boolean;
    width: number;
    constructor();
  }
  export = ImageParameters;
}

declare module "esri/layers/ImageServiceParameters" {
  import Extent = require("esri/geometry/Extent");
  import MosaicRule = require("esri/layers/MosaicRule");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeExtent = require("esri/TimeExtent");

  class ImageServiceParameters {
    static INTERPOLATION_BILINEAR: any;
    static INTERPOLATION_CUBICCONVOLUTION: any;
    static INTERPOLATION_MAJORITY: any;
    static INTERPOLATION_NEARESTNEIGHBOR: any;
    bandIds: number[];
    compressionQuality: number;
    extent: Extent;
    format: string;
    height: number;
    interpolation: string;
    mosaicRule: MosaicRule;
    noData: number;
    renderingRule: RasterFunction;
    timeExtent: TimeExtent;
    width: number;
    constructor();
  }
  export = ImageServiceParameters;
}

declare module "esri/layers/InheritedDomain" {
  import Domain = require("esri/layers/Domain");

  class InheritedDomain extends Domain {
  }
  export = InheritedDomain;
}

declare module "esri/layers/JoinDataSource" {
  class JoinDataSource {
    joinType: string;
    leftTableKey: string;
    leftTableSource: any;
    rightTableKey: string;
    rightTableSource: any;
    constructor(json?: Object);
    toJson(): any;
  }
  export = JoinDataSource;
}

declare module "esri/layers/KMLFolder" {
  class KMLFolder {
    description: string;
    featureInfos: any[];
    id: number;
    name: string;
    parentFolderId: number;
    snippet: string;
    subFolderIds: number[];
    visibility: number;
  }
  export = KMLFolder;
}

declare module "esri/layers/KMLGroundOverlay" {
  import Extent = require("esri/geometry/Extent");

  class KMLGroundOverlay {
    description: string;
    extent: Extent;
    height: number;
    href: string;
    id: number;
    name: string;
    scale: number;
    Snippet: string;
    visibility: number;
    width: number;
  }
  export = KMLGroundOverlay;
}

declare module "esri/layers/KMLLayer" {
  import esri = require("esri");
  import Layer = require("esri/layers/layer");
  import KMLFolder = require("esri/layers/KMLFolder");

  class KMLLayer extends Layer {
    featureInfos: any[];
    folders: KMLFolder[];
    linkInfo: any;
    constructor(id: string, url: string, options?: esri.KMLLayerOptions);
    getFeature(featureInfo: any): any;
    getLayers(): Layer[];
    setFolderVisibility(folder: KMLFolder, isVisible: boolean): void;
    on(type: "refresh", listener: (event: { target: KMLLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = KMLLayer;
}

declare module "esri/layers/LOD" {
  class LOD {
    level: number;
    levelValue: string;
    resolution: number;
    scale: number;
  }
  export = LOD;
}

declare module "esri/layers/LabelClass" {
  import TextSymbol = require("esri/symbols/TextSymbol");

  class LabelClass {
    labelExpression: string;
    labelPlacement: string;
    maxScale: number;
    minScale: number;
    symbol: TextSymbol;
    useCodedValues: boolean;
    where: string;
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

  class LabelLayer extends GraphicsLayer {
    constructor();
    addFeatureLayer(featureLayer: FeatureLayer, renderer: SimpleRenderer, textExpression: any, labelOptions?: any): void;
    addFeatureLayer(featureLayer: FeatureLayer, renderer: UniqueValueRenderer, textExpression: any, labelOptions?: any): void;
    addFeatureLayer(featureLayer: FeatureLayer, renderer: ClassBreaksRenderer, textExpression: any, labelOptions?: any): void;
    getFeatureLayer(index: number): FeatureLayer;
  }
  export = LabelLayer;
}

declare module "esri/layers/LayerDataSource" {
  class LayerDataSource {
    dataSource: any;
    constructor(json?: Object);
    toJson(): any;
  }
  export = LayerDataSource;
}

declare module "esri/layers/LayerDrawingOptions" {
  import LabelClass = require("esri/layers/LabelClass");
  import Renderer = require("esri/renderers/Renderer");

  class LayerDrawingOptions {
    labelingInfo: LabelClass[];
    renderer: Renderer;
    scaleSymbols: boolean;
    showLabels: boolean;
    transparency: number;
    constructor(json?: Object);
    toJson(): any;
  }
  export = LayerDrawingOptions;
}

declare module "esri/layers/LayerInfo" {
  class LayerInfo {
    defaultVisibility: boolean;
    id: number;
    maxScale: number;
    minScale: number;
    name: string;
    parentLayerId: number;
    subLayerIds: number[];
  }
  export = LayerInfo;
}

declare module "esri/layers/LayerMapSource" {
  class LayerMapSource {
    gdbVersion: string;
    mapLayerId: number;
    constructor(json?: Object);
    toJson(): any;
  }
  export = LayerMapSource;
}

declare module "esri/layers/LayerTimeOptions" {
  class LayerTimeOptions {
    timeDataCumulative: boolean;
    timeOffset: number;
    timeOffsetUnits: string;
    useTime: boolean;
  }
  export = LayerTimeOptions;
}

declare module "esri/layers/MapImage" {
  import esri = require("esri");
  import Extent = require("esri/geometry/Extent");

  class MapImage {
    extent: Extent;
    height: number;
    href: string;
    scale: number;
    width: number;
    constructor(options: esri.MapImageOptions);
  }
  export = MapImage;
}

declare module "esri/layers/MapImageLayer" {
  import Layer = require("esri/layers/layer");
  import MapImage = require("esri/layers/MapImage");

  class MapImageLayer extends Layer {
    constructor(options?: any);
    addImage(mapImage: MapImage): void;
    getImages(): MapImage[];
    removeAllImages(): void;
    removeImage(mapImage: MapImage): void;
  }
  export = MapImageLayer;
}

declare module "esri/layers/MosaicRule" {
  import Point = require("esri/geometry/Point");

  class MosaicRule {
    static METHOD_ATTRIBUTE: any;
    static METHOD_CENTER: any;
    static METHOD_LOCKRASTER: any;
    static METHOD_NADIR: any;
    static METHOD_NONE: any;
    static METHOD_NORTHWEST: any;
    static METHOD_SEAMLINE: any;
    static METHOD_VIEWPOINT: any;
    static OPERATION_BLEND: any;
    static OPERATION_FIRST: any;
    static OPERATION_LAST: any;
    static OPERATION_MAX: any;
    static OPERATION_MEAN: any;
    static OPERATION_MIN: any;
    ascending: boolean;
    lockRasterIds: number[];
    method: string;
    objectIds: number[];
    operation: string;
    sortField: string;
    sortValue: string;
    viewpoint: Point;
    where: string;
    constructor();
    constructor(json: Object);
    toJson(): any;
  }
  export = MosaicRule;
}

declare module "esri/layers/OpenStreetMapLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");

  class OpenStreetMapLayer extends TiledMapServiceLayer {
    copyright: string;
    constructor(options?: esri.OpenStreetMapLayerOptions);
  }
  export = OpenStreetMapLayer;
}

declare module "esri/layers/QueryDataSource" {
  import SpatialReference = require("esri/SpatialReference");

  class QueryDataSource {
    geometryType: string;
    oidFields: string[];
    query: string;
    spatialReference: SpatialReference;
    workspaceId: string;
    constructor(json?: Object);
    toJson(): any;
  }
  export = QueryDataSource;
}

declare module "esri/layers/RangeDomain" {
  import Domain = require("esri/layers/Domain");

  class RangeDomain extends Domain {
    maxValue: number;
    minValue: number;
  }
  export = RangeDomain;
}

declare module "esri/layers/RasterDataSource" {
  class RasterDataSource {
    dataSourceName: string;
    workspaceId: string;
    constructor(json?: Object);
    toJson(): any;
  }
  export = RasterDataSource;
}

declare module "esri/layers/RasterFunction" {
  class RasterFunction {
    arguments: any;
    functionName: string;
    variableName: string;
    constructor();
    constructor(json: Object);
    toJson(): any;
  }
  export = RasterFunction;
}

declare module "esri/layers/StreamLayer" {
  import esri = require("esri");
  import FeatureLayer = require("esri/layers/FeatureLayer");
  import Graphic = require("esri/graphic");

  class StreamLayer extends FeatureLayer {
    socket: any;
    socketUrl: string;
    constructor(url: string, options?: esri.StreamLayerOptions);
    constructor(featureCollectionObject: any, options?: esri.StreamLayerOptions);
    connect(callback?: Function): void;
    disconnect(callback?: Function): void;
    on(type: "connect", listener: (event: { target: StreamLayer }) => void): esri.Handle
    on(type: "disconnect", listener: (event: { target: StreamLayer }) => void): esri.Handle
    on(type: "message", listener: (event: { graphic: Graphic; type: string; target: StreamLayer }) => void): esri.Handle
    on(type: "remove", listener: (event: { graphic: Graphic; target: StreamLayer }) => void): esri.Handle
    on(type: "update", listener: (event: { graphic: Graphic; target: StreamLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = StreamLayer;
}

declare module "esri/layers/TableDataSource" {
  class TableDataSource {
    dataSourceName: string;
    gdbVersion: string;
    workspaceId: string;
    constructor(json?: Object);
    toJson(): any;
  }
  export = TableDataSource;
}

declare module "esri/layers/TileInfo" {
  import LOD = require("esri/layers/LOD");
  import Point = require("esri/geometry/Point");
  import SpatialReference = require("esri/SpatialReference");

  class TileInfo {
    dpi: number;
    format: string;
    height: number;
    lods: LOD[];
    origin: Point;
    spatialReference: SpatialReference;
    width: number;
    constructor(properties: any);
    toJson(): any;
  }
  export = TileInfo;
}

declare module "esri/layers/TiledMapServiceLayer" {
  import Layer = require("esri/layers/layer");
  import Extent = require("esri/geometry/Extent");
  import SpatialReference = require("esri/SpatialReference");
  import TileInfo = require("esri/layers/TileInfo");

  class TiledMapServiceLayer extends Layer {
    fullExtent: Extent;
    initialExtent: Extent;
    spatialReference: SpatialReference;
    tileInfo: TileInfo;
    constructor();
    getTileUrl(level: number, row: number, column: number): string;
    refresh(): void;
  }
  export = TiledMapServiceLayer;
}

declare module "esri/layers/TimeInfo" {
  import LayerTimeOptions = require("esri/layers/LayerTimeOptions");
  import TimeExtent = require("esri/TimeExtent");
  import TimeReference = require("esri/layers/TimeReference");

  class TimeInfo {
    static UNIT_CENTURIES: any;
    static UNIT_DAYS: any;
    static UNIT_DECADES: any;
    static UNIT_HOURS: any;
    static UNIT_MILLISECONDS: any;
    static UNIT_MINUTES: any;
    static UNIT_MONTHS: any;
    static UNIT_SECONDS: any;
    static UNIT_UNKNOWN: any;
    static UNIT_WEEKS: any;
    static UNIT_YEARS: any;
    endTimeField: string;
    exportOptions: LayerTimeOptions;
    startTimeField: string;
    timeExtent: TimeExtent;
    timeInterval: number;
    timeIntervalUnits: string;
    timeReference: TimeReference;
    trackIdField: string;
  }
  export = TimeInfo;
}

declare module "esri/layers/TimeReference" {
  class TimeReference {
    respectsDaylightSaving: boolean;
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

  class WMSLayer extends DynamicMapServiceLayer {
    copyright: string;
    description: string;
    extent: Extent;
    getMapUrl: string;
    imageFormat: string;
    layerInfos: WMSLayerInfo[];
    maxHeight: number;
    maxWidth: number;
    spatialReference: SpatialReference;
    title: string;
    version: string;
    constructor(url: string, options?: esri.WMSLayerOptions);
    setImageFormat(format: string): void;
    setImageTransparency(transparency: boolean): void;
    setVisibleLayers(layers: string[]): void;
  }
  export = WMSLayer;
}

declare module "esri/layers/WMSLayerInfo" {
  import Extent = require("esri/geometry/Extent");

  class WMSLayerInfo {
    description: string;
    extent: Extent;
    name: string;
    title: string;
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

  class WMTSLayer extends TiledMapServiceLayer {
    copyright: string;
    description: string;
    format: string;
    fullExtent: Extent;
    initialExtent: Extent;
    layerInfos: any[];
    serviceMode: string;
    spatialReference: SpatialReference;
    tileInfo: TileInfo;
    title: string;
    version: string;
    constructor(url: string, options?: esri.WMTSLayerOptions);
    setActiveLayer(WMTSLayerInfo: WMTSLayerInfo): void;
  }
  export = WMTSLayer;
}

declare module "esri/layers/WMTSLayerInfo" {
  import esri = require("esri");

  class WMTSLayerInfo {
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

  class WebTiledLayer extends TiledMapServiceLayer {
    copyright: string;
    fullExtent: Extent;
    initialExtent: Extent;
    spatialReference: SpatialReference;
    tileInfo: TileInfo;
    tileServers: string[];
    constructor(urlTemplate: string, options?: esri.WebTiledLayerOptions);
  }
  export = WebTiledLayer;
}

declare module "esri/layers/layer" {
  import esri = require("esri");
  import Map = require("esri/map");

  class Layer {
    attributionDataUrl: string;
    className: string;
    credential: any;
    hasAttributionData: boolean;
    id: string;
    loaded: boolean;
    maxScale: number;
    minScale: number;
    opacity: number;
    refreshInterval: number;
    showAttribution: boolean;
    suspended: boolean;
    url: string;
    visible: boolean;
    visibleAtMapScale: boolean;
    constructor(options?: esri.LayerOptions);
    attr(name: string, value: string): Layer;
    getAttributionData(): any;
    getMap(): Map;
    getNode(): HTMLElement;
    hide(): void;
    isVisibleAtScale(scale: number): boolean;
    resume(): void;
    setMaxScale(scale: number): void;
    setMinScale(scale: number): void;
    setOpacity(opacity: number): void;
    setRefreshInterval(interval: number): Layer;
    setScaleRange(minScale: number, maxScale: number): void;
    setVisibility(isVisible: boolean): void;
    show(): void;
    suspend(): void;
    on(type: "error", listener: (event: { error: Error; target: Layer }) => void): esri.Handle
    on(type: "load", listener: (event: { layer: Layer; target: Layer }) => void): esri.Handle
    on(type: "opacity-change", listener: (event: { opacity: number; target: Layer }) => void): esri.Handle
    on(type: "refresh-interval-change", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "resume", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "scale-range-change", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "scale-visibility-change", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "suspend", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "update", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "update-end", listener: (event: { error: Error; target: Layer }) => void): esri.Handle
    on(type: "update-start", listener: (event: { target: Layer }) => void): esri.Handle
    on(type: "visibility-change", listener: (event: { visible: boolean; target: Layer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
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
  import TimeSlider = require("esri/dijit/TimeSlider");
  import ScreenPoint = require("esri/geometry/ScreenPoint");
  import LOD = require("esri/layers/LOD");

  class Map {
    attribution: Attribution;
    autoResize: boolean;
    extent: Extent;
    fadeOnZoom: boolean;
    force3DTransforms: boolean;
    geographicExtent: Extent;
    graphics: GraphicsLayer;
    graphicsLayerIds: string[];
    height: number;
    id: string;
    infoWindow: InfoWindowBase;
    isClickRecenter: boolean;
    isDoubleClickZoom: boolean;
    isKeyboardNavigation: boolean;
    isPan: boolean;
    isPanArrows: boolean;
    isRubberBandZoom: boolean;
    isScrollWheelZoom: boolean;
    isShiftDoubleClickZoom: boolean;
    isZoomSlider: boolean;
    layerIds: string[];
    loaded: boolean;
    navigationMode: string;
    position: Point;
    root: HTMLElement;
    showAttribution: boolean;
    snappingManager: SnappingManager;
    spatialReference: SpatialReference;
    timeExtent: TimeExtent;
    visible: boolean;
    width: number;
    constructor(divId: string, options?: esri.MapOptions);
    addLayer(layer: Layer, index?: number): Layer;
    addLayers(layers: Layer[]): void;
    attr(name: string, value: string): Map;
    centerAndZoom(mapPoint: Point, levelOrFactor: number): any;
    centerAt(mapPoint: Point): any;
    destroy(): void;
    disableClickRecenter(): void;
    disableDoubleClickZoom(): void;
    disableKeyboardNavigation(): void;
    disableMapNavigation(): void;
    disablePan(): void;
    disableRubberBandZoom(): void;
    disableScrollWheelZoom(): void;
    disableShiftDoubleClickZoom(): void;
    disableSnapping(): void;
    enableClickRecenter(): void;
    enableDoubleClickZoom(): void;
    enableKeyboardNavigation(): void;
    enableMapNavigation(): void;
    enablePan(): void;
    enableRubberBandZoom(): void;
    enableScrollWheelZoom(): void;
    enableShiftDoubleClickZoom(): void;
    enableSnapping(snapOptions?: any): SnappingManager;
    getBasemap(): string;
    getInfoWindowAnchor(screenCoords: Point): string;
    getLayer(id: string): Layer;
    getLayersVisibleAtScale(): Layer[];
    getLevel(): number;
    getMaxScale(): number;
    getMaxZoom(): number;
    getMinScale(): number;
    getMinZoom(): number;
    getScale(): number;
    getZoom(): number;
    hidePanArrows(): void;
    hideZoomSlider(): void;
    panDown(): any;
    panLeft(): any;
    panLowerLeft(): any;
    panLowerRight(): any;
    panRight(): any;
    panUp(): any;
    panUpperLeft(): any;
    panUpperRight(): any;
    removeAllLayers(): void;
    removeLayer(layer: Layer): void;
    reorderLayer(layer: Layer, index: number): void;
    reposition(): void;
    resize(immediate?: boolean): void;
    setBasemap(basemap: string): void;
    setExtent(extent: Extent, fit?: boolean): any;
    setLevel(level: number): any;
    setMapCursor(cursor: string): void;
    setScale(scale: number): any;
    setTimeExtent(timeExtent: TimeExtent): void;
    setTimeSlider(timeSlider: TimeSlider): void;
    setVisibility(visible: boolean): Map;
    setZoom(zoom: number): any;
    showPanArrows(): void;
    showZoomSlider(): void;
    toMap(screenPoint: ScreenPoint): Point;
    toScreen(mapPoint: Point): ScreenPoint;
    on(type: "basemap-change", listener: (event: { current: any; previous: any; target: Map }) => void): esri.Handle
    on(type: "click", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "dbl-click", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "extent-change", listener: (event: { delta: Point; extent: Extent; levelChange: boolean; lod: LOD; target: Map }) => void): esri.Handle
    on(type: "key-down", listener: (event: { keyboardEvent: KeyboardEvent; target: Map }) => void): esri.Handle
    on(type: "key-up", listener: (event: { keyboardEvent: KeyboardEvent; target: Map }) => void): esri.Handle
    on(type: "layer-add", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle
    on(type: "layer-add-result", listener: (event: { error: Error; layer: Layer; target: Map }) => void): esri.Handle
    on(type: "layer-remove", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle
    on(type: "layer-reorder", listener: (event: { index: number; layer: Layer; target: Map }) => void): esri.Handle
    on(type: "layer-resume", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle
    on(type: "layers-add-result", listener: (event: { layers: Layer[]; target: Map }) => void): esri.Handle
    on(type: "layers-removed", listener: (event: { target: Map }) => void): esri.Handle
    on(type: "layers-reordered", listener: (event: { layerIds: number[]; target: Map }) => void): esri.Handle
    on(type: "layer-suspend", listener: (event: { layer: Layer; target: Map }) => void): esri.Handle
    on(type: "load", listener: (event: { map: Map; target: Map }) => void): esri.Handle
    on(type: "mouse-down", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-drag", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-drag-end", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-drag-start", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-move", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-out", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-over", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-up", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "mouse-wheel", listener: (event: { mouseEvent: esri.AGSMouseEvent; target: Map }) => void): esri.Handle
    on(type: "pan", listener: (event: { delta: Point; extent: Extent; target: Map }) => void): esri.Handle
    on(type: "pan-end", listener: (event: { delta: Point; extent: Extent; target: Map }) => void): esri.Handle
    on(type: "pan-start", listener: (event: { extent: Extent; target: Map }) => void): esri.Handle
    on(type: "reposition", listener: (event: { x: number; y: number; target: Map }) => void): esri.Handle
    on(type: "resize", listener: (event: { extent: Extent; height: number; width: number; target: Map }) => void): esri.Handle
    on(type: "time-extent-change", listener: (event: { timeExtent: TimeExtent; target: Map }) => void): esri.Handle
    on(type: "unload", listener: (event: { map: Map; target: Map }) => void): esri.Handle
    on(type: "update-end", listener: (event: { error: Error; target: Map }) => void): esri.Handle
    on(type: "update-start", listener: (event: { target: Map }) => void): esri.Handle
    on(type: "zoom", listener: (event: { anchor: Point; extent: Extent; zoomFactor: number; target: Map }) => void): esri.Handle
    on(type: "zoom-end", listener: (event: { anchor: Point; extent: Extent; level: number; zoomFactor: number; target: Map }) => void): esri.Handle
    on(type: "zoom-start", listener: (event: { anchor: Point; extent: Extent; level: number; zoomFactor: number; target: Map }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Map;
}

declare module "esri/renderers/ClassBreaksRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import FillSymbol = require("esri/symbols/FillSymbol");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class ClassBreaksRenderer extends Renderer {
    attributeField: string;
    backgroundFillSymbol: FillSymbol;
    breaks: any[];
    classificationMethod: string;
    infos: any[];
    normalizationField: string;
    normalizationTotal: number;
    normalizationType: string;
    constructor(defaultSymbol: Symbol, attributeField: string);
    constructor(defaultSymbol: Symbol, attributeField: Function);
    constructor(json: Object);
    addBreak(minValueOrInfo: number, maxValue?: number, symbol?: Symbol): void;
    addBreak(minValueOrInfo: any, maxValue?: number, symbol?: Symbol): void;
    clearBreaks(): void;
    getBreakIndex(graphic: Graphic): number;
    getBreakInfo(graphic: Graphic): any;
    removeBreak(minValue: number, maxValue: number): void;
    setMaxInclusive(enable: boolean): void;
  }
  export = ClassBreaksRenderer;
}

declare module "esri/renderers/DotDensityRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import LineSymbol = require("esri/symbols/LineSymbol");

  class DotDensityRenderer extends Renderer {
    backgroundColor: any;
    dotShape: string;
    dotSize: number;
    dotValue: number;
    fields: any[];
    outline: LineSymbol;
    constructor(parameters: any);
    setBackgroundColor(color: any): void;
    setDotSize(size: number): void;
    setDotValue(value: number): void;
    setOutline(outline: LineSymbol): void;
  }
  export = DotDensityRenderer;
}

declare module "esri/renderers/Renderer" {
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class Renderer {
    colorInfo: any;
    defaultSymbol: Symbol;
    proportionalSymbol: any;
    rotationInfo: any;
    getColor(graphic: Graphic): any;
    getRotationAngle(graphic: Graphic): number;
    getSize(graphic: Graphic): number;
    getSymbol(graphic: Graphic): Symbol;
    setColorInfo(info: any): Renderer;
    setProportionalSymbolInfo(info: any): Renderer;
    setRotationInfo(info: any): Renderer;
    toJson(): any;
  }
  export = Renderer;
}

declare module "esri/renderers/ScaleDependentRenderer" {
  import esri = require("esri");
  import Renderer = require("esri/renderers/Renderer");
  import Graphic = require("esri/graphic");

  class ScaleDependentRenderer extends Renderer {
    rangeType: string;
    rendererInfos: any;
    constructor(params: esri.ScaleDependentRendererOptions);
    addRendererInfo(info: any): ScaleDependentRenderer;
    getRendererInfo(graphic: Graphic): any;
    getRendererInfoByScale(scale: number): any;
    getRenderInfoByZoom(zoom: number): any;
    setRendererInfos(infos: any): ScaleDependentRenderer;
  }
  export = ScaleDependentRenderer;
}

declare module "esri/renderers/SimpleRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import Symbol = require("esri/symbols/Symbol");

  class SimpleRenderer extends Renderer {
    description: string;
    label: string;
    symbol: Symbol;
    constructor(defaultSymbol: Symbol);
    constructor(json: Object);
  }
  export = SimpleRenderer;
}

declare module "esri/renderers/SymbolAger" {
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class SymbolAger {
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = SymbolAger;
}

declare module "esri/renderers/TemporalRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Graphic = require("esri/graphic");
  import Symbol = require("esri/symbols/Symbol");

  class TemporalRenderer extends Renderer {
    constructor(observationRenderer: Renderer, latestObservationRenderer?: Renderer, trackRenderer?: Renderer, observationAger?: SymbolAger);
    getSymbol(graphic: Graphic): Symbol;
  }
  export = TemporalRenderer;
}

declare module "esri/renderers/TimeClassBreaksAger" {
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class TimeClassBreaksAger extends SymbolAger {
    static UNIT_DAYS: any;
    static UNIT_HOURS: any;
    static UNIT_MILLISECONDS: any;
    static UNIT_MINUTES: any;
    static UNIT_MONTHS: any;
    static UNIT_SECONDS: any;
    static UNIT_WEEKS: any;
    static UNIT_YEARS: any;
    constructor(infos: any[]);
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = TimeClassBreaksAger;
}

declare module "esri/renderers/TimeRampAger" {
  import SymbolAger = require("esri/renderers/SymbolAger");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class TimeRampAger extends SymbolAger {
    constructor(colorRange?: any, sizeRange?: number[], alphaRange?: number[]);
    getAgedSymbol(symbol: Symbol, graphic: Graphic): Symbol;
  }
  export = TimeRampAger;
}

declare module "esri/renderers/UniqueValueRenderer" {
  import Renderer = require("esri/renderers/Renderer");
  import Symbol = require("esri/symbols/Symbol");
  import Graphic = require("esri/graphic");

  class UniqueValueRenderer extends Renderer {
    attributeField: string;
    attributeField2: string;
    attributeField3: string;
    defaultLabel: string;
    fieldDelimiter: string;
    infos: any[];
    values: string[];
    constructor(defaultSymbol: Symbol, attributeField: string, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    constructor(defaultSymbol: Symbol, attributeField: Function, attributeField2?: string, attributeField3?: string, fieldDelimeter?: string);
    constructor(json: Object);
    addValue(valueOrInfo: string, symbol?: Symbol): void;
    addValue(valueOrInfo: any, symbol?: Symbol): void;
    getUniqueValueInfo(graphic: Graphic): any;
    removeValue(value: string): void;
  }
  export = UniqueValueRenderer;
}

declare module "esri/renderers/jsonUtils" {
  import Renderer = require("esri/renderers/Renderer");

  var jsonUtils: {
    fromJson(json: Object): Renderer;
  };
  export = jsonUtils;
}

declare module "esri/request" {
  var request: {
    (request: any, options?: any): any;
    setRequestPreCallback(): void;
  };
  export = request;
}

declare module "esri/symbols/CartographicLineSymbol" {
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  class CartographicLineSymbol extends SimpleLineSymbol {
    static CAP_BUTT: any;
    static CAP_ROUND: any;
    static CAP_SQUARE: any;
    static JOIN_BEVEL: any;
    static JOIN_MITER: any;
    static JOIN_ROUND: any;
    static STYLE_LONGDASH: any;
    static STYLE_LONGDASHDOT: any;
    static STYLE_SHORTDASH: any;
    static STYLE_SHORTDASHDOT: any;
    static STYLE_SHORTDASHDOTDOT: any;
    static STYLE_SHORTDOT: any;
    cap: string;
    join: string;
    miterLimit: string;
    constructor();
    constructor(style?: string, color?: any, width?: number, cap?: string, join?: string, miterLimit?: string);
    constructor(json: Object);
    setCap(cap: string): CartographicLineSymbol;
    setJoin(join: string): CartographicLineSymbol;
    setMiterLimit(miterLimit: string): CartographicLineSymbol;
  }
  export = CartographicLineSymbol;
}

declare module "esri/symbols/FillSymbol" {
  import Symbol = require("esri/symbols/Symbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  class FillSymbol extends Symbol {
    outline: SimpleLineSymbol;
    setOutline(outline: SimpleLineSymbol): FillSymbol;
  }
  export = FillSymbol;
}

declare module "esri/symbols/Font" {
  class Font {
    static STYLE_ITALIC: any;
    static STYLE_NORMAL: any;
    static STYLE_OBLIQUE: any;
    static VARIANT_NORMAL: any;
    static VARIANT_SMALLCAPS: any;
    static WEIGHT_BOLD: any;
    static WEIGHT_BOLDER: any;
    static WEIGHT_LIGHTER: any;
    static WEIGHT_NORMAL: any;
    decoration: string;
    family: string;
    size: number;
    style: string;
    variant: string;
    weight: string;
    constructor();
    constructor(size?: number, style?: string, variant?: string, weight?: string, family?: string);
    constructor(size?: string, style?: string, variant?: string, weight?: string, family?: string);
    constructor(json: Object);
    setDecoration(decoration: string): Font;
    setFamily(family: string): Font;
    setSize(size: number): Font;
    setSize(size: string): Font;
    setStyle(style: string): Font;
    setVariant(variant: string): Font;
    setWeight(weight: string): Font;
  }
  export = Font;
}

declare module "esri/symbols/LineSymbol" {
  import Symbol = require("esri/symbols/Symbol");

  class LineSymbol extends Symbol {
    width: number;
    setWidth(width: number): LineSymbol;
  }
  export = LineSymbol;
}

declare module "esri/symbols/MarkerSymbol" {
  import Symbol = require("esri/symbols/Symbol");

  class MarkerSymbol extends Symbol {
    angle: number;
    size: number;
    xoffset: number;
    yoffset: number;
    setAngle(angle: number): MarkerSymbol;
    setOffset(x: number, y: number): MarkerSymbol;
    setSize(size: number): MarkerSymbol;
    toJson(): any;
  }
  export = MarkerSymbol;
}

declare module "esri/symbols/PictureFillSymbol" {
  import FillSymbol = require("esri/symbols/FillSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  class PictureFillSymbol extends FillSymbol {
    height: number;
    url: string;
    width: number;
    xoffset: number;
    xscale: number;
    yoffset: number;
    yscale: number;
    constructor(url: string, outline: SimpleLineSymbol, width: number, height: number);
    constructor(json: Object);
    setHeight(height: number): PictureFillSymbol;
    setOffset(x: number, y: number): PictureFillSymbol;
    setUrl(url: string): PictureFillSymbol;
    setWidth(width: number): PictureFillSymbol;
    setXScale(scale: number): PictureFillSymbol;
    setYScale(scale: number): PictureFillSymbol;
  }
  export = PictureFillSymbol;
}

declare module "esri/symbols/PictureMarkerSymbol" {
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");

  class PictureMarkerSymbol extends MarkerSymbol {
    height: number;
    url: string;
    width: number;
    constructor(url: string, width: number, height: number);
    constructor(json: Object);
    setHeight(height: number): PictureMarkerSymbol;
    setUrl(url: string): PictureMarkerSymbol;
    setWidth(width: number): PictureMarkerSymbol;
  }
  export = PictureMarkerSymbol;
}

declare module "esri/symbols/ShieldLabelSymbol" {
  import Font = require("esri/symbols/Font");

  class ShieldLabelSymbol {
    constructor(imageUrl: string, textColor?: any, width?: number, height?: number, font?: Font);
  }
  export = ShieldLabelSymbol;
}

declare module "esri/symbols/SimpleFillSymbol" {
  import FillSymbol = require("esri/symbols/FillSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  class SimpleFillSymbol extends FillSymbol {
    static STYLE_BACKWARD_DIAGONAL: any;
    static STYLE_CROSS: any;
    static STYLE_DIAGONAL_CROSS: any;
    static STYLE_FORWARD_DIAGONAL: any;
    static STYLE_HORIZONTAL: any;
    static STYLE_NULL: any;
    static STYLE_SOLID: any;
    static STYLE_VERTICAL: any;
    style: string;
    constructor();
    constructor(style: string, outline: SimpleLineSymbol, color: any);
    constructor(json: Object);
    setStyle(style: string): SimpleFillSymbol;
  }
  export = SimpleFillSymbol;
}

declare module "esri/symbols/SimpleLineSymbol" {
  import LineSymbol = require("esri/symbols/LineSymbol");

  class SimpleLineSymbol extends LineSymbol {
    static STYLE_DASH: any;
    static STYLE_DASHDOT: any;
    static STYLE_DASHDOTDOT: any;
    static STYLE_DOT: any;
    static STYLE_LONGDASH: any;
    static STYLE_LONGDASHDOT: any;
    static STYLE_NULL: any;
    static STYLE_SHORTDASH: any;
    static STYLE_SHORTDASHDOT: any;
    static STYLE_SHORTDASHDOTDOT: any;
    static STYLE_SHORTDOT: any;
    static STYLE_SOLID: any;
    style: string;
    constructor();
    constructor(style: string, color: any, width: number);
    constructor(json: Object);
    setStyle(style: string): SimpleLineSymbol;
  }
  export = SimpleLineSymbol;
}

declare module "esri/symbols/SimpleMarkerSymbol" {
  import MarkerSymbol = require("esri/symbols/MarkerSymbol");
  import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol");

  class SimpleMarkerSymbol extends MarkerSymbol {
    static STYLE_CIRCLE: any;
    static STYLE_CROSS: any;
    static STYLE_DIAMOND: any;
    static STYLE_PATH: any;
    static STYLE_SQUARE: any;
    static STYLE_X: any;
    outline: SimpleLineSymbol;
    size: number;
    style: string;
    constructor();
    constructor(style: string, size: number, outline: SimpleLineSymbol, color: any);
    constructor(json: Object);
    setOutline(outline: SimpleLineSymbol): SimpleMarkerSymbol;
    setPath(path: string): SimpleMarkerSymbol;
    setStyle(style: string): SimpleMarkerSymbol;
  }
  export = SimpleMarkerSymbol;
}

declare module "esri/symbols/Symbol" {
  class Symbol {
    color: any;
    type: string;
    setColor(color: any): Symbol;
    toJson(): any;
  }
  export = Symbol;
}

declare module "esri/symbols/TextSymbol" {
  import Symbol = require("esri/symbols/Symbol");
  import Font = require("esri/symbols/Font");

  class TextSymbol extends Symbol {
    static ALIGN_END: any;
    static ALIGN_MIDDLE: any;
    static ALIGN_START: any;
    static DECORATION_LINETHROUGH: any;
    static DECORATION_NONE: any;
    static DECORATION_OVERLINE: any;
    static DECORATION_UNDERLINE: any;
    align: string;
    angle: number;
    decoration: string;
    font: Font;
    horizontalAlignment: string;
    kerning: boolean;
    rotated: boolean;
    text: string;
    verticalAlignment: string;
    xoffset: number;
    yoffset: number;
    constructor(text: string);
    constructor(text: string, font: Font, color: any);
    constructor(json: Object);
    setAlign(align: string): TextSymbol;
    setAngle(angle: number): TextSymbol;
    setDecoration(decoration: string): TextSymbol;
    setFont(font: Font): TextSymbol;
    setHorizontalAlignment(alignment: string): TextSymbol;
    setKerning(kerning: boolean): TextSymbol;
    setOffset(x: number, y: number): TextSymbol;
    setRotated(rotated: boolean): TextSymbol;
    setText(text: string): TextSymbol;
    setVerticalAlignment(alignment: string): TextSymbol;
  }
  export = TextSymbol;
}

declare module "esri/symbols/jsonUtils" {
  import Symbol = require("esri/symbols/Symbol");

  var jsonUtils: {
    fromJson(json: Object): Symbol;
    getShapeDescriptors(symbol: Symbol): any;
  };
  export = jsonUtils;
}

declare module "esri/tasks/AddressCandidate" {
  import Point = require("esri/geometry/Point");

  class AddressCandidate {
    address: any;
    attributes: any;
    location: Point;
    score: number;
  }
  export = AddressCandidate;
}

declare module "esri/tasks/AlgorithmicColorRamp" {
  class AlgorithmicColorRamp {
    algorithm: string;
    fromColor: any;
    toColor: any;
    constructor();
    toJson(): any;
  }
  export = AlgorithmicColorRamp;
}

declare module "esri/tasks/AreasAndLengthsParameters" {
  import Geometry = require("esri/geometry/Geometry");

  class AreasAndLengthsParameters {
    areaUnit: any;
    calculationType: string;
    lengthUnit: any;
    polygons: Geometry[];
    constructor();
  }
  export = AreasAndLengthsParameters;
}

declare module "esri/tasks/BufferParameters" {
  import SpatialReference = require("esri/SpatialReference");
  import Geometry = require("esri/geometry/Geometry");

  class BufferParameters {
    bufferSpatialReference: SpatialReference;
    distances: number[];
    geodesic: boolean;
    geometries: Geometry[];
    outSpatialReference: SpatialReference;
    unionResults: boolean;
    unit: string;
    constructor();
  }
  export = BufferParameters;
}

declare module "esri/tasks/ClassBreaksDefinition" {
  import Symbol = require("esri/symbols/Symbol");

  class ClassBreaksDefinition {
    baseSymbol: Symbol;
    breakCount: number;
    classificationField: string;
    classificationMethod: string;
    colorRamp: any;
    normalizationField: string;
    normalizationType: string;
    standardDeviationInterval: number;
    constructor();
    toJson(): any;
  }
  export = ClassBreaksDefinition;
}

declare module "esri/tasks/ClassificationDefinition" {
  import Symbol = require("esri/symbols/Symbol");

  class ClassificationDefinition {
    baseSymbol: Symbol;
    colorRamp: any;
    type: string;
  }
  export = ClassificationDefinition;
}

declare module "esri/tasks/ClosestFacilityParameters" {
  import SpatialReference = require("esri/SpatialReference");

  class ClosestFacilityParameters {
    accumulateAttributes: string[];
    attributeParameterValues: any[];
    defaultCutoff: number;
    defaultTargetFacilityCount: number;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    facilities: any;
    impedenceAttribute: string;
    incidents: any;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference;
    pointBarriers: any;
    polygonBarriers: any;
    polylineBarriers: any;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnDirections: boolean;
    returnFacilities: boolean;
    returnIncidents: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    timeOfDay: Date;
    timeOfDayUsage: string;
    travelDirection: string;
    useHierarchy: boolean;
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

  class ClosestFacilitySolveResult {
    directions: DirectionsFeatureSet;
    facilities: Point[];
    incidents: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    routes: Graphic[];
  }
  export = ClosestFacilitySolveResult;
}

declare module "esri/tasks/ClosestFacilityTask" {
  import esri = require("esri");
  import ClosestFacilityParameters = require("esri/tasks/ClosestFacilityParameters");
  import ClosestFacilitySolveResult = require("esri/tasks/ClosestFacilitySolveResult");

  class ClosestFacilityTask {
    constructor();
    solve(params: ClosestFacilityParameters, callback?: Function, errback?: Function): any;
    on(type: "solve-complete", listener: (event: { result: ClosestFacilitySolveResult; target: ClosestFacilityTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ClosestFacilityTask;
}

declare module "esri/tasks/DataFile" {
  class DataFile {
    itemID: string;
    url: string;
    constructor();
  }
  export = DataFile;
}

declare module "esri/tasks/DataLayer" {
  import Geometry = require("esri/geometry/Geometry");

  class DataLayer {
    static SPATIAL_REL_CONTAINS: any;
    static SPATIAL_REL_CROSSES: any;
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    static SPATIAL_REL_INDEXINTERSECTS: any;
    static SPATIAL_REL_INTERSECTS: any;
    static SPATIAL_REL_OVERLAPS: any;
    static SPATIAL_REL_TOUCHES: any;
    static SPATIAL_REL_WITHIN: any;
    geometry: Geometry;
    name: string;
    spatialRelationship: string;
    where: string;
    constructor();
  }
  export = DataLayer;
}

declare module "esri/tasks/Date" {
  class AGSDate {
    date: Date;
    format: string;
    constructor();
  }
  export = AGSDate;
}

declare module "esri/tasks/DirectionsFeatureSet" {
  import FeatureSet = require("esri/tasks/FeatureSet");
  import Extent = require("esri/geometry/Extent");
  import Polyline = require("esri/geometry/Polyline");

  class DirectionsFeatureSet extends FeatureSet {
    extent: Extent;
    mergedGeometry: Polyline;
    routeId: string;
    routeName: string;
    strings: any[];
    totalDriveTime: number;
    totalLength: number;
    totalTime: number;
  }
  export = DirectionsFeatureSet;
}

declare module "esri/tasks/DistanceParameters" {
  import Geometry = require("esri/geometry/Geometry");

  class DistanceParameters {
    distanceUnit: any;
    geodesic: boolean;
    geometry1: Geometry;
    geometry2: Geometry;
    constructor();
  }
  export = DistanceParameters;
}

declare module "esri/tasks/FeatureSet" {
  import Graphic = require("esri/graphic");
  import SpatialReference = require("esri/SpatialReference");

  class FeatureSet {
    displayFieldName: string;
    exceededTransferLimit: number;
    features: Graphic[];
    fieldAliases: any;
    geometryType: string;
    spatialReference: SpatialReference;
    constructor();
    constructor(json: Object);
  }
  export = FeatureSet;
}

declare module "esri/tasks/FindParameters" {
  import DynamicLayerInfo = require("esri/layers/DynamicLayerInfo");
  import SpatialReference = require("esri/SpatialReference");

  class FindParameters {
    contains: boolean;
    dynamicLayerInfos: DynamicLayerInfo[];
    layerDefinitions: string[];
    layerIds: number[];
    maxAllowableOffset: number;
    outSpatialReference: SpatialReference;
    returnGeometry: boolean;
    searchFields: string[];
    searchText: string;
    constructor();
  }
  export = FindParameters;
}

declare module "esri/tasks/FindResult" {
  import Graphic = require("esri/graphic");

  class FindResult {
    displayFieldName: string;
    feature: Graphic;
    foundFieldName: string;
    layerId: number;
    layerName: string;
  }
  export = FindResult;
}

declare module "esri/tasks/FindTask" {
  import esri = require("esri");
  import FindParameters = require("esri/tasks/FindParameters");
  import FindResult = require("esri/tasks/FindResult");

  class FindTask {
    url: string;
    constructor(url: string, options?: esri.FindTaskOptions);
    execute(findParameters: FindParameters, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { results: FindResult[]; target: FindTask }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: FindTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = FindTask;
}

declare module "esri/tasks/GPMessage" {
  class GPMessage {
    static TYPE_ABORT: any;
    static TYPE_EMPTY: any;
    static TYPE_ERROR: any;
    static TYPE_INFORMATIVE: any;
    static TYPE_PROCESS_DEFINITION: any;
    static TYPE_PROCESS_START: any;
    static TYPE_PROCESS_STOP: any;
    static TYPE_WARNING: any;
    description: string;
    type: number;
  }
  export = GPMessage;
}

declare module "esri/tasks/GeneralizeParameters" {
  import Geometry = require("esri/geometry/Geometry");

  class GeneralizeParameters {
    deviationUnit: any;
    geometries: Geometry[];
    maxDeviation: number;
    constructor();
  }
  export = GeneralizeParameters;
}

declare module "esri/tasks/GenerateRendererParameters" {
  import ClassificationDefinition = require("esri/tasks/ClassificationDefinition");

  class GenerateRendererParameters {
    classificationDefinition: ClassificationDefinition;
    formatLabel: boolean;
    precision: number;
    prefix: string;
    unitLabel: string;
    where: string;
    constructor();
  }
  export = GenerateRendererParameters;
}

declare module "esri/tasks/GenerateRendererTask" {
  import esri = require("esri");
  import GenerateRendererParameters = require("esri/tasks/GenerateRendererParameters");
  import Renderer = require("esri/renderers/Renderer");

  class GenerateRendererTask {
    constructor(url: string, options?: esri.GenerateRendererTaskOptions);
    execute(generateRendererParameters: GenerateRendererParameters, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { renderer: Renderer; target: GenerateRendererTask }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: GenerateRendererTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
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

  class GeometryService {
    static UNIT_ACRES: any;
    static UNIT_ARES: any;
    static UNIT_FOOT: any;
    static UNIT_HECTARES: any;
    static UNIT_KILOMETER: any;
    static UNIT_METER: any;
    static UNIT_NAUTICAL_MILE: any;
    static UNIT_SQUARE_CENTIMETERS: any;
    static UNIT_SQUARE_DECIMETERS: any;
    static UNIT_SQUARE_FEET: any;
    static UNIT_SQUARE_INCHES: any;
    static UNIT_SQUARE_KILOMETERS: any;
    static UNIT_SQUARE_METERS: any;
    static UNIT_SQUARE_MILES: any;
    static UNIT_SQUARE_MILLIMETERS: any;
    static UNIT_SQUARE_YARDS: any;
    static UNIT_STATUTE_MILE: any;
    static UNIT_US_NAUTICAL_MILE: any;
    url: string;
    constructor(url: string);
    areasAndLengths(areasAndLengthsParameters: AreasAndLengthsParameters, callback?: Function, errback?: Function): any;
    autoComplete(polygons: Polygon[], polylines: Polyline[], callback?: Function, errback?: Function): any;
    buffer(bufferParameters: BufferParameters, callback?: Function, errback?: Function): any;
    convexHull(geometries: Geometry[], callback?: Function, errback?: Function): any;
    cut(geometries: Geometry[], cutterGeometry: Geometry, callback?: Function, errback?: Function): any;
    difference(geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function): any;
    distance(params: DistanceParameters, callback?: Function, errback?: Function): any;
    generalize(params: GeneralizeParameters, callback?: Function, errback?: Function): any;
    intersect(geometries: Geometry[], geometry: Geometry, callback?: Function, errback?: Function): any;
    labelPoints(polygons: Geometry[], callback?: Function, errback?: Function): any;
    lengths(lengthsParameter: LengthsParameters, callback?: Function, errback?: Function): any;
    offset(params: OffsetParameters, callback?: Function, errback?: Function): any;
    project(params: ProjectParameters, callback?: Function, errback?: Function): any;
    relation(relationParameters: RelationParameters, callback?: Function, errback?: Function): any;
    reshape(targetGeometry: Geometry, reshaperGeometry: Geometry, callback?: Function, errback?: Function): any;
    simplify(geometries: Geometry[], callback?: Function, errback?: Function): any;
    trimExtend(params: TrimExtendParameters, callback?: Function, errback?: Function): any;
    union(geometries: Geometry[], callback?: Function, errback?: Function): any;
    on(type: "areas-and-lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle
    on(type: "auto-complete-complete", listener: (event: { geometries: Polygon[]; target: GeometryService }) => void): esri.Handle
    on(type: "buffer-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "convex-hull-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle
    on(type: "cut-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle
    on(type: "difference-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "distance-complete", listener: (event: { distance: number; target: GeometryService }) => void): esri.Handle
    on(type: "error", listener: (event: { target: GeometryService }) => void): esri.Handle
    on(type: "generalize-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "intersect-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "label-points-complete ", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "label-points-complete", listener: (event: { labelPoints: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "lengths-complete", listener: (event: { result: any; target: GeometryService }) => void): esri.Handle
    on(type: "offset-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "project-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "relation-complete", listener: (event: { target: GeometryService }) => void): esri.Handle
    on(type: "reshape-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle
    on(type: "simplify-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "trim-extend-complete", listener: (event: { geometries: Geometry[]; target: GeometryService }) => void): esri.Handle
    on(type: "union-complete", listener: (event: { geometry: Geometry; target: GeometryService }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
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

  class Geoprocessor {
    outputSpatialReference: SpatialReference;
    outSpatialReference: SpatialReference;
    processSpatialReference: SpatialReference;
    updateDelay: number;
    url: string;
    constructor(url: string);
    cancelJob(jobId: string, callback: Function, errback: Function): any;
    cancelJobStatusUpdates(jobId: string): void;
    checkJobStatus(jobId: string, callback?: Function, errback?: Function): void;
    execute(inputParameters: any, callback?: Function, errback?: Function): any;
    getResultData(jobId: string, parameterName: string, callback?: Function, errback?: Function): any;
    getResultImage(jobId: string, parameterName: string, imageParameters: ImageParameters, callback?: Function, errback?: Function): any;
    getResultImageLayer(jobId: string, parameterName?: string, imageParameters?: ImageParameters, callback?: Function): ArcGISDynamicMapServiceLayer;
    setOutputSpatialReference(spatialReference: SpatialReference): void;
    setOutSpatialReference(spatialReference: SpatialReference): void;
    setProcessSpatialReference(spatialReference: SpatialReference): void;
    setUpdateDelay(delay: number): void;
    submitJob(inputParameters: any, callback?: Function, statusCallback?: Function, errback?: Function): void;
    on(type: "error", listener: (event: { error: Error; target: Geoprocessor }) => void): esri.Handle
    on(type: "execute-complete", listener: (event: { messages: GPMessage[]; results: ParameterValue[]; target: Geoprocessor }) => void): esri.Handle
    on(type: "get-result-data-complete", listener: (event: { result: ParameterValue; target: Geoprocessor }) => void): esri.Handle
    on(type: "get-result-image-complete", listener: (event: { mapImage: MapImage; target: Geoprocessor }) => void): esri.Handle
    on(type: "get-result-image-layer-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle
    on(type: "job-cancel", listener: (event: { target: Geoprocessor }) => void): esri.Handle
    on(type: "job-complete", listener: (event: { target: Geoprocessor }) => void): esri.Handle
    on(type: "status-update", listener: (event: { target: Geoprocessor }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
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

  class IdentifyParameters {
    static LAYER_OPTION_ALL: any;
    static LAYER_OPTION_TOP: any;
    static LAYER_OPTION_VISIBLE: any;
    dpi: number;
    dynamicLayerInfos: DynamicLayerInfo[];
    geometry: Geometry;
    height: number;
    layerDefinitions: string[];
    layerIds: number[];
    layerOption: string;
    layerTimeOptions: LayerTimeOptions[];
    mapExtent: Extent;
    maxAllowableOffset: number;
    returnGeometry: boolean;
    spatialReference: SpatialReference;
    timeExtent: TimeExtent;
    tolerance: number;
    width: number;
    constructor();
  }
  export = IdentifyParameters;
}

declare module "esri/tasks/IdentifyResult" {
  import Graphic = require("esri/graphic");

  class IdentifyResult {
    displayFieldName: string;
    feature: Graphic;
    layerId: number;
    layerName: string;
  }
  export = IdentifyResult;
}

declare module "esri/tasks/IdentifyTask" {
  import esri = require("esri");
  import IdentifyParameters = require("esri/tasks/IdentifyParameters");
  import IdentifyResult = require("esri/tasks/IdentifyResult");

  class IdentifyTask {
    url: string;
    constructor(url: string, options?: esri.IdentifyTaskOptions);
    execute(identifyParameters: IdentifyParameters, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { results: IdentifyResult[]; target: IdentifyTask }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: IdentifyTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = IdentifyTask;
}

declare module "esri/tasks/ImageServiceIdentifyParameters" {
  import Geometry = require("esri/geometry/Geometry");
  import MosaicRule = require("esri/layers/MosaicRule");
  import Symbol = require("esri/symbols/Symbol");
  import RasterFunction = require("esri/layers/RasterFunction");
  import TimeExtent = require("esri/TimeExtent");

  class ImageServiceIdentifyParameters {
    geometry: Geometry;
    mosaicRule: MosaicRule;
    noData: any;
    noDataInterpretation: string;
    pixelSize: Symbol;
    pixelSizeX: number;
    pixelSizeY: number;
    renderingRule: RasterFunction;
    returnCatalogItems: boolean;
    returnGeometry: boolean;
    timeExtent: TimeExtent;
    constructor();
  }
  export = ImageServiceIdentifyParameters;
}

declare module "esri/tasks/ImageServiceIdentifyResult" {
  import FeatureSet = require("esri/tasks/FeatureSet");
  import Point = require("esri/geometry/Point");

  class ImageServiceIdentifyResult {
    catalogItems: FeatureSet;
    catalogItemVisibilities: number[];
    location: Point;
    name: string;
    objectId: number;
    properties: any;
    value: string;
  }
  export = ImageServiceIdentifyResult;
}

declare module "esri/tasks/ImageServiceIdentifyTask" {
  import esri = require("esri");
  import ImageServiceIdentifyParameters = require("esri/tasks/ImageServiceIdentifyParameters");
  import ImageServiceIdentifyResult = require("esri/tasks/ImageServiceIdentifyResult");

  class ImageServiceIdentifyTask {
    constructor(url: string);
    execute(params: ImageServiceIdentifyParameters, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { result: ImageServiceIdentifyResult; target: ImageServiceIdentifyTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ImageServiceIdentifyTask;
}

declare module "esri/tasks/JobInfo" {
  import GPMessage = require("esri/tasks/GPMessage");

  class JobInfo {
    static STATUS_CANCELLED: any;
    static STATUS_CANCELLING: any;
    static STATUS_DELETED: any;
    static STATUS_DELETING: any;
    static STATUS_EXECUTING: any;
    static STATUS_FAILED: any;
    static STATUS_NEW: any;
    static STATUS_SUBMITTED: any;
    static STATUS_SUCCEEDED: any;
    static STATUS_TIMED_OUT: any;
    static STATUS_WAITING: any;
    jobId: string;
    jobStatus: string;
    messages: GPMessage[];
  }
  export = JobInfo;
}

declare module "esri/tasks/LegendLayer" {
  class LegendLayer {
    layerId: string;
    subLayerIds: string[];
    constructor();
  }
  export = LegendLayer;
}

declare module "esri/tasks/LengthsParameters" {
  import Geometry = require("esri/geometry/Geometry");

  class LengthsParameters {
    calculationType: string;
    geodesic: boolean;
    lengthUnit: any;
    polylines: Geometry[];
    constructor();
  }
  export = LengthsParameters;
}

declare module "esri/tasks/LinearUnit" {
  class LinearUnit {
    distance: number;
    units: string;
    constructor();
  }
  export = LinearUnit;
}

declare module "esri/tasks/MultipartColorRamp" {
  import AlgorithmicColorRamp = require("esri/tasks/AlgorithmicColorRamp");

  class MultipartColorRamp {
    colorRamps: AlgorithmicColorRamp[];
    constructor();
    toJson(): any;
  }
  export = MultipartColorRamp;
}

declare module "esri/tasks/NAMessage" {
  class NAMessage {
    static TYPE_ABORT: any;
    static TYPE_EMPTY: any;
    static TYPE_ERROR: any;
    static TYPE_INFORMATIVE: any;
    static TYPE_PROCESS_DEFINITION: any;
    static TYPE_PROCESS_START: any;
    static TYPE_PROCESS_STOP: any;
    static TYPE_WARNING: any;
    description: string;
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

  class OffsetParameters {
    bevelRatio: number;
    geometries: Geometry[];
    offsetDistance: number;
    offsetHow: string;
    offsetUnit: string;
    constructor();
  }
  export = OffsetParameters;
}

declare module "esri/tasks/ParameterValue" {
  class ParameterValue {
    dataType: string;
    value: any;
  }
  export = ParameterValue;
}

declare module "esri/tasks/PrintParameters" {
  import Map = require("esri/map");
  import SpatialReference = require("esri/SpatialReference");
  import PrintTemplate = require("esri/tasks/PrintTemplate");

  class PrintParameters {
    extraParameters: any;
    map: Map;
    outSpatialReference: SpatialReference;
    template: PrintTemplate;
    constructor();
  }
  export = PrintParameters;
}

declare module "esri/tasks/PrintTask" {
  import esri = require("esri");
  import PrintParameters = require("esri/tasks/PrintParameters");

  class PrintTask {
    url: string;
    constructor(url: string, params?: esri.PrintTaskOptions);
    execute(printParameters: PrintParameters, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { url: string; target: PrintTask }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: PrintTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = PrintTask;
}

declare module "esri/tasks/PrintTemplate" {
  class PrintTemplate {
    exportOptions: any;
    format: string;
    label: string;
    layout: string;
    layoutOptions: any;
    preserveScale: boolean;
    showAttribution: boolean;
    constructor();
  }
  export = PrintTemplate;
}

declare module "esri/tasks/ProjectParameters" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");

  class ProjectParameters {
    geometries: Geometry[];
    outSR: SpatialReference;
    transformation: any;
    transformationForward: boolean;
    constructor();
  }
  export = ProjectParameters;
}

declare module "esri/tasks/QueryTask" {
  import esri = require("esri");
  import Query = require("esri/tasks/query");
  import RelationshipQuery = require("esri/tasks/RelationshipQuery");
  import FeatureSet = require("esri/tasks/FeatureSet");

  class QueryTask {
    url: string;
    constructor(url: string, options?: esri.QueryTaskOptions);
    execute(parameters: Query, callback?: Function, errback?: Function): any;
    executeForCount(query: Query, callback?: Function, errback?: Function): any;
    executeForIds(parameters: Query, callback?: Function, errback?: Function): any;
    executeRelationshipQuery(parameters: RelationshipQuery, callback?: Function, errback?: Function): any;
    on(type: "complete", listener: (event: { featureSet: FeatureSet; target: QueryTask }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: QueryTask }) => void): esri.Handle
    on(type: "execute-for-count-complete", listener: (event: { count: number; target: QueryTask }) => void): esri.Handle
    on(type: "execute-for-ids-complete", listener: (event: { objectIds: number[]; target: QueryTask }) => void): esri.Handle
    on(type: "execute-relationship-query-complete", listener: (event: { featureSets: FeatureSet[]; target: QueryTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = QueryTask;
}

declare module "esri/tasks/RasterData" {
  class RasterData {
    format: string;
    itemID: string;
    url: string;
    constructor();
  }
  export = RasterData;
}

declare module "esri/tasks/RelationParameters" {
  import Geometry = require("esri/geometry/Geometry");

  class RelationParameters {
    static SPATIAL_REL_COINCIDENCE: any;
    static SPATIAL_REL_CROSS: any;
    static SPATIAL_REL_DISJOINT: any;
    static SPATIAL_REL_IN: any;
    static SPATIAL_REL_INTERIORINTERSECTION: any;
    static SPATIAL_REL_INTERSECTION: any;
    static SPATIAL_REL_LINETOUCH: any;
    static SPATIAL_REL_OVERLAP: any;
    static SPATIAL_REL_POINTTOUCH: any;
    static SPATIAL_REL_RELATION: any;
    static SPATIAL_REL_TOUCH: any;
    static SPATIAL_REL_WITHIN: any;
    geometries1: Geometry[];
    geometries2: Geometry[];
    relation: string;
    relationParam: string;
    constructor();
  }
  export = RelationParameters;
}

declare module "esri/tasks/RelationshipQuery" {
  import SpatialReference = require("esri/SpatialReference");

  class RelationshipQuery {
    definitionExpression: string;
    geometryPrecision: number;
    maxAllowableOffset: number;
    objectIds: number[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    relationshipId: number;
    returnGeometry: boolean;
    constructor();
  }
  export = RelationshipQuery;
}

declare module "esri/tasks/RouteParameters" {
  import SpatialReference = require("esri/SpatialReference");

  class RouteParameters {
    accumulateAttributes: string[];
    attributeParameterValues: any[];
    barriers: any;
    directionsLanguage: string;
    directionsLengthUnits: string;
    directionsOutputType: string;
    directionsStyleName: string;
    directionsTimeAttribute: string;
    doNotLocateOnRestrictedElements: boolean;
    findBestSequence: boolean;
    ignoreInvalidLocations: boolean;
    impedanceAttribute: string;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outSpatialReference: SpatialReference;
    polygonBarriers: any;
    polylineBarriers: any;
    preserveFirstStop: boolean;
    preserveLastStop: boolean;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnBarriers: boolean;
    returnDirections: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    returnRoutes: boolean;
    returnStops: boolean;
    startTime: Date;
    startTimeIsUTC: boolean;
    stops: any;
    useHierarchy: boolean;
    useTimeWindows: boolean;
    constructor();
  }
  export = RouteParameters;
}

declare module "esri/tasks/RouteResult" {
  import DirectionsFeatureSet = require("esri/tasks/DirectionsFeatureSet");
  import Graphic = require("esri/graphic");

  class RouteResult {
    directions: DirectionsFeatureSet;
    route: Graphic;
    routeName: string;
    stops: Graphic[];
  }
  export = RouteResult;
}

declare module "esri/tasks/RouteTask" {
  import esri = require("esri");
  import RouteParameters = require("esri/tasks/RouteParameters");

  class RouteTask {
    url: string;
    constructor(url: string);
    solve(params: RouteParameters, callback?: Function, errback?: Function): any;
    on(type: "error", listener: (event: { error: Error; target: RouteTask }) => void): esri.Handle
    on(type: "solve-complete", listener: (event: { result: any; target: RouteTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = RouteTask;
}

declare module "esri/tasks/ServiceAreaParameters" {
  import SpatialReference = require("esri/SpatialReference");

  class ServiceAreaParameters {
    accumulateAttributes: string[];
    attributeParameterValues: any[];
    defaultBreaks: number[];
    doNotLocateOnRestrictedElements: boolean;
    excludeSourcesFromPolygons: string[];
    facilities: any;
    impedanceAttribute: string;
    mergeSimilarPolygonRanges: boolean;
    outputGeometryPrecision: number;
    outputGeometryPrecisionUnits: string;
    outputLines: string;
    outputPolygons: string;
    outSpatialReference: SpatialReference;
    overlapLines: boolean;
    overlapPolygons: boolean;
    pointBarriers: any;
    polygonBarriers: any;
    polylineBarriers: any;
    restrictionAttributes: string[];
    restrictUTurns: string;
    returnFacilities: boolean;
    returnPointBarriers: boolean;
    returnPolygonBarriers: boolean;
    returnPolylineBarriers: boolean;
    splitLinesAtBreaks: boolean;
    splitPolygonsAtBreaks: boolean;
    timeOfDay: Date;
    travelDirection: string;
    trimOuterPolygon: boolean;
    trimPolygonDistance: number;
    trimPolygonDistanceUnits: string;
    useHierarchy: boolean;
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

  class ServiceAreaSolveResult {
    facilities: Point[];
    messages: NAMessage[];
    pointBarriers: Point[];
    polygonBarriers: Polygon[];
    polylineBarriers: Polyline[];
    serviceAreaPolygons: Graphic[];
    serviceAreaPolylines: Graphic[];
  }
  export = ServiceAreaSolveResult;
}

declare module "esri/tasks/ServiceAreaTask" {
  import esri = require("esri");
  import ServiceAreaParameters = require("esri/tasks/ServiceAreaParameters");
  import ServiceAreaSolveResult = require("esri/tasks/ServiceAreaSolveResult");

  class ServiceAreaTask {
    constructor();
    solve(params: ServiceAreaParameters, callback?: Function, errback?: Function): any;
    on(type: "solve-complete", listener: (event: { result: ServiceAreaSolveResult; target: ServiceAreaTask }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = ServiceAreaTask;
}

declare module "esri/tasks/StatisticDefinition" {
  class StatisticDefinition {
    onStatisticField: string;
    outStatisticFieldName: string;
    statisticType: string;
    constructor();
  }
  export = StatisticDefinition;
}

declare module "esri/tasks/TrimExtendParameters" {
  import Polyline = require("esri/geometry/Polyline");

  class TrimExtendParameters {
    extendHow: string;
    polylines: Polyline[];
    trimExtendTo: Polyline;
    constructor();
  }
  export = TrimExtendParameters;
}

declare module "esri/tasks/UniqueValueDefinition" {
  import Symbol = require("esri/symbols/Symbol");

  class UniqueValueDefinition {
    attributeField: string;
    attributeField2: string;
    attributeField3: string;
    baseSymbol: Symbol;
    colorRamp: any;
    constructor();
    toJson(): any;
  }
  export = UniqueValueDefinition;
}

declare module "esri/tasks/geoenrichment/AddressStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");

  class AddressStudyArea extends StudyArea {
    attributes: any;
  }
  export = AddressStudyArea;
}

declare module "esri/tasks/geoenrichment/DriveBuffer" {
  import esri = require("esri");

  class DriveBuffer {
    radius: number[];
    units: string;
    constructor(params: esri.DriveBufferOptions);
  }
  export = DriveBuffer;
}

declare module "esri/tasks/geoenrichment/DriveUnits" {
  class DriveUnits {
    static ACRES: any;
    static ARES: any;
    static CENTIMETERS: any;
    static DECIMAL_DEGREES: any;
    static DECIMETERS: any;
    static DEGREE_MINUTE_SECONDS: any;
    static FEET: any;
    static HECTARES: any;
    static INCHES: any;
    static KILOMETERS: any;
    static METERS: any;
    static MILES: any;
    static MILLIMETERS: any;
    static MINUTES: any;
    static NAUTICAL_MILES: any;
    static POINTS: any;
    static SQUARE_CENTIMETERS: any;
    static SQUARE_DECIMETERS: any;
    static SQUARE_FEET: any;
    static SQUARE_INCHES: any;
    static SQUARE_KILOMETERS: any;
    static SQUARE_METERS: any;
    static SQUARE_MILES: any;
    static SQUARE_MILLIMETERS: any;
    static SQUARE_YARDS: any;
    static UNKNOWN: any;
    static YARDS: any;
  }
  export = DriveUnits;
}

declare module "esri/tasks/geoenrichment/GeographyLevel" {
  class GeographyLevel {
    countryID: string;
    datasetID: string;
    layerID: string;
    constructor(json?: Object);
  }
  export = GeographyLevel;
}

declare module "esri/tasks/geoenrichment/GeometryStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");
  import Geometry = require("esri/geometry/Geometry");

  class GeometryStudyArea extends StudyArea {
    geometry: Geometry;
    constructor();
  }
  export = GeometryStudyArea;
}

declare module "esri/tasks/geoenrichment/IntersectingGeographies" {
  import GeographyLevel = require("esri/tasks/geoenrichment/GeographyLevel");

  class IntersectingGeographies {
    levels: GeographyLevel[];
  }
  export = IntersectingGeographies;
}

declare module "esri/tasks/geoenrichment/RingBuffer" {
  import esri = require("esri");

  class RingBuffer {
    radii: number[];
    units: string;
    constructor(params: esri.RingBufferOptions);
  }
  export = RingBuffer;
}

declare module "esri/tasks/geoenrichment/StandardGeographyStudyArea" {
  import StudyArea = require("esri/tasks/geoenrichment/StudyArea");

  class StandardGeographyStudyArea extends StudyArea {
    countryID: string;
    geographyLayerID: string;
    ids: string[];
  }
  export = StandardGeographyStudyArea;
}

declare module "esri/tasks/geoenrichment/StudyArea" {
  import GeographyLevel = require("esri/tasks/geoenrichment/GeographyLevel");

  class StudyArea {
    attributes: any;
    comparisonGeographyLevels: GeographyLevel[];
    options: any;
    returnGeometry: boolean;
    toJson(): any;
  }
  export = StudyArea;
}

declare module "esri/tasks/locator" {
  import esri = require("esri");
  import SpatialReference = require("esri/SpatialReference");
  import Point = require("esri/geometry/Point");
  import AddressCandidate = require("esri/tasks/AddressCandidate");

  class Locator {
    outSpatialReference: SpatialReference;
    url: string;
    constructor(url: string);
    addressesToLocations(params: any, callback: Function, errback: Function): any;
    addressToLocations(params: any, callback?: Function, errback?: Function): any;
    locationToAddress(location: Point, distance: number, callback?: Function, errback?: Function): any;
    setOutSpatialReference(spatialReference: SpatialReference): void;
    on(type: "addresses-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): esri.Handle
    on(type: "address-to-locations-complete", listener: (event: { addresses: AddressCandidate[]; target: Locator }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: Locator }) => void): esri.Handle
    on(type: "location-to-address-complete", listener: (event: { address: AddressCandidate; target: Locator }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Locator;
}

declare module "esri/tasks/query" {
  import Geometry = require("esri/geometry/Geometry");
  import SpatialReference = require("esri/SpatialReference");
  import StatisticDefinition = require("esri/tasks/StatisticDefinition");
  import Symbol = require("esri/symbols/Symbol");
  import TimeExtent = require("esri/TimeExtent");

  class Query {
    static SPATIAL_REL_CONTAINS: any;
    static SPATIAL_REL_CROSSES: any;
    static SPATIAL_REL_ENVELOPEINTERSECTS: any;
    static SPATIAL_REL_INDEXINTERSECTS: any;
    static SPATIAL_REL_INTERSECTS: any;
    static SPATIAL_REL_OVERLAPS: any;
    static SPATIAL_REL_RELATION: any;
    static SPATIAL_REL_TOUCHES: any;
    static SPATIAL_REL_WITHIN: any;
    geometry: Geometry;
    geometryPrecision: number;
    groupByFieldsForStatistics: string[];
    maxAllowableOffset: number;
    objectIds: number[];
    orderByFields: string[];
    outFields: string[];
    outSpatialReference: SpatialReference;
    outStatistics: StatisticDefinition[];
    pixelSize: Symbol;
    relationParam: string;
    returnGeometry: boolean;
    spatialRelationship: string;
    text: string;
    timeExtent: TimeExtent;
    where: string;
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

  class Draw {
    static ARROW: any;
    static CIRCLE: any;
    static DOWN_ARROW: any;
    static ELLIPSE: any;
    static EXTENT: any;
    static FREEHAND_POLYGON: any;
    static FREEHAND_POLYLINE: any;
    static LEFT_ARROW: any;
    static LINE: any;
    static MULTI_POINT: any;
    static POINT: any;
    static POLYGON: any;
    static POLYLINE: any;
    static RECTANGLE: any;
    static RIGHT_ARROW: any;
    static TRIANGLE: any;
    static UP_ARROW: any;
    fillSymbol: SimpleFillSymbol;
    lineSymbol: SimpleLineSymbol;
    markerSymbol: SimpleMarkerSymbol;
    respectDrawingVertexOrder: boolean;
    constructor(map: Map, options?: esri.DrawOptions);
    activate(geometryType: string, options?: any): void;
    deactivate(): void;
    finishDrawing(): void;
    setFillSymbol(fillSymbol: FillSymbol): void;
    setLineSymbol(lineSymbol: LineSymbol): void;
    setMarkerSymbol(markerSymbol: MarkerSymbol): void;
    setRespectDrawingVertexOrder(set: boolean): void;
    on(type: "draw-complete", listener: (event: { geographicGeometry: Geometry; geometry: Geometry; target: Draw }) => void): esri.Handle
    on(type: "draw-end", listener: (event: { geometry: Geometry; target: Draw }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Draw;
}

declare module "esri/toolbars/edit" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Graphic = require("esri/graphic");

  class Edit {
    static EDIT_TEXT: any;
    static EDIT_VERTICES: any;
    static MOVE: any;
    static ROTATE: any;
    static SCALE: any;
    constructor(map: Map, options?: esri.EditOptions);
    activate(tool: string, graphic: Graphic, options?: any): void;
    deactivate(): void;
    getCurrentState(): any;
    refresh(): void;
    on(type: "activate", listener: (event: { graphic: Graphic; tool: string; target: Edit }) => void): esri.Handle
    on(type: "deactivate", listener: (event: { graphic: Graphic; info: any; tool: string; target: Edit }) => void): esri.Handle
    on(type: "graphic-click", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle
    on(type: "graphic-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "graphic-move", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): esri.Handle
    on(type: "graphic-move-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "graphic-move-stop", listener: (event: { graphic: Graphic; transform: any; target: Edit }) => void): esri.Handle
    on(type: "rotate", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle
    on(type: "rotate-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "rotate-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "rotate-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle
    on(type: "scale", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle
    on(type: "scale-first-move", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "scale-start", listener: (event: { graphic: Graphic; target: Edit }) => void): esri.Handle
    on(type: "scale-stop", listener: (event: { graphic: Graphic; info: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-add", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-click", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-delete", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-first-move", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-mouse-out", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-mouse-over", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-move", listener: (event: { graphic: Graphic; transform: any; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-move-start", listener: (event: { graphic: Graphic; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: "vertex-move-stop", listener: (event: { graphic: Graphic; transform: any; vertexInfo: any; target: Edit }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Edit;
}

declare module "esri/toolbars/navigation" {
  import esri = require("esri");
  import Map = require("esri/map");
  import Symbol = require("esri/symbols/Symbol");

  class Navigation {
    static PAN: any;
    static ZOOM_IN: any;
    static ZOOM_OUT: any;
    constructor(map: Map);
    activate(navType: string): void;
    deactivate(): void;
    isFirstExtent(): boolean;
    isLastExtent(): boolean;
    setZoomSymbol(symbol: Symbol): void;
    zoomToFullExtent(): void;
    zoomToNextExtent(): void;
    zoomToPrevExtent(): void;
    on(type: "extent-history-change", listener: (event: { target: Navigation }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = Navigation;
}

declare module "esri/undoManager" {
  import esri = require("esri");
  import OperationBase = require("esri/OperationBase");

  class UndoManager {
    canRedo: boolean;
    canUndo: boolean;
    length: number;
    position: number;
    constructor(options?: esri.UndoManagerOptions);
    add(operation: OperationBase): void;
    clearRedo(): void;
    clearUndo(): void;
    destroy(): void;
    get(operationId: number): OperationBase;
    peekRedo(): OperationBase;
    peekUndo(): OperationBase;
    redo(): void;
    remove(operationId: number): OperationBase;
    undo(): void;
    on(type: "add", listener: (event: { target: UndoManager }) => void): esri.Handle
    on(type: "change", listener: (event: { target: UndoManager }) => void): esri.Handle
    on(type: "redo", listener: (event: { target: UndoManager }) => void): esri.Handle
    on(type: "undo", listener: (event: { target: UndoManager }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = UndoManager;
}

declare module "esri/units" {
  class Units {
    static ACRES: any;
    static ARES: any;
    static CENTIMETERS: any;
    static DECIMAL_DEGREES: any;
    static DECIMETERS: any;
    static FEET: any;
    static HECTARES: any;
    static INCHES: any;
    static KILOMETERS: any;
    static METERS: any;
    static MILES: any;
    static MILLIMETERS: any;
    static NAUTICAL_MILES: any;
    static POINTS: any;
    static SQUARE_CENTIMETERS: any;
    static SQUARE_DECIMETERS: any;
    static SQUARE_FEET: any;
    static SQUARE_INCHES: any;
    static SQUARE_KILOMETERS: any;
    static SQUARE_METERS: any;
    static SQUARE_MILES: any;
    static SQUARE_MILLIMETERS: any;
    static SQUARE_YARDS: any;
    static UNKNOWN: any;
    static YARDS: any;
  }
  export = Units;
}

declare module "esri/urlUtils" {
  var urlUtils: {
    addProxyRule(rule: any): number;
    getProxyRule(): any;
    urlToObject(url: string): any;
  };
  export = urlUtils;
}

declare module "esri/virtualearth/VEAddress" {
  class VEAddress {
    addressLine: string;
    adminDistrict: string;
    countryRegion: string;
    district: string;
    formattedAddress: string;
    locality: string;
    postalCode: string;
    postalTown: string;
  }
  export = VEAddress;
}

declare module "esri/virtualearth/VEGeocodeResult" {
  import VEAddress = require("esri/virtualearth/VEAddress");
  import Extent = require("esri/geometry/Extent");
  import Point = require("esri/geometry/Point");

  class VEGeocodeResult {
    address: VEAddress;
    bestView: Extent;
    calculationMethod: string;
    confidence: string;
    displayName: string;
    entityType: string;
    location: Point;
    matchCodes: string;
  }
  export = VEGeocodeResult;
}

declare module "esri/virtualearth/VEGeocoder" {
  import esri = require("esri");
  import VEGeocodeResult = require("esri/virtualearth/VEGeocodeResult");

  class VEGeocoder {
    culture: string;
    constructor(options: esri.VEGeocoderOptions);
    addressToLocations(query: string, callback?: Function, errback?: Function): any;
    setCulture(culture: string): void;
    on(type: "address-to-locations-complete", listener: (event: { geocodeResults: VEGeocodeResult[]; target: VEGeocoder }) => void): esri.Handle
    on(type: "error", listener: (event: { error: Error; target: VEGeocoder }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = VEGeocoder;
}

declare module "esri/virtualearth/VETiledLayer" {
  import esri = require("esri");
  import TiledMapServiceLayer = require("esri/layers/TiledMapServiceLayer");

  class VETiledLayer extends TiledMapServiceLayer {
    static MAP_STYLE_AERIAL: any;
    static MAP_STYLE_AERIAL_WITH_LABELS: any;
    static MAP_STYLE_ROAD: any;
    copyright: string;
    culture: string;
    mapStyle: string;
    constructor(options: esri.VETiledLayerOptions);
    setCulture(culture: string): void;
    setMapStyle(style: string): void;
    on(type: "map-style-change", listener: (event: { target: VETiledLayer }) => void): esri.Handle
    on(type: string, listener: (event: any) => void): esri.Handle
  }
  export = VETiledLayer;
}

