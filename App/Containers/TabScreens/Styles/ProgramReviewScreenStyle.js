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
    fontSize: Metrics.unitFontSize*20,
    fontWeight :'700',
    textAlign:'center'
  },
  review:{
    width: Metrics.unitMargin*20,
    height: Metrics.unitMargin*20,
    alignSelf: 'center',
    marginVertical: Metrics.unitMargin*3,
  },
  text2:{
    fontSize: Metrics.unitFontSize*16,
    textAlign:'center',
  },
  reviewView:{
    borderColor: Colors.border,
    backgroundColor:'white',
    borderWidth:0.5,
    paddingHorizontal:Metrics.unitMargin*3,
    borderRadius:3,
    marginTop: Metrics.unitMargin*3
  },
  button:{
    width: Metrics.unitMargin*50,
    height: Metrics.unitMargin*40/4,
    backgroundColor: Colors.green,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 3,
    alignSelf:'center',
    marginTop:Metrics.unitMargin*5,
    marginBottom:Metrics.unitMargin*7
  },
  buttonText:{
    color:'white',
    fontSize: Metrics.unitFontSize*18,
    fontWeight: '700'
  },
  text3:{
    fontSize: Metrics.unitFontSize*15,
    textAlign:'center'
  },
  text4:{
    fontSize: Metrics.unitFontSize*14,
    color: Colors.border,
    textAlign:'center',
    marginVertical:Metrics.unitMargin*1
  },
  eachView:{
    borderColor: Colors.border,
    borderBottomWidth: 1,
    marginTop: Metrics.unitMargin*1,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingVertical: Metrics.unitMargin*2
  },
  textinput:{
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 3,
    marginHorizontal: Metrics.unitMargin,
    paddingLeft: Metrics.unitMargin*2,
    height: Metrics.unitMargin*20,
    fontSize: Metrics.unitFontSize*14,
    marginTop: Metrics.unitMargin*2
  }
 
})
