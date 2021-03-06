import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import TabNavigator from 'react-native-tab-navigator';
import styles from './Styles/TabNavigatorScreenStyle'

import TabHome from './TabHome.js';
import TabAccount from './TabAccount.js';
import TabExplorer from './TabExplorer.js';

class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state=({
      selectedTab: 'home'
    })
  }

  componentDidMount() {
    that  = this
    BackHandler.addEventListener('hardwareBackPress', function() {
        that.goback();
        return true;
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  goback = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render () {
    return (
        <SafeAreaView style={ApplicationStyles.screen.yellowContent}>
          <TabNavigator
            tabBarStyle={styles.tabbar}
          >
            <TabNavigator.Item
                renderIcon={() => <Image source={Images.Home} style={styles.tabicon}/>}
                renderSelectedIcon={() => <Image source={Images.SelectedHome} style={styles.tabicon}/>}
                selectedTitleStyle={{color:'#e33855'}}
                selected={this.state.selectedTab === 'home'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'home',
                  });
                }}
                title='Home'
                titleStyle={{fontSize: 9,}}>
                <TabHome navigationa = {this.props.navigation}/>
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.search} style={styles.tabicon}/>}
                renderSelectedIcon={() => <Image source={Images.selectedSearch} style={styles.tabicon}/>}
                selectedTitleStyle={{color:'#e33855'}}
                selected={this.state.selectedTab === 'explore'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'explore',
                  });
                }}
                title='Explore'
                titleStyle={{fontSize: 9,}}>
                <TabExplorer/>
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.Alert} style={styles.tabicon}/>}
                renderSelectedIcon={() => <Image source={Images.Alert} style={styles.tabicon}/>}
                selectedTitleStyle={{color:'#e33855'}}
                selected={this.state.selectedTab === 'alert'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'alert',
                  });
                }}
                title='Alert'
                titleStyle={{fontSize: 9,}}>
                <View style={{flex: 1,backgroundColor:Colors.background,alignItems:'center',justifyContent:'center'}}>
                  <Text>Alert</Text>
                </View>
            </TabNavigator.Item>

            <TabNavigator.Item
                renderIcon={() => <Image source={Images.Contacts} style={styles.tabicon}/>}
                renderSelectedIcon={() => <Image source={Images.SelectedContacts} style={styles.tabicon}/>}
                selectedTitleStyle={{color:'#e33855'}}
                selected={this.state.selectedTab === 'account'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'account',
                  });
                }}
                title='Account'
                titleStyle={{fontSize: 9,}}>
                <TabAccount />
            </TabNavigator.Item>
          </TabNavigator>
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
