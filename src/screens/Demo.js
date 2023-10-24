import React, {useEffect} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';

import SmsAndroid from 'react-native-get-sms-android';
import DeviceInfo from 'react-native-device-info';
// var currentDate = new Date();

// // Subtract 1 day (24 hours) from the current date
// currentDate.setDate(currentDate.getDate() - 1);

// // Set the time to 10:00 PM
// currentDate.setHours(22, 0, 0, 0);

// // Get the timestamp in milliseconds
// var timestamp = currentDate.getTime();

const App = () => {
  var filter = {
    box: 'inbox',
    minDate: timestamp,
    // address:"JD-SBIUPI"
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
        console.log('Camera permission granted.');
      } else {
        console.log('Camera permission denied.');
      }
    } catch (error) {
      console.error('Error requesting permission: ', error);
    }
  };
  useEffect(() => {
    // Retrieve SMS messages
    const sms = SmsAndroid.list(
      JSON.stringify(filter),
      fail => {
        console.log('Failed with this error: ' + fail);
      },
      (count, smsList) => {
        console.log('Count: ', count);
        console.log('List: ', smsList);
        var arr = JSON.parse(smsList);

        // arr.forEach(function(object) {
        //   // console.log('Object: ' + object);
        //   // console.log('-->' + object.date);
        //   // console.log('-->' + object.body);
        // });
      },
    );
    console.log(sms, '-----sms');
    timeStamp();
    requestPermission();
  }, []);
  const timeStamp = async () => {
    const installationTimestamp = await DeviceInfo.getFirstInstallTime();

    // Convert the timestamp to a human-readable date
    const installationDate = new Date(installationTimestamp);
    console.log('Installation Timestamp:', installationTimestamp);
    console.log('Installation Date:', installationDate);
  };
  return (
    <View>
      <Text>Local SMS Messages</Text>
    </View>
  );
};

export default App;
