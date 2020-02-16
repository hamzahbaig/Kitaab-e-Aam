import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
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
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
const AppBottomNavigation = createBottomTabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: null,
      headerShown: false,
      tabBarIcon: ({tintColor}) => (
        <Icon name={'user'} color={tintColor} size={23} />
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: null,
      headerShown: false,
      tabBarIcon: ({tintColor}) => (
        <Icon name={'search1'} color={tintColor} size={23} />
      ),
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: null,
      headerShown: false,
      tabBarIcon: ({tintColor}) => (
        <Icon1 name={'md-notifications'} color={tintColor} size={23} />
      ),
    },
  },
  Library: {
    screen: Library,
    navigationOptions: {
      title: null,
      headerShown: false,
      tabBarIcon: ({tintColor}) => (
        <Icon name={'book'} color={tintColor} size={23} />
      ),
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
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: null,
      headerShown: false,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator({
    SplashScreen: SplashScreen,
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  }),
);
