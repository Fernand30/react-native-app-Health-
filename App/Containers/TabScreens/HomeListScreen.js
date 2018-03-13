import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
import Modal from "react-native-modal";
import ImageSlider from 'react-native-image-slider';

import styles from './Styles/HomeListScreenStyle'

const images = [
      Images.renderImage1,
      Images.renderImage2
    ]; 

class LoginScreen extends Component {
  static navigationOptions = { header: null };
  static navigationOptions = { header: null };

  constructor (props) {
    super(props)
    this.state=({
      visible: false
    })
  }

  goViewProgram = () => {
    const ViewProgramStack = NavigationActions.navigate({
      routeName: "ViewProgramStack",
      params: {}
    });
    this.props.navigation.dispatch(ViewProgramStack);
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
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}>
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              
            </View>
            <View style={styles.headerCenterView}>
              <Image source={Images.muscle} style={styles.muscle}/>
              <Text style={styles.titleText}>Health App</Text>
            </View>
            <View style={styles.headerRightView}>

            </View>
            
          </View>
          <View style={styles.searchView}>
            <View style={styles.inputView}>
              <Image source={Images.search} style={styles.search}/>
              <InputText placeholder={'Search for programs or coaches'}
                     style={styles.inputStyle}
                     fontSize={Metrics.unitFontSize*13}
              />
            </View>
            <TouchableOpacity onPress={this.goViewProgram}>
              <Image source={Images.menu} style={styles.backArrow}/>
            </TouchableOpacity>
          </View>
      <ScrollView>
          
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
          <View style={styles.rowView}>
            <View style={styles.smalRowView}>
              <Image source={Images.ddff} style={styles.ddff}/>
              <Text style={styles.text}>Hot Programs</Text>
            </View>
            <View style={styles.barView}/>
            <View style={styles.smalRowView}>
              <Image source={Images.star} style={styles.star}/>
              <Text style={styles.text}>featured Programs</Text>
            </View>
            <View style={styles.barView}/>
            <View style={styles.smalRowView}>
              <Image source={Images.newprogram} style={styles.newprogram}/>
              <Text style={styles.text}>new Programs</Text>
            </View>
          </View>
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
