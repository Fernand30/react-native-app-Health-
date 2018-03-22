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
import styles from './Styles/TransactionsScreenStyle'

const data= [{title:'PAYMENT HISTORY'},{title:'REFUND HISTORY'},{title:'SALES HISTORY'},{title:'ORDERS HISTORY'},{title:'REFUND HISTORY'}]

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

  _renderItem({item}){
    return(
        <View>
          <View style={styles.categoryView}>
            <Text style={styles.category}>{item.title}</Text>
          </View>
          <View style={styles.tableView}>
            <Text style={styles.date}>Payment Date</Text>
            <Text style={styles.amount}>Amount</Text>
            <Text style={styles.method}>Payment Method</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.datevalue}>12/13/2017</Text>
            <Text style={styles.amountvalue}>$506.02</Text>
            <Text style={styles.methodvalue}>ACH Direct Deposit 45***455…</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.datevalue}>12/13/2017</Text>
            <Text style={styles.amountvalue}>$506.02</Text>
            <Text style={styles.methodvalue}>ACH Direct Deposit 45***455…</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.datevalue}>12/13/2017</Text>
            <Text style={styles.amountvalue}>$506.02</Text>
            <Text style={styles.methodvalue}>ACH Direct Deposit 45***455…</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.datevalue}>12/13/2017</Text>
            <Text style={styles.amountvalue}>$506.02</Text>
            <Text style={styles.methodvalue}>ACH Direct Deposit 45***455…</Text>
          </View>
          <Text style={styles.explain}>A record of all past payments to you including date sent, payment method,{'\n'} 
                                       and payment amount
          </Text>                             
      </View>
      )
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
              <Text style={styles.titleText}>Transactions</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
          
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={this._renderItem}
            />
            
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
