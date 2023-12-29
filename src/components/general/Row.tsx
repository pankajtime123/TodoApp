/* eslint-disable react-native/no-inline-styles */
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  gap?: number;
  styling?: StyleProp<ViewStyle>;
}

const Row = ({children, gap = 12, styling}: Props) => {
  let styles = StyleSheet.flatten(styling);
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap,
          justifyContent: 'center',
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Row;
