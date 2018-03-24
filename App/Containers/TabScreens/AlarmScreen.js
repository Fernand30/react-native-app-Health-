import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,ScrollView, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import  Rating from 'react-native-easy-rating'


// Styles
import styles from './Styles/AlarmScreenStyle'
class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
    this.state=({
      Notifications: true
    })
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  Notifications(){
    this.setState({
      Notifications: true
    })
  }

  Messages(){
    this.setState({
      Notifications: false
    })
  }

  chat(){
    const chat = NavigationActions.navigate({
      routeName: "ChatStack",
      params: {}
    });
    this.props.navigation.dispatch(chat);
  }

  render () {
    if(this.state.Notifications){
      noColor = '#E03247'
      meColor = '#CCCCCC'
      noImage = Images.bonga
      nostyle = styles.bonga
      meImage = Images.me
      mestyle = styles.me
    }else{
      noColor = '#CCCCCC'
      meColor = '#E03247'
      noImage = Images.noalarm
      nostyle = styles.noalarm
      meImage = Images.mail
      mestyle = styles.mail
    }
    notification = 
            <View>
              <View style={styles.rowView}>
                <Image source={Images.play} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView1}>
                <Image source={Images.wait} style={styles.play}/>
                <View>
                  <Text style={[styles.text,{color: '#C7C7CC'}]}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={[styles.date,{color:'#C7C7CC'}]}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.box} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.play} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.play} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.selectwait} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.box} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
              <View style={styles.rowView}>
                <Image source={Images.play} style={styles.play}/>
                <View>
                  <Text style={styles.text}>Your coach is waiting for you to finish your intro sfds</Text>
                  <Text style={styles.date}>Oct 4. 2017</Text>
                </View>
                <Image source={Images.Arrow} style={styles.arrow}/>
              </View>
            </View>
    message = 
          <View>
            <TouchableOpacity onPress={this.chat.bind(this)} style={styles.rowView}>
              <Image source={Images.chaudt} style={styles.chaudt}/>
              <View>
                <Text style={styles.conversation}>Connversation with Tristan 766</Text>
                <Text style={styles.date}>Hey james, when you get the chance, please let me kn0w…</Text>
                <Text style={styles.date}>Oct 4, 2017</Text>
              </View>
              <Image source={Images.Arrow} style={styles.arrow}/>
            </TouchableOpacity>
            <View style={styles.rowView1}>
              <Image source={Images.chaudt} style={styles.chaudt}/>
              <View>
                <Text style={styles.conversation}>Connversation with Tristan 766</Text>
                <Text style={styles.date}>Hey james, when you get the chance, please let me kn0w…</Text>
                <Text style={styles.date}>Oct 4, 2017</Text>
              </View>
              <Image source={Images.Arrow} style={styles.arrow}/>
            </View>
          </View>  
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.titleText}>Notifications</Text>
            </View>
            <View style={styles.headerRightView}>
              
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.tabView}>
              <View style={styles.eachtab1}>
                <TouchableOpacity onPress={this.Notifications.bind(this)} style={styles.tabbutton}>
                  <Image source={noImage} style={nostyle}/>
                  <Text style={[styles.tabtext,{color:noColor}]}>My Notifications</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.eachtab}>
                <TouchableOpacity onPress={this.Messages.bind(this)} style={styles.tabbutton}>
                  <Image source={meImage} style={mestyle}/>
                  <Text style={[styles.tabtext,{color: meColor}]}>My Messages</Text>
                </TouchableOpacity>
              </View>
            </View>
            {(this.state.Notifications)? notification: message}
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
