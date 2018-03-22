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
import ExplorerScreen from "../Containers/TabScreens/ExplorerScreen";
import ResultSearchScreen from "../Containers/TabScreens/ResultSearchScreen";
import AccountLoginScreen from "../Containers/TabScreens/LoginScreen";
import AccountWelcomeScreen from "../Containers/TabScreens/WelcomeScreen";
import AccountResetPasswordScreen from "../Containers/TabScreens/ResetPasswordScreen";
import AccountAuthenticationScreen from "../Containers/TabScreens/AuthenticationScreen";
import VerifyScreen from "../Containers/TabScreens/VerifyScreen";
import AccountCreateAccountScreen from "../Containers/TabScreens/CreateAccountScreen";
import AccountCreateAccountWithFacebookScreen from "../Containers/TabScreens/CreateAccountWithFacebookScreen";
import AccountCreateAccountWithOnlyUsernameScreen from "../Containers/TabScreens/CreateAccountWithOnlyUsernameScreen";
import AccountAccountScreen from "../Containers/TabScreens/AccountScreen";
import MySessionScreen from "../Containers/TabScreens/MySessionScreen";
import MyProgramScreen from "../Containers/TabScreens/MyProgramScreen";
import AccountSettingScreen from "../Containers/TabScreens/AccountSettingScreen";
import AccountClientScreen from "../Containers/TabScreens/AccountClientScreen";
import AccountCoachScreen from "../Containers/TabScreens/AccountCoachScreen";
import SessionSettingScreen from "../Containers/TabScreens/SessionSettingScreen";
import ProgramReviewScreen from "../Containers/TabScreens/ProgramReviewScreen";
import SessionDashboardScreen from "../Containers/TabScreens/SessionDashboardScreen";
import ProgramIntroductionScreen from "../Containers/TabScreens/ProgramIntroductionScreen";
import BillingDetailScreen from "../Containers/TabScreens/BillingDetailScreen";
import BankDetailScreen from "../Containers/TabScreens/BankDetailScreen";
import TransactionsScreen from "../Containers/TabScreens/TransactionsScreen";

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
  },
  ExplorerScreen: {
    screen: ExplorerScreen
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
  VerifyScreen: {
    screen: VerifyScreen
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
  },
  MySessionScreen: {
    screen: MySessionScreen
  },
  AccountSettingScreen: {
    screen: AccountSettingScreen
  },
  AccountClientScreen: {
    screen: AccountClientScreen
  },
  AccountCoachScreen: {
    screen: AccountCoachScreen
  },
  SessionSettingScreen: {
    screen: SessionSettingScreen
  },
  MyProgramScreen: {
    screen: MyProgramScreen
  },
  ProgramReviewScreen: {
    screen: ProgramReviewScreen
  },
  SessionDashboardScreen: {
    screen: SessionDashboardScreen
  },
  ProgramIntroductionScreen: {
    screen: ProgramIntroductionScreen
  },
  BillingDetailScreen: {
    screen: BillingDetailScreen
  },
  BankDetailScreen: {
    screen: BankDetailScreen
  },
  TransactionsScreen: {
    screen: TransactionsScreen
  }
})

const TabNavigatorStack = TabNavigator({
  HomeTab : { screen: HomeTab,
              navigationOptions: {
                title: 'Home',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.SelectedHome 
                      : Images.Home 
                      return (
                          <Image 
                              source={image}
                              style={styles.icon}
                          />
                      )
                  }
               },
          
             },
  ExplorerTab : { screen: ExplorerTab,
              navigationOptions: {
                title: 'Explor',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.selectedSearch 
                      : Images.explorer 
                      return (
                          <Image 
                              source={image}
                              style={styles.icon}
                          />
                      )
                  }
               }
             },
  AlarmTab : { screen: AlarmTab,
              navigationOptions: {
                title: 'Alarm',
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.Alert 
                      : Images.Alert 
                      return (
                          <Image 
                              source={image}
                              style={styles.icon}
                          />
                      )
                  }
               }
             },
  AccountTab : { screen: AccountTab,

              navigationOptions: {
                title: 'Account',
                
                tabBarIcon: ({ focused }) => {
                      const image = focused 
                      ? Images.SelectedContacts 
                      : Images.Contacts  
                      return (
                          <Image 
                              source={image}
                              style={styles.icon}
                          />
                      )
                  }
               }
             },
},
  {
    initialRouteName:"HomeTab",
    lazy:true,
    tabBarPosition:'bottom',
    tabBarOptions: {
      labelStyle: {
        fontSize: Metrics.unitFontSize*10,
        textAlign:'center',
        marginBottom: Metrics.unitMargin*1.5,
      },
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      },
      style: {
        borderTopWidth: 0,
        backgroundColor: 'white',
        borderColor: 'white',
      },
      showIcon:true,
      showLabel:true,
      activeTintColor:"#E33855",
      inactiveTintColor:"#95989A"
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


