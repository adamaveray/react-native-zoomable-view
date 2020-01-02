import { PanResponderGestureState } from 'react-native';
import { SwipeDirection } from '..';
import ReactNativeZoomableView, { ReactNativeZoomableViewProps } from './ReactNativeZoomableView';

export interface ReactNativeZoomableViewWithGesturesProps extends ReactNativeZoomableViewProps {
  swipeLengthThreshold?: number,
  swipeVelocityThreshold?: number,
  swipeDirectionalThreshold?: number,
  swipeMinZoom?: number,
  swipeMaxZoom?: number,
  swipeDisabled?: boolean,
  onSwipe?: (swipeDirection: SwipeDirection, gestureState: PanResponderGestureState) => void,
  onSwipeUp?: (gestureState: PanResponderGestureState) => void,
  onSwipeDown?: (gestureState: PanResponderGestureState) => void,
  onSwipeLeft?: (gestureState: PanResponderGestureState) => void,
  onSwipeRight?: (gestureState: PanResponderGestureState) => void,
}

export default class ReactNativeZoomableViewWithGestures extends ReactNativeZoomableView {}
