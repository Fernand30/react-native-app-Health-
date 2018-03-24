import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,FlatList, TextInput, ScrollView} from 'react-native'
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
import styles from './Styles/BillingDetailScreenStyle'


class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
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

  support(){
    const support = NavigationActions.navigate({
      routeName: "SupportScreen",
      params: {}
    });
    this.props.navigation.dispatch(support);
  }

  filelocker(){
    const filelocker = NavigationActions.navigate({
      routeName: "FileLockerScreen",
      params: {}
    });
    this.props.navigation.dispatch(filelocker);
  }

  becomecoach(){
    const becomecoach = NavigationActions.navigate({
      routeName: "BecomeCoachScreen",
      params: {}
    });
    this.props.navigation.dispatch(becomecoach);
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
              <Text style={styles.titleText}>Billing Details</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
            <View style={styles.categoryView}>
              <Text style={styles.category}>COACH EARNINGS</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Total Unpaid Earnings</Text>
              <Text style={styles.greenText}>$0.14</Text>
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is the amount that you will be paid on the next disbursement date,{'\n'}
                                            less disputed earnings.</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Total EGG Tokens</Text>
              <View style={styles.rowView}>
                <Image source={Images.Token} style={styles.Token}/>
                <Text style={styles.item}>1200</Text>
              </View>
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is the amount that is being held until the current session are completed.</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Pending Earnings</Text>              
              <Text style={styles.item}>$102.39</Text>             
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is the amount that is being held until the current session are completed.</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Disputed Earnings</Text>              
              <Text style={styles.reditem}>$78.93</Text>             
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is the amount of earnings currently held due to a pending dispute from{'\n'}
                                          a client.
              </Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Next Disbursement Date</Text>              
              <Text style={styles.item}>12/13/2017</Text>             
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is the amount of earnings currently held due to a pending dispute from{'\n'}
                                          a client.
              </Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.category}>PREFERRED PAYMENT METHOD</Text>
            </View>
            <TouchableOpacity onPress={this.billingdetail.bind(this)} style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.bank} style={styles.bank}/>
                </View>
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>Bank Wire Transfer -</Text> 
                     <Text style={styles.greenitem}>Default</Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take between 3-6 business days{'\n'}
                                                to complete
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.support.bind(this)}  style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.paypal} style={styles.paypal}/>
                </View>
                
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>PayPal Payment</Text> 
                     <Text style={styles.greenitem}></Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take 3-6 business days to complete.
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.filelocker.bind(this)}   style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.personal} style={styles.personal}/>
                </View>
                
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>Personal Check</Text> 
                     <Text style={styles.greenitem}></Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take between 3-6 business days {'\n'}
                                               to complete
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.becomecoach.bind(this)} style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.payment} style={styles.payment}/>
                </View>
                
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>Bitcoin Payment</Text> 
                     <Text style={styles.greenitem}></Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take 3-6 business days to complete.
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <View style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.litcoin} style={styles.litcoin}/>
                </View>
                
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>Litecoin PAYMENT</Text> 
                     <Text style={styles.greenitem}></Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take 3-6 business days to complete.
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </View>
            <View style={styles.itemView1}>
              <View style={styles.rowView}>
                <View style={styles.imageView}>
                  <Image source={Images.etherum} style={styles.etherum}/>
                </View>
                
                <View>
                  <View style={styles.rowView}>
                     <Text style={styles.item}>Ethereum Payment</Text> 
                     <Text style={styles.greenitem}></Text>         
                  </View>
                  <Text style={styles.explain}>Bank wires typically take 3-6 business days to complete.
                  </Text>                              
                </View>
              </View> 
              <Image source={Images.Arrow} style={styles.arrow}/>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.category}>SPENDING BALANCE</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>Your Spending Balance</Text>
              <Text style={styles.greenText}>$0.14</Text>
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>This is your account credit to spend on programs and addons.</Text>
            </View>

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
