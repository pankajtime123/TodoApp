import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/general';

const Wrapper = ({
  children,
  paddingHorizontal = 20,
}: {
  children: React.ReactNode;
  paddingHorizontal?: number;
}) => {
  return (
    <View style={[styles.container, {paddingHorizontal}]}>{children}</View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.BG},
});
