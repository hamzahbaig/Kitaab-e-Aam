import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {lendBook} from '../../store/actions/projectActions';
class BookDetails extends React.Component {
  state = {
    lentDuration: null,
  };

  handleChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const {book} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>Book Name: {book.bookName}</Text>
        <Text>Book Description: {book.bookDescription}</Text>
        <Text>
          Book Owner: {book.authorFirstName} {book.authorLastName}
        </Text>
        <Text>Uploaded: {moment(book.createdAt.toDate()).fromNow()}</Text>
        {book.available ? (
          <View>
            <TextInput
              placeholder={'lentDuration (days)'}
              keyboardType={'numeric'}
              style={{
                height: 40,
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: '90%',
                marginBottom: 30,
              }}
              onChangeText={this.handleChange('lentDuration')}
            />
            <Button
              title={'Lend'}
              onPress={() => this.props.lendBook({...this.state, book})}
            />
          </View>
        ) : (
          <Text>Book Not Available for {book.lentDuration}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    lendBook: project => dispatch(lendBook(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
