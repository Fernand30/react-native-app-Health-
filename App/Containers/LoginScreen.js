import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Spinner, Toast } from 'native-base';
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

  goTabNavigation(){
    const TabNavigatorStack = NavigationActions.navigate({
      routeName: "TabNavigatorStack",
      params: {}
    });
    this.props.navigation.dispatch(TabNavigatorStack);
  }

  render () {
    return (
    <SafeAreaView style={ApplicationStyles.screen.whiteContent}> 
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
              <Text style={ApplicationStyles.screen.titleText}>Log in</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <View style={styles.fixView}/>
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>ENAIL/USERNAME</Text>
              <InputText placeholder={'Enter Email'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     autoFocus={true}
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
            text='Forgot password?'
            style={{
              backgroundColor: 'transparent',
              alignItems: 'center',
              marginTop: Metrics.unitMargin*1
            }}
            textStyle={{
              color: Colors.navy,
              fontSize: Metrics.unitFontSize * 15,
            }}
            onPress={()=>{this.Resetpassword()}}
          />
          <FullButton
            text='Continue'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*10,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>this.goTabNavigation()}
          />
          
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
