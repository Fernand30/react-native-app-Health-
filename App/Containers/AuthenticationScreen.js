import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'

import styles from './Styles/AuthenticationScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
  }

  handleLogin = () => {
    
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

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
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
              <Text style={ApplicationStyles.screen.titleText}>2 Factor Authentication</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          
          <Form>
            <Item regular style={styles.inputContainer}>
              <Text style={ApplicationStyles.screen.emailText}>2FA Code</Text>
              <InputText placeholder={'Enter 2 Factor Authentication Code'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*15}
                     autoFocus={true}                   
              />
            </Item>
          </Form>
          
          <FullButton
            text='Enter Code'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*35,
              marginHorizontal: Metrics.unitMargin*5
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>{}}
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
