import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BookSummary from '../../components/Book/BookSummary';
import {compose} from 'redux';
import {connect, useSelector} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import BookList from '../../components/Book/BookList';
import {getFirestore} from 'redux-firestore';

class Search extends React.Component {
  render() {
    const {books} = this.props
    return (
      <View style={styles.containter}>
        <BookList books = {books} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.firestore.ordered.books,
  };
};

const styles = StyleSheet.create({
  containter: {
    height: '100%',
    width: '100%',
    alignItems:'center'
  },
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => {
    return [
      {
        collection: 'books',
        orderBy: ['createdAt', 'desc'],
      },
    ];
  }),
)(Search);
