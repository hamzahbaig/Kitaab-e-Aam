import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';
class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  handleChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = e => {
    this.props.signUp(this.state);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>SIGN UP</Text>
        <TextInput
          placeholder={'Email'}
          onChangeText={this.handleChange('email')}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
            marginBottom: 30,
          }}
        />
        <TextInput
          placeholder={'First Name'}
          onChangeText={this.handleChange('firstName')}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
            marginBottom: 30,
          }}
        />
        <TextInput
          placeholder={'Last Name'}
          onChangeText={this.handleChange('lastName')}
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
          onChangeText={this.handleChange('password')}
          style={{
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: '90%',
          }}
        />
        <Button title={'Register'} onPress={this.handleSubmit} />
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
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
