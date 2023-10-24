import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  FlatList,
  Alert,
  BackHandler,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { NativeModules } from 'react-native';
import SmsRetriever from 'react-native-sms-retriever';
import ProgressCircle from 'react-native-progress-circle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SmsAndroid from 'react-native-get-sms-android';
import {Smsexclude} from '../components/Smsexclude';
import BackgroundService from 'react-native-background-actions';
import {smsDetail} from '../services/Webservice';
import {scaleFont, scaleSize} from '../theme/Mixins';
import SmsListener from 'react-native-android-sms-listener';
const sleep = time => new Promise(resolve => setTimeout(() => resolve(), time));
export default function Dashboard() {
  const [appTimeStamp, setApptimestamp] = useState(new Date().getTime());
  const [SMSdata, setSMSdata] = useState();
  const [backgroundState, setBackgroundState] = useState(0);
  const veryIntensiveTask = async taskDataArguments => {
    // Example of an infinite loop task
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        console.log(i);
        timeStamp();
        checkBg();
        await sleep(delay);
      }
    });
  };
  const options = {
    taskName: 'SMS',
    taskTitle: 'SMS Detact',
    taskDesc: 'SMS Detact',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    color: '#ff00ff',
    // linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
      delay: 1000,
    },
  };
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        {
          title: 'Read SMS Permission',
          message: 'App needs access to your SMS.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Read SMS permission granted.');
        timeStamp();
        checkBg();
      } else {
        console.log('Read SMS permission denied.');
        Alert.alert('SMS Permission!', 'Please Grant Read SMS Permission.', [
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    } catch (error) {
      console.error('Error requesting permission: ', error);
    }
  };
  // useEffect(() => {
  //   requestPermission();
  //   // checkBg();
  //   // smsdetail()
  //   // timeStamp()
  // }, []);
  useEffect(() => {
    // SMSRetriever.startSmsRetriever();
    // _onSmsListenerPressed();
    SmsListener.addListener(message => {
      console.info(message)
    })
    console.log('hello')
  }, []);

  // const smsListener = SmsListener.addListener((message) => {
  //   // Handle the incoming SMS message here
  //   console.log('Received SMS:', message);
  // });
  const checkBg = async () => {
    // console.log('checkb111')
    const bgState = await AsyncStorage.getItem('bgState');
    if (bgState != '1') {
      BackgroundServices();
    }
    // else{
    const mdata = await AsyncStorage.getItem('myArrayData');
    const myArray = JSON.parse(mdata);
    // console.log(myArray,'myArray')
    setSMSdata(myArray);
    // }
  };
  const BackgroundServices = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({
      taskDesc: 'SMS detact',
    }); // Only Android, iOS will ignore this call
    const bgState = await AsyncStorage.setItem('bgState', '1');
    setBackgroundState(bgState);
  };
  const stop = async () => {
    await BackgroundService.stop();
    await AsyncStorage.setItem('bgState', '0');
  };
  const _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          console.log(event.message,'SmsRetriever');
          SmsRetriever.removeSmsListener();
        });
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  const timeStamp = async () => {
    // const installationTimestamp = await DeviceInfo.getFirstInstallTime();
    // Convert the timestamp to a human-readable date
    // const currentTimestamp = new Date().getTime();
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    // Set the time to 21:00 (9:00 PM)
    currentDate.setHours(21, 0, 0, 0);
    
    // Get the 13-digit timestamp in milliseconds
    const thirteenDigitTimestamp = currentDate.getTime();
    
    console.log(thirteenDigitTimestamp);
    if (appTimeStamp == null || undefined) {
      setApptimestamp(currentTimestamp);
      SMSData(currentTimestamp);
      console.log('11111111111111',appTimeStamp,typeof currentTimestamp)
    } else {
      SMSData(thirteenDigitTimestamp);
      console.log('22222222222222')
    }
  };
  const SMSData = async installationTimestamp => {
    console.log(installationTimestamp, 'installationTimestamp');
    // setApptimestamp(installationTimestamp);
    // Retrieve SMS messages
    SmsAndroid.list(
      JSON.stringify({
        box: '',
        minDate: installationTimestamp,
        // address: ExcludeSms(),
      }),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        // console.log('Count: ', count);
        console.log('List: ', smsList);
        const jsonObject = JSON.parse(smsList);
        // smsdetail(jsonObject);
      },
    );
  };
  const smsdetail = async jsonArray => {
    const SMS = await Smsexclude();
    const filteredMessages = jsonArray.filter(message => {
      return !SMS.includes(message.address);
    });
    const properMessage = [];
    // Iterate over the original array.
    // filteredMessages.forEach(message => {
    //   // Check if the address number has 10 digits.
    //   if (message.address.length >= 10) {
    //     // If it does, skip the object.
    //     return;
    //   }
    //   // Otherwise, add the object to the new array.
    //   properMessage.push(message);
    // });
    properMessage.push(filteredMessages);
    // Log the filtered results.
    // console.log(properMessage);
    // console.log(SMSdata, 'item');
    // console.log(filteredMessages, 'sssssssssssss====');
    if (filteredMessages.length >= 1) {
      setApptimestamp(filteredMessages[0].date_sent + 1);
      stop();
      const json = {
        'SMS-Deatil': {
          header: filteredMessages[0].address,
          message: filteredMessages[0].body,
        },
        // {
        //   header: 'ICICIBK01',
        //   message: 'hello sir, https://jsonformatter.curiousconcept.com',
        // },
      };
      await smsDetail(json)
        .then(res => res.json())
        .then(response => {
          console.log(response.result, 'ddddddddddddd');

          // const mData = JSON.stringify(response);
          var myArray = [];
          myArray.push(response);
          // setSMSdata(myArray);
          const myArrayJSON = JSON.stringify(myArray);
          storeData(myArrayJSON);
          BackgroundServices();
        });
    }
  };
  const storeData = async myArrayJSON => {
    await AsyncStorage.setItem('myArrayData', myArrayJSON);
  };
  const renderitem = ({item}) => {
    // console.log(item, 'item');
    // console.log('hello');
    const number = item.result.riskScore;
    const numberAsString = `${number}`;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: scaleSize(10)}}>
          {/* <Text style={{fontSize: scaleFont(20), color: 'red'}}>
            {item.result.riskScore}
          </Text> */}
          <ProgressCircle
            percent={numberAsString}
            radius={35}
            borderWidth={8}
            color="red"
            shadowColor="#999"
            // bgColor="#fff"
          >
            <Text style={{fontSize: scaleFont(15), color: 'red'}}>
              {item.result.riskScore}%
            </Text>
          </ProgressCircle>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: scaleFont(20), color: 'black'}}>
            {item.result.smsHeader}
          </Text>
          <Text style={{fontSize: scaleFont(18), color: 'black'}}>
            {item.result.message}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Text
        onPress={() => stop()}
        style={{color: 'black', textAlign: 'center', fontSize: scaleFont(30)}}>
        List Of SMS data
      </Text>
      {/* <View style={{backgroundColor: 'red'}}> */}
      <FlatList
        // style={{flex:1}}
        data={SMSdata}
        renderItem={renderitem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                color: 'gray',
                textAlign: 'center',
                fontSize: scaleFont(30),
                justifyContent: 'center',
                flex: 1,
                marginTop: scaleSize(250),
              }}>
              List is Empty
            </Text>
          );
        }}
      />
      {/* </View> */}
    </View>
  );
}
