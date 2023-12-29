import {Dimensions, TextStyle} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SCREEN = {
  sWidth: windowWidth,
  sHeight: windowHeight,
};

export const MMKV_VALUES = {
  userProfile: 'userProfile',
  roomId: 'roomId',
  shouldGoback: 'shouldGoback',
  authToken: 'authToken',
  isUpdateDownloaded: 'isUpdateDownloaded',
  googleAuthToken: 'googleAuthToken',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  appLink: 'appLink',
};

export const Colors = {
  BG: '#F8F7FB',
  PRIMARY_100: '#6807F9',
  PRIMARY_500: '#7722FF',
  PRIMARY_20: '#924EFF',
  PRIMARY_10: '#AD7BFF',
  PRIMARY_05: '#C9A7FF',

  ACCENT_PRIMARY_100: '#e9e1f5',
  ACCENT_PRIMARY_50: '#E9DCFF99',
  ACCENT_PRIMARY_DIM: '#8639ff99',

  GRAY_100: '#0E0E12',
  GRAY_80: '#1C1C23',
  GRAY_70: '#353542',
  GRAY_60: '#4E4E61',
  GRAY_50: '#666680',
  GRAY_40: '#83839C',
  GRAY_30: '#A2A2B5',
  GRAY_20: '#C1C1CD',
  GRAY_10: '#E0E0E6',
  WHITE: '#FFFFFF',
  BLACK: '#000',
};

export const ScreenNames = {
  HOME: 'Home',
  SEE_ALL: 'SeeAll',
};

export const TEXT_HEADING: TextStyle = {
  fontSize: 22,
  color: Colors.GRAY_70,
  fontWeight: '900',
};

export const TEXT_REG: TextStyle = {
  fontSize: 16,
  color: Colors.GRAY_80,
};

export const TEXT_MED: TextStyle = {
  fontSize: 16,
  color: Colors.GRAY_80,
  fontWeight: '500',
};

export const TEXT_BOLD: TextStyle = {
  fontSize: 16,
  color: Colors.GRAY_80,
  fontWeight: '700',
};
