import React from 'react';
import {View, Text, StyleSheet,Dimensions} from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

const BookSummary = ({book}) => {
    book = book.item
  return (
    <View style={styles.container}>
      <Text>{book.bookName}</Text>
      <Text>{book.bookDescription}</Text>
      <Text>uploaded at 30 days</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.15,
    width: phoneWidth*0.90,
    backgroundColor: 'white',
    paddingLeft:10,
    marginTop:10,
    borderRadius:7
  },
});

export default BookSummary;
