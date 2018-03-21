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
  sessionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
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
    backgroundColor: Colors.silver
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  dropdown:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*12
  },
  itemView:{
    height: Metrics.unitMargin*12,
    paddingTop: Metrics.unitMargin*5,
    paddingHorizontal: Metrics.unitMargin*4,
  },
  item:{
    fontSize: Metrics.unitFontSize*16,
    color: '#656565'
  },
  chooseView:{
    height: Metrics.unitMargin*12,
    paddingTop: Metrics.unitMargin*2,
    paddingLeft: Metrics.unitMargin*4,
    paddingRight: Metrics.unitMargin*1,
  },
  choose:{
    fontSize: Metrics.unitFontSize*12,
    color: '#9A9A9A'
  },
  selectView:{
    borderColor: '#BCBCBC',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: Metrics.unitMargin*10,
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft : Metrics.unitMargin*4,
    backgroundColor:'white'
  },
  selectText:{
    fontSize: Metrics.unitFontSize*16,
    flex:1
  },
  answerText:{
    fontSize: Metrics.unitFontSize*14,
    color: '#9A9A9A',
    width:Metrics.unitMargin*30
  },
  selectbox:{
    width: Metrics.unitMargin*7,
    height: Metrics.unitMargin*10,
    backgroundColor: '#E33855',
    alignItems:'center',
    justifyContent:'center'
  },
  dropshape:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/12*8
  },
  rowView:{
    borderColor: '#BCBCBC',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    height: Metrics.unitMargin*10,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal : Metrics.unitMargin*4,
    justifyContent:'space-between',
    backgroundColor:'white'
  },
  arrow:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4,
  }
})
