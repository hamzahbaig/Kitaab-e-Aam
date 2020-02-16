import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BookList from '../../components/Book/BookList';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import firebase from 'firebase';
import Header from '../../components/Header/Header';
import ButtonComponent from '../../components/Button/ButtonComponent';
class Library extends React.Component {
  render() {
    const {books} = this.props;
    let userId = firebase.auth().currentUser.uid;
    let filtering = books && books.filter(book => book.authorId == userId);

    return (
      <View style={styles.containter}>
        <Header title={'Your Library'} />
        <View
          style={{
            height: '80%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BookList books={filtering} navigation={this.props.navigation} />
        </View>
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopWidth: 0.7,
            borderTopColor: '#e4e4e4',
          }}>
          <ButtonComponent
            title={'Add Books +'}
            onPress={() => this.props.navigation.navigate('AddBooks')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state, ownProps) => {
  console.log(state.firestore.ordered.books);
  return {
    books: state.firestore.ordered.books,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => {
    let user = firebase.auth().currentUser;
    return [
      {
        collection: 'books',
        orderBy: ['createdAt', 'desc'],
      },
    ];
  }),
)(Library);
