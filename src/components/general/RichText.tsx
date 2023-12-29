import React from 'react';
import {Text, TextStyle} from 'react-native';
import {
  TEXT_REG,
  TEXT_MED,
  TEXT_BOLD,
  TEXT_HEADING,
} from '../../constants/general';

interface Props {
  children: string | JSX.Element;
  color?: string;
  fontSize?: number;
  styling?: TextStyle;
  numberOfLines?: number;
}

export const RichText = {
  Regular: ({
    children,
    color = '#E7E1F5',
    fontSize = 14,
    styling,
    numberOfLines = 0,
  }: Props) => (
    <Text
      numberOfLines={numberOfLines}
      style={{...TEXT_REG, color, fontSize, ...styling}}>
      {children}
    </Text>
  ),
  Medium: ({
    children,
    color = '#E7E1F5',
    fontSize = 14,
    styling,
    numberOfLines = 0,
  }: Props) => (
    <Text
      numberOfLines={numberOfLines}
      style={{...TEXT_MED, color, fontSize, ...styling}}>
      {children}
    </Text>
  ),
  Bold: ({
    children,
    color = '#E7E1F5',
    fontSize = 14,
    styling,
    numberOfLines = 0,
  }: Props) => (
    <Text
      numberOfLines={numberOfLines}
      style={{...TEXT_BOLD, color, fontSize, ...styling}}>
      {children}
    </Text>
  ),
  Head: ({
    children,
    color = '#E7E1F5',
    fontSize = 18,
    styling,
    numberOfLines = 0,
  }: Props) => (
    <Text
      numberOfLines={numberOfLines}
      style={{...TEXT_HEADING, color, fontSize, ...styling}}>
      {children}
    </Text>
  ),
};
