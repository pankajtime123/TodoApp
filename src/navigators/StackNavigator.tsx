import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Colors, ScreenNames} from '../constants/general';
import Home from '../screens/Home';
import SeeAll from '../screens/SeeAll';

const Stack = createNativeStackNavigator();

const StackNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME}
      screenOptions={{
        animation: 'simple_push',
        contentStyle: {backgroundColor: Colors.BG},
      }}>
      <Stack.Screen
        name={ScreenNames.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenNames.SEE_ALL}
        component={SeeAll}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
});

export default StackNavigator;
