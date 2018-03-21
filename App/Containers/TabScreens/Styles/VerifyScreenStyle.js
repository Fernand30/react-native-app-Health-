import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: Colors.background1
  },
  inputContainer: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    alignItems:'center',
    height: Metrics.unitMargin*15,
    paddingLeft: Metrics.unitMargin*5,
    marginTop: Metrics.unitMargin*10
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
    marginHorizontal: 0,
    justifyContent: 'space-between'
  },
  verifyText:{
    fontSize: Metrics.unitFontSize*20,
    fontWeight: '700',
    marginTop: Metrics.unitMargin*2
  },
  verifycontain:{
    fontSize: Metrics.unitFontSize*15,
    marginTop: Metrics.unitMargin*3
  },
  returnButton:{
    width: Metrics.unitMargin*50,
    height: Metrics.unitMargin*10,
    borderRadius:3,
    alignItems:'center',
    justifyContent: 'center',
    marginTop: Metrics.unitMargin*5
  },  
  returnText:{
    color: 'white'
  },
  join:{
    fontSize: Metrics.unitFontSize*20,
    textAlign: 'center',
    marginTop: Metrics.unitMargin*5,
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
  emailText:{
    fontSize: Metrics.unitFontSize*15,
    width: Metrics.unitMargin*30
  },
  backArrowButton:{
    marginLeft: Metrics.unitMargin*3
  },
  inputStyle: {
    height: Metrics.unitMargin*13,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    height: Metrics.unitMargin*13,
  },
  muscle: {
    width:Metrics.unitMargin*40,
    height:Metrics.unitMargin*40/1500*353,
  },
  verify:{
    fontSize: Metrics.unitFontSize*25,
    fontWeight: '700',
    alignSelf:'center',
    width: Metrics.unitMargin*80,
    textAlign: 'center',
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
