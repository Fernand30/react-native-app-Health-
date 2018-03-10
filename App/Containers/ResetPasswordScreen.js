import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'

import styles from './Styles/ResetPasswordScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
  }

  Authentication = () => {
    const AuthenticationStack = NavigationActions.navigate({
      routeName: "AuthenticationStack",
      params: {}
    });
    this.props.navigation.dispatch(AuthenticationStack);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render () {
    return (
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
                textStyle={{
                  color: Colors.navy,
                  fontSize: Metrics.unitFontSize * 22,
                  fontWeight: '500'
                }}
                onPress={this.goCancel.bind(this)}
              />
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.titleText}>Reset Password</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <Text style={styles.notificationText}>Enter your account email address to send{'\n'}a password recovery email</Text>
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={styles.emailText}>ENAIL</Text>
              <Input placeholder={'Enter your email address'}
                     style={styles.inputStyle}
                     textAlign={'left'}
                     fontSize={Metrics.unitFontSize*15}
                     placeholderTextColor={Colors.coal}    
                     returnKeyType='done'                
                     autoCapitalize='none'
                     autoCorrect={false} 
                     autoFocus={true}                   
                     underlineColorAndroid='transparent'
                     onSubmitEditing={() => this.handleLogin}
              />
            </Item>
          </Form>
          
          <FullButton
            text='Send Recovery Email'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*20,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>{this.Authentication()}}
          />
          
        </View>
      </Container>
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
