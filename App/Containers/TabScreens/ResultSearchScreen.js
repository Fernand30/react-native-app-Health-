import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity,Switch } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
import Modal from "react-native-modal";

import styles from './Styles/ResultSearchScreenStyle'

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  constructor (props) {
    super(props)
    this.state=({
      visible: false,
      category: true
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

  categorySearch(){
    this.setState({
      visible: true,
      category: true
    })
  }

  lengthSearch(){
    this.setState({
      visible: true,
      category: false
    })
  }

  hideModal(){
    this.setState({
      visible: false
    })
  }

  render () {

    categoryView = <View style={styles.modalCatetoryView}>
                    <View style={styles.modalTitleView}>
                      <Text style={styles.text}>Reset</Text>
                      <Text style={styles.filterText}>Filter by Catetory</Text>
                      <TouchableOpacity onPress={this.hideModal.bind(this)} >
                        <Text style={styles.redText}>Done</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Build Muscie</Text>
                      <Switch value={true}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Lose Fat</Text>
                      <Switch value={true}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Increase Testosterone</Text>
                      <Switch value={true}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Reduce Stress</Text>
                      <Switch value={true}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Increase Endurance</Text>
                      <Switch value={true}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Reduce Stress</Text>
                      <Switch value={true}/>
                    </View>
                  </View>

      lengthView = <View style={styles.modalLengthView}>
                    <View style={styles.modalTitleView}>
                      <Text style={styles.text}>Reset</Text>
                      <Text style={styles.filterText}>Filter by Catetory</Text>
                      <TouchableOpacity onPress={this.hideModal.bind(this)} >
                        <Text style={styles.redText}>Done</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Any Lenght</Text>
      
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Less than 7 Days</Text>
                     
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>7 - 30 Days</Text>
                      <Image source={Images.bluecheck} style={styles.bluecheck}/>
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>30 - 90 Days</Text>
                      
                    </View>
                    <View style={styles.modalListView}>
                      <Text style={styles.filterText}>Over 90 Days</Text>
                      
                    </View>
                  </View>            

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
              />
            </View>
            <TouchableOpacity>
              <Image source={Images.menu} style={styles.menu}/>
            </TouchableOpacity>
          </View>
          <View style={styles.similarView}>
            <Text style={styles.text}>Similar Searches:</Text>
            <View style={styles.buttonRowView}>
              <TouchableOpacity style={styles.itemButton}>
                <Text style={styles.text}>Fat Loss</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemButton}>
                <Text style={styles.text}>Build Strength</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemButton}>
                <Text style={styles.text}>Fat Loss</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemButton}>
                <Text style={styles.text}>Build Strength</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filterView}>
            <TouchableOpacity onPress={this.categorySearch.bind(this)} style={styles.rowButton}>
              <Text style={styles.text}>Filter by Catetory</Text>
              <Image source={Images.dropdown} style={styles.dropdown}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.lengthSearch.bind(this)} style={styles.rowButton}>
              <Text style={styles.text}>Filter by Length</Text>
              <Image source={Images.dropdown} style={styles.dropdown}/>
            </TouchableOpacity>
          </View>
      <ScrollView> 
          <View>
            <Image source={Images.renderImage2} style={styles.renderImage1}/>
            <View style={styles.absoluteleft}>
              <Image source={Images.account} style={styles.account}/>
              <Text style={{fontSize: Metrics.unitFontSize*14}}>10</Text>
            </View>
            <View style={styles.absoluteright}>
              <Image source={Images.heart} style={styles.heart}/>
            </View>
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.yellowRowView}>
              <Image source={Images.buildMuscle} style={styles.buildMuscle}/>
              <Text style={styles.text}>Build{'\n'}Muscie</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.increaseFocus} style={styles.increaseFocus}/>
              <Text style={styles.text}>Increase{'\n'}Focus</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Boast} style={styles.Boast}/>
              <Text style={styles.text}>Boast{'\n'}TestOsterOne</Text>
            </View>
          </View>
          <Text style={styles.smallText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For Sports andsdf sdffas{'\n'}Recreation is and amazing program that can get you the results that sdfs dfsdf</Text>
          <View style={styles.michaelView}>
            <View style={styles.chaudView}>
              <Image source={Images.chaudt} style={styles.account1}/>
              <View>
                <Text style={styles.michaeltext}>Michael Creation</Text>
                <View style={styles.chaudView}>
                  <Image source={Images.stars} style={styles.stars}/>
                  <Text style={styles.text}>(12)</Text>
                </View>
              </View>
            </View>
            <Text style={styles.greenText}>$129</Text>
          </View>


          <View>
            <Image source={Images.renderImage2} style={styles.renderImage1}/>
            <View style={styles.absoluteleft}>
              <Image source={Images.account} style={styles.account}/>
              <Text style={{fontSize: Metrics.unitFontSize*14}}>10</Text>
            </View>
            <View style={styles.absoluteright}>
              <Image source={Images.heart} style={styles.heart}/>
            </View>
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.yellowRowView}>
              <Image source={Images.buildMuscle} style={styles.buildMuscle}/>
              <Text style={styles.text}>Build{'\n'}Muscie</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.increaseFocus} style={styles.increaseFocus}/>
              <Text style={styles.text}>Increase{'\n'}Focus</Text>
            </View>
            
            <View style={styles.yellowRowView}>
              <Image source={Images.Boast} style={styles.Boast}/>
              <Text style={styles.text}>Boast{'\n'}TestOsterOne</Text>
            </View>
          </View>
          <Text style={styles.smallText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For Sports andsdf sdffas{'\n'}Recreation is and amazing program that can get you the results that sdfs dfsdf</Text>
          <View style={styles.michaelView}>
            <View style={styles.chaudView}>
              <Image source={Images.chaudt} style={styles.account1}/>
              <View>
                <Text style={styles.michaeltext}>Michael Creation</Text>
                <View style={styles.chaudView}>
                  <Image source={Images.stars} style={styles.stars}/>
                  <Text style={styles.text}>(12)</Text>
                </View>
              </View>
            </View>
            <Text style={styles.greenText}>$129</Text>
          </View>
        </ScrollView>  
        </View>
        <Modal isVisible={this.state.visible} style={{flex: 1, alignItems:'flex-end',justifyContent:'flex-end'}}>
          {(this.state.category)? categoryView: lengthView}
        </Modal>
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
