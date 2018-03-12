import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/WelcomeScreenStyle'

type WelcomeScreenProps = {
  dispatch: () => any,
  fetching: boolean,
  attemptLogin: () => void,
  passcode: number,
  error: string
}

class WelcomeScreen extends Component {

  props: WelcomeScreenProps

  state: {
    passcode: number,
    loading: boolean,
    error: string,
    editable: boolean
  }

  isAttempting: boolean

  constructor (props: WelcomeScreenProps) {

    super(props)

    this.state = {
      passcode : '',
      loading: false,
      error: '',
      editable: true
    },

    this.isAttempting = false

  }

  componentWillReceiveProps(nextProps) {
    this.forceUpdate();

    if(this.isAttempting && !nextProps.fetching){
      if(!nextProps.error){
        this.props.navigation.navigate('TeamScreen');
      }else{
        this.setState({ loading: false, passcode: '', editable: true}, () => {
          Toast.show({
            text: nextProps.error,
            position: 'bottom',
            buttonText: 'Okay',
            type: 'warning',
            duration: 5000
          })
        })
      }
    }
  }

  handleChangePasscode = value => this.setState({ passcode: value });

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

  createAccount(){
    const CreateAccountStack = NavigationActions.navigate({
      routeName: "CreateAccountStack",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountStack);
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
     <SafeAreaView style={styles.contentStyle}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.titleView}>
            <Image source={Images.muscle} style={styles.muscle}/>
            <Text style={styles.titleText}>Health App</Text>
          </View>

          {/*<Form>
                      <Item regular style={styles.inputContainer}>
                        <Input placeholder={'Enter Passcode'.toUpperCase()}
                               style={styles.inputStyle}
                               ref='passcode'
                               autoFocus={true}
                               value={this.state.passcode}
                               textAlign={'center'}
                               placeholderTextColor={Colors.coal}
                               keyboardType="numeric"
                               returnKeyType='done'
                               editable={this.state.editable}
                               autoCapitalize='none'
                               autoCorrect={false}
                               onChangeText={this.handleChangePasscode}
                               underlineColorAndroid='transparent'
                               onSubmitEditing={() => this.handleLogin}
                        />
                      </Item>
                    </Form>*/}
          <FullButton
            text='Continue with Facebook'
            style={{
              backgroundColor: Colors.facebook,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*30
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 20,
            }}
            onPress={()=>{this.goTabNavigation()}}
          />
          <FullButton
            text='Create an account'
            style={{
              backgroundColor: Colors.pink,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*3
            }}
            textStyle={{
              color: Colors.white,
              fontSize: Metrics.unitFontSize * 18,
            }}
            onPress={()=>{this.createAccount()}}
          />
          <FullButton
            text='Log in'
            style={{
              backgroundColor: Colors.snow,
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*15
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
              marginTop: Metrics.unitMargin*4
            }}
            textStyle={{
              color: Colors.navy,
              fontSize: Metrics.unitFontSize * 17,
              fontWeight:'300'
            }}
            onPress={this.handleLogin}
          />
          <FullButton
            text='Terms of Service and Privacy Policy'
            style={{
              backgroundColor: 'transparent',
              alignItems: 'center',
              borderRadius: 3,
              height: Metrics.unitMargin * 10,
              marginTop: Metrics.unitMargin*20
            }}
            textStyle={{
              color: Colors.navy,
              fontSize: Metrics.unitFontSize * 14,
              fontWeight:'300'
            }}
            onPress={this.handleLogin}
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
