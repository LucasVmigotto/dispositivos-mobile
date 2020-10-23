import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ENV from '../env'

const MapPreview = props => {
  const mapURI = (lat, lng, key = ENV.API_KEY) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${key}`

  let mapURL

  if (props.location) {
    mapURL = mapURI(props.location.lat, props.location.lng)
    console.log(mapURI(props.location.lat, props.location.lng))
  }

  return (
    <View style={ { ...styles.mapPreview, ...props.style } }>
      {
        props.localizacao
          ?
            <Image
              style={ mapImage }
              source={ { uri: mapURL } }
            />
          : props.children
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapImage: {
    width: '100%',
    height: '100%'
  }
})

export default MapPreview
