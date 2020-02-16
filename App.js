import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import AuthLoading from './src/screens/Authentication/AuthLoading';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen/Search';
import Notifications from './src/screens/NotifcationsScreen/Notifications';
import Library from './src/screens/LibraryScreen/Library';
import SignIn from './src/screens/Authentication/SignIn';
import SignUp from './src/screens/Authentication/SignUp';
import AddBooks from './src/screens/LibraryScreen/AddBooks';
import BookDetails from './src/screens/LibraryScreen/BookDetails';
import BorrowedBooks from './src/screens/ProfileScreen/BorrowedBooks';
import LentBooks from './src/screens/ProfileScreen/LentBooks';
const AppBottomNavigation = createBottomTabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  Library: {
    screen: Library,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
 
});
const AppStack = createStackNavigator({
  MainStack: {
    screen: AppBottomNavigation,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  AddBooks: {
    screen: AddBooks,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  BookDetails: {
    screen: BookDetails,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  BorrowedBooks: {
    screen: BorrowedBooks,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  LentBooks: {
    screen: LentBooks,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
});

const AuthStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  }),
);
