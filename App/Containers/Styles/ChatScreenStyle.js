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
    paddingLeft: Metrics.unitMargin*5,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
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
  nametext:{
    fontSize: Metrics.unitFontSize*15
  },
  nametext1:{
    fontSize: Metrics.unitFontSize*15,
    marginBottom: Metrics.unitMargin*2
  },
  greeenText:{
    fontSize: Metrics.unitFontSize*30,
    color: '#29CE39',
    fontWeight:'900'
  },
  explain:{
    marginHorizontal: Metrics.unitMargin*3,
    borderColor: '#C6C6C6',
    borderTopWidth:0.5,
    paddingTop: Metrics.unitMargin*2,
    backgroundColor: 'white'
  },
  explaintext:{
    fontSize: Metrics.unitFontSize*15
  },
  headerRightView:{
    flex: 0.45,
    alignItems:'flex-end'
  },
  action:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5
  },
  mainView:{
    flex:1,
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
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
  yellowRowView:{
    flexDirection: 'row',
    alignItems:'center',
    width: Metrics.unitMargin*28,
    height: Metrics.unitMargin*8,
    backgroundColor: Colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
  buildMuscle:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/15*18
  },
  textView:{
    backgroundColor:'white',
    paddingBottom: Metrics.unitMargin*2
  },
  textView1:{
    backgroundColor:'white',
  },
  rowView1:{
    flexDirection: 'row',
    marginHorizontal: Metrics.unitMargin*3,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingVertical: Metrics.unitMargin*1.5
  },
  commonText:{
    fontSize: Metrics.unitFontSize*17,
    marginVertical: Metrics.unitMargin*2,
    marginLeft:Metrics.unitMargin*3
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
  centerrow:{
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  renderImage1:{
    marginTop: Metrics.unitMargin*10,
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/375*184
  },
  absoluteleft:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: - Metrics.unitMargin,
    left :0,
    width: Metrics.unitMargin*11,
    height: Metrics.unitMargin*8,
    borderTopRightRadius: Metrics.unitMargin*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  heart:{
    width: Metrics.unitMargin*4.5,
    height: Metrics.unitMargin*4.5/22*19
  },
  account:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/11*12
  },
  absoluteright:{
    position: 'absolute',
    bottom: - Metrics.unitMargin,
    right :0,
    width: Metrics.unitMargin*11,
    height: Metrics.unitMargin*8,
    borderTopLeftRadius: Metrics.unitMargin*2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  offtext:{
    fontSize: Metrics.unitFontSize*12
  },
  bar:{
    height: 0.5,
    backgroundColor: Colors.bar,
    marginHorizontal: Metrics.unitMargin*3,
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
  button:{
    height: Metrics.unitMargin*15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#12B8C6'
  },
  sendtext:{
    fontSize: Metrics.unitFontSize*25,
    color: 'white',
    fontWeight: '700',
    marginLeft: Metrics.unitMargin*2
  },
  send:{
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*10/26*22,
  },
  usa:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*14,
    marginRight: Metrics.unitMargin*1
  },
  countrytext:{
    fontSize: Metrics.unitFontSize*16
  },
  text:{
    fontSize: Metrics.unitFontSize*13,
    textAlign: 'center',
    marginLeft: Metrics.unitMargin*2
  },
  text1:{
    fontSize: Metrics.unitFontSize*16,
    marginBottom: Metrics.unitMargin*2
  },
  text2:{
    fontSize: Metrics.unitFontSize*16,
  },
  increaseFocus:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/17*22
  },
  Boast:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4
  },
  priceView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:Metrics.unitMargin*3,
    paddingBottom: Metrics.unitMargin*2,
    borderColor: '#707070',
    borderBottomWidth: 0.5
  },
  smallText:{
    fontSize: Metrics.unitFontSize*12,
    marginLeft: Metrics.unitMargin*3,
    marginVertical : Metrics.unitMargin,
    color: Colors.bar
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
  smallView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameView:{
    marginLeft: Metrics.unitMargin*2,
    justifyContent: 'space-between',
  },
  chaudt1:{
    width: Metrics.unitMargin*11,
    height: Metrics.unitMargin*11,
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
