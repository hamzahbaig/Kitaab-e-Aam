import React from 'react';
import BookSummary from './BookSummary';
import {View, StyleSheet, FlatList} from 'react-native';

const BookList = ({books}) => {
  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={(book) => <BookSummary book={book} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // alignSelf: 'center',
    alignItems: 'center',
  },
});

export default BookList;
