import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import firebase from 'firebase';
import NotificationList from './NotificationList';
class Notifications extends React.Component {
  render() {
    let {notifications} = this.props;
    let userId = firebase.auth().currentUser.uid;
    notifications =
      notifications &&
      notifications.filter(notification => notification.toId == userId);
    return (
      <View style={styles.containter}>
        <Text>Notifications</Text>
        <NotificationList notifications={notifications} />
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
  return {
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(ownProps => {
    let user = firebase.auth().currentUser;
    return [
      {
        collection: 'notifications',
        // orderBy: ['createdAt', 'desc'],
      },
    ];
  }),
)(Notifications);
