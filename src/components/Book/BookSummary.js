import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

const BookSummary = ({book, navigation}) => {
  book = book.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetails', {book: book})}
      style={styles.container}>
      <Text>{book.bookName}</Text>
      <Text>{book.bookDescription}</Text>
      <Text>{moment(book.createdAt.toDate()).fromNow()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.15,
    width: phoneWidth * 0.9,
    backgroundColor: 'white',
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 7,
  },
});

export default BookSummary;
