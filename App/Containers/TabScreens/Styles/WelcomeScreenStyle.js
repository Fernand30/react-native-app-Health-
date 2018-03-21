import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: 'white',
    shadowOpacity: 0,
    elevation: 0,
  },
  welcome:{
    fontSize: Metrics.unitFontSize*25,
    textAlign: 'center',
    marginTop: Metrics.unitMargin*10
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
    height: Metrics.unitMargin*12,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.navy,
    backgroundColor: 'white',
    marginTop: Metrics.unitMargin*20,
    paddingHorizontal: Metrics.unitMargin*4
  },
  policyView1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Metrics.unitMargin*12,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: Colors.navy,
    backgroundColor: 'white',
    paddingHorizontal: Metrics.unitMargin*4
  },
  circleView: {
    width: Metrics.unitMargin*6,
    height: Metrics.unitMargin*6,
    borderRadius: Metrics.unitMargin*3,
    borderColor: Colors.navy,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent:'center'
  },
  itext:{
    fontSize: Metrics.unitFontSize* 17,
    fontWeight: '700'
  },
  policyText:{
    fontSize: Metrics.unitFontSize* 17,
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
    width:Metrics.unitMargin*40,
    height:Metrics.unitMargin*40/1500*353,
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
