import React from 'react';
import {Animated, GestureResponderEvent, Pressable} from 'react-native';
import useNetInfo from '../../hooks/useNetInfo';
import {showSnackbar} from '../../utils/utility';

interface Props {
  customChild: JSX.Element;
  disableBtn?: boolean;
  bouncy?: boolean;
  onPressAction: Function;
  styling?: object;
  hitSlop?: object;
}

const ButtonComponent = ({
  customChild,
  disableBtn = false,
  bouncy = true,
  onPressAction,
  styling,
  hitSlop,
}: Props) => {
  const animatedValue = new Animated.Value(1);

  const onPressInEffect = () => {
    if (bouncy) {
      Animated.spring(animatedValue, {
        toValue: 0.85,
        useNativeDriver: true,
      }).start();
    }
  };

  const onPressOutEffect = () => {
    if (bouncy) {
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View style={[{transform: [{scale: animatedValue}]}, styling]}>
      <Pressable
        onPress={event => {
          onPressAction(event);
        }}
        disabled={disableBtn}
        onPressIn={onPressInEffect}
        onPressOut={onPressOutEffect}
        hitSlop={hitSlop}>
        {customChild}
      </Pressable>
    </Animated.View>
  );
};

export default ButtonComponent;
