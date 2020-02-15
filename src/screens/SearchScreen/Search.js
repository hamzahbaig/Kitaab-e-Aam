import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import BookList from '../../components/Book/BookList';
import Header from '../../components/Header/Header';

class Search extends React.Component {
  state = {
    searchedValue: '',
    filtering: [],
  };

  onValueChange = value => {
    this.setState({searchedValue: value});

    let filtering = [];
    filtering = this.props.books.filter(book =>
      book.bookName.toLowerCase().includes(value.toLowerCase()),
    );
    console.log(filtering);
    this.setState({filtering: filtering});
  };
  render() {
    const {books} = this.props;
    return (
      <View style={styles.containter}>
        <Header visible={true} onValueChange={this.onValueChange} />
        {this.state.searchedValue == '' ? (
          <BookList books={books} navigation={this.props.navigation} />
        ) : this.state.filtering === [] ? (
          <Text>Sorry.. No result.</Text>
        ) : (
          <BookList
            books={this.state.filtering}
            navigation={this.props.navigation}
          />
        )}
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
    alignItems: 'center',
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
