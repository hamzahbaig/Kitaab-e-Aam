import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import {Fonts} from '../../assets/fonts/Fonts';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

const descHelper = des => {
  if (des.length > 10) {
    return des.substring(0, 20) + '...';
  } else {
    return des;
  }
};
const BookSummary = ({book, navigation}) => {
  book = book.item;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetails', {book: book})}
      style={styles.container}>
      <Text
        style={{
          fontFamily: Fonts.avenirMedium,
          color: 'black',
          fontSize: 20,
          marginTop: 10,
        }}>
        {book.bookName}
      </Text>
      <Text
        style={{
          fontFamily: Fonts.avenirLight,
          color: 'black',
          fontSize: 16,
          marginTop: 3,
        }}>
        {descHelper(book.bookDescription)}
      </Text>
      <Text style={{color:'#68C1B5', alignSelf: 'flex-end',marginRight:15,marginTop:25 ,fontFamily:Fonts.avenirHeavy,fontsize:15}}>
        {moment(book.createdAt.toDate()).fromNow()}
      </Text>
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
    marginBottom:10,
    borderRadius: 7,
    borderColor:'#68C1B5',
    borderWidth: 1
  },
});

export default BookSummary;
