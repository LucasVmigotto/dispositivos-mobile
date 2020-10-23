import React, { useState } from 'react'
import Colors from '../constraints/colors'
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet
} from 'react-native'
import MapPreview from '../components/MapPreview'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const GetLocation = props => {
  const [isLocating, setLocating] = useState(false)
  const [locationSelected, setLocation] = useState()

  const verifyPermissions = async () => {
    const result = await Permissions
      .askAsync(Permissions.LOCATION)
      if (result.status !== 'granted') {
        Alert.alert(
          'Location permission not granted',
          'You must permit the app with location permissions',
          [{ text: 'Ok' }]
        )
        return false
      }
    return true
  }

  const getLocation = async () => {
    const hasPermission = await verifyPermissions()
    if (hasPermission) {
      setLocating(true)
      try {
        const location = await Location
          .getCurrentPositionAsync({ timeout: 8000 })
        console.log(location)
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      } catch (err) {
        Alert.alert(
          'Cant get Location',
          'Location could not be determined',
          [{ text: 'Ok' }]
        )
      } finally {
        setLocating(false)
      }
    }
  }

  return (
    <View style={ styles.getLocation }>
      <MapPreview
        style={ styles.mapPreview }
        location={ locationSelected }
      >
      {
        isLocating
          ? <ActivityIndicator
              size='large'
              color={ Colors.primary }
            />
          : <Text>No location avaliable.</Text>
      }
      </MapPreview>
      <Button
        title='Get Location'
        color={ Colors.primary }
        onPress={ getLocation }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  getLocation: {
    marginBottom: 15
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GetLocation
