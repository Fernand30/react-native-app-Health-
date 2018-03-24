import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,BackHandler,FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';

import styles from './Styles/ChatScreenStyle'

class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };
    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.goback();
        return true;
    });
  }

  componentWillMount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    this.setState({
      messages: [
        {
          _id: 1,
          text: '',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.chaudt,
          },
          
          // additional custom parameters
        },
        {
          _id: 2,
          text: 'My message',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.chaudt,
          },
          
          // additional custom parameters
        },
        {
          _id: 3,
          text: 'My message',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: Images.chaudt,
          },
          
          // additional custom parameters
        }
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  handleBackButton() {
    return true;
  }

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.whiteContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={()=>this.goCancel()} style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={Images.BackArrow} style={styles.backArrow}/>
                
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Text style={ApplicationStyles.screen.titleText}>Coach Chat</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.action} style={styles.action}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
            <GiftedChat
              messages={this.state.messages}
              onSend={this.onSend}
              user={{
                _id: 1,
              }}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
