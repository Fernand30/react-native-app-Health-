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

  typingSearch(){
    const TypingSearchScreen = NavigationActions.navigate({
      routeName: "TypingSearchScreen",
      params: {}
    });
    this.props.navigation.dispatch(TypingSearchScreen);
  }

  Explorer(){
    const Explorer = NavigationActions.navigate({
      routeName: "ExplorerScreen",
      params: {}
    });
    this.props.navigation.dispatch(Explorer);
  }

  resultSearch(){
    const ResultSearchScreen = NavigationActions.navigate({
      routeName: "ResultSearchScreen",
      params: {}
    });
    this.props.navigation.dispatch(ResultSearchScreen);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render () {
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.searchView}>
            <Image source={Images.BackArrow} style={styles.backArrow}/>
            <View style={styles.inputView}>
              <Image source={Images.search} style={styles.search}/>
              <InputText placeholder={'Search for programs or coaches'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*13}
                     onChangeText = {()=>{}}
              />
            </View>
            <TouchableOpacity onPress={this.resultSearch.bind(this)}>
              <Image source={Images.menu} style={styles.menu}/>
            </TouchableOpacity>
          </View>
          <View style={styles.searchTitleView}>
            <TouchableOpacity onPress={this.Explorer.bind(this)}>
              <Text style= {styles.titleText}>Recently searched</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.typingSearch.bind(this)}>
              <Text style= {styles.titleText}>Erase Search History</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchListView}>
            <View style={styles.rowView}>
              <Image source={Images.clock} style={styles.clock}/>
              <Text style= {styles.titleText}>Fat loss</Text>
            </View>
            <Image source={Images.search} style={styles.search}/>
          </View>
          <View style={styles.searchListView}>
            <View style={styles.rowView}>
              <Image source={Images.clock} style={styles.clock}/>
              <Text style= {styles.titleText}>Build muscle quickly and easily</Text>
            </View>
            <Image source={Images.search} style={styles.search}/>
          </View>
          <View style={styles.searchListView}>
            <View style={styles.rowView}>
              <Image source={Images.clock} style={styles.clock}/>
              <Text style= {styles.titleText}>Have a fun time working out anf neve</Text>
            </View>
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
