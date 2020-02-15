import React from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HamzahBaig</Text>
        <Button
          title={'Start'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        />
      </View>
    );
  }
}
