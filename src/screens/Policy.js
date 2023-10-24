import {View, Text} from 'react-native';
import React from 'react';
import SmsRetriever from 'react-native-sms-retriever';
import {useEffect} from 'react';

export default function Policy() {
  useEffect(() => {
   
    _onSmsListenerPressed();
  }, []);
  _onSmsListenerPressed = async () => {
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
  return (
    <View>
      <Text>Policys</Text>
    </View>
  );
}
