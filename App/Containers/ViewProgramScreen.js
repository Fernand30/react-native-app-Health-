import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity,Switch } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputText from '../Components/InputText'
import Modal from "react-native-modal";
import ImageSlider from 'react-native-image-slider';

import styles from './Styles/ViewProgramScreenStyle'

const images = [
      Images.renderImage1,
      Images.renderImage2
    ]; 

class LoginScreen extends Component {

  constructor (props) {
    super(props)
    this.state=({
      visible: false,
      category: true
    })
  }

  checkout(){
    const CheckoutScreen = NavigationActions.navigate({
      routeName: "CheckoutStack",
      params: {}
    });
    this.props.navigation.dispatch(CheckoutScreen);
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }
  

  render () {
    return (
    <SafeAreaView style={styles.contentStyle}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.searchView}>
            <TouchableOpacity style={styles.smalRowView} onPress={this.goCancel.bind(this)}>
              <Image source={Images.BackArrow} style={styles.backArrow}/>
              <Text>Back</Text>
            </TouchableOpacity>
            <Text>View Program</Text>
            <View style={styles.smalRowView}>
              <TouchableOpacity>
                <Image source={Images.heart} style={styles.heart}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.Share} style={styles.share}/>
              </TouchableOpacity>
            </View>
          </View>
       
         <ScrollView> 
          <View>
            <ImageSlider
            loopBothSides
            autoPlayWithInterval={3000}
            images={images}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={item } style={styles.renderImage1} />
              </View>
            )}
          />
            
          </View> 
          <Text style={styles.commonText}>Julian Anderson's 30 Day Ultimate Spartan Shredder For{'\n'}Sports and Recreation</Text>
          <View style={styles.rowView}>
            <View style={styles.yellowRowView}>
              <Image source={Images.buildMuscle} style={styles.buildMuscle}/>
              <Text style={styles.text}>Build{'\n'}Muscle</Text>
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
          <View style={styles.rowrateView}>
            <View style={styles.eachView}>
              <Image source={Images.account} style={styles.account}/>
              <Text style={styles.greensmallText}>12</Text>
              <Text style={styles.tinyText}>Seats Remaining</Text>
            </View>
            <View style={styles.eachView}>
              <Image source={Images.stars}/>
              <Text style={styles.greensmallText}>4.6/5</Text>
              <Text style={styles.tinyText}>Rating</Text>
            </View>
            <View style={styles.eachView}>
              <Image source={Images.price}/>
              <Text style={styles.greensmallText}>32% Off</Text>
              <Text style={styles.tinyText}>Original Price</Text>
            </View>
          </View>
          <View style={styles.grayView}/>
          <View style={styles.chaudView1}>
            <Image source={Images.chaudt} style={styles.account1}/>
            <View>
              <Text style={styles.michaeltext}>Michael Creation</Text>
              <View style={styles.chaudView}>
                <Image source={Images.stars} style={styles.stars}/>
                <Text style={styles.text}>(12)</Text>
              </View>
            </View>
          </View>

          <View style={styles.rowView1}>
            <Text>Languages Spoken</Text>
            <Text>English</Text>
          </View>
          <View style={styles.rowView1}>
            <Text>Location</Text>
            <Text>United States</Text>
          </View>
          <Text style={styles.smallText1}>Julian Anderson's 30 Day Ultimate Spartan Shredder For Sports andsdf sdffas{'\n'}Recreation is and amazing program that can get you the results that sdfs dfsdf</Text>
          <View style={styles.messageView}>
            <TouchableOpacity style={styles.sndbutton}>
              <Image source={Images.message}/>
              <Text style={styles.whiteText}>Send Message</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.checkout.bind(this)} style={styles.sndbutton1}>
              <Image source={Images.whiteman}/>
              <Text style={styles.whiteText}>View Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grayView}/>
          <View style={styles.descriptionView}>
            <Text>Program Description</Text>
          </View>
          <View style={styles.paddingView}>
            <Text style={styles.smallText}>Julian Anderson's 30Day Ultimate Spartan Shredder For Sports and sdf{'\n'}
                        sdffds Rdcreation is and amazing program that can get you the results{'\n'}
                        that sdfs dfsf you always dreamed about for your body start tsdffdd{'\n'}
                        sports anddsdf sdfds Recreation is ad amazing progarm taht can get{'\n'}
                        sdffds Rdcreation is and amazing program that can get you the results{'\n'}
                        that sdfs dfsf you always dreamed about for your body start tsdffdd{'\n'}
                        sports anddsdf sdfds Recreation is ad amazing progarm taht can get{'\n'}
                        dreamed about for your body start tsdffds fsdad sadf fdsd!</Text>
            <View style={styles.rowView2}>
              <Text>View More</Text>
              <Image source={Images.dropdown}/>
            </View>
          </View>
          <View style={styles.grayView}/>
          <View style={styles.descriptionView}>
            <Text>Program Features</Text>
          </View>
          <View style={styles.commonRowView}>
            <Image source={Images.check} style={styles.check}/>
            <Text>Program totally feature 1: sldfdja fasd f asd</Text>
          </View>
          <View style={styles.commonRowView}>
            <Image source={Images.check} style={styles.check}/>
            <Text>Program totally feature 1: sldfdja fasd f asd</Text>
          </View>
          <View style={styles.commonRowView}>
            <Image source={Images.check} style={styles.check}/>
            <Text>Program totally feature 1: sldfdja fasd f asd</Text>
          </View>
          <View style={styles.commonRowView}>
            <Image source={Images.check} style={styles.check}/>
            <Text>Program totally feature 1: sldfdja fasd f asd</Text>
          </View>
          <View style={styles.grayView1}/>
          <View style={styles.descriptionView}>
            <Text>Program Add-Ons</Text>
          </View>
          <View style={styles.rowView3}>
            <Switch/>
            <Text style={styles.smallText}>Program totally feature 1: sldfdjaf sa fas</Text>
            <Text style={styles.greenText}>$129</Text>
          </View>
          <View style={styles.rowView3}>
            <Switch/>
            <Text style={styles.smallText}>Program totally feature 1: sldfdjaf sa fas</Text>
            <Text style={styles.greenText}>$99</Text>
          </View>
          <View style={styles.rowView3}>
            <Switch/>
            <Text style={styles.smallText}>Program totally feature 1: sldfdjaf sa fas</Text>
            <Text style={styles.greenText}>$129</Text>
          </View>
          <View style={styles.grayView1}/>
          <View style={styles.descriptionView}>
            <Text>Program Reviews</Text>
          </View>
          <View style={styles.rowView3}>
            <Image source={Images.chaudt} style={styles.account1}/>
             <View>
              <Text>John Abramham</Text>
              <Text style={styles.minText}>This is the best program I have ever com across before</Text>
              <Text style={styles.minText1}>Jun 12, 2017</Text>
             </View>
             <Image source={Images.stars}/>
          </View>
          <View style={styles.rowView3}>
            <Image source={Images.chaudt} style={styles.account1}/>
             <View>
              <Text>John Abramham</Text>
              <Text style={styles.minText}>This is the best program I have ever com across before</Text>
              <Text style={styles.minText1}>Jun 12, 2017</Text>
             </View>
             <Image source={Images.stars}/>
          </View>
          <View style={styles.rowView3}>
            <Image source={Images.chaudt} style={styles.account1}/>
             <View>
              <Text>John Abramham</Text>
              <Text style={styles.minText}>This is the best program I have ever com across before</Text>
              <Text style={styles.minText1}>Jun 12, 2017</Text>
             </View>
             <Image source={Images.stars}/>
          </View>
          <View style={styles.grayView1}/>
          <View style={styles.descriptionView}>
            <Text>Frequently Asked Questions</Text>
          </View>
          <Text style={styles.smallText}>How can I be sure that this program will get me result</Text>
          <Text style={styles.smallText}>yes, saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}
                                            saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}
                                            saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}</Text>

          <Text style={styles.smallText}>How can I be sure that this program will get me result</Text>
          <Text style={styles.smallText}>yes, saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}
                                            saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}
                                            saf sasdf asdfa asdf  asdfasdf  sdfekefekfek lasdfjkdkafdf{'\n'}</Text>



          <TouchableOpacity style={styles.joinbutton}>
            <Text style={styles.whiteText}>Join Program $229 or 1200 EGG</Text>
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
