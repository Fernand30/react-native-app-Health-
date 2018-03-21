import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,Switch,ScrollView} from 'react-native'
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
import styles from './Styles/AccountSettingScreenStyle'


class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
    this.state=({
      switch1: true,
      switch2: true,
      switch3: true
    })
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
              <Text style={styles.titleText}>Account Settings</Text>
            </View>
            <View style={styles.headerRightView}>
              
            </View>
          </View>
          <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
            <View style={styles.itemView}>
              <Text style={styles.item}>GENERAL</Text>
            </View>
            <View style={styles.selectView}>
              <Text style={styles.selectText}>Default Languge</Text>
              <Text style={styles.answerText}>Select your answer</Text>
              <TouchableOpacity style={styles.selectbox}>
                <Image source={Images.dropshape} style={styles.dropshape}/>
              </TouchableOpacity>
            </View>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>Choose a default language to display text in the app. English is selected as default.</Text>
            </View>
            <View style={styles.selectView}>
              <Text style={styles.selectText}>Default Languge</Text>
              <Text style={styles.answerText}>Select your answer</Text>
              <TouchableOpacity style={styles.selectbox}>
                <Image source={Images.dropshape} style={styles.dropshape}/>
              </TouchableOpacity>
            </View>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>Choose a default currency to display text in the app. USD is selected as default.</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>EMAIL PREFERENCE</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.selectText}>New Message Emails</Text>
              <Switch 
                  value={this.state.switch1} 
                  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                  onValueChange={(value) => {this.setState({switch1:value})}} />
            </View>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>When this option is turned on, you will receive an email on each new message received in your inbox</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.selectText}>New Notification Emails</Text>
              <Switch 
                  value={this.state.switch2} 
                  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                  onValueChange={(value) => {this.setState({switch2:value})}} />
            </View>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>When this option is turned on, you will receive an email on each new notification received in your inbox</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.selectText}>Fry Egg News Emails</Text>
              <Switch 
                  value={this.state.switch3} 
                  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                  onValueChange={(value) => {this.setState({switch3:value})}} />
            </View>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>When this option is turned on, you will receive an email whenever Fry Egg sends out offers or newsletters.</Text>
            </View>
            <View style={styles.itemView}>
              <Text style={styles.item}>SECRITY</Text>
            </View>
            <TouchableOpacity style={styles.rowView}>
              <Text style={styles.selectText}>Change Password</Text>
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>When this option is turned on, you will receive an email whenever Fry Egg sends out offers or newsletters.</Text>
            </View>
            <TouchableOpacity style={styles.rowView}>
              <Text style={styles.selectText}>Two Factor Authentication</Text>
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <View style={styles.chooseView}>
              <Text style={styles.choose}>When this option is turned on, you will receive an email whenever Fry Egg sends out offers or newsletters.</Text>
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
