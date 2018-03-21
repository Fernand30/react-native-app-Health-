import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'

import styles from './Styles/SearchScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
    this.state=({
      visible: false
    })
  }

  Resetpassword = () => {
    const ResetPasswordScreen = NavigationActions.navigate({
      routeName: "ResetPasswordScreen",
      params: {}
    });
    this.props.navigation.dispatch(ResetPasswordScreen);
  }

  CreateAccount = () => {
    const CreateAccountScreen = NavigationActions.navigate({
      routeName: "CreateAccountScreen",
      params: {}
    });
    this.props.navigation.dispatch(CreateAccountScreen);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  typingSearch(){
    
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.searchView}>
            <TouchableOpacity onPress={this.goCancel.bind(this)}>
              <Image source={Images.BackArrow} style={styles.backArrow}/>
            </TouchableOpacity>
            <View style={styles.inputView}>
              <Image source={Images.search} style={styles.search}/>
              <InputText placeholder={'Search for programs or coaches'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*13}
                     onChangeText = {()=>{}}
              />
            </View>
            <TouchableOpacity onPress={this.typingSearch.bind(this)}>
              <Image source={Images.menu} style={styles.menu}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchTitleView}>
            <Text style= {styles.titleText}>Program Result</Text>
          </View>
          <View style={styles.searchListView}>
            <Text style= {styles.titleText}>Have a fun time working out anf neve..</Text>
            <Image source={Images.search} style={styles.search}/>
          </View>
          <View style={styles.searchListView}>
            <Text style= {styles.titleText}>Never work out agin</Text>
            <Image source={Images.search} style={styles.search}/>
          </View>
          <View style={styles.searchTitleView}>
            <Text style= {styles.titleText}>Coach Result</Text>
          </View>
          <View style={styles.searchListView}>
            <Text style= {styles.titleText}>FabulousFit24</Text>
            <Image source={Images.search} style={styles.search}/>
          </View>
          <View style={styles.searchListView}>
            <Text style= {styles.titleText}>HulkHogoan</Text>
            <Image source={Images.search} style={styles.search}/>
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
