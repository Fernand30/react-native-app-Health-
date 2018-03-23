import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: Colors.background1
  },
  inputContainer: {
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    alignItems:'center',
    height: Metrics.unitMargin*15,
    paddingLeft: Metrics.unitMargin*5,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: Metrics.unitMargin*10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.bar,
    paddingHorizontal: Metrics.unitMargin*3
  },
  headerCenterView:{
    flex: 1,
    alignItems:'center'
  },
  headerLeftView:{
    flex: 0.45
  },
  headerRightView:{
    flex: 0.45,
    alignItems:'flex-end'
  },
  action:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5
  },
  about:{
    fontSize: Metrics.unitFontSize*16,
    paddingLeft: Metrics.unitMargin*3,
    marginTop: Metrics.unitMargin*5,
    backgroundColor:'white',
    height: Metrics.unitMargin*10,
    lineHeight: Metrics.unitMargin*10
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop: Metrics.unitMargin*2,
    backgroundColor:'white',
    borderColor:'#000',
    borderBottomWidth:1,
    paddingBottom: Metrics.unitMargin*3
  }, 
  textView:{
    paddingHorizontal: Metrics.unitMargin*3,
    padding: Metrics.unitMargin*3
  },
  offView:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:Metrics.unitMargin*1.5,
    paddingVertical:Metrics.unitMargin,
    paddingHorizontal:Metrics.unitMargin*6
  }, 
  flagView:{
    flexDirection:'row',
    alignItems:'center',
  }, 
  offtext:{
    fontSize: Metrics.unitFontSize*12
  },
  bar:{
    height: 0.5,
    backgroundColor: Colors.bar,
  },
  uk:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5,
    marginRight: Metrics.unitMargin*1
  },
  fivestar:{
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20/34*6
  },
  usa:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*14,
    marginRight: Metrics.unitMargin*1
  },
  countrytext:{
    fontSize: Metrics.unitFontSize*16
  },
  text1:{
    fontSize: Metrics.unitFontSize*16,
    marginBottom: Metrics.unitMargin*2
  },
  text2:{
    fontSize: Metrics.unitFontSize*16,
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  emailText:{
    fontSize: Metrics.unitFontSize*15,
    width: Metrics.unitMargin*30
  },
  notificationText:{
    marginTop: Metrics.unitMargin*5,
    fontSize: Metrics.unitFontSize*20,
    textAlign: 'center',
    marginBottom: Metrics.unitMargin*15,
  },
  inputStyle: {
    height: Metrics.unitMargin*13,
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
  backText:{
    fontSize: Metrics.unitFontSize*22,
    fontWeight: '600',
    marginLeft: Metrics.unitMargin*1
  },
  backImage: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/563*276
  },
  positionView:{
    position:'absolute', 
    top:0, 
    left:0,
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/563*276,
    alignItems:'center',
    justifyContent: 'center'
  },
  chaudt:{
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20,
    borderRadius: Metrics.unitMargin*10,
    borderColor: 'white',
    borderWidth:1
  },
  mark1:{
    color:'white',
    fontSize: Metrics.unitFontSize*16,
    marginTop: Metrics.unitMargin*3
  },
  romano:{
    color:'white',
    fontSize: Metrics.unitFontSize*20,
    fontWeight: '800',
    marginTop: Metrics.unitMargin*2
  }
})
