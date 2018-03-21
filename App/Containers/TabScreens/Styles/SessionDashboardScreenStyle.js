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
    padding: Metrics.unitMargin*3
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
    fontSize: Metrics.unitFontSize*14,
    textAlign:'center'
  },
  text2:{
    fontSize: Metrics.unitFontSize*15,
    textAlign:'center'
  },
  image1:{
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*10,
    alignSelf:'center',
    marginBottom:Metrics.unitMargin
  },
  image2:{
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20,
    marginBottom:Metrics.unitMargin
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
  }
})
