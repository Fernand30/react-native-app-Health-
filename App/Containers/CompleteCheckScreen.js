import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity,Switch,BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'

import styles from './Styles/CompleteCheckScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state=({
      visible: false,
      category: true
    })
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

  completeCheck(){
    const CheckoutScreen = NavigationActions.navigate({
      routeName: "CheckoutStack",
      params: {}
    });
    this.props.navigation.dispatch(CheckoutScreen);
  }
  

  render () {
    return (
    <SafeAreaView style={styles.contentStyle}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.searchView}>
            <View style={styles.smalRowView}>
            </View>
            <Text>Checkout Complete</Text>
            <View style={styles.smalRowView}>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.mainView}>
              <View>
                <Image source={Images.renderImage2} style={styles.image}/>
                <View style={styles.greenCircle}>
                  <Image source={Images.whitecheck}/>
                </View>
              </View>
              <Text style={styles.commonText}>Succefully enrolled in:</Text>
              <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan{'\n'}Shredder For Sports and Recreation</Text>
              <Text style={styles.smallText}>A new session wa created for you and your coach,{'\n'}and is available for you in your "Enrolled Sessions" Page{'\n'}found in your account tab</Text>
              <View style={styles.rowView1}>
                <View style={{alignItems:'center'}}>
                  <Image source={Images.Contacts} style={styles.contact}/>
                  <Text style={styles.smallText}>Account</Text>
                </View>
                <Image source={Images.greenarrow} style={styles.greenarrow}/>
                <View style={{alignItems:'center'}}>
                  <Image source={Images.Contacts}  style={styles.contact}/>
                  <Text style={styles.smallText}>Account</Text>
                </View>
                <Image source={Images.greenarrow}  style={styles.greenarrow}/>
                <View style={{alignItems:'center'}}>
                  <Image source={Images.Contacts} style={styles.contact}/>
                  <Text style={styles.smallText}>Account</Text>
                </View>
              </View>
              <Text style={styles.smallText}>You can now begin you session by completing the{'\n'}program introduction. You can proceed to your programand is available for you in your "Enrolled Sessions" Page{'\n'}found in your account tab</Text>
              <TouchableOpacity style={styles.beginbutton}>
                <Text style={styles.beginText}>Begin Session Intro</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowView}>
              <View style={styles.lineView}/>
              <Text>OR</Text>
              <View style={styles.lineView}/>
            </View>
            <TouchableOpacity onPress={this.goCancel.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Return Home</Text>
            </TouchableOpacity>
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
