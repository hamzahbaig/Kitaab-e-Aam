import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  ToastAndroid,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Fonts} from '../../assets/fonts/Fonts';
import ButtonComponent from '../../components/Button/ButtonComponent';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
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
    ToastAndroid.show('Signing Again.', ToastAndroid.SHORT);
    this.props.signIn(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text
          style={{fontFamily: Fonts.avenirBlack, fontSize: 30, marginTop: 50}}>
          Sign In
        </Text>
        <View
          style={{
            height: phoneHeight * 0.30,
            width: phoneWidth * 0.90,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:30
          }}>
          <TextInput
            placeholder={'Email'}
            style={{
              height: 40,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
              marginBottom: 30,
            }}
            onChangeText={this.handleChange('email')}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            style={{
              height: 40,
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
              width: '100%',
              marginBottom: 30,
            }}
            onChangeText={this.handleChange('password')}
          />
        </View>
       
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:60
          }}>
          <ButtonComponent title={'Get Started'} onPress={this.handleSubmit} />
        </View>
        <View
          style={{
            height: 10,
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View
            style={{
              height: '100%',
              width: '45%',
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
            }}></View>
          <Text>or</Text>
          <View
            style={{
              height: '100%',
              width: '45%',
              borderBottomWidth: 0.7,
              borderBottomColor: '#707070',
            }}></View>
        </View>
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:10
          }}>
          <ButtonComponent
            title={'Register'}
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      </KeyboardAvoidingView>
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
