import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: Colors.background1
  },
  welcome:{
    fontSize: Metrics.unitFontSize*17,
    textAlign: 'center',
    marginTop: Metrics.unitMargin*1
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    height: Metrics.unitMargin*13,
    borderColor: Colors.bar,
    borderBottomWidth: 1
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
    flex: 0.45,
    alignItems: 'flex-end'
  },
  backArrowButton:{
    marginRight: Metrics.unitMargin*3
  },
  tokenView:{
    flexDirection: 'row',
    width: Metrics.unitMargin*45,
    height: Metrics.unitMargin*8,
    borderRadius: Metrics.unitMargin*4,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: Metrics.unitMargin*4,
    alignItems: 'center',
    marginTop: Metrics.unitMargin*2
  },
  token:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5,
  },
  tokenText:{
    fontSize: Metrics.unitFontSize*17
  },
  backArrow:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16  
  },
  account:{
    alignSelf: 'center',
    marginTop: Metrics.unitMargin*3,
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20,
  },
  join:{
    fontSize: Metrics.unitFontSize*20,
    textAlign: 'center',
    marginTop: Metrics.unitMargin*3
  },
  inputContainer: {
    backgroundColor: Colors.snow,
  },
  inputStyle: {
    fontWeight: 'bold',
    width: 500,
    height: 40
  },
  orrow:{
    flexDirection: 'row',
    marginHorizontal: Metrics.unitMargin*10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.unitMargin*3
  },
  policyView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Metrics.unitMargin*9,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.navy,
    backgroundColor: 'white',
    marginTop: Metrics.unitMargin*3,
    paddingHorizontal: Metrics.unitMargin*4
  },
  policyView1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Metrics.unitMargin*9,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.navy,
    backgroundColor: 'white',
    paddingHorizontal: Metrics.unitMargin*4
  },
  circleView: {
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4,
    borderRadius: Metrics.unitMargin*2,
    borderColor: Colors.navy,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent:'center'
  },
  itext:{
    fontSize: Metrics.unitFontSize* 15,
    fontWeight: '700'
  },
  policyText:{
    fontSize: Metrics.unitFontSize* 15,
    flex: 1,
    paddingLeft: Metrics.unitMargin*2
  },
  arrow:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4
  },
  lineView:{
    height: 0.5,
    backgroundColor: Colors.navy,
    width: Metrics.unitMargin*35
  },
  muscle: {
    width:Metrics.unitMargin*12,
    height:Metrics.unitMargin*12/90*67,
  },
  titleText:{
    fontSize: Metrics.unitFontSize*20,
    fontWeight: '600'
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
