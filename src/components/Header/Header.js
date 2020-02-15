import React from 'react';
import {View, Dimensions, StyleSheet, TextInput, Button} from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

const Header = props => {
  return (
    <View style={styles.container}>
      {props.visible ? (
        <TextInput
          placeholder={'Search..'}
          style={{
            alignSelf: 'center',
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 7,
          }}
          onChangeText={props.onValueChange}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.08,
    width: phoneWidth,
    backgroundColor: '#20266A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
