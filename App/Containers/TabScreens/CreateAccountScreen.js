import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'

import styles from './Styles/CreateAccountScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
  }

  goWithFacebook = () => {
    const CreateAccountWithFacebookScreen = NavigationActions.navigate({
      routeName: "CreateAccountWithFacebookScreen",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountWithFacebookScreen);
  }

  createAccount(){
    const AccountScreen = NavigationActions.navigate({
      routeName: "AccountScreen",
      params: {}
    });
    this.props.navigation.dispatch(AccountScreen);
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
          <Text style={styles.join}>Create an account to begin using Fry Egg</Text>
          <FullButton
            text='Continue with Facebook'
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
            onPress={()=>{this.goWithFacebook()}}
          />
          <View style={styles.orrow}>
            <View style={styles.lineView}/>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.lineView}/>
          </View>
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>USERNAME</Text>
              <InputText placeholder={'Choose a username'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
              />
            </Item>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>EMAIL</Text>
              <InputText placeholder={'Enter your email address'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     secureTextEntry={true}                   
              />
            </Item>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>PASSWORD</Text>
              <InputText placeholder={'Choose your password'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     secureTextEntry={true}
              />
            </Item>
          </Form>
          <FullButton
            text='Create Account'
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
            onPress={()=>{this.createAccount()}}
          />
          <FullButton
            text='Already have an account?'
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
