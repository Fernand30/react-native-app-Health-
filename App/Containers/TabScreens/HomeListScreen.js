import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import Modal from "react-native-modal";

import styles from './Styles/HomeListScreenStyle'

class LoginScreen extends Component {

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

  goModal(){
    this.setState({
      visible: true
    })
  }

  render () {
    return (
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              
            </View>
            <View style={styles.headerCenterView}>
              <Image source={Images.Path1} style={styles.Path1}/>
              <Text style={styles.titleText}>Health App</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <View style={styles.searchView}>
            <View style={styles.inputView}>
              <Image source={Images.Subtraction51} style={styles.search}/>
              <Input placeholder={'Search for programs or coaches'}
                     style={styles.inputStyle}
                     textAlign={'left'}
                     fontSize={Metrics.unitFontSize*13}
                     placeholderTextColor={Colors.coal}    
                     returnKeyType='done'                
                     autoCapitalize='none'
                     autoCorrect={false}                
                     underlineColorAndroid='transparent'
                     onSubmitEditing={() => this.handleLogin}
              />
            </View>
            <Image source={Images.Path474} style={styles.backArrow}/>
          </View>
      <ScrollView>
          <TouchableOpacity onPress={this.goModal.bind(this)}>
            <Image source={Images.Group31} style={styles.group31}/>
          </TouchableOpacity>
          <View style={styles.rowView}>
            <View style={styles.smalRowView}>
              <Image source={Images.ddff} style={styles.ddff}/>
              <Text style={styles.text}>Hot Programs</Text>
            </View>
            <View style={styles.barView}/>
            <View style={styles.smalRowView}>
              <Image source={Images.Path476} style={styles.Path476}/>
              <Text style={styles.text}>featured Programs</Text>
            </View>
            <View style={styles.barView}/>
            <View style={styles.smalRowView}>
              <Image source={Images.Group34} style={styles.Group34}/>
              <Text style={styles.text}>new Programs</Text>
            </View>
          </View>
          <View>
            <Image source={Images.Group56} style={styles.group31}/>
            <View style={styles.absoluteleft}>
              <Image source={Images.Path511} style={styles.Path511}/>
              <Text style={{fontSize: Metrics.unitFontSize*14}}>10</Text>
            </View>
            <View style={styles.absoluteright}>
              <Image source={Images.Path510} style={styles.Path510}/>
            </View>
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.yellowRowView}>
              <Image source={Images.Path503} style={styles.Path503}/>
              <Text style={styles.text}>Build{'\n'}Muscie</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Path486} style={styles.Path486}/>
              <Text style={styles.text}>Increase{'\n'}Focus</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Path487} style={styles.Path487}/>
              <Text style={styles.text}>Boast{'\n'}TestOsterOne</Text>
            </View>
          </View>
          <Text style={styles.smallText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For Sports andsdf sdffas{'\n'}Recreation is and amazing program that can get you the results that sdfs dfsdf</Text>
          <View>
            <Image source={Images.Group56} style={styles.group31}/>
            <View style={styles.absoluteleft}>
              <Image source={Images.Path511} style={styles.Path511}/>
              <Text style={{fontSize: Metrics.unitFontSize*14}}>10</Text>
            </View>
            <View style={styles.absoluteright}>
              <Image source={Images.Path510} style={styles.Path510}/>
            </View>
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.yellowRowView}>
              <Image source={Images.Path503} style={styles.Path503}/>
              <Text style={styles.text}>Build{'\n'}Muscie</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Path486} style={styles.Path486}/>
              <Text style={styles.text}>Increase{'\n'}Focus</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Path487} style={styles.Path487}/>
              <Text style={styles.text}>Boast{'\n'}TestOsterOne</Text>
            </View>
          </View>
          <Text style={styles.smallText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For Sports andsdf sdffas{'\n'}Recreation is and amazing program that can get you the results that sdfs dfsdf</Text>
        </ScrollView>  
        </View>
        <Modal isVisible={this.state.visible}>
          <View style={styles.modalView}>
            <View style={styles.skip}>
              <TouchableOpacity onPress={()=>this.setState({visible:false})}>
                <Text style={styles.text}>SKIP</Text>
              </TouchableOpacity>
              <View style={styles.carousel}>
                <View style={styles.commaView}/>
                <View style={styles.commaView1}/>
                <View style={styles.commaView1}/>
              </View>
              <Text style={styles.redtext}>NEXT</Text>
            </View>
          </View>
        </Modal>
      </Container>
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
