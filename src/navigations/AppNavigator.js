import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import * as React from 'react';
import SCREENS from './Screens';
import {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import BottomNavigation from './BottomNavigation';
const openConfig = {
  animation: 'timing',
  config: {
    stiffness: 2000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS.SPLASH}
        screenOptions={{
          gestureDirection: 'horizontal',
          headerShown: false,
          transitionSpec: {
            open: openConfig,
            close: openConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}>
        <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.OTP} component={Otp} />
        <Stack.Screen name={SCREENS.BOTTOM} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
