import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,ScrollView, TextInput, FlatList} from 'react-native'
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
import styles from './Styles/ProgramInstroductionScreenStyle'
const data=[{id:'1', image:Images.renderImage2},{id:'2', image:Images.renderImage2},{id:'3', image:Images.renderImage2},{id:'4', image:Images.renderImage1}]
class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }
  _renderItem({item}){
    return(
      <View style={styles.renderImage}>
        <Image source={item.image} style={styles.image}/>
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
              <Text style={styles.titleText}>Program Introduction</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={styles.mainView}>
            <Text style={styles.text1}>Welcome to my brand new program! This is the parogram introduction</Text>
            <Text style={styles.text2}>This is a description of the file and further xplains 
                                        the meaning of the file. Also, please sd fsdf as fas
                                        sdfsd fasd fads ff dfs dfsfd d df dfd df dfd dsf dsfd 
                                        asdfasd fasdklfjasd;klfjlsa;dkjf;lasdjf;lssfd asd fds f
                                        sdafasd fsda fsad f sadf asdf asd fas dfas fs dff
                                        asdf dsf dsf ds f sf dsf sa df asdf ds fd dfd/.
                                        This is a description of the file and further xplains 
                                        the meaning of the file. Also, please sd fsdf as fas
                                        sdfsd fasd fads ff dfs dfsfd d df dfd df dfd dsf dsfd 
                                        asdfasd fasdklfjasd;klfjlsa;dkjf;lasdjf;lssfd asd fds f
                                        sdafasd fsda fsad f sadf asdf asd fas dfas fs dff
                                        asdf dsf dsf ds f sf dsf sa df asdf ds fd dfd/
            </Text>
            <Text style={styles.label}>Intro Files</Text>
            <View style={styles.introView}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={this._renderItem}
              />
            </View>
            <Text style={styles.label}>Intro Questions</Text>
            <View style={styles.introquestion}/>
            <Text style={styles.label}>Do you have medical conditions and if so what are they?</Text>
            <TextInput multiline placeholder='Yes, I do' style={styles.textinput1}/>
            <Text style={styles.label}>Explain your home life</Text>
            <TextInput multiline placeholder='Enter your answer here...' style={styles.textinput1}/>
            <Text style={styles.label}>What is your height in inches</Text>
            <TextInput placeholder='Enter your answer here...' style={styles.textinput2}/>
            <Text style={styles.label}>Are you diabetic?</Text>
            <View style={styles.rowView}>
              <TextInput placeholder='Enter your answer here...' style={styles.textinput3}/>
              <View style={styles.checkView}>
                <Image source={Images.dropshape} style={styles.dropshape}/>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Complete introduction</Text>
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
