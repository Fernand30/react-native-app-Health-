import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'

import styles from './Styles/ExplorerScreenStyle'

const data = [{pro: Images.pro2, title: 'Lose Fat', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro3, title: 'Strengthen Heart', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro4, title: 'Increase Testosterone', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro5, title: 'Build Muscle', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro2, title: 'Lose Fat', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro3, title: 'Strengthen Heart', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro4, title: 'Increase Testosterone', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro5, title: 'Build Muscle', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro2, title: 'Lose Fat', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro3, title: 'Strengthen Heart', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro4, title: 'Increase Testosterone', explain:'View all programs that include fat loss as a goal'},
              {pro: Images.pro5, title: 'Build Muscle', explain:'View all programs that include fat loss as a goal'},
             ]

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
    this.state=({
      visible: false,
      searchText: ''
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

  _renderItem({item}){
    return(
      <View style={styles.renderView}>
        <Image source={item.pro} style={styles.pro1}/>
        <View style={{flex:1, paddingLeft: 10}}>
          <Text style={styles.renderTitle}>{item.title}</Text>
          <Text style={styles.renderExplain}>{item.explain}</Text>
        </View>
        <Image source={Images.Arrow} style={styles.Arrow}/>
      </View>
      )
  }

  changeSearch(text){
    this.setState({ searchText: text})
  }

  render () {
    if(this.state.searchText==''){
      render= <View>
                <Image source={Images.pro1} style={styles.pro}/>
                <FlatList
                  data={data}
                  keyExtractor={(item, index) => index}
                  renderItem={this._renderItem}
                />
              </View>
    }else{
      render= <View>
                <Image source={Images.noresult} style={styles.noresult}/>
                <Text style={styles.noprogram}>No Programs Found Under That Search Term</Text>
                <Text style={styles.explain}>Try changing your search pharse, or adjusting the{'\n'}search filters so you can see more results.</Text>
                <View style={styles.bar}/>
                <TouchableOpacity style={styles.renderButton}>
                  <Text style={styles.searchText}>Search Coaches</Text>
                </TouchableOpacity>
              </View>
    }
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
                     onChangeText={this.changeSearch.bind(this)}
              />
            </View>
            <View />
          </View>

          {render}

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
