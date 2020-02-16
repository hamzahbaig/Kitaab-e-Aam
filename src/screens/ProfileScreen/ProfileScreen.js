import React from 'react';
import {View, Text, Button, StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import Header from '../../components/Header/Header';
import {Fonts} from '../../assets/fonts/Fonts';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#68C1B5" barStyle="light-content" />
        <Header title={"Profile"} />
        <View
          style={{
            height: '20%',
            width: '100%',
            backgroundColor: '#68C1B5',
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingBottom: 20,
          }}>
          <View
            style={{
              height: '70%',
              width: '30%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                height: 70,
                width: 70,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#68C1B5',
                  fontSize: 24,
                  fontFamily: Fonts.avenirHeavy,
                }}>
                HB
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '70%',
              width: '70%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontFamily: Fonts.avenirBlack,
              }}>
              Hamzah
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontFamily: Fonts.avenirLight,
              }}>
              Baig
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BorrowedBooks')}
            style={{
              height: 50,
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 10,
              marginBottom: 10,
              borderBottomColor: '#707070',
              borderBottomWidth: 0.7,
            }}>
            <Text
              style={{
                fontFamily: Fonts.avenirMedium,
                color: '#68C1B5',
                fontSize: 18,
              }}>
              Borrowed Books
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LentBooks')}
            style={{
              height: 50,
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 10,
              marginBottom: 10,
              borderBottomColor: '#707070',
              borderBottomWidth: 0.7,
            }}>
            <Text
              style={{
                fontFamily: Fonts.avenirMedium,
                color: '#68C1B5',
                fontSize: 18,
              }}>
              Lent Books
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.signOut}
            style={{
              height: 50,
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 7,
              justifyContent: 'center',
              paddingLeft: 10,
              marginBottom: 10,
              borderBottomColor: '#707070',
              borderBottomWidth: 0.7,
            }}>
            <Text
              style={{
                fontFamily: Fonts.avenirMedium,
                color: '#68C1B5',
                fontSize: 18,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(ProfileScreen);
