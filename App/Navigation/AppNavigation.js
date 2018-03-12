import { StackNavigator, TabNavigator } from 'react-navigation'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import CreateAccountScreen from '../Containers/CreateAccountScreen'
import ResetPasswordScreen from '../Containers/ResetPasswordScreen'
import AuthenticationScreen from '../Containers/AuthenticationScreen'
import TabNavigatorScreen from '../Containers/TabNavigatorScreen'
import ViewProgramScreen from '../Containers/ViewProgramScreen'
import CheckoutScreen from '../Containers/CheckoutScreen'
import CompleteCheckScreen from '../Containers/CompleteCheckScreen'
import HomeListScreen from "../Containers/TabScreens/HomeListScreen";
import SearchScreen from "../Containers/TabScreens/SearchScreen";
import TypingSearchScreen from "../Containers/TabScreens/TypingSearchScreen";
import ResultSearchScreen from "../Containers/TabScreens/ResultSearchScreen";
import AccountLoginScreen from "../Containers/TabScreens/LoginScreen";
import AccountWelcomeScreen from "../Containers/TabScreens/WelcomeScreen";
import AccountResetPasswordScreen from "../Containers/TabScreens/ResetPasswordScreen";
import AccountAuthenticationScreen from "../Containers/TabScreens/AuthenticationScreen";
import AccountCreateAccountScreen from "../Containers/TabScreens/CreateAccountScreen";
import AccountCreateAccountWithFacebookScreen from "../Containers/TabScreens/CreateAccountWithFacebookScreen";
import AccountCreateAccountWithOnlyUsernameScreen from "../Containers/TabScreens/CreateAccountWithOnlyUsernameScreen";
import AccountAccountScreen from "../Containers/TabScreens/AccountScreen";
import AlarmScreen from "../Containers/TabScreens/AlarmScreen";

import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView } from 'react-native'
import styles from './Styles/NavigationStyles'
const HomeTab = StackNavigator({
  HomeListScreen:{ screen: HomeListScreen}
});

const ExplorerTab = StackNavigator({
  SearchScreen: {
    screen: SearchScreen
  },
  TypingSearchScreen: {
    screen: TypingSearchScreen
  },
  ResultSearchScreen: {
    screen: ResultSearchScreen
  }
})

const AlarmTab = StackNavigator({
  AlarmScreen:{ screen: AlarmScreen}
})

const AccountTab = StackNavigator({
  WelcomeScreen: {
    screen: AccountWelcomeScreen
  },
  LoginScreen: {
    screen: AccountLoginScreen
  },
  ResetPasswordScreen: {
    screen: AccountResetPasswordScreen
  },
  AuthenticationScreen: {
    screen: AccountAuthenticationScreen
  },
  CreateAccountScreen: {
    screen: AccountCreateAccountScreen
  },
  CreateAccountWithOnlyUsernameScreen: {
    screen: AccountCreateAccountWithOnlyUsernameScreen
  },
  CreateAccountWithFacebookScreen: {
    screen: AccountCreateAccountWithFacebookScreen
  },
  AccountScreen: {
    screen: AccountAccountScreen
  }
})

const TabNavigatorStack = TabNavigator({
  HomeTab : { screen: HomeTab,
              navigationOptions: {
                title: 'Home',
                tabBarIcon: <Image source={Images.SelectedHome} style={styles.icon}/>,
               },
          
             },
  ExplorerTab : { screen: ExplorerTab,
              navigationOptions: {
                title: 'Explor',
                tabBarIcon: <Image source={Images.selectedSearch}  style={styles.icon}/>
               }
             },
  AlarmTab : { screen: AlarmTab,
              navigationOptions: {
                title: 'Alarm',
                tabBarIcon: <Image source={Images.Alert}  style={styles.icon}/>
               }
             },
  AccountTab : { screen: AccountTab,
              navigationOptions: {
                title: 'Account',
                tabBarIcon: <Image source={Images.SelectedContacts}  style={styles.icon}/>
               }
             },
});


const PrimaryNav = StackNavigator({
  WelcomStack: { screen: WelcomeScreen },
  LoginStack: { screen: LoginScreen },
  CreateAccountStack: { screen: CreateAccountScreen },
  ResetPasswordStack: { screen: ResetPasswordScreen },
  AuthenticationStack: { screen: AuthenticationScreen },
  TabNavigatorStack: { screen: TabNavigatorStack },
  ViewProgramStack: { screen: ViewProgramScreen },
  CheckoutStack: { screen: CheckoutScreen },
  CompleteCheckStack: { screen: CompleteCheckScreen }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  initialRouteName: 'WelcomStack'
 })

export default PrimaryNav
