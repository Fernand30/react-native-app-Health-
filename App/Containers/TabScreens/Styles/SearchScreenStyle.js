import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
  searchView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    backgroundColor: Colors.background,
    paddingVertical: Metrics.unitMargin*3
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22 
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16  
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: Metrics.unitMargin*3,
    height: Metrics.unitMargin*7,
    paddingLeft: Metrics.unitMargin*3,
    borderRadius: 3
  },
  search:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3 
  },
  inputStyle: {
    height: Metrics.unitMargin*5,
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
    flex: 0.45
  },
  searchTitleView:{
    height: Metrics.unitMargin*8,
    flexDirection: 'row',
    backgroundColor: Colors.search,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    borderColor: Colors.border,
    borderBottomWidth :0.5
  },
  searchListView:{
    height: Metrics.unitMargin*8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    borderColor: Colors.border,
    borderBottomWidth :0.5
  },
  titleText:{
    fontSize: Metrics.unitFontSize*14,
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  clock:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5,
    marginRight: Metrics.unitMargin*2
  }
})
