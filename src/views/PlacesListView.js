import React from 'react'
import HeadButton from '../components/HeadButton'
import PlaceItem from '../components/PlaceItem'
import {
  StyleSheet,
  Platform,
  FlatList,
  Text
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'


const PlacesList = props => {
  const places = useSelector(state => state.places.places)
  return (
    <FlatList
      data={ places }
      keyExtractor={ place => place.id }
      renderItem={
        place =>
          <PlaceItem
            image={ place.item.image }
            placeName={ place.item.name }
            address={ null }
            onSelect={ () =>
              props.navigation.navigate('PlaceInfo', {
                placeId: place.item.id,
                placeTitle: place.item.name
              })
            }
          />
      }
    />
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
