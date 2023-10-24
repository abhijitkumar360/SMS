import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {scaleFont, scaleSize} from '../theme/Mixins';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useEffect} from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import Screens from '../navigations/Screens';
export default function Otp(props) {
  const [seconds, setSeconds] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const intervalRef = useRef();
  var TimeFormat = new Date(null);
  TimeFormat.setSeconds(seconds);
  var newTime = TimeFormat.toISOString().substring(14, 19);

  useEffect(() => {
    // console.log(seconds);
    intervalRef.current = setInterval(() => {
      if (seconds === 0) {
        clearInterval(intervalRef.current);
        setIsTimerRunning(false);
      } else {
        setSeconds(t => t - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [seconds]);

  const setTimer = () => {
    setSeconds(10);
    setIsTimerRunning(true);
  };
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
            Enter your OTP
          </Text>
          <Text
            style={{
              fontSize: scaleFont(18),
              // color: '#5A5A5A',
              fontWeight: 500,
              marginTop: scaleSize(5),
            }}>
            Enter the OTP send to 123456789
          </Text>
        </View>
        <View style={{marginTop: scaleSize(30)}}>
          <OTPInputView
            style={{
              width: '100%',
              height: 100,
              alignSelf: 'center',
            }}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={{
              width: 30,
              height: 45,
              borderWidth: 0,
              borderBottomWidth: 1,
              borderColor: '#000000',
              color: '#000000',
              fontSize: scaleFont(18),
              //   fontWeight: 500,
            }}
            codeInputHighlightStyle={{
              borderColor: '#03DAC6',
              fontSize: scaleFont(18),
            }}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View style={{marginTop: scaleSize(10)}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: scaleFont(18),
              // color: '#000000',
              fontWeight: 500,
            }}>
            Didn't receive the code?
          </Text>
          <Text
            onPress={() => {
              seconds == 0 && setTimer();
            }}
            style={{
              marginTop: scaleSize(10),
              textAlign: 'center',
              fontSize: scaleFont(15),
              color: '#0000FF',
              fontWeight: 500,
            }}>
            Re-send OTP
            {!seconds == 0 && <Text> in {seconds}</Text>}
          </Text>
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(Screens.BOTTOM)}
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
