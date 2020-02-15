import React from 'react';
import {Text, Button, View} from 'react-native';

export default class Library extends React.Component {
  render() {
    return (
      <View>
        <Text>LibraryScreen</Text>
        <Button
          title={'Add Books'}
          onPress={() => this.props.navigation.navigate('AddBooks')}
        />
        {/* <Button onPress={() => this.props.navigation.navigate('AddBooks')} /> */}
      </View>
    );
  }
}
