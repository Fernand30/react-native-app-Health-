import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity,Switch } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'
import Modal from "react-native-modal";

import styles from './Styles/CheckoutScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state=({
      visible: false,
      category: true
    })
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  completeCheck(){
    const CompleteCheckScreen = NavigationActions.navigate({
      routeName: "CompleteCheckStack",
      params: {}
    });
    this.props.navigation.dispatch(CompleteCheckScreen);
  }
  

  render () {
    return (
    <SafeAreaView style={styles.contentStyle}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.searchView}>
            <TouchableOpacity style={styles.smalRowView} onPress={this.goCancel.bind(this)}>
              <Image source={Images.BackArrow} style={styles.backArrow}/>
              <Text>Back</Text>
            </TouchableOpacity>
            <Text>Checkout</Text>
            <View style={styles.smalRowView}>
              
            </View>
          </View>
       
         <ScrollView> 
          <View>
            <Image source={Images.renderImage2} style={styles.renderImage1}/>
            
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          
          <View style={styles.grayView1}/>
          <View style={styles.descriptionView}>
            <Text>Program Add-Ons</Text>
          </View>
          <View style={styles.rowView3}>
            <Switch/>
            <Text style={styles.smallText}>Program totally feature 1: sldfdjaf sa fas</Text>
            <Text style={styles.greenText}>$129</Text>
          </View>
          <View style={styles.rowView3}>
            <Switch/>
            <Text style={styles.smallText}>Program totally feature 1: sldfdjaf sa fas</Text>
            <Text style={styles.greenText}>$129</Text>
          </View>
          <View style={styles.grayView1}/>
          <View style={styles.descriptionView}>
            <Text>Order Summary</Text>
          </View>
          <View style={styles.rowView3}>
            <Text style={styles.smallText}>Program Price</Text>
            <Text style={styles.greenText}>$225.00</Text>
          </View>
          <View style={styles.rowView3}>
            <Text style={styles.smallText}>Processing fee</Text>
            <Text style={styles.greenText}>$0.50</Text>
          </View>
          <View style={styles.rowView3}>
            <Text style={styles.smallText}>Additional 1 hour of Facetime</Text>
            <Text style={styles.greenText}>$120.00</Text>
          </View>

          <View style={styles.subtotalView}>
            <Text style={styles.smallText}>Subtotal</Text>
            <Text style={styles.greenText}>$225.50</Text>
          </View>
          <TouchableOpacity onPress= {this.completeCheck.bind(this)} style={styles.joinbutton}>
            <Text style={styles.whiteText}>Complete Checkout - $225.50</Text>
          </TouchableOpacity>
        </ScrollView>  
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
