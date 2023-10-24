import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont, scaleSize} from '../theme/Mixins';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Screens from '../navigations/Screens';
export default function Login(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{
          margin: scaleSize(20),
          // backgroundColor: 'red',
          flex: 1,
        }}>
        <Icon
          name="arrow-back-sharp"
          size={scaleSize(30)}
          color="#000000"
          onPress={() => props.navigation.goBack()}
        />
        <View style={{marginTop: scaleSize(20)}}>
          <Text
            style={{
              fontSize: scaleFont(25),
              color: '#5A5A5A',
              fontWeight: 900,
            }}>
            Login with Mobile Number
          </Text>
          <Text
            style={{
              fontSize: scaleFont(18),
              // color: '#5A5A5A',
              fontWeight: 500,
              marginTop: scaleSize(5),
            }}>
            Enter your 10 digit mobile number
          </Text>
        </View>
        <View style={{marginTop: scaleSize(30)}}>
          <Text
            style={{
              fontSize: scaleFont(18),
              color: '#000000',
              // fontWeight: 900,
            }}>
            Mobile Number
          </Text>
          <View
            style={{
              borderRadius: scaleSize(10),
              borderColor: '#000000',
              borderWidth: 1,
              padding: scaleSize(15),
              marginTop: scaleSize(5),
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: scaleFont(18),
                  color: '#000000',
                  fontWeight: 500,
                }}>
                +91
              </Text>
            </View>

            <View
              style={{
                width: 2,
                backgroundColor: 'black',
                height: '100%',
                marginHorizontal: scaleSize(10),
              }}
            />
            <TextInput
              style={{
                flex: 1,
                fontSize: scaleFont(18),
                color: '#000000',
              }}
              inputMode="numeric"
              maxLength={10}
            />
          </View>
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: scaleFont(15),
              // color: '#000000',
              fontWeight: 500,
            }}>
            By proceeding, you agree to the terms of use Here
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: scaleFont(15),
              color: '#0000FF',
              fontWeight: 500,
            }}>
            Terms & conditions
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Screens.OTP)}
            style={{
              backgroundColor: 'gray',
              borderRadius: scaleSize(40),
              marginTop: scaleSize(20),
              padding: scaleSize(20),
            }}>
            <Text
              style={{
                fontSize: scaleFont(20),
                color: 'white',
                textAlign: 'center',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
