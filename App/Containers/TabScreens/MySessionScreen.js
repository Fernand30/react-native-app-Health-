import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,FlatList} from 'react-native'
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
import styles from './Styles/MySessionScreenStyle'

const data = [
  {image: Images.renderImage2, account: Images.chaudt, name: 'Michael Creation\nYour client', day: '30'},
  {image: Images.renderImage2, account: Images.chaudt, name: 'Michael Creation\nYour client', day: '30'},
  {image: Images.renderImage2, account: Images.chaudt, name: 'Michael Creation\nYour client', day: '30'},
  {image: Images.renderImage2, account: Images.chaudt, name: 'Michael Creation\nYour client', day: '30'},
  {image: Images.renderImage2, account: Images.chaudt, name: 'Michael Creation\nYour client', day: '30'},
]

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
      <View style={styles.renderView}>
        <Image source={item.image} style={styles.image}/>
        <View style={styles.explain}>
          <Text style={styles.text}>Julian Anderson’s 30 Day Ultimate Spartan Shredder For{'\n'}
              Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.smallRowView}>
              <Image source={item.account} style={styles.chaudt}/>
              <Text style={styles.text1}>{item.name}</Text>
            </View>
            <View style={styles.dayView}>
              <Text style={styles.text}>Days Remaining: </Text>
              <Text style={styles.greenText}>{item.day}</Text>
            </View>
          </View>
        </View>
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
              <Text style={styles.titleText}>My Account</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
            <View style={styles.sessionView}>
              <View style={styles.headerLeftView}>
                
              </View>
              <View style={styles.headerCenterView}>
                <Text style={styles.titleText}>Enrolled Sessions</Text>
              </View>
              <View style={styles.headerRightView}>
                <TouchableOpacity>
                  <Image source={Images.dropdown} style={styles.dropdown}/>
                </TouchableOpacity>
              </View>
            </View>
           <FlatList
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
