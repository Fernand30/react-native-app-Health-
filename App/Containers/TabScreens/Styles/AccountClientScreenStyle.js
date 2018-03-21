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
  dropshape:{
    width: Metrics.unitMargin*2,
    height: Metrics.unitMargin*2/12*8
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
  chaudt:{
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20,
    alignSelf: 'center',
    marginVertical: Metrics.unitMargin*3
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  name:{
    fontSize: Metrics.unitFontSize*16,
    color: '#525252',
    textAlign: 'center'
  },
  client:{
    fontSize: Metrics.unitFontSize*18,
    color: '#525252',
    textAlign: 'center'
  },
  changebutton:{
    alignSelf:'center',
    width: Metrics.unitMargin*50,
    height: Metrics.unitMargin*50/183*34,
    backgroundColor: '#585858',
    borderColor: '#2C2C2C',
    borderWidth :0.5,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 5,
    marginTop: Metrics.unitMargin*2
  },
  changeText:{
    fontSize: Metrics.unitFontSize*16,
    color: 'white'
  },
  updatebutton:{
    alignSelf:'center',
    width: Metrics.unitMargin*60,
    height: Metrics.unitMargin*60/217.4*40,
    backgroundColor: '#12C652',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 5,
    marginTop: Metrics.unitMargin*3
  },
  updateText:{
    fontSize: Metrics.unitFontSize*16,
    color: 'white'
  },
  applyView:{
    backgroundColor: 'white',
    padding: Metrics.unitMargin*3,
    borderColor: '#BCBCBC',
    borderWidth: 0.5,
    marginHorizontal: Metrics.unitMargin*3,
    borderRadius: 3,
    marginTop : Metrics.unitMargin*5
  },
  text:{
    fontSize: Metrics.unitFontSize*16
  },
  textinput:{
    height: Metrics.unitMargin*8,
    borderColor: '#BCBCBC',
    borderWidth: 0.5,
    borderRadius: 3,
    fontSize: Metrics.unitFontSize*16,
    marginTop: Metrics.unitMargin*1,
    paddingLeft: Metrics.unitMargin*2,
    marginBottom: Metrics.unitMargin*3,
  },
  selectView:{
    height: Metrics.unitMargin*8,
    borderColor: '#BCBCBC',
    borderWidth: 0.5,
    borderRadius: 3,
    marginTop: Metrics.unitMargin*1,
    paddingLeft: Metrics.unitMargin*2,
    marginBottom: Metrics.unitMargin*3,
    flexDirection: 'row',
    alignItems:'center'
  },
  select:{
    color: '#BCBCBC',
    fontSize: Metrics.unitFontSize*16,
    flex:1,
  },
  blueView:{
    width: Metrics.unitMargin*5,
    height:Metrics.unitMargin*8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3579D5',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  about: {
    height: Metrics.unitMargin*20,
    borderColor: '#BCBCBC',
    borderWidth: 0.5,
    borderRadius: 3,
    marginTop: Metrics.unitMargin*1,
    paddingLeft: Metrics.unitMargin*2,
    fontSize: Metrics.unitFontSize*15,
  }
})
