import React from 'react';
import NotificationBox from './NotificationBox';
import {View, FlatList} from 'react-native';

const BookList = ({notifications}) => {
  return (
    <FlatList
      data={notifications}
      renderItem={notification => (
        <NotificationBox notification={notification} />
      )}
    />
  );
};

export default BookList;
