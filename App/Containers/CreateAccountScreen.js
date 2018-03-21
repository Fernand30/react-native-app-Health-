import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, Alert,BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.goback();
        return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  handleLogin = () => {
    
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  verification = (v) => {
    const verification = NavigationActions.navigate({
      routeName: "VerifyScreen",
      params: {verification:v}
    });
    this.props.navigation.dispatch(verification);
  }

  policyalert(){
    Alert.alert(
      '',
      'By tapping "Continue" you agree\nto the Terms and Conditions and Privacy Policyof Fry Egg.',
      [
        {text: 'Cancel', onPress: () => this.verification(false), style: 'cancel'},
        {text: 'Continu', onPress: () => this.verification(true),style: 'continue'},
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.whiteContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <FullButton
                text='Cancel'
                style={{
                  backgroundColor: 'transparent',
                  alignItems: 'center',     
                }}
                textStyle={ApplicationStyles.screen.cancelText}
                onPress={this.goCancel.bind(this)}
              />
            </View>
            <View style={styles.headerCenterView}>
              <Text style={ApplicationStyles.screen.titleText}>Create account</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <View style={styles.fixView}/>
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>ENAIL/USERNAME</Text>
              <InputText placeholder={'Choose your username'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     autoFocus={true}  
              />
              <Image source={Images.check} style={styles.check}/>
            </Item>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>EMAIL</Text>
              <InputText placeholder={'Enter your email address'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     secureTextEntry={true}                   
                  
              />
              <Image source={Images.close} style={styles.close}/>
            </Item>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>PASSWORD</Text>
              <InputText placeholder={'Choose a password'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     secureTextEntry={true}  
              />
            </Item>
          </Form>
          
          <FullButton
            text='Create account'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*15,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>{this.policyalert()}}
          />
          
        </View>
      </Container>
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
