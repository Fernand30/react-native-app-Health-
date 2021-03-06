import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: Colors.background
  },
  inputContainer: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    alignItems:'center',
    height: Metrics.unitMargin*15,
    paddingHorizontal: Metrics.unitMargin*5,
  },
  headerCenterView:{
    flex: 1
  },
  headerLeftView:{
    flex: 0.45
  },
  headerRightView:{
    flex: 0.45
  },
  fixView:{
    height: Metrics.unitMargin*5
  },
  inputStyle: {
    height: Metrics.unitMargin*13,
  },
  check:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/21*15
  },
  close:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: Metrics.unitMargin*10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.bar
  },
  muscle: {
    width:Metrics.unitMargin*24,
    height:Metrics.unitMargin*24/777*661,
  },
  titleText:{
    fontSize: Metrics.unitFontSize*22,
    fontWeight: '600',
    alignSelf: 'center'
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
