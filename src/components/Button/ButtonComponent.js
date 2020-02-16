import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from '../../assets/fonts/Fonts';

const ButtonComponent = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontFamily: Fonts.avenirMedium,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    height: 50,
    backgroundColor: '#68C1B5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ButtonComponent;
