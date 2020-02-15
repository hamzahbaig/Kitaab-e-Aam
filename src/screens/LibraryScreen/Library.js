import React from 'react';
import {Text, Button, View} from 'react-native';
import Header from '../../components/Header/Header'
export default class Library extends React.Component {
  render() {
    return (
      <View>
        <Header />
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
