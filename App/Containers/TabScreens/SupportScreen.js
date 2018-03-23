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
import styles from './Styles/SupportScreenStyle'


class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
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
              <Text style={styles.titleText}>Support</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Open Support Ticket</Text>
            </TouchableOpacity>
            <View style={styles.categoryView}>
              <Text style={styles.category}>OPEN TICKETS</Text>
            </View>
            <View style={styles.itemView1}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>Date Opened</Text>
                <Text style={styles.item}>Issue</Text>
              </View>  
            </View>
            <View style={styles.itemView}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>12/13/2017</Text>
                <Text style={styles.item}>AKisdfasd sdf</Text>
              </View>  
              <Text style={styles.greenText}>View Ticket</Text>
            </View>
            <View style={styles.itemView}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>12/13/2017</Text>
                <Text style={styles.item}>AKisdfasd sdf</Text>
              </View>  
              <Text style={styles.greenText}>View Ticket</Text>
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>A record of all past payments to you including date sent, payment method,{'\n'}
                                            and payment amount</Text>
            </View>
            <View style={styles.categoryView}>
              <Text style={styles.category}>CLOSE TICKETS</Text>
            </View>
            <View style={styles.itemView1}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>Date Opened</Text>
                <Text style={styles.item}>Issue</Text>
              </View>  
            </View>
            <View style={styles.itemView}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>12/13/2017</Text>
                <Text style={styles.item}>AKisdfasd sdf</Text>
              </View>  
              <Text style={styles.greenText}>View Ticket</Text>
            </View>
            <View style={styles.itemView}>
              <View style={styles.smallRow}>
                <Text style={styles.item1}>12/13/2017</Text>
                <Text style={styles.item}>AKisdfasd sdf</Text>
              </View>  
              <Text style={styles.greenText}>View Ticket</Text>
            </View>
            <View style={styles.explainView}>
              <Text style={styles.explain}>A record of all past payments to you including date sent, payment method,{'\n'}
                                            and payment amount</Text>
            </View>

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
