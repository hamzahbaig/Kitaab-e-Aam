import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import SignIn from './src/screens/Authentication/SignIn';
import SignUp from './src/screens/Authentication/SignUp';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  SignIn: SignIn,
  SignUp: SignUp
});

export default createAppContainer(AppStack);
