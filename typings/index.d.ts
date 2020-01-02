import { PureComponent } from 'react';
import { PanResponderGestureState, ViewProps } from 'react-native';
import ReactNativeZoomableView from './../src/ReactNativeZoomableView';
import ReactNativeZoomableViewWithGestures from './../src/ReactNativeZoomableViewWithGestures';

export { default as ReactNativeZoomableView } from './../src/ReactNativeZoomableView';
export { default as ReactNativeZoomableViewWithGestures } from './../src/ReactNativeZoomableViewWithGestures';

export enum SwipeDirection {
  SWIPE_UP = 'SWIPE_UP',
  SWIPE_DOWN = 'SWIPE_DOWN',
  SWIPE_LEFT = 'SWIPE_LEFT',
  SWIPE_RIGHT = 'SWIPE_RIGHT',
}

export interface ZoomableViewEvent {
  zoomLevel: number;
  offsetX: number;
  offsetY: number;
  lastZoomLevel: number;
  lastX: number;
  lastY: number;
  distanceBottom: number;
  distanceLeft: number;
  distanceRight: number;
  distanceTop: number;
  lastMovePinch: boolean;
  originalHeight: number;
  originalWidth: number;
}
