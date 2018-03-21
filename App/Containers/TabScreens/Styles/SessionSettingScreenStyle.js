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
  text2:{
    fontSize: Metrics.unitFontSize*18,
  },
  text3:{
    fontSize: Metrics.unitFontSize*20,
    marginTop: Metrics.unitMargin*4,
    textAlign:'center',
    fontWeight: '700'
  },
  text4:{
    fontSize: Metrics.unitFontSize*17,
    marginTop: Metrics.unitMargin*4,
    textAlign:'center'
  },
  text5:{
    fontSize: Metrics.unitFontSize*16,
  },
  ticketText:{
    fontSize: Metrics.unitFontSize*18,
    fontWeight: '700',
    marginTop :Metrics.unitMargin*5,
    marginBottom: Metrics.unitMargin*2
  },
  selectView:{
    flexDirection:'row',
    alignItems:'center'
  },
  textinput:{
    height: Metrics.unitMargin*8,
    borderColor: Colors.border,
    borderWidth:0.5,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    flex:1,
    paddingLeft: Metrics.unitMargin*2,
    fontSize: Metrics.unitFontSize*16
  },
  description:{
    height: Metrics.unitMargin*20,
    borderColor: Colors.border,
    borderWidth:0.5,
    borderRadius: 3,
    paddingLeft: Metrics.unitMargin*2,
    fontSize: Metrics.unitFontSize*16
  },
  blueView:{
    height: Metrics.unitMargin*8,
    width: Metrics.unitMargin*5,
    borderColor: Colors.border,
    borderWidth:0.5,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#3579D5',
    alignItems:'center',
    justifyContent:'center'
  },
  dropshape:{
    width: Metrics.unitMargin*2.5,
    height: Metrics.unitMargin*2.5/12*8
  },
  modal:{
    height:Metrics.unitMargin*140,
    backgroundColor:'white',
    borderRadius: 3,
    paddingVertical: Metrics.unitMargin*3 ,
    paddingHorizontal: Metrics.unitMargin*5
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
    flexDirection: 'row',
    alignItems:'center',
    marginHorizontal: Metrics.unitMargin*4,
    borderWidth: 0.5,
    borderColor: Colors.navy,
    marginBottom: Metrics.unitMargin*4,
    backgroundColor: 'white',
    height: Metrics.unitMargin*24,
    borderRadius:5,
    paddingHorizontal: Metrics.unitMargin*3
  },
  explain:{
    padding: Metrics.unitMargin*3
  },
  image:{
    width: Metrics.unitMargin*17,
    height: Metrics.unitMargin*17,
    alignSelf: 'center'
  },
  text:{
    fontSize: Metrics.unitFontSize*16,
    fontWeight :'700'
  },
  bar:{
    height:0.5,
    backgroundColor: Colors.border,
    marginTop: Metrics.unitMargin*5,
    marginBottom: Metrics.unitMargin
  },
  closeButton:{
    marginBottom: Metrics.unitMargin*10
  },
  closeButton1:{
    marginBottom: Metrics.unitMargin*5
  },
  rowView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: Metrics.unitMargin*2
  },
  smallRowView:{
    flexDirection: 'row',
    alignItems:'center',
  },
  chaudt:{
    width: Metrics.unitMargin*10,
    height: Metrics.unitMargin*10
  },
  text1:{
    fontSize: Metrics.unitFontSize*15,
    width: Metrics.unitMargin*67,
    marginTop: Metrics.unitMargin*2
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
  },
  priceView:{
    height: Metrics.unitMargin*12,
    borderColor: '#898989',
    borderWidth: 0.5,
    borderRadius: 3,
    backgroundColor: '#F7F7F7',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    marginTop:Metrics.unitMargin*3
  },
  greenView:{
    backgroundColor: '#3BE261',
    borderColor: '#1FA73E',
    borderWidth : 0.5,
    alignItems:'center',
    justifyContent: 'center',
    width: Metrics.unitMargin*15,
    height: Metrics.unitMargin*7,
    borderRadius:2
  },
  attachbutton:{
    backgroundColor: '#3579D5',  
    height: Metrics.unitMargin*10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    marginTop: Metrics.unitMargin*5
  },
  buttonText:{
    color:'white',
    fontSize: Metrics.unitFontSize*18,
    fontWeight:'800'
  },
  openbutton:{
    backgroundColor: '#12C652',
    height: Metrics.unitMargin*13,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    marginTop: Metrics.unitMargin*17,
    marginHorizontal: Metrics.unitMargin*6
  },
  price:{
    fontSize: Metrics.unitFontSize*15,
    color: 'white',
    fontWeight:'700'
  }
})
