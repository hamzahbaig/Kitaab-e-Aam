import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import BookList from '../../components/Book/BookList';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import firebase from 'firebase';
import Header from '../../components/Header/Header'

class Library extends React.Component {
  render() {
    const {books} = this.props;
    let userId = firebase.auth().currentUser.uid;
    let filtering = books && books.filter(book => book.authorId == userId);

    return (
      <View style={styles.containter}>
         <Header />
        <Text>Library</Text>
        <BookList books={filtering} navigation={this.props.navigation} />
        <Button
          title={'Add Books'}
          onPress={() => this.props.navigation.navigate('AddBooks')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
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


{/* <View>
        <Header />
        <Text>LibraryScreen</Text>
        <Button
          title={'Add Books'}
          onPress={() => this.props.navigation.navigate('AddBooks')}
        />
        {/* <Button onPress={() => this.props.navigation.navigate('AddBooks')} /> */}
      // </View> */}