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
  headerRightView:{
    flex: 0.45
  },
  rowView:{
    flexDirection: 'row',
    marginHorizontal: Metrics.unitMargin*5,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingVertical: Metrics.unitMargin*1.5
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
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5
  },
  newprogram:{
    width: Metrics.unitMargin*6,
    height: Metrics.unitMargin*6/29*17
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
    textAlign: 'center',
    marginLeft: Metrics.unitMargin*2
  },
  redtext:{
    fontSize: Metrics.unitFontSize*13,
    textAlign: 'center',
    color: 'red'
  },
  commonText:{
    fontSize: Metrics.unitFontSize*17,
    textAlign: 'center',
    marginVertical: Metrics.unitMargin*2
  },
  smallText:{
    fontSize: Metrics.unitFontSize*12,
    marginLeft: Metrics.unitMargin*3,
    marginVertical : Metrics.unitMargin,
    color: Colors.bar
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
    bottom: - Metrics.unitMargin,
    left :0,
    width: Metrics.unitMargin*11,
    height: Metrics.unitMargin*8,
    borderTopRightRadius: Metrics.unitMargin*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  heart:{
    width: Metrics.unitMargin*4.5,
    height: Metrics.unitMargin*4.5/22*19
  },
  account:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/11*12
  },
  absoluteright:{
    position: 'absolute',
    bottom: - Metrics.unitMargin,
    right :0,
    width: Metrics.unitMargin*11,
    height: Metrics.unitMargin*8,
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
  renderImage1:{
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/375*184
  },
  searchView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*5,
    backgroundColor: Colors.background,
    paddingBottom: Metrics.unitMargin*2
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex:1,
    marginRight: Metrics.unitMargin*5,
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
    width:Metrics.unitMargin*40,
    height:Metrics.unitMargin*40/1500*353,
  },
  titleText:{
    fontSize: Metrics.unitFontSize*30,
    fontWeight: '800',
    marginLeft: Metrics.unitMargin
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
