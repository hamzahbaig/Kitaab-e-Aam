import React from 'react';
import BookSummary from './BookSummary';
import {View, FlatList} from 'react-native';

const BookList = ({books, navigation}) => {
  return (
    <FlatList
      data={books}
      renderItem={book => <BookSummary book={book} navigation={navigation} />}
    />
  );
};

export default BookList;
