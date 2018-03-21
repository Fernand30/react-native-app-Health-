import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics } from '../Themes'
import { Container, Content, Footer } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle'

type WelcomeScreenProps = {

}

class WelcomeScreen extends Component {

  props: WelcomeScreenProps
  // state array
  state: {}

  constructor(props: WelcomeScreenProps) {

    super(props)

    this.state = {}
  }

  componentWillReceiveProps(nextProps) {

  }

  // login button press function
  handleLogin = () => {
    const LoginStack = NavigationActions.navigate({
      routeName: "LoginStack",
      params: {}
    });
    this.props.navigation.dispatch(LoginStack);
    // if(this.state.passcode.length < 4 || this.state.passcode === ''){
    //   Toast.show({
    //     text: 'Enter valid passcode',
    //     position: 'bottom',
    //     buttonText: 'Okay',
    //     type: 'danger',
    //     duration: 5000
    //   });
    // }else{
    //   this.setState({ loading: true , editable: false}, () => {
    //     this.isAttempting = true;
    //     this.props.attemptLogin(this.state.passcode);
    //   })
    // }
  }

  // Create Account button press function
  createAccount() {
    const CreateAccountStack = NavigationActions.navigate({
      routeName: "CreateAccountStack",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountStack);
  }

  render() {
    return (
      <SafeAreaView style={styles.contentStyle}>
        <Container>
            <View style={styles.contentStyle}>
              <View style={styles.titleView}>
                <Image source={Images.logo}  />
              </View>
              <View style={styles.buttonView}>
                <FullButton
                  text='Continue with Facebook'
                  style={{
                    backgroundColor: Colors.facebook,
                    alignItems: 'center',
                    borderRadius: 3,
                    height: Metrics.unitMargin * 10,
                    
                  }}
                  textStyle={{
                    color: Colors.white,
                    fontSize: Metrics.unitFontSize * 20,
                  }}
                  onPress={() => { }}
                />
                <FullButton
                  text='Create an account'
                  style={{
                    backgroundColor: Colors.pink,
                    alignItems: 'center',
                    borderRadius: 3,
                    height: Metrics.unitMargin * 10,
                    marginTop: Metrics.unitMargin * 5
                  }}
                  textStyle={{
                    color: Colors.white,
                    fontSize: Metrics.unitFontSize * 18,
                  }}
                  onPress={() => { this.createAccount() }}
                />
                <FullButton
                  text='Log in'
                  style={{
                    backgroundColor: Colors.snow,
                    alignItems: 'center',
                    borderRadius: 3,
                    height: Metrics.unitMargin * 10,
                    marginTop: Metrics.unitMargin * 15
                  }}
                  textStyle={{
                    color: Colors.navy,
                    fontSize: Metrics.unitFontSize * 17
                  }}
                  onPress={this.handleLogin}
                />
                <FullButton
                  text='Continue without loggin in'
                  style={{
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    borderRadius: 3,
                    height: Metrics.unitMargin * 10,
                    marginTop: Metrics.unitMargin * 4
                  }}
                  textStyle={{
                    color: Colors.navy,
                    fontSize: Metrics.unitFontSize * 17,
                    fontWeight: '400'
                  }}

                />
              </View>
              <FullButton
                text='Terms of Service and Privacy Policy'
                style={{
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                  borderRadius: 3,
                  height: Metrics.unitMargin * 10,
                }}
                textStyle={{
                  color: Colors.navy,
                  fontSize: Metrics.unitFontSize * 14,
                  fontWeight: '300'
                }}
              />
            </View>  
        </Container>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.auth.fetching,
    error: state.auth.error,
    passcode: state.auth.passcode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
