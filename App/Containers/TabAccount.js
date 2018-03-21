import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { StackNavigator } from "react-navigation";
import LoginScreen from "./TabScreens/LoginScreen";
import WelcomeScreen from "./TabScreens/WelcomeScreen";
import ResetPasswordScreen from "./TabScreens/ResetPasswordScreen";
import AuthenticationScreen from "./TabScreens/AuthenticationScreen";
import CreateAccountScreen from "./TabScreens/CreateAccountScreen";
import CreateAccountWithFacebookScreen from "./TabScreens/CreateAccountWithFacebookScreen";
import CreateAccountWithOnlyUsernameScreen from "./TabScreens/CreateAccountWithOnlyUsernameScreen";
import AccountScreen from "./TabScreens/AccountScreen";

const navigator = StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  ResetPasswordScreen: {
    screen: ResetPasswordScreen
  },
  AuthenticationScreen: {
    screen: AuthenticationScreen
  },
  CreateAccountScreen: {
    screen: CreateAccountScreen
  },
  CreateAccountWithOnlyUsernameScreen: {
    screen: CreateAccountWithOnlyUsernameScreen
  },
  CreateAccountWithFacebookScreen: {
    screen: CreateAccountWithFacebookScreen
  },
  AccountScreen: {
    screen: AccountScreen
  }
},{
  navigationOptions: {
      header: false,
      headerStyle: {
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        }
    }
});
  
const mapStateToProps = (state) => {
  return {
    fetching:state.auth.fetching,
    error:state.auth.error,
    passcode:state.auth.passcode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(navigator)
