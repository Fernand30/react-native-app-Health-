import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    paddingHorizontal: Metrics.unitMargin*6,
    paddingTop: Metrics.unitMargin*25,
    paddingBottom: Metrics.unitMargin*6,
    backgroundColor: Colors.background
  },
  inputContainer: {
    backgroundColor: Colors.snow,
  },
  inputStyle: {
    fontWeight: 'bold',
    width: 500,
    height: 40
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  muscle: {
    width:Metrics.unitMargin*24,
    height:Metrics.unitMargin*24/90*67,
  },
  titleText:{
    fontSize: Metrics.unitFontSize*57,
    fontWeight: '800',
    marginLeft: Metrics.unitMargin*3
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
