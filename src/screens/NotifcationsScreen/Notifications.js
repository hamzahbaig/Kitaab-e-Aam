import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header/Header';

export default class Notifications extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>NotificationsScreen</Text>
      </View>
    );
  }
}
