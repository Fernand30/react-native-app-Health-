import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: Colors.background1
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    height: Metrics.unitMargin*13,
    borderColor: Colors.bar,
    borderBottomWidth: 1,
    paddingHorizontal: Metrics.unitMargin*3
  },
  titleText:{
    fontSize: Metrics.unitFontSize*20,
    fontWeight: '600'
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
  mainView:{
    flex: 1,
    backgroundColor: Colors.silver,
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  text:{
    fontSize: Metrics.unitFontSize*14,
  },
  date:{
    fontSize: Metrics.unitFontSize*12,
    marginTop: Metrics.unitMargin
  },
  conversation:{
    fontSize: Metrics.unitFontSize*16,
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.border,
    backgroundColor:'white',
    borderBottomWidth:0.5,
    paddingHorizontal:Metrics.unitMargin*3,
    paddingVertical: Metrics.unitMargin*3
  },
  chaudt:{
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*10
  },
  rowView1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.border,
    borderBottomWidth:0.5,
    paddingHorizontal:Metrics.unitMargin*3,
    paddingVertical: Metrics.unitMargin*3,
    opacity: 0.6
  },
  play:{
    width: Metrics.unitMargin*8,
    height: Metrics.unitMargin*8
  },
  arrow:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5
  },
  tabbutton:{
    flexDirection:'row',
    alignItems:'center'
  },
  buttonText:{
    color:'white',
    fontSize: Metrics.unitFontSize*18,
    fontWeight: '700'
  },
  eachtab:{
    borderColor: Colors.border,
    borderBottomWidth: 1,
    borderLeftWidth:1,
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height: Metrics.unitMargin*10
  },
  eachtab1:{
    borderColor: Colors.border,
    borderBottomWidth: 1,
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height: Metrics.unitMargin*10
  },
  tabView:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  tabtext:{
    fontSize: Metrics.unitFontSize*16,
    fontWeight: '800',
    marginLeft: Metrics.unitMargin*2
  },
  bonga:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*6
  },
  me:{
    width: Metrics.unitMargin*6,
    height: Metrics.unitMargin*6
  },
  noalarm:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/13*15
  },
  mail:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*14
  },

 
})
