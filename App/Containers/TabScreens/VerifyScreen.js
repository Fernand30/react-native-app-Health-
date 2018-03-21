import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
//import Spinner from 'react-native-loading-spinner-overlay';

import styles from './Styles/VerifyScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
    this.state=({
      visible: true
    })
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ visible: false})
    }, 3000)
  }

  Resetpassword = () => {
    const ResetPasswordStack = NavigationActions.navigate({
      routeName: "ResetPasswordStack",
      params: {}
    });
    this.props.navigation.dispatch(ResetPasswordStack);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render () {
  
    if(this.props.navigation.state.params.verification){
      resultScreen = <View style={{alignItems:'center'}}>
                       <Image source={Images.success}/>
                       <Text style={styles.verifyText}>Account Successfully Verified!</Text>
                       <Text style={styles.verifycontain}>
                           Your account has been successfully verified.{'\n'}
                           You are now able to sign up for programs,{'\n'}
                           message coaches, and get the most out of Fry Egg!
                       </Text>
                       <TouchableOpacity  onPress={this.goCancel.bind(this)} style={[styles.returnButton,{backgroundColor: '#5BB99A'}]}>
                          <Text style={styles.returnText}>Return Home</Text>
                       </TouchableOpacity>
                     </View>
    }else{
      resultScreen = <View style={{alignItems:'center'}}>
                       <Image source={Images.failed}/>
                       <Text style={styles.verifyText}>Verification Error!</Text>
                       <Text style={styles.verifycontain}>
                           An error occurred while attempting to verify{'\n'}
                           your email address for your account. Please{'\n'}
                           contact support if this problem persists.
                       </Text>
                       <TouchableOpacity onPress={this.goCancel.bind(this)} style={[styles.returnButton,{backgroundColor: '#E33855'}]}>
                          <Text style={styles.returnText}>Return Home</Text>
                       </TouchableOpacity>
                     </View>
    }
    
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={()=>this.goCancel()} style={styles.backArrowButton}>
                <Image source={Images.BackArrow} style={styles.backArrow}/>
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.text}>Account Verifycation</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <View style={{flex:1,justifyContent: 'center', backgroundColor:'#F7F7F7'}}>
          {(this.state.visible)?
              <View>
                <Text style={styles.verify}>Verifying your account...</Text>
                <Spinner color='black' />
              </View>: resultScreen}
          </View>
      </SafeAreaView>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
