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
import styles from './Styles/SessionDashboardScreenStyle'
class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  programinstroduction(){
    const programinstroduction = NavigationActions.navigate({
      routeName: "ProgramIntroductionScreen",
      params: {}
    });
    this.props.navigation.dispatch(programinstroduction);
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
              <Text style={styles.titleText}>Session Dashboard</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <View style={styles.coachView}>
              <View sytyle={{flex:1, alignItems:'center'}}>
                <Image source={Images.chaudt} style={styles.image1}/>
                <Text style={styles.text1}>Your Coach</Text>
                <Text style={styles.text2}>Michael Creation</Text>
              </View>
              <View sytyle={{flex:1, alignItems:'center'}}>
                <Image source={Images.timer} style={styles.image1}/>
                <Text style={styles.text1}>Coach Local Time</Text>
                <Text style={styles.text2}>12:31 PM</Text>
              </View>
              <View sytyle={{flex:1, alignItems:'center'}}>
                <Image source={Images.calendar} style={styles.image1}/>
                <Text style={styles.text1}>Days Remaining</Text>
                <Text style={styles.text2}>30 Days</Text>
              </View>
            </View>
            <View style={styles.flipView}>
              <TouchableOpacity onPress={this.programinstroduction.bind(this)}>
                <Image source={Images.programintro} style={styles.image2}/>
                <Text style={styles.text1}>Program Intro</Text>
              </TouchableOpacity>
              <View>
                <Image source={Images.coachchat} style={styles.image2}/>
                <Text style={styles.text1}>Coach Chat</Text>
              </View>
              <View>
                <Image source={Images.filelocker} style={styles.image2}/>
                <Text style={styles.text1}>File Locker</Text>
              </View>
            </View>
            <View style={styles.flipView}>
              <View>
                <Image source={Images.sessionsettings} style={styles.image2}/>
                <Text style={styles.text1}>Session Settings</Text>
              </View>
              <View>
                <Image source={Images.programreview} style={styles.image2}/>
                <Text style={styles.text1}>Program Review</Text>
              </View>
              <View style={styles.image2}>
               
              </View>
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
