import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView,BackHandler,FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'

import styles from './Styles/ViewCoachScreenStyle'
const data=[1,2]
class LoginScreen extends Component {

  constructor (props) {
    super(props)
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

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  _renderItem({item}){
    return(
      <View>
        <View>
          <Image source={Images.renderImage2} style={styles.renderImage1}/>
          <View style={styles.absoluteleft}>
            <Image source={Images.account} style={styles.account}/>
            <Text style={{fontSize: Metrics.unitFontSize*15}}>10</Text>
          </View>
          <View style={styles.absoluteright}>
            <Image source={Images.heart} style={styles.heart}/>
          </View>
        </View> 
        <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
        <View style={styles.rowView1}>
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
        <View style={styles.priceView}>
          <View style={styles.smallView}>
            <Image source={Images.chaudt} style={styles.chaudt1}/>
            <View style={styles.nameView}>
              <Text style={styles.nametext1}>Michael Creation</Text>
              <View style={styles.smallView}>
                <Image source={Images.fivestars} style={styles.fivestar}/>
                <Text style={styles.nametext}>(12)</Text>
              </View>
            </View>
          </View>
          <Text style={styles.greeenText}>$129</Text>
        </View>
      </View>
      )
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
                <Text style={styles.backText}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Text style={ApplicationStyles.screen.titleText}>View Coach</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.action} style={styles.action}/>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
            <ImageBackground source={Images.renderImage1} style={styles.backImage}>
              <View style={{flex:1, backgroundColor: 'black', opacity:0.5,overflow: 'visible'}}/>
              <View style={styles.positionView}>
                <Image source={Images.chaudt} style={styles.chaudt}/>
                <Text style={styles.mark1}>@mark1</Text>
                <Text style={styles.romano}>Mark Romano</Text>
              </View>
            </ImageBackground>
            <View style={styles.rowView}>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Currently</Text>
                <View style={styles.offView}>
                  <Text style={styles.offtext}>●</Text>
                  <Text style={styles.offtext}>offline</Text>
                </View>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Level</Text>
                <Text style={styles.text2}>Level 1</Text>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Location</Text>
                <View style={styles.flagView}>
                  <Image source={Images.usa} style={styles.usa}/>
                  <Text style={styles.countrytext}>USA</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.rowView}>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Local Time</Text>
                <Text style={styles.offtext}>6:42 AM</Text>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Local Time</Text>
                <View style={styles.flagView}>
                  <Image source={Images.uk} style={styles.uk}/>
                  <Text style={styles.countrytext}>English</Text>
                </View>
              </View>
              <View style={{flex:1, alignItems:'center'}}>
                <Text style={styles.text1}>Average Rating</Text>
                <View style={styles.flagView}>
                  <Image source={Images.fivestars} style={styles.fivestar}/>
                </View>
              </View>
            </View>
            <Text style={styles.about}>About Coach Mark Romani</Text>
            <View style={styles.textView}>
              <View style={styles.explain}>
                <Text style={styles.explaintext}>
                  Julian Anderson’s 30 Day Ultimate Spartan Shredder For Sports andsdf 
                  sdffds Recreation is an amazing program that can get you the results 
                  that sdfs dfsdf  you always dreamed about for your body start tsdffsd 
                  fsdaf sadf fsd! Julian Anderson’s 30 Day Ultimate Spartan Shredder For 
                  Sports andsdf  sdffds Recreation is an amazing program that can get 
                  you the results that sdfs dfsdf  you always dreamed about for your 
                  body start tsdffsd fsdaf sadf fsd! you always dreamed about for your 
                  body start tsdffsd fsdaf sadf fsd! Julian Anderson’s 30 Day Ultimate 
                  Spartan Shredder For Sports andsdf  sdffds Recreation is an amazing 
                  program that can get you the results that sdfs dfsdf  you always
                  dreamed about for your body start tsdffsd fsdaf sadf fsd! 
                </Text> 
                <TouchableOpacity style={styles.centerrow}>
                  <Text>View More</Text>
                  <Image source={Images.dropdown}/>
                </TouchableOpacity> 
              </View> 
            </View>
            <Text style={styles.about}>Programs Created By Mike</Text>
            <View style={styles.textView1}>
              <View style={styles.bar}/>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={this._renderItem}
              />             
            </View>
            <TouchableOpacity style={styles.button}>
              <View style={styles.smallView}>
                <Image source={Images.sendarrow} style={styles.send}/>
                <Text style={styles.sendtext}>Send Message</Text>
              </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
