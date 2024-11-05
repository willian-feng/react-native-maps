/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Descriptor, ViewBaseProps, ViewRawProps } from '@rnoh/react-native-openharmony/ts';
import { Camera, EdgePadding, LatLng, MapStyleElement, MapType, Region, Point, GeoJSON } from '../sharedTypes';

export interface AIRMapState {}
export interface AIRMapRawProps extends ViewRawProps {
  cacheEnabled?: boolean;
  camera?: Camera;
  customMapStyle?: MapStyleElement[];
  followsUserLocation?: boolean;
  isAccessibilityElement?: boolean;
  initialCamera?: Camera;
  region?: Region;
  initialRegion?: Region;
  kmlSrc?: string;
  legalLabelInsets?: EdgePadding;
  liteMode?: boolean;
  googleMapId?: string;
  loadingBackgroundColor?: string;
  loadingEnabled?: boolean;
  loadingIndicatorColor?: string;
  mapPadding?: EdgePadding;
  mapType?: MapType;
  maxDelta?: number;
  minDelta?: number;
  moveOnMarkerPress?: boolean;
  rotateEnabled: boolean;
  scrollEnabled: boolean;
  zoomEnabled: boolean;
  zoomControlEnabled: boolean;
  zoomTapEnabled: boolean;
  maxZoomLevel?: number;
  minZoomLevel?: number;
  showsCompass: boolean,
  compassOffset?: Point;
  showsScale: boolean,
  showsUserLocation: boolean;
  showsMyLocationButton: boolean,
  userInterfaceStyle: 'light' | 'dark';
  showsBuildings: boolean;
  showsTraffic: boolean;
  pitchEnabled: boolean;
  provider: string;
  userLocationAnnotationTitle: string;
}
export type AIRMapDescriptor = Descriptor<"AIRMap", ViewBaseProps, AIRMapState, AIRMapRawProps>

export interface AIRMapMarkerState {}
export interface AIRMapMarkerRawProps extends ViewRawProps {
  title: string
  description: string;
  coordinate: Region;
  rotation: number;
  draggable: boolean;
  flat: boolean;
  image: string;
  calloutAnchor: Point;
  anchor: Point;
  tappable: boolean;
  opacity: number;
}
export type AIRMapMarkerDescriptor = Descriptor<"AIRMapMarker", ViewBaseProps, AIRMapMarkerState, AIRMapMarkerRawProps>

export interface AIRMapPolylineState {}
export interface AIRMapPolylineRawProps extends ViewRawProps {
  coordinates: LatLng[];
  strokeColor: string;
  strokeColors: string[];
  strokeWidth: number;
  lineDashPattern: number[];
  geodesic: boolean;
  tappable: boolean;
  lineJoin: string;
  lineCap: string;
}
export type AIRMapPolylineDescriptor = Descriptor<"AIRMapPolyline", ViewBaseProps, AIRMapPolylineState, AIRMapPolylineRawProps>

export interface AIRMapPolygonState {}
export interface AIRMapPolygonRawProps extends ViewRawProps {
  coordinates: LatLng[];
  fillColor: string
  strokeColor: string;
  strokeWidth: number;
  geodesic: boolean;
  lineDashPattern: number[];
  holes: Array<Array<LatLng>>;
  zIndex: number;
  tappable: boolean;
  lineJoin: string;
  lineCap: string;//华为地图不支持
}
export type AIRMapPolygonDescriptor = Descriptor<"AIRMapPolygon", ViewBaseProps, AIRMapPolygonState, AIRMapPolygonRawProps>

export interface AIRMapCircleState {}
export interface AIRMapCircleRawProps extends ViewRawProps {
  center: LatLng;
  radius: number;
  fillColor: string
  strokeColor: string;
  zIndex: number;
  strokeWidth: number;
  lineDashPattern: number[];
}
export type AIRMapCircleDescriptor = Descriptor<"AIRMapCircle", ViewBaseProps, AIRMapCircleState, AIRMapCircleRawProps>

export interface AIRMapCalloutState {}
export interface AIRMapCalloutRawProps extends ViewRawProps {
  tooltip: boolean;
  alphaHitTest: boolean;
}
export type AIRMapCalloutDescriptor = Descriptor<"AIRMapCallout", ViewBaseProps, AIRMapCalloutState, AIRMapCalloutRawProps>

export interface AIRMapCalloutSubviewState {}
export interface AIRMapCalloutSubviewRawProps extends ViewRawProps {
  tooltip: boolean;
  alphaHitTest: boolean;
}
export type AIRMapCalloutSubviewDescriptor = Descriptor<"AIRMapCalloutSubview", ViewBaseProps, AIRMapCalloutSubviewState, AIRMapCalloutSubviewRawProps>

export interface GeojsonState {}
export interface GeojsonRawProps extends ViewRawProps {
  geojson: GeoJSON;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  color: string;
  lineDashPhase: number;
  lineDashPattern: number[];
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'miter' | 'round' | 'bevel';
  miterLimit: number;
  zIndex: number;
  onPress: Function;
  markerComponent: ESObject;
  title: string;
  tracksViewChanges: boolean;
}
export type GeojsonDescriptor = Descriptor<"Geojson", ViewBaseProps, GeojsonState, GeojsonRawProps>

export interface AIRMapUrlTileState {}
export interface AIRMapUrlTileRawProps extends ViewRawProps {
  urlTemplate: string;
  minimumZ: number;
  maximumZ: number;
  maximumNativeZ: number;
  zIndex: number;
  tileSize: number;
  doubleTileSize: boolean;
  shouldReplaceMapContent: boolean;
  flipY: boolean;
  tileCachePath: string;
  tileCacheMaxAge: number;
  offlineMode: boolean;
  opacity: number;
}
export type AIRMapUrlTileDescriptor = Descriptor<"AIRMapUrlTile", ViewBaseProps, AIRMapUrlTileState, AIRMapUrlTileRawProps>

export interface AIRMapWMSTileState {}
export interface AIRMapWMSTileRawProps extends ViewRawProps {
  urlTemplate: string;
  minimumZ: number;
  maximumZ: number;
  maximumNativeZ: number;
  zIndex: number;
  tileSize: number;
  doubleTileSize: boolean;
  shouldReplaceMapContent: boolean;
  flipY: boolean;
  tileCachePath: string;
  tileCacheMaxAge: number;
  offlineMode: boolean;
  opacity: number;
}
export type AIRMapWMSTileDescriptor = Descriptor<"AIRMapWMSTile", ViewBaseProps, AIRMapWMSTileState, AIRMapWMSTileRawProps>

export interface AIRMapOverlayState {}
export interface AIRMapOverlayRawProps extends ViewRawProps {
  image: string;
  bounds: [[number, number], [number, number]];
  bearing: number;
  tappable: boolean;
  opacity: number;
}
export type AIRMapOverlayDescriptor = Descriptor<"AIRMapOverlay", ViewBaseProps, AIRMapOverlayState, AIRMapOverlayRawProps>

export interface AIRMapClusterState {}
export interface AIRMapClusterRawProps extends ViewRawProps {
  distance: number;
  clusterItems: Array<{ position: LatLng }>;
}
export type AIRMapClusterDescriptor = Descriptor<"AIRMapCluster", ViewBaseProps, AIRMapClusterState, AIRMapClusterRawProps>