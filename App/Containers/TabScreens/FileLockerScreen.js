import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView ,FlatList, TextInput, ScrollView} from 'react-native'
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
import styles from './Styles/FileLockerScreenStyle'

const data=[
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'},
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'},
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'},
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'},
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'},
    {image: Images.renderImage2, explain:'This is a sample title for the\nfile and it explains what it is.',description:'This is a description of the file\nand further explains the \nmeaning of the file.',account:Images.chaudt,creation:'Michael Creation', date:'Dec. 19. 2017'}
]

class WelcomeScreen extends Component {
  static navigationOptions = { header: null };

  constructor (props: WelcomeScreenProps) {
    super(props)
    this.state=({
      isVisible: false
    })
  }

  goCancel(){
    this.props.navigation.dispatch(NavigationActions.back());
  }

  _renderItem({item}){
    return(
      <View style={styles.renderView}>
        <Image source={item.image} style={styles.image}/>
        <Text style={styles.explain}>{item.explain}</Text>
        <View style={styles.bar}/>
        <Text style={styles.explain}>{item.description}</Text>
        <View style={styles.smallRow}>
          <Image source={item.account} style={styles.chaudt}/>
          <View style={styles.name}>
            <Text style={styles.nameText}>{item.creation}</Text>
            <Text style={styles.nameText}>{item.date}</Text>
          </View>
        </View>
      </View>
    )
  }

  render () {
    let i = 0
    that = this
    jsonData = data.map(function(item) {    
      i++;
      return(
        <TouchableOpacity onPress={()=>that.setState({isVisible:true})} key={i} style={styles.renderView}>
          <Image source={item.image} style={styles.image}/>
          <Text style={styles.explain}>{item.explain}</Text>
          <View style={styles.bar}/>
          <Text style={styles.explain1}>{item.description}</Text>
          <View style={styles.smallRow}>
            <Image source={item.account} style={styles.chaudt}/>
            <View style={styles.name}>
              <Text style={styles.nameText}>{item.creation}</Text>
              <Text style={styles.nameText}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    })

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
              <Text style={styles.titleText}>File Locker</Text>
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity>
                <Image source={Images.menu} style={styles.menu}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchView}>
            <View style={styles.inputView}>
              <Image source={Images.search} style={styles.search}/>
              <TextInput placeholder='Search for files' style={styles.textinput}/>
            </View>
          </View>
          <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>  
            <View style={styles.wrapView}>
              {jsonData}
            </View>
          </ScrollView>
          <Modal isVisible={this.state.isVisible}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>This is a sample title for the file and it explains what it is.</Text>
              <Image source={Images.renderImage2} style={styles.explainImage}/>
              <Text style={styles.modalexplain}>This is a description of the file and further explains the meaning of the file</Text>
              <View style={styles.listView}>
                <Text style={styles.listText}>File Name:</Text>
                <Text style={styles.listText}>SampleFile.JPG</Text>
              </View>
              <View style={styles.listView}>
                <Text style={styles.listText}>File Type:</Text>
                <Text style={styles.listText}>Image/JPG</Text>
              </View>
              <View style={styles.listView}>
                <Text style={styles.listText}>Date Uploaded:</Text>
                <Text style={styles.listText}>Oct 24. 2017</Text>
              </View>
              <View style={styles.listView}>
                <Text style={styles.listText}>Uploaded By:</Text>
                <Text style={styles.listText}>Chautdt15</Text>
              </View>
              <View style={styles.descriptionView}>
                <Text style={styles.listText}>Dscription:</Text>
                <Text style={styles.descriptionText}>This is a description of the file and sa fdaf asd f sdfasdfs
                                              sf sdf sadf sfsdkfjsldjfl dsflslkj ds asd as DA SD ASD AD
                                              asdasd asd asd as da sd asd a sda sd asd a sd  sa dSD</Text>
              </View>
              <View style={styles.emptyView}/>
              <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.button,{backgroundColor:'#12C652'}]}>
                  <Text style={styles.buttonText}>Download file</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.setState({isVisible:false})} style={[styles.button,{backgroundColor:'#E33855'}]}>
                  <Text style={styles.buttonText}>Delete file</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
