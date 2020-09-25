
import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

const PlaceInfoView = props => {
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  )
}

PlaceInfoView.navigationOptions = dataNav => {
  return {
    headerTitle: dataNav.navigation.getParam('placeTitle')
  }
}

const styles = StyleSheet.create({

})

export default PlaceInfoView
