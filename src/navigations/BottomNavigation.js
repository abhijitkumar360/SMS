import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREENS from './Screens';
import {scaleFont, scaleSize} from '../theme/Mixins';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
// import {useTheme} from '@react-navigation/native';
// import MyBottomTab from './MyBottomTab';
import {Mixins, Margin, Padding} from '../theme/Mixins';
import Dashboard from '../screens/Dashboard';
import Myprofile from '../screens/Myprofile';
import Policy from '../screens/Policy';
const Tab = createBottomTabNavigator();
const ICON_SIZE_14 = scaleSize(14);
function BottomNavigation(props) {
  // const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
        },
      }}
      // tabBar={(props) => <MyBottomTab {...props} colors={colors}/>}
    >
      <Tab.Screen
        name={SCREENS.DASHBOARD}
        component={Dashboard}
        tabBarLabel={false}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // backgroundColor: focused ? 'yellow' : 'white',
                borderTopColor: focused ? 'black' : 'white',
                ...styles.tabStyle,
              }}>
              {/* {focused ? (
                <SVG_HOME_WHITE height={ICON_SIZE_14} width={ICON_SIZE_14} />
              ) : (
                <SVG_HOME_GRAY height={ICON_SIZE_14} width={ICON_SIZE_14} />
              )} */}
              <Text
                style={{
                  // ...TextStyle.medium_charcol_12,
                  color: focused ? 'black' : 'gray',
                  marginTop: scaleSize(5),
                }}>
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name={SCREENS.INTRO_SCREEN}
        component={IntroScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? 'yellow' : 'white',
                ...styles.tabStyle,
              }}>
              {focused ? (
                <SVG_TOOL_WHITE height={ICON_SIZE_14} width={ICON_SIZE_14} />
              ) : (
                <SVG_TOOL_GRAY height={ICON_SIZE_14} width={ICON_SIZE_14} />
              )}
              <Text
                style={{
                  // ...TextStyle.medium_charcol_12,
                  color: focused ? Colors.WHITE : Colors.TEXT_COLOR_GRAY,
                  marginTop: scaleSize(5),
                }}>
                {strings.TOOLS}
              </Text>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name={SCREENS.POLICY}
        component={Policy}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // backgroundColor: focused ? 'yellow' : 'white',
                borderTopColor: focused ? 'black' : 'white',
                ...styles.tabStyle,
              }}>
              {/* {focused ? (
                <SVG_SAVE_WHITE height={ICON_SIZE_14} width={ICON_SIZE_14} />
              ) : (
                <SVG_SAVE_GRAY height={ICON_SIZE_14} width={ICON_SIZE_14} />
              )} */}
              <Text
                style={{
                  // ...TextStyle.medium_charcol_12,
                  color: focused ? 'black' : 'gray',
                  marginTop: scaleSize(5),
                }}>
                Policy
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MY_PROGILE}
        component={Myprofile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                // backgroundColor: focused ? 'yellow' : 'white',
                borderTopColor: focused ? 'black' : 'white',
                ...styles.tabStyle,
              }}>
              {/* {focused ? (
                <SVG_SETTING_WHITE height={ICON_SIZE_14} width={ICON_SIZE_14} />
              ) : (
                <SVG_SETTING_GRAY height={ICON_SIZE_14} width={ICON_SIZE_14} />
              )} */}
              <Text
                style={{
                  // ...TextStyle.medium_charcol_12,
                  color: focused ? 'black' : 'gray',
                  marginTop: scaleSize(5),
                }}>
                Myprofile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    // position: 'absolute',
    // bottom: scaleSize(25),
    // left: scaleSize(95),
    // right: scaleSize(95),
    backgroundColor: 'white',
    // borderRadius: 12,
    borderColor: 'white',
    shadowColor: '#00000070',
    // flex: 1,
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.51,
    // shadowRadius: 13.16,
    // elevation: 15,
    height: scaleSize(55),
    // ...Padding(20, 10, 20, 10),
  },
  tabStyle: {
    // ...Margin(10, 20, 20, 20),
    // borderRadius: 12,
    // borderTopColor:'black',
    // height: scaleSize(55),
    // backgroundColor: 'red',
    flex: 1,
    borderWidth: 2,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    alignItems: 'center',
  },
});
