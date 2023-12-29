/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import StackNavigator from './src/navigators/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from './src/constants/general';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={Colors.ACCENT_PRIMARY_100}
            barStyle={'dark-content'}
          />
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
