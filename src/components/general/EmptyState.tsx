import {View, Text, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Colors, SCREEN} from '../../constants/general';
import {Lotties} from '../../constants/lotties';

interface EmptyStateProps {
  style?: ViewStyle;
  titleStyle?: TextStyle;
  descStyle?: TextStyle;
  title?: string;
  desc: string;
  conStyle?: ViewStyle;
}

const EmptyState = ({
  style,
  titleStyle,
  descStyle,
  title,
  desc,
  conStyle,
}: EmptyStateProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...conStyle,
      }}>
      <AnimatedLottieView
        style={{
          width: SCREEN.sWidth * 0.4,
          height: SCREEN.sWidth * 0.5,
          alignSelf: 'center',
          ...style,
        }}
        source={Lotties.emptyState}
        autoPlay
        loop
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: Colors.GRAY_40,
            fontWeight: '700',
            fontSize: 16,
            marginTop: 6,
            ...titleStyle,
          }}>
          {' '}
          {title}{' '}
        </Text>
        <Text
          style={{
            color: Colors.GRAY_30,
            fontWeight: '400',
            fontSize: 12,
            marginTop: 4,
            ...descStyle,
          }}>
          {' '}
          {desc}{' '}
        </Text>
      </View>
    </View>
  );
};

export default EmptyState;
