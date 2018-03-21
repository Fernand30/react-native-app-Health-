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
import styles from './Styles/SessionSettingScreenStyle'

const data = [
  {image: Images.session1,  title: 'View Add-Ons', text: 'See which Add-Ons are active in this session'},
  {image: Images.session2,  title: 'Open Dispute', text: 'Create a support ticket regarding an issue in this Session'},
  {image: Images.session3,  title: 'Leave Session', text: 'Leave and end this Session. Your messages and files will still be saved'},
  {image: Images.session4,  title: 'Refund Client', text: 'Give a full or partial refund to your client'},
  {image: Images.session5,  title: 'Adjust Session Length', text: 'Extend duration of this session'},
  {image: Images.session6,  title: 'Pause Session', text: 'Purchase additional Add-Ons for this session.'},
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
      <TouchableOpacity style={styles.renderView}>
        <Image source={item.image} style={styles.image}/>
        <View style={styles.explain}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text1}>{item.text}</Text>
        </View>
      </TouchableOpacity>
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
              <Text style={styles.titleText}>Session Settings</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
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
