import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Fonts} from '../../assets/fonts/Fonts';

export default class SplashScreen extends React.Component {
  state = {
    firstHalf: false,
    secondHalf: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstHalf: true,
      });
    }, 1500);

    setTimeout(() => {
      this.setTimePassed();
    }, 2500);
  }
  setTimePassed() {
    this.props.navigation.navigate('AuthLoading');
  }
  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#68C1B5',
          paddingTop:250
        }}>
        <View
          style={{
            height: '20%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginRight:20
          }}>
          <StatusBar backgroundColor="#68C1B5" barStyle="light-content" />
          <Animatable.View
            animation="slideInLeft"
            style={{
              width: '50%',
              height: '20%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 80, color: 'white'}}>عام</Text>
          </Animatable.View>
          <Animatable.View
            animation="slideInRight"
            style={{
              width: '50%',
              height: '20%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={{fontSize: 80, color: 'white'}}>کتاب</Text>
          </Animatable.View>
        </View>
        {this.state.firstHalf ? (
          <Animatable.View animation="fadeIn"
            style={{
              height: '20%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: Fonts.avenirHeavy,
                fontSize: 28,
                color: 'white',
                textAlign: 'center',
                paddingBottom:25
              }}>
              Lets Recycle{'\n'} Books Together
            </Text>
          </Animatable.View>
        ) : null}
      </View>
    );
  }
}
