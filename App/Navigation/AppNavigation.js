import { StackNavigator } from 'react-navigation'
import WelcomeScreen from '../Containers/WelcomeScreen'
import LoginScreen from '../Containers/LoginScreen'
import CreateAccountScreen from '../Containers/CreateAccountScreen'
import ResetPasswordScreen from '../Containers/ResetPasswordScreen'
import AuthenticationScreen from '../Containers/AuthenticationScreen'
import TabNavigatorScreen from '../Containers/TabNavigatorScreen'

const WelcomStack = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
}, {
  headerMode: 'none',
});
const LoginStack = StackNavigator({
  LoginScreen: { screen: LoginScreen },
}, {
  headerMode: 'none',
});
const CreateAccountStack = StackNavigator({
  CreateAccountScreen: { screen: CreateAccountScreen },
}, {
  headerMode: 'none',
});
const ResetPasswordStack = StackNavigator({
  ResetPasswordScreen: { screen: ResetPasswordScreen },
}, {
  headerMode: 'none',
});
const AuthenticationStack = StackNavigator({
  AuthenticationScreen: { screen: AuthenticationScreen },
}, {
  headerMode: 'none',
});

const TabNavigatorStack = StackNavigator({
  TabNavigatorScreen: { screen: TabNavigatorScreen },
}, {
  headerMode: 'none',
});


const PrimaryNav = StackNavigator({
  WelcomStack: { screen: WelcomStack },
  LoginStack: { screen: LoginStack },
  CreateAccountStack: { screen: CreateAccountStack },
  ResetPasswordStack: { screen: ResetPasswordStack },
  AuthenticationStack: { screen: AuthenticationStack },
  TabNavigatorStack: { screen: TabNavigatorStack },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'WelcomStack'
})

export default PrimaryNav
