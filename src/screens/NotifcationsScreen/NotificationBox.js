import React from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import moment from 'moment';
import {connect} from 'react-redux';
import {updateLend} from '../../store/actions/projectActions';
const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

class NotificationBox extends React.Component {
  render() {
   const notification = this.props.notification.item
    return (
      <View style={styles.container}>
        <Text>
          {notification.lentTo} wants to borrow your book for{' '}
          {notification.lentDuration} days
        </Text>
        <Text>
          Requested At: {moment(notification.createdAt.toDate()).fromNow()}
        </Text>
        <Button
          title={'Accept'}
          onPress={() => this.props.updateLend({...this.props.notification, result: false})}
        />
        <Button
          title={'Reject'}
          onPress={() => this.props.updateLend({...this.props.notification, result: true})}
        />
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
  },
});

const mapDispatchToProps = dispatch => {
  return {
    updateLend: project => dispatch(updateLend(project)),
  };
};

export default connect(null, mapDispatchToProps)(NotificationBox);
