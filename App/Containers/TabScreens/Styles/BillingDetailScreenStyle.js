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
  categoryView:{
    height: Metrics.unitMargin*12,
    justifyContent:'center',
    paddingLeft:Metrics.unitMargin*5
  },
  category:{
    color: '#656565',
    fontSize: Metrics.unitFontSize*16
  },
  itemView:{
    height: Metrics.unitMargin*12,
    justifyContent:'center',
    paddingHorizontal:Metrics.unitMargin*5,
    backgroundColor:'white',
    borderColor :'#BCBCBC',
    borderBottomWidth :0.5,
    borderTopWidth: 0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  itemView1:{
    height: Metrics.unitMargin*12,
    justifyContent:'center',
    paddingRight:Metrics.unitMargin*5,
    backgroundColor:'white',
    borderColor :'#BCBCBC',
    borderBottomWidth :0.5,
    borderTopWidth: 0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  item:{
    fontSize: Metrics.unitFontSize*16
  },
  reditem:{
    fontSize: Metrics.unitFontSize*16,
    color: '#B42020'
  },
  greenitem:{
    fontSize: Metrics.unitFontSize*16,
    color: '#0A7426'
  },
  greenText:{
    color: '#17AA10',
    fontSize: Metrics.unitFontSize*16
  },
  explainView:{
    paddingTop: Metrics.unitMargin*2,
    paddingBottom: Metrics.unitMargin*4,
    justifyContent:'center',
    paddingLeft:Metrics.unitMargin*5
  },
  explain:{
    color: '#656565',
    fontSize: Metrics.unitFontSize*12
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center'
  },
  Token:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4,
    marginRight: Metrics.unitMargin*2
  },
  bank:{
    width: Metrics.unitMargin*8,
    height: Metrics.unitMargin*8/70*72,
  },
  ether:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/38*64,
  },
  arrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3,
  },
  imageView:{
    width: Metrics.unitMargin*20,
    alignItems:'center'
  },
   
})
