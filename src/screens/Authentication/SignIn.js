import React from 'react';
import {View, StyleSheet, TextInput, Text,Button} from 'react-native';

class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN IN</Text>
        <TextInput
          placeholder={'Email'}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
            marginBottom: 30,
          }}
        />
        <TextInput
          placeholder={'Password'}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
          }}
        />
        <Button title={"Login"} />
        <Button title={"Register"} onPress= {() => this.props.navigation.navigate("SignUp")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
