import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = e => {
    this.props.signIn(this.state);
  };
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
          onChangeText={this.handleChange("email")}
        />
        <TextInput
          placeholder={'Password'}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
          }}
          onChangeText={this.handleChange("password")}
        />
        <Button title={'Login'} onPress={this.handleSubmit} />
        <Button
          title={'Register'}
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
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

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
