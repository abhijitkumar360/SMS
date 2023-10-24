import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {scaleFont, scaleSize} from '../theme/Mixins';
// import SCREENS from './Screens';

import Screens from '../navigations/Screens';

export default function Splash(props) {
  return (
    <View
      style={{flex: 1, backgroundColor: 'white', justifyContent: 'flex-end'}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <TouchableOpacity onPress={()=>props.navigation.navigate(Screens.LOGIN)}
        style={{
          backgroundColor: 'gray',
          borderRadius: scaleSize(40),
          margin: scaleSize(20),
          padding: scaleSize(20),
        }}>
        <Text
          style={{
            fontSize: scaleFont(20),
            color: 'white',
            textAlign: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
