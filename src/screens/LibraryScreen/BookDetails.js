import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {lendBook} from '../../store/actions/projectActions';
import firebase from 'firebase';
import {Fonts} from '../../assets/fonts/Fonts';
import Header from '../../components/Header/Header';
import ButtonComponent from '../../components/Button/ButtonComponent';
class BookDetails extends React.Component {
  state = {
    lentDuration: null,
  };

  handleChange = key => value => {
    this.setState({
      [key]: value,
    });
  };

  decideHandler = book => {
    let userId = firebase.auth().currentUser.uid;
    if (userId == book.authorId) {
      if (book.available == true) {
        return null;
      } else {
        return <Text>Book Lent to: {book.lentTo}</Text>;
      }
    } else if (book.available == false && userId != book.authorId) {
      return <Text>Book Not Available for {book.lentDuration}</Text>;
    } else if (book.available == true && userId != book.authorId) {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder={'Lent Duration.. (days)'}
            keyboardType={'numeric'}
            style={{
              height: 40,
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              width: '100%',
              marginTop: 30,
              marginBottom: 20,
            }}
            onChangeText={this.handleChange('lentDuration')}
          />
          <ButtonComponent
            title={'Request for Book'}
            onPress={() => this.props.lendBook({...this.state, book})}
          />
        </View>
      );
    }
  };

  render() {
    const {book} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header title={book.bookName} />
        <View
          style={{
            marginTop: 40,
            width: '90%',
            height: '30%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.avenirHeavy,
              color: '#68C1B5',
              fontSize: 24,
            }}>
            Book Description
          </Text>
          <Text
            style={{
              fontFamily: Fonts.avenirLight,
              color: 'black',
              fontSize: 18,
              marginTop: 10,
              marginLeft: 5,
            }}>
            {book.bookDescription}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            height: '60%',
            borderTopColor: '#707070',
            borderTopWidth: 1,
          }}>
          <Text
            style={{
              fontFamily: Fonts.avenirHeavy,
              color: '#68C1B5',
              fontSize: 24,
              marginTop: 20,
            }}>
            Book Owner:
          </Text>
          <Text
            style={{
              fontFamily: Fonts.avenirLight,
              color: 'black',
              fontSize: 18,
              marginTop: 10,
              marginLeft: 5,
            }}>
            {book.authorFirstName} {book.authorLastName}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.avenirHeavy,
              color: '#68C1B5',
              fontSize: 24,
              marginTop: 10,
            }}>
            Uploaded:
          </Text>
          <Text
            style={{
              fontFamily: Fonts.avenirLight,
              color: 'black',
              fontSize: 18,
              marginTop: 10,
              marginLeft: 5,
            }}>
            {moment(book.createdAt.toDate()).fromNow()}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.avenirHeavy,
              color: '#68C1B5',
              fontSize: 24,
              marginTop: 10,
            }}>
            Status:
          </Text>
          {this.decideHandler(book)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
