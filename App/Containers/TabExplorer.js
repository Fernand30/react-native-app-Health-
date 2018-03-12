import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { StackNavigator } from "react-navigation";

import SearchScreen from "./TabScreens/SearchScreen";
import TypingSearchScreen from "./TabScreens/TypingSearchScreen";
import ResultSearchScreen from "./TabScreens/ResultSearchScreen";

const navigator = StackNavigator({
  SearchScreen: {
    screen: SearchScreen
  },
  TypingSearchScreen: {
    screen: TypingSearchScreen
  },
  ResultSearchScreen: {
    screen: ResultSearchScreen
  }
},{
  headerMode: 'none'
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
