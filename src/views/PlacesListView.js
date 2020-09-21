import React from 'react'

import {
  View,
  StyleSheet,
  Text, Platform
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeadButton from '../components/HeadButton'

const PlacesList = props => {
  return (
    <View>
      <Text>PlacesList</Text>
    </View>
  )
}

PlacesList.navigationOptions = dataNav => {
  return {
    headerTitle: "Lista de lugares",
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={ HeadButton }
      >
      <Item
        title="Adicionar"
        iconName={
          Platform.OS === 'android'
            ? 'md-add'
            : 'ios-add'
        }
        onPress={
          () => dataNav.navigation.navigate ('NewPlace')
        }
      />
      </HeaderButtons>
  }
}

const styles = StyleSheet.create({

})

export default PlacesList
