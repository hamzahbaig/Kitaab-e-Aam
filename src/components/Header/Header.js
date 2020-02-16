import React from 'react';
import {View, Dimensions, StyleSheet, TextInput, Text} from 'react-native';
import {Fonts} from '../../assets/fonts/Fonts';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

const Header = props => {
  return (
    <View style={styles.container}>
      {props.visible == 'Search' ? (
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
      ) : (
        <Text
          style={{fontSize: 28, fontFamily: Fonts.avenirBlack, color: 'white'}}>
          {props.title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.08,
    width: phoneWidth,
    backgroundColor: '#68C1B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
