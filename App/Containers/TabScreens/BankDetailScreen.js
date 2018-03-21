import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,FlatList, TextInput, ScrollView,Switch} from 'react-native'
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
import styles from './Styles/BankDetailScreenStyle'


class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
    this.state=({
      value:true
    })
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  billingdetail(){
    const billingdetail = NavigationActions.navigate({
      routeName: "BankDetailScreen",
      params: {}
    });
    this.props.navigation.dispatch(billingdetail);
  }

  render () {
    
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={()=>this.goCancel()}>
                <Image source={Images.BackArrow} style={styles.backArrow}/>
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.titleText}>Bank Account Details</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <Image source={Images.bank} style={styles.bank}/>
            <Text style={styles.diposit}>Set Up Direct Deposit Method</Text>
            <Text style={styles.explain}>Using direct deposit allows you to receive your earnings from{'\n'}
                                        Fry Egg directly to your personal bank account.{'\n'} 
                                        Simply add your routing number and your account number to your{'\n'}
                                         account in the fields below and save the settings.
            </Text>
            <View style={styles.itemView}>
              <Text style={styles.item}>ROUTING NUMBER</Text>
              <TextInput placeholder="Enter account number" style={styles.textinput} />
            </View>
            <View style={styles.itemView1}>
              <Text style={styles.item}>ACCOUNT NUMBER</Text>
              <TextInput placeholder="Enter account number" style={styles.textinput} />
            </View>
            <View style={styles.itemView2}>
              <Text style={styles.category}>Default Payment Method</Text>
              <Switch value = {this.state.value} onValueChange={(value)=>{this.setState({value:value})}} style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}/>
            </View>
            <Text style={styles.explain1}>Make this your default payment method that Fry Egg will use to dispurse your funds.
            </Text>                           
            <TouchableOpacity style={[styles.button,{backgroundColor: '#12C652'}]}>
              <Text style={styles.buttonText}>Update Payment Method</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor: '#EF4B4B'}]}>
              <Text style={styles.buttonText}>Delete Payment Method</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
