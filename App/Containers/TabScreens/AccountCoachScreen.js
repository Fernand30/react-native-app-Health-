import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,Switch,ScrollView,TextInput} from 'react-native'
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
import styles from './Styles/AccountCoachScreenStyle'


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
              <Text style={styles.titleText}>My Profile</Text>
            </View>
            <View style={styles.headerRightView}>
              
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <Image source={Images.chaudt} style={styles.chaudt}/>
            <Text style={styles.name}>@chaudt15</Text>
            <Text style={styles.coach}>Coach</Text>
            <TouchableOpacity style={styles.changebutton}>
              <Text style={styles.changeText}>Change Profile Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilebutton}>
              <Text style={styles.changeText}>View Public Profile</Text>
            </TouchableOpacity>
            <View style={styles.applyView}>
              <Text style={styles.text}>First Name</Text>
              <TextInput placeholder='Enter your answer here...' style={styles.textinput}/>
              <Text style={styles.text}>Last Name</Text>
              <TextInput placeholder='Enter your answer here...' style={styles.textinput}/>
              <Text style={styles.text}>Location</Text>
              <View style={styles.selectView}>
                <Text style={styles.select}>Select your answer</Text>
                <View style={styles.blueView}>
                  <Image source={Images.dropshape} style={styles.dropshape}/>
                </View>
              </View>
              <Text style={styles.text}>Timezone</Text>
              <View style={styles.selectView}>
                <Text style={styles.select}>Select your answer</Text>
                <View style={styles.blueView}>
                  <Image source={Images.dropshape} style={styles.dropshape}/>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>Profile Banner</Text>
                <View style={styles.iview}>
                  <Text style={styles.itext}>i</Text>
                </View>
              </View>
              <View style={styles.banner}>
                <TouchableOpacity style={styles.bannerbutton}>
                  <Text style={styles.bannerText}>Click to upload banner image</Text>
                  <Image source={Images.banner} style={styles.bannerimage}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>About You</Text>
              <TextInput multiline style={styles.about}/>
              <Text style={styles.text}>Spoken Languages</Text>
              <View style={styles.selectView}>
                <Text style={styles.select}>Select your answer</Text>
                <View style={styles.blueView}>
                  <Image source={Images.dropshape} style={styles.dropshape}/>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={styles.text}>Profile Media</Text>
                <View style={styles.iview}>
                  <Text style={styles.itext}>i</Text>
                </View>
              </View>
              <View style={styles.banner}>
                <TouchableOpacity style={styles.bannerbutton}>
                  <Text style={styles.bannerText}>Click to upload profile media</Text>
                  <Image source={Images.banner} style={styles.bannerimage}/>
                </TouchableOpacity>
              </View>

            </View>
            <TouchableOpacity style={styles.updatebutton}>
              <Text style={styles.changeText}>Update Profile</Text>
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
