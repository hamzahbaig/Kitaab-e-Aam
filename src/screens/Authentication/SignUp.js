import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';
import {Fonts} from '../../assets/fonts/Fonts';
import ButtonComponent from '../../components/Button/ButtonComponent';

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
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Text
          style={{fontFamily: Fonts.avenirBlack, fontSize: 30, marginTop: 50}}>
          Register
        </Text>
        <View
          style={{
            height: '40%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:20
          }}>
          <TextInput
            placeholder={'Email'}
            onChangeText={this.handleChange('email')}
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={'First Name'}
            onChangeText={this.handleChange('firstName')}
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={'Last Name'}
            onChangeText={this.handleChange('lastName')}
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder={'Password'}
            onChangeText={this.handleChange('password')}
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
            }}
          />
        </View>
        <View
          style={{
            height: '20%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonComponent title={'Register'} onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
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
