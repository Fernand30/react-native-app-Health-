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
import styles from './Styles/ProgramReviewScreenStyle'
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
              <Text style={styles.titleText}>Program Review</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <Text style={styles.text1}>Congratulations on completing your program!</Text>
            <Image source={Images.programreview} style={styles.review}/>
            <Text style={styles.text2}>Please take a few monents to rate your experience.</Text>
            <View style={styles.reviewView}>
              <View style={styles.eachView}>
                <Text style={styles.text3}>Coach responsiveness</Text>
                <Text style={styles.text4}>Was your coach able to respond in a prompt manner?</Text>
                <Rating
                  rating={3}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                  style={{alignSelf:'center'}}
                  iconSelected={Images.yellowstar}
                  iconUnselected={Images.graystar}
                  />
              </View>
              <View style={styles.eachView}>
                <Text style={styles.text3}>Coach effectiveness</Text>
                <Text style={styles.text4}>Di your coach answer all of your questionss and help you with your program?</Text>
                <Rating
                  rating={0}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                  style={{alignSelf:'center'}}
                  iconSelected={Images.yellowstar}
                  iconUnselected={Images.graystar}
                  />
              </View>
              <View style={styles.eachView}>
                <Text style={styles.text3}>Overall Programm rating</Text>
                <Text style={styles.text4}>Did you get the results your were looking for from the progarm?</Text>
                <Rating
                  rating={0}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                  style={{alignSelf:'center'}}
                  iconSelected={Images.yellowstar}
                  iconUnselected={Images.graystar}
                  />
              </View>
              <View style={styles.eachView}>
                <Text style={styles.text3}>Overall Crogram rating</Text>
                <Text style={styles.text4}>Briefly describe your experience with the program?</Text>
                <Rating
                  rating={0}
                  max={5}
                  iconWidth={20}
                  iconHeight={20}
                  style={{alignSelf:'center'}}
                  iconSelected={Images.yellowstar}
                  iconUnselected={Images.graystar}
                  />
              </View>
              <Text style={[styles.text2,{marginTop:10}]}>Briefly describe your experience with the program</Text>
              <TextInput multiline placeholder='Bescribe your experience here...' style={styles.textinput}/>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit Review</Text>
              </TouchableOpacity>
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
