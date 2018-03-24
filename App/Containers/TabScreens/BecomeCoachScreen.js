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
import styles from './Styles/BecomeCoachScreenStyle'


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
              <Text style={styles.titleText}>Become a Coach</Text>
            </View>
            <View style={styles.headerRightView}>
              
            </View>
          </View>
          <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
            <Image source={Images.become} style={styles.become}/>
            <View style={styles.eachView}>
              <Image source={Images.arong} style={styles.arong}/>
              <Text style={styles.step}>Step 1: Design a Program</Text>
              <Text style={styles.explain}>After you are accepted as a coach, you can begin{'\n'}
                                            creating your own fitness programs to publish{'\n'}
                                             on our marketplace.
              </Text>
            </View>
            <View style={styles.eachView}>
              <Image source={Images.body} style={styles.body}/>
              <Text style={styles.step}>Step 2: Deliver Results</Text>
              <Text style={styles.explain}>After your program session with your client is{'\n'}
                                            completed, they will leave a review describing their{'\n'}
                                             results with the program.
              </Text>
            </View>
            <View style={styles.eachView}>
              <Image source={Images.paid} style={styles.paid}/>
              <Text style={styles.step}>Step 3: Get Paid</Text>
              <Text style={styles.explain}>Once both the coach and client have{'\n'}
                                            completed the program, your payment will be{'\n'}
                                             deposited immediately.
              </Text>
            </View>
            <View style={styles.bar}/>
            <Text style={styles.future}>The Future of Fitness Coaching</Text>
            <Text style={styles.explain}>Make money doing what you love while helping
                                        others to reach their fitness and health goals.
            </Text>
            <Text style={styles.explain1}>To apply, go to www.FryEgg.com/Apply</Text>
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
