import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const RestaurantesTela = props => {
  return (
    <View style={ styles.container }>
      <Text>Restaurantes</Text>
      <TouchableOpacity
        onPress={
          () => props.navigation.navigate('AdicionarRestauranteTela')
        }
        style={ styles.fab }
      >
        <Text style={ styles.iconeFab }>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  iconeFab: {
    fontSize: 20,
    color: 'white'
  }
})

export default RestaurantesTela
