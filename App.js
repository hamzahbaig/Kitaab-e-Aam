import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import AuthLoading from './src/screens/Authentication/AuthLoading'
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import SignIn from './src/screens/Authentication/SignIn';
import SignUp from './src/screens/Authentication/SignUp';


const AppStack = createStackNavigator({
  Profile: ProfileScreen,
});

const AuthStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    }
  )
)