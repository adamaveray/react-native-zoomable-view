import { PanResponderGestureState, ViewProps } from 'react-native';
import { PureComponent } from 'react';

import { ZoomableViewEvent } from '..';

export interface ReactNativeZoomableViewProps extends ViewProps {
  zoomEnabled?: boolean;
  initialZoom?: number;
  maxZoom?: number;
  minZoom?: number;
  doubleTapDelay?: number;
  bindToBorders?: boolean;
  zoomStep?: number;
  pinchToZoomInSensitivity?: number;
  pinchToZoomOutSensitivity?: number;
  zoomCenteringLevelDistance?: number;
  movementSensibility?: number;
  initialOffsetX?: number;
  initialOffsetY?: number;
  longPressDuration?: number;
  onDoubleTapBefore?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onDoubleTapAfter?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onShiftingBefore?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => boolean;
  onShiftingAfter?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onShiftingEnd?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onZoomBefore?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => boolean;
  onZoomAfter?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => boolean;
  onZoomEnd?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => boolean;
  onLongPress?: (event: Event, gestureState: PanResponderGestureState) => void;
  onStartShouldSetPanResponder?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent, any) => boolean;
  onMoveShouldSetPanResponder?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent, any) => boolean;
  onPanResponderGrant?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onPanResponderEnd?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
  onPanResponderMove?: (event: Event, gestureState: PanResponderGestureState, zoomableViewEventObject: ZoomableViewEvent) => void;
}

export default class ReactNativeZoomableView extends PureComponent<ReactNativeZoomableViewProps> {}
