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
const AppBottomNavigation = createBottomTabNavigator({
  Profile: ProfileScreen,
  Search: SearchScreen,
  Notifications: Notifications,
  Library: Library,
});
const AppStack = createStackNavigator({
  MainStack: AppBottomNavigation,
  AddBooks: AddBooks,
  BookDetails: BookDetails,
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
