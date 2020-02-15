import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';
import Header from '../../components/Header/Header';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>HamzahBaig</Text>
        <Button
          title={'MyBooks'}
          onPress={() => this.props.navigation.navigate('MyBooks')}
        />
        <Button title={'LogOut'} onPress={this.props.signOut} />
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
