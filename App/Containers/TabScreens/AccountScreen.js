import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native'
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
import styles from './Styles/AccountScreenStyle'

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

  createAccount(){
    const CreateAccountStack = NavigationActions.navigate({
      routeName: "CreateAccountStack",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountStack);
  }

  mysession(){
    const mysession = NavigationActions.navigate({
      routeName: "MySessionScreen",
      params: {}
    });
    this.props.navigation.dispatch(mysession);
  }

  myprogram(){
    const myprogram = NavigationActions.navigate({
      routeName: "MyProgramScreen",
      params: {}
    });
    this.props.navigation.dispatch(myprogram);
  }

  setting(){
    const setting = NavigationActions.navigate({
      routeName: "AccountSettingScreen",
      params: {}
    });
    this.props.navigation.dispatch(setting);
  }

  client(){
    const client = NavigationActions.navigate({
      routeName: "AccountClientScreen",
      params: {}
    });
    this.props.navigation.dispatch(client);
  }

  coach(){
    const coach = NavigationActions.navigate({
      routeName: "AccountCoachScreen",
      params: {}
    });
    this.props.navigation.dispatch(coach);
  }

  sessionsettings(){
    const sessionsettings = NavigationActions.navigate({
      routeName: "SessionSettingScreen",
      params: {}
    });
    this.props.navigation.dispatch(sessionsettings);
  }

  billingdetail(){
    const billingdetail = NavigationActions.navigate({
      routeName: "BillingDetailScreen",
      params: {}
    });
    this.props.navigation.dispatch(billingdetail);
  }

  transactions(){
    const transactions = NavigationActions.navigate({
      routeName: "TransactionsScreen",
      params: {}
    });
    this.props.navigation.dispatch(transactions);
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.titleText}>My Account</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity style={styles.backArrowButton}>
                <Image source={Images.menu} style={styles.backArrow}/>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={Images.chaudt} style={styles.account}/>
          <Text style={styles.welcome}>@chaudt15</Text>
          <View style={styles.tokenView}>
            <Image source={Images.Token} style={styles.token}/>
            <Text style={styles.tokenText}>1200 EGG Tokens</Text>
          </View>
          
          <TouchableOpacity onPress={this.setting.bind(this)} style={styles.policyView}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Settings</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <View style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Inbox</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </View>
          <TouchableOpacity  onPress={this.myprogram.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>My Programs</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.mysession.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>My Settings</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.client.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Edit Profile</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.coach.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Billing Information</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sessionsettings.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Terms of Service & Privacy Policy</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.billingdetail.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Contact Suppoert</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
          <View style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Log Out</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </View>
          <TouchableOpacity onPress={this.transactions.bind(this)} style={styles.policyView1}>
            <View style={styles.circleView}>
             <Text style={styles.itext}>i</Text>
            </View>
            <Text style={styles.policyText}>Transactions</Text>
            <Image source={Images.Arrow} style={styles.arrow}/>
          </TouchableOpacity>
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
