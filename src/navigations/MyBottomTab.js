import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {scaleSize} from 'theme/Mixins';
import strings from 'theme/Strings';

import SCREENS from './Screens';
import {Colors, Mixins} from 'theme/index';
import {TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import TextStyle from 'theme/styles/TextStyle';
import MasterData from 'utils/MasterData';
import {useTheme} from '@react-navigation/native';

export default function MyBottomTab(props) {
  // console.log(props.colors.CARD_COLOR,'botttomtab')
  const {state, navigation, colors}= props
  const { BOTTOM_DATA } = MasterData();
  // const {colors} = useTheme();
  useEffect(() => {
    
  }, [props])
  
  return (
    <View
      style={{
        position: 'absolute',
        bottom: scaleSize(20),
        // left: scaleSize(100),
        // right: scaleSize(100), colors.CARD_COLOR
        width: '87%',
        // alignItems: 'center',
        alignSelf: 'center',
      }}>
      <Shadow
        distance={colors.THEME == 'dark' ? 0 : 30}
        style={{
          width: '100%',
          flexDirection: 'row',
          ...Mixins.padding(5, 5, 5, 5),
          borderRadius: 12,
          backgroundColor: colors.CARD_COLOR,
        }}>
        {BOTTOM_DATA.map((route, index) => {
          const isFocused = state.index === index;
          if (isFocused) {
            var bagColor = colors.FOCUS_COLOR;
            var textColor = Colors.WHITE;
          } else {
            var bagColor = colors.CARD_COLOR;
            var textColor = Colors.TEXT_COLOR_GRAY;
          }

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(route.name)}
              style={{
                 flex: 1,
                ...Mixins.padding(10, 30, 10, 30),
                borderRadius: 12,
                backgroundColor: bagColor,
              }}
              key={index}>
              <View
                style={{
                    // paddingTop: 10,
                  alignItems: 'center',
                }}>
                {isFocused ? (
                  <View>{route.SVG_FOCUSE}</View>
                ) : (
                  <View>{route.SVG_WITHOUT_FOCUSE}</View>
                )}
                <Text
                  numberOfLines={1}
                  style={{
                    ...TextStyle.medium_charcol_12,
                    color: textColor,
                    marginTop: scaleSize(5),
                  }}>
                  {route.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Shadow>
    </View>
  );
}
