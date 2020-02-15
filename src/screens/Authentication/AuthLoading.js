import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import firebase from 'firebase';

class AuthLoading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });
  }

  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={40}/>
        <StatusBar barStyle="AppCon" />
      </View>
    );
  }
}

export default AuthLoading;
