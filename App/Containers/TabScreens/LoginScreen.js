import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'

import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
  }

  Resetpassword = () => {
    const ResetPasswordScreen = NavigationActions.navigate({
      routeName: "ResetPasswordScreen",
      params: {}
    });
    this.props.navigation.dispatch(ResetPasswordScreen);
  }

  CreateAccount = () => {
    const CreateAccountScreen = NavigationActions.navigate({
      routeName: "CreateAccountScreen",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountScreen);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={()=>this.goCancel()} style={styles.backArrowButton}>
                <Image source={Images.BackArrow} style={styles.backArrow}/>
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Image source={Images.muscle} style={styles.muscle}/>
              <Text style={ApplicationStyles.screen.titleText}>Health App</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <Text style={styles.join}>Sign in to begin your Fry Egg experience</Text>
          <FullButton
            text='Sign in with Facebook'
            style={{
              backgroundColor: Colors.facebook,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*5,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 20,
            }}
            onPress={()=>{this.goTabNavigation()}}
          />
          <View style={styles.orrow}>
            <View style={styles.lineView}/>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.lineView}/>
          </View>
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>ENAIL</Text>
              <InputText placeholder={'Enter your email address'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
              />
            </Item>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>PASSWORD</Text>
              <InputText placeholder={'Enter your password'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     secureTextEntry={true}
              />
            </Item>
          </Form>
          <FullButton
            text='Sign in'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*5,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>{}}
          />
          <View style={styles.rowView}>
            <FullButton
              text='Create account'
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                marginTop: Metrics.unitMargin*1
              }}
              textStyle={{
                color: Colors.navy,
                fontSize: Metrics.unitFontSize * 15,
                fontWeight: '400'
              }}
              onPress={()=>{this.CreateAccount()}}
            />
            <FullButton
            text='Forgot password?'
            style={{
              backgroundColor: 'transparent',
              alignItems: 'center',
              marginTop: Metrics.unitMargin*1
            }}
            textStyle={{
              color: Colors.navy,
              fontSize: Metrics.unitFontSize * 15,
              fontWeight: '400'
            }}
            onPress={()=>{this.Resetpassword()}}
          />
        </View>
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
