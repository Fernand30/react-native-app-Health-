import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
  },
  tabbar:{
    backgroundColor:'transparent',
    height: Metrics.unitMargin*12
  },
  emailText:{
    fontSize: Metrics.unitFontSize*15,
    width: Metrics.unitMargin*30
  },
  inputStyle: {
    height: Metrics.unitMargin*15,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: Metrics.unitMargin*18,
    paddingTop: Metrics.unitMargin*5,
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  tabicon: {
    width:Metrics.unitMargin*5,
    height:Metrics.unitMargin*5,
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
