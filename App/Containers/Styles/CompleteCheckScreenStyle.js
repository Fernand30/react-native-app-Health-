import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  searchView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.unitMargin*3,
    paddingVertical: Metrics.unitMargin*3
  },
  body:{
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  smalRowView:{
    flexDirection: 'row',
    alignItems:'center',
    width: Metrics.unitMargin*15
  },
  rowView:{
    flexDirection :'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal: Metrics.unitMargin*4
  },
  contact:{
    width:Metrics.unitMargin*7,
    height: Metrics.unitMargin*7
  },
  greenarrow:{
    marginBottom: Metrics.unitMargin*3
  },
  rowView1:{
    flexDirection :'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal: Metrics.unitMargin*15
  },  
  mainView:{
    marginHorizontal: Metrics.unitMargin*4,
    marginVertical: Metrics.unitMargin*4,
    padding: Metrics.unitMargin*4,
    borderRadius: 3,
    backgroundColor: 'white',
    marginTop: Metrics.unitMargin*7
  },
  lineView:{
    height: 0.5,
    width: Metrics.unitMargin*40,
    backgroundColor: Colors.bar
  } ,
  button:{
    width: Metrics.unitMargin*50,
    height: Metrics.unitMargin*10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#D8D8D8',
    alignSelf: 'center',
    marginTop: Metrics.unitMargin*5
  },
  beginbutton:{
    width: Metrics.unitMargin*75,
    height: Metrics.unitMargin*14,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#2FC65D',
    alignSelf: 'center'
  },
  buttonText:{
    color:'white'
  },
  beginText:{
    color:'white',
    fontSize: 20,
    fontWeight: '700'
  },
  image:{
    width: Metrics.unitMargin*70,
    height: Metrics.unitMargin*70/188*101,
    alignSelf: 'center',
    marginBottom: Metrics.unitMargin*5
  },
  greenCircle:{
    width:Metrics.unitMargin*10,
    height:Metrics.unitMargin*10,
    borderRadius: Metrics.unitMargin*5,
    backgroundColor: '#32B14F',
    alignItems:'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: Metrics.unitMargin*7,
    right: Metrics.unitMargin*9
  },
  commonText:{
    textAlign: 'center',
    marginBottom: Metrics.unitMargin*5,
    fontSize: Metrics.unitFontSize*16
  },
  smallText:{
    textAlign: 'center',
    marginBottom: Metrics.unitMargin*5,
    fontSize: Metrics.unitFontSize*13
  }
})
