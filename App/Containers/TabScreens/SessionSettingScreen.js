import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,FlatList, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import { Images, Colors, Metrics, ApplicationStyles } from '../../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast } from 'native-base';
import AuthActions from '../../Redux/AuthRedux'
import FullButton from '../../Components/FullButton'
import InputText from '../../Components/InputText'
import Modal from "react-native-modal";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SessionSettingScreenStyle'

const data = [
  {image: Images.session1,  title: 'View Add-Ons', text: 'See which Add-Ons are active in this session'},
  {image: Images.session2,  title: 'Open Dispute', text: 'Create a support ticket regarding an issue in this Session'},
  {image: Images.session3,  title: 'Leave Session', text: 'Leave and end this Session. Your messages and files will still be saved'},
  {image: Images.session4,  title: 'Refund Client', text: 'Give a full or partial refund to your client'},
  {image: Images.session5,  title: 'Adjust Session Length', text: 'Extend duration of this session'},
  {image: Images.session6,  title: 'Pause Session', text: 'Purchase additional Add-Ons for this session.'},
]

class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
    this.state=({
      visible: false,
      item: {},
      isticket: false
    })
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  addons(item){
    this.setState({visible:true, item :item, isticket: false})
  }

  ticket(){
    this.setState({visible:true, isticket: true})
  }

  closeModal(){
    this.setState({visible:false})
  }

  _renderItem({item}){
    return(
      <TouchableOpacity onPress={this.addons.bind(this, item)} style={styles.renderView}>
        <Image source={item.image} style={styles.image}/>
        <View style={styles.explain}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text1}>{item.text}</Text>
        </View>
      </TouchableOpacity>
      )
  }

  render () {
    modal = <View/>
    if(!this.state.isticket){
      modal = 
        <Modal isVisible={this.state.visible} >
          <View style={styles.modal}>
            <TouchableOpacity style={styles.closeButton} onPress={this.closeModal.bind(this)}>
              <Text style={styles.text2}>Close</Text>
            </TouchableOpacity>
            <Image source={this.state.item.image} style={styles.image}/>
            <Text style={styles.text3}>{this.state.item.title}</Text>
            <Text style={styles.text4}>Below are the Add-Ons that are currently active{'\n'}
                                        in this Session. Additional Add-Ons can be{'\n'}
                                        purchased at any time.
            </Text>
            <View style={styles.bar}/>
            <View style={styles.priceView}>
              <Text style={styles.text5}>Video Consultation with me</Text>
              <View style={styles.greenView}>
                <Text style={styles.price}>$50.00</Text>
              </View>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.text5}>Additional hour of support</Text>
              <View style={styles.greenView}>
                <Text style={styles.price}>$5.00</Text>
              </View>
            </View>
          </View>
        </Modal>
      }else{
        modal = 
        <Modal isVisible={this.state.visible} >
          <View style={styles.modal}>
            <TouchableOpacity style={styles.closeButton1} onPress={this.closeModal.bind(this)}>
              <Text style={styles.text2}>Close</Text>
            </TouchableOpacity>
            <Image source={Images.session2} style={styles.image}/>
            <Text style={styles.text3}>Open a Support Ticket</Text>
            <Text style={styles.ticketText}>Ticket category</Text>
            <View style={styles.selectView}>
              <TextInput placeholder='Select your answer' style={styles.textinput}/>
              <TouchableOpacity style={styles.blueView}>
                <Image source={Images.dropshape} style={styles.dropshape}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.ticketText}>Ticket description</Text>
            <TextInput multiline style={styles.description}/>
            <TouchableOpacity style={styles.attachbutton}>
              <Text  style={styles.buttonText}>Attach File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.openbutton}>
              <Text  style={styles.buttonText}>Open Ticket</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      }
    
    return (
      <SafeAreaView style={ApplicationStyles.screen.yellowContent}> 
      <Container>
        <View style={styles.contentStyle}>
          <View style={styles.headerView}>
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={()=>this.goCancel()}>
                <Image source={Images.BackArrow} style={styles.backArrow}/>
              </TouchableOpacity>
            </View>
            <View style={styles.headerCenterView}>
              <Text style={styles.titleText}>Session Settings</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity onPress={this.ticket.bind(this)}>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainView}>
           <FlatList
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={this._renderItem.bind(this)}
            />
          </View>
          {modal}
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
