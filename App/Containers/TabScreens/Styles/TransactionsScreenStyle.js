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
    height: Metrics.unitMargin*13,
    paddingTop: Metrics.unitMargin*6,
    paddingHorizontal: Metrics.unitMargin*5
  },
  category:{
    color:'#656565',
    fontSize: Metrics.unitFontSize*16
  },
  tableView:{
    borderColor: '#696969',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
    height: Metrics.unitMargin*10,
    flexDirection: 'row',
    paddingLeft: Metrics.unitMargin*5
  },
  date:{
    fontSize: 11,
    color: '#434343',
    fontWeight: '700',
    flex: 0.7
  },
  amount:{
    fontSize: 11,
    color: '#434343',
    fontWeight: '700',
    flex: 0.4
  },
  method:{
    fontSize: 11,
    color: '#434343',
    fontWeight: '700',
    flex: 1
  },
  listView:{
    borderColor: '#BCBCBC',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
    height: Metrics.unitMargin*10,
    flexDirection: 'row',
    paddingLeft: Metrics.unitMargin*5,
    backgroundColor :'white'
  },
  datevalue:{
    fontSize: 11,
    color: '#434343',
    flex: 0.7
  },
  amountvalue:{
    fontSize: 11,
    color: '#434343',
    flex: 0.4
  },
  methodvalue:{
    fontSize: 11,
    color: '#434343',
    flex: 1
  },
  explain:{
    fontSize: 9,
    color:'#656565',
    marginLeft: Metrics.unitMargin*5,
    paddingTop: Metrics.unitMargin*3,
    paddingBottom: Metrics.unitMargin*4
  }
})
