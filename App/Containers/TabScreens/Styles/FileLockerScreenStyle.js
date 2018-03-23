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
    paddingHorizontal: Metrics.unitMargin*3
  },
  searchView: {
    backgroundColor: Colors.background,
    paddingBottom :Metrics.unitMargin*3,
    borderColor: Colors.bar,
    borderBottomWidth: 1,
    paddingHorizontal: Metrics.unitMargin*5
  },
  inputView:{
    height: Metrics.unitMargin*7,
    flexDirection:  'row',
    paddingLeft: Metrics.unitMargin*3,
    backgroundColor: 'white',
    borderRadius: 3,
    alignItems: 'center'
  },
  search:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4 
  },
  titleText:{
    fontSize: Metrics.unitFontSize*20,
    fontWeight: '600'
  },
  textinput:{
    flex:1,
    marginLeft :Metrics.unitMargin*3,
    fontSize: Metrics.unitFontSize*14,
  },
  headerCenterView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  renderView:{
    backgroundColor: 'white',
    borderRadius :3,
    padding: Metrics.unitMargin*3,
    width: Metrics.unitMargin*43,
    marginLeft: Metrics.unitMargin*5,
    marginTop: Metrics.unitMargin*5,
    borderColor: '#E2E2E2',
    borderWidth:1
  },
  image:{
    width: Metrics.unitMargin*37,
    height: Metrics.unitMargin*20
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
  wrapView:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  menu:{
    width: Metrics.unitMargin*5,
    height: Metrics.unitMargin*5/19*16
  },
  backArrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3/13*22
  },
  button:{
    borderRadius: 3,
    width: Metrics.unitMargin*40,
    height: Metrics.unitMargin*10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chaudt:{
    width: Metrics.unitMargin*7,
    height: Metrics.unitMargin*7
  },
  nameText:{
    fontSize: Metrics.unitFontSize*12
  },
  name:{
    marginLeft: Metrics.unitMargin*2
  },
  smallRow:{
    flexDirection:'row',
    marginTop: Metrics.unitMargin*3,
    alignItems:'center'
  },
  buttonText:{
    color: 'white',
    fontSize: Metrics.unitFontSize*18,
    fontWeight: '800'
  },
  categoryView:{
    height: Metrics.unitMargin*10,
    justifyContent:'center',
    paddingLeft:Metrics.unitMargin*5
  },
  category:{
    color: '#656565',
    fontSize: Metrics.unitFontSize*16
  },
  itemView:{
    height: Metrics.unitMargin*10,
    justifyContent:'center',
    paddingHorizontal:Metrics.unitMargin*5,
    backgroundColor:'white',
    borderColor :'#BCBCBC',
    borderBottomWidth :0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  itemView1:{
    height: Metrics.unitMargin*10,
    justifyContent:'center',
    paddingHorizontal:Metrics.unitMargin*5,
    borderColor :'#696969',
    borderBottomWidth :1.5,
    borderTopWidth: 1.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  item:{
    fontSize: Metrics.unitFontSize*16
  },
  item1:{
    fontSize: Metrics.unitFontSize*16,
    width: Metrics.unitMargin*25
  },
  reditem:{
    fontSize: Metrics.unitFontSize*16,
    color: '#B42020'
  },
  greenitem:{
    fontSize: Metrics.unitFontSize*16,
    color: '#0A7426'
  },
  greenText:{
    color: '#17AA10',
    fontSize: Metrics.unitFontSize*16
  },
  explainView:{
    paddingTop: Metrics.unitMargin*3,
    paddingBottom: Metrics.unitMargin*4,
    justifyContent:'center',
    paddingLeft: Metrics.unitMargin*5
  },
  explain:{
    fontSize: Metrics.unitFontSize*13,
    textAlign:'center',
    marginVertical: Metrics.unitMargin
  },
  explain1:{
    fontSize: Metrics.unitFontSize*12,
    textAlign:'center',
    marginVertical: Metrics.unitMargin,
  },
  bar:{
    height: 0.5,
    backgroundColor:Colors.bar
  },
  rowView:{
    flexDirection:'row',
    alignItems:'center'
  },
  listView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: Metrics.unitMargin*4,
    borderColor: '#95989A',
    borderTopWidth: 0.5,
    paddingVertical: Metrics.unitMargin,
    backgroundColor:'white'
  },
  descriptionView:{
    paddingHorizontal: Metrics.unitMargin*4,
    borderColor: '#95989A',
    borderTopWidth: 0.5,
    paddingVertical: Metrics.unitMargin,
    backgroundColor:'white'
  },
  modal:{
    flex: 1 , 
    backgroundColor:'white',
    marginVertical: Metrics.unitMargin*10,
    borderRadius:3,
    paddingTop:Metrics.unitMargin*5
  },
  modalTitle:{
    fontSize: Metrics.unitFontSize*20,
    fontWeight :'800',
    textAlign:'center'
  },  
  modalexplain:{
    fontSize: Metrics.unitFontSize*18,
    textAlign:'center',
    marginHorizontal: Metrics.unitMargin*3,
    marginBottom: Metrics.unitMargin*3
  }, 
  listText:{
    fontSize: Metrics.unitFontSize*16,
  },
  descriptionText:{
    fontSize: Metrics.unitFontSize*14,
    marginTop: Metrics.unitMargin
  },    
  explainImage:{
    width: Metrics.unitMargin*75,
    alignSelf:'center',
    height: Metrics.unitMargin*42,
    marginVertical: Metrics.unitMargin*3
  },
  Token:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4,
    marginRight: Metrics.unitMargin*2
  },
  buttonView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    flex:1
  },
  emptyView:{
    height: Metrics.unitMargin*8,
    backgroundColor:'#F7F7F7',
    borderColor: '#95989A',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: Metrics.unitMargin*3
  },
  bank:{
    width: Metrics.unitMargin*8,
    height: Metrics.unitMargin*8/70*72,
  },
  ether:{
    width: Metrics.unitMargin*4,
    height: Metrics.unitMargin*4/38*64,
  },
  arrow:{
    width: Metrics.unitMargin*3,
    height: Metrics.unitMargin*3,
  },
  imageView:{
    width: Metrics.unitMargin*20,
    alignItems:'center'
  },
   
})
