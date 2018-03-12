import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'

import styles from './Styles/ResetPasswordScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
  }

  Authentication = () => {
    const AuthenticationScreen = NavigationActions.navigate({
      routeName: "AuthenticationScreen",
      params: {}
    });
    this.props.navigation.dispatch(AuthenticationScreen);
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
          <Text style={styles.join}>Enter your account email address to send{'\n'}a password recovery email</Text>
          
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>ENAIL</Text>
              <InputText placeholder={'Enter your email address'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     autoFocus={true}
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
