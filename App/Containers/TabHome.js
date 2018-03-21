import { connect } from 'react-redux'
import AuthActions from '../Redux/AuthRedux'
import { StackNavigator } from "react-navigation";

import HomeListScreen from "./TabScreens/HomeListScreen";

const navigator = StackNavigator({
  HomeListScreen: {
    screen: HomeListScreen,
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
