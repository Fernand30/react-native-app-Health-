import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputContainer: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    alignItems:'center',
    height: Metrics.unitMargin*15,
    paddingLeft: Metrics.unitMargin*5,
  },
  headerCenterView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerLeftView:{
    flex: 0.45
  },
  modalCatetoryView:{ 
    marginBottom:-Metrics.unitMargin*5,
    height: Metrics.screenHeight/2, 
    marginRight: -Metrics.unitMargin*5,
    width: Metrics.screenWidth, 
    backgroundColor:'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalLengthView:{ 
    marginBottom:-Metrics.unitMargin*5,
    height: Metrics.screenHeight/2.4, 
    marginRight: -Metrics.unitMargin*5,
    width: Metrics.screenWidth, 
    backgroundColor:'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalTitleView:{
    flexDirection: 'row',
    borderColor: Colors.bar,
    borderBottomWidth: 0.5,
    height: Metrics.unitMargin*10,
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3
  },
  modalListView:{
    flexDirection: 'row',
    borderColor: Colors.bar,
    borderBottomWidth: 0.5,
    height: Metrics.unitMargin*12.5,
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: Metrics.unitMargin*5,
    paddingRight: Metrics.unitMargin*3
  },
  account1:{
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*10,
    marginRight: Metrics.unitMargin*2
  },
  account:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3,
  },
  michaelView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    paddingVertical: Metrics.unitMargin*2,
    borderColor: Colors.bar,
    borderBottomWidth: 0.5
  },
  chaudView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRightView:{
    flex: 0.45
  },
  rowView:{
    flexDirection: 'row',
    marginHorizontal: Metrics.unitMargin*5,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  ddff:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*6 
  },
  buildMuscle:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/15*18
  },
  increaseFocus:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/17*22
  },
  Boast:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4 
  },
  star:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4
  },
  newprogram:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/29*17
  },
  smalRowView:{
    flexDirection: 'row',
    alignItems:'center'
  },
  yellowRowView:{
    flexDirection: 'row',
    alignItems:'center',
    width: Metrics.unitMargin*28,
    height: Metrics.unitMargin*8,
    backgroundColor: Colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize: Metrics.unitFontSize*13,
    textAlign: 'center'
  },
  michaeltext:{
    fontSize: Metrics.unitFontSize*14,
    marginBottom: Metrics.unitMargin
  },
  redtext:{
    fontSize: Metrics.unitFontSize*13,
    textAlign: 'center',
    color: 'red'
  },
  commonText:{
    fontSize: Metrics.unitFontSize*17,
    marginLeft: Metrics.unitMargin*3
  },
  greenText:{
    color: 'green',
    fontSize: Metrics.unitFontSize*23,
    fontWeight: '800'
  },
  smallText:{
    fontSize: Metrics.unitFontSize*12,
    marginLeft: Metrics.unitMargin*3
  },
  modalView: { 
    flex: 1, 
    marginHorizontal: Metrics.unitMargin*2, 
    marginVertical: Metrics.unitMargin*4, 
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'flex-end',
    backgroundColor: Colors.background1
  },
  filterText:{
    fontSize: Metrics.unitFontSize*15
  },
  redText:{
    fontSize: Metrics.unitFontSize*15,
    color: 'red'
  },
  skip:{
    flexDirection: 'row',
    paddingVertical: Metrics.unitMargin*5,
    paddingHorizontal: Metrics.unitMargin*10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  carousel:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*21,
    flex: 1,
  },
  commaView:{
    width: Metrics.unitMargin*2,
    height: Metrics.unitMargin*2,
    borderRadius: Metrics.unitMargin,
    backgroundColor: 'black'
  },
  commaView1:{
    width: Metrics.unitMargin*2,
    height: Metrics.unitMargin*2,
    borderRadius: Metrics.unitMargin,
    backgroundColor: Colors.carousel
  },
  absoluteleft:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left :0,
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*6,
    borderTopRightRadius: Metrics.unitFontSizeitMargin*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  absoluteright:{
    position: 'absolute',
    bottom: 0,
    right :0,
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*6,
    borderTopLeftRadius: Metrics.unitMargin*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  join:{
    fontSize: Metrics.unitFontSize*20,
    textAlign: 'center',
    marginTop: Metrics.unitMargin*5
  },
  barView:{
    width: 1,
    backgroundColor: Colors.bar,
    height: Metrics.unitMargin*3
  },
  orrow:{
    flexDirection: 'row',
    marginHorizontal: Metrics.unitMargin*10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.unitMargin*2,
    marginBottom: Metrics.unitMargin*3
  },
  lineView:{
    height: 0.5,
    backgroundColor: Colors.navy,
    width: Metrics.unitMargin*35
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22 
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16  
  },
  search:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3 
  },
  emailText:{
    fontSize: Metrics.unitFontSize*15,
    width: Metrics.unitMargin*30
  },
  similarView:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.bar,
    paddingVertical: Metrics.unitMargin*2
  },
  filterView:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.bar,
    paddingVertical: Metrics.unitMargin*2,
    paddingHorizontal: Metrics.unitMargin*3,
    justifyContent: 'space-between'
  },
  renderImage1:{
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/375*184
  },
  itemButton:{
    paddingHorizontal: Metrics.unitMargin*2,
    paddingVertical: Metrics.unitMargin,
    borderWidth: 0.5,
    borderColor: Colors.navy,
    borderRadius: 3,
    marginRight: Metrics.unitMargin*3
  },
  rowButton:{
    flexDirection: 'row',
    paddingHorizontal: Metrics.unitMargin*10,
    paddingVertical: Metrics.unitMargin,
    borderWidth: 0.5,
    borderColor: Colors.navy,
    borderRadius: 3,
    marginRight: Metrics.unitMargin*3,
    alignItems: 'center',
  },
  dropdown:{
    marginLeft : Metrics.unitMargin,
    marginTop: Metrics.unitMargin
  },
  buttonRowView:{
    flexDirection: 'row',
    marginLeft: Metrics.unitMargin*3
  },
  searchView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    backgroundColor: Colors.background,
    paddingVertical: Metrics.unitMargin*3
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Metrics.unitFontSize*350,
    height: Metrics.unitMargin*7,
    paddingLeft: Metrics.unitMargin*3,
    borderRadius: 3
  },
  backArrowButton:{
    marginLeft: Metrics.unitMargin*3
  },
  inputStyle: {
    height: Metrics.unitMargin*5,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    height: Metrics.unitMargin*13,
  },
  muscle: {
    width:Metrics.unitMargin*12,
    height:Metrics.unitMargin*12/90*67,
  },
  titleText:{
    fontSize: Metrics.unitFontSize*30,
    fontWeight: '800'
  },
  fullbutton: {
    backgroundColor: Colors.snow,
    position: 'absolute',
    bottom: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    alignItems: 'center',
    width: Metrics.screenWidth - 20,
    borderRadius: 0,
    height: Metrics.baseMargin * 5,
  }
})
