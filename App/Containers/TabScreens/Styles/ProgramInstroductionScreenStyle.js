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
    padding: Metrics.unitMargin*5
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  text1:{
    fontSize: Metrics.unitFontSize*20,
    textAlign:'center',
    fontWeight: '700'
  },
  text2:{
    marginTop: Metrics.unitMargin*7,
    fontSize: Metrics.unitFontSize*18,
    textAlign:'center'
  },
  coachView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius :3,
    backgroundColor: 'white',
    padding: Metrics.unitMargin*3
  },
  flipView:{
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: Metrics.unitMargin*5,
    alignItems:'center',
    marginTop: Metrics.unitMargin*5
  },
  label:{
    fontSize: Metrics.unitFontSize*18,
    marginTop: Metrics.unitMargin*5,
    marginBottom: Metrics.unitMargin*1
  },
  introView:{
    backgroundColor: 'white',
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius :3,
    paddingVertical: Metrics.unitMargin*2
  },
  renderImage:{
    width: Metrics.unitMargin*30,
    height: Metrics.unitMargin*20,
    backgroundColor: Colors.border,
    justifyContent: 'center',
    marginLeft: Metrics.unitMargin*2
  },
  image:{
    width: Metrics.unitMargin*30,
    height: Metrics.unitMargin*30/376*202,
  },
  introquestion:{
    backgroundColor: Colors.border,
    height: 0.5
  },
  textinput1:{
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius :3,
    paddingLeft: Metrics.unitMargin*2,
    backgroundColor:'white',
    height: Metrics.unitMargin*20
  },
  textinput2:{
    borderColor: Colors.border,
    borderWidth: 0.5,
    borderRadius :3,
    paddingLeft: Metrics.unitMargin*2,
    backgroundColor:'white',
    height: Metrics.unitMargin*7
  },
  textinput3:{
    borderColor: Colors.border,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderTopLeftRadius :3,
    borderBottomLeftRadius :3,
    paddingLeft: Metrics.unitMargin*2,
    backgroundColor:'white',
    height: Metrics.unitMargin*7,
    flex:1
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center'
  },
  checkView:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*7,
    backgroundColor: Colors.blue,
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius :3,
    borderBottomRightRadius :3,
  },
  dropshape:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/12*8   
  },
  button:{
    alignSelf: 'center',
    marginVertical: Metrics.unitMargin*10,
    width: Metrics.unitMargin*60,
    height:Metrics.unitMargin*12,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius :3,
    backgroundColor: Colors.green
  },
  buttontext:{
    fontSize: Metrics.unitFontSize*18,
    fontWeight: '700',
    color: 'white'
  }
})
