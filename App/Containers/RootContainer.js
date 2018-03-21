import React, { Component } from 'react'
import { View, StatusBar, SafeAreaView, BackHandler  } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import ReduxPersist from '../Config/ReduxPersist'
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  /*componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      //this.props.startup()
    }
  }*/

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }


  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar
           backgroundColor="#fef066"
           barStyle="dark-content"
         />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  //startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
