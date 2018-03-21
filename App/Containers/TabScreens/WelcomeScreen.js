import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
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
  static navigationOptions = { header: null };
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

  // static navigationOptions = ({navigation}) => ({
  //   header: false,
  //   headerStyle: {visible: false}
  // })

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
    const LoginScreen = NavigationActions.navigate({
      routeName: "LoginScreen",
      params: {}
    });
    this.props.navigation.dispatch(LoginScreen);
  }

  CreateAccount = () => {
    const CreateAccountScreen = NavigationActions.navigate({
      routeName: "CreateAccountScreen",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountScreen);
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
           <View style={styles.headerView}>
                      <Image source={Images.logo} style={styles.muscle}/>
                    </View>
                    <Text style={styles.welcome}>Welcome to Fry Egg!</Text>
                    <Text style={styles.join}>Join or sign in to get started</Text>
                    <FullButton
                      text='Create an account'
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
                        fontSize: Metrics.unitFontSize * 20,
                      }}
                      onPress={()=>{this.CreateAccount()}}
                    />
                    <FullButton
                      text='Continue with Facebook'
                      style={{
                        backgroundColor: Colors.facebook,
                        alignItems: 'center',
                        borderRadius: 3,
                        height: Metrics.unitMargin * 10,
                        marginTop: Metrics.unitMargin*2,
                        marginHorizontal: Metrics.unitMargin*5
                      }}
                      textStyle={{
                        color: Colors.white,
                        fontSize: Metrics.unitFontSize * 20,
                      }}
                      onPress={()=>{}}
                    />
                    <View style={styles.orrow}>
                      <View style={styles.lineView}/>
                      <Text style={styles.ortext}>OR</Text>
                      <View style={styles.lineView}/>
                    </View>
                    <FullButton
                      text='Log in'
                      style={{
                        backgroundColor: Colors.snow,
                        alignItems: 'center',
                        borderRadius: 3,
                        height: Metrics.unitMargin * 10,
                        marginTop: Metrics.unitMargin*5,
                        marginHorizontal: Metrics.unitMargin*5,
                        borderWidth: 0.5,
                        borderColor: Colors.navy
                      }}
                      textStyle={{
                        color: Colors.navy,
                        fontSize: Metrics.unitFontSize * 20
                      }}
                      onPress={this.handleLogin}
                    />
                    <View style={styles.policyView}>
                      <View style={styles.circleView}>
                       <Text style={styles.itext}>i</Text>
                      </View>
                      <Text style={styles.policyText}>Terms of Service & Privacy Policy</Text>
                      <Image source={Images.Arrow} style={styles.arrow}/>
                    </View>
                    <View style={styles.policyView1}>
                      <View style={styles.circleView}>
                       <Text style={styles.itext}>i</Text>
                      </View>
                      <Text style={styles.policyText}>Contact Suppoert</Text>
                      <Image source={Images.Arrow} style={styles.arrow}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
