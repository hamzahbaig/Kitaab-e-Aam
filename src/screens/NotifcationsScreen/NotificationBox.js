import React from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {updateLend} from '../../store/actions/projectActions';
import {Fonts} from '../../assets/fonts/Fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

class NotificationBox extends React.Component {
  render() {
    const notification = this.props.notification.item;
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: Fonts.avenirMedium,
            color: 'black',
            fontSize: 16,
            marginTop: 10,
          }}>
          {notification.lentTo} wants to borrow your {notification.bookName} book for
          {notification.lentDuration} days.
        </Text>

        <View
          style={{
            height: '30%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Text
            style={{
              fontFamily: Fonts.avenirHeavy,
              color: '#68C1B5',
              fontSize: 15,
              marginRight: 60,
            }}>
            Requested At: {moment(notification.createdAt.toDate()).fromNow()}
          </Text>
          <Icon
            size={40}
            color={'green'}
            name={'done'}
            onPress={() =>
              this.props.updateLend({...this.props.notification, result: false})
            }
          />
          <Icon1
            size={40}
            color={'red'}
            name={'cross'}
            onPress={() =>
              this.props.updateLend({...this.props.notification, result: true})
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: phoneHeight * 0.15,
    width: phoneWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: 7,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 7,
    borderColor: '#68C1B5',
    borderWidth: 1,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    updateLend: project => dispatch(updateLend(project)),
  };
};

export default connect(null, mapDispatchToProps)(NotificationBox);
