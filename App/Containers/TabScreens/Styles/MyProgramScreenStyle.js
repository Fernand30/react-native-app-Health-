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
  renderView:{
    borderBottomWidth: 0.5,
    borderColor: '#DBDBDB',
    marginBottom: Metrics.unitMargin*4,
    backgroundColor: 'white',
  },
  explain:{
    padding: Metrics.unitMargin*3
  },
  image:{
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/376*202
  },
  text:{
    fontSize: Metrics.unitFontSize*17,
    textAlign: 'center'
  }, 
  text1:{
    fontSize: Metrics.unitFontSize*18,
    textAlign: 'center',
    color:'white'
  }, 
  listbutton:{
    marginHorizontal: Metrics.unitMargin*3,
    height: Metrics.unitMargin*10,
    backgroundColor: '#12C6C6',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 3,
    marginTop: Metrics.unitMargin*3
  },
  deletebutton:{
    marginHorizontal: Metrics.unitMargin*3,
    height: Metrics.unitMargin*10,
    backgroundColor: '#C61212',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 3,
    marginTop: Metrics.unitMargin*3
  },
  dayView:{
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: Metrics.unitMargin*2
  },
  greenText:{
    color: '#16A832',
    fontSize: Metrics.unitFontSize*18
  }
})
