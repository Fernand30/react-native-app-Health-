import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  icon: {
  	width: Metrics.unitMargin*5,
  	height: Metrics.unitMargin*5
  }
})
