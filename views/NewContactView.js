import 'firebase/firestore'
import React from 'react'
import ContactInput from '../components/ContactInput'
import * as FileSystem from 'expo-file-system'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as firebase from 'firebase'

const NewContactView = ({ navigation }) => {
  const db = firebase.firestore()

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
      try {
        const location = await Location
          .getCurrentPositionAsync({ timeout: 8000 })
        return {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
      } catch (err) {
        Alert.alert(
          'Cant get Location',
          'Location could not be determined',
          [{ text: 'Ok' }]
        )
        return null
      }
    }
  }

  const addContact = async ({ name, phone, picURI }) => {
    try {
      const filename = picURI.split('/').pop()
      const newPath = FileSystem.documentDirectory + filename
      await FileSystem.moveAsync({
        from: picURI,
        to: newPath
      })
      const location = JSON.stringify(await getLocation())
      db.collection('contacts')
        .add({
          name,
          phone,
          picURI: newPath,
          location,
          createAt: new Date().toISOString()
        }).then(docRef => {
          docRef.update({
            id: docRef.id
          })
          navigation.goBack()
        })
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <ContactInput onAddContact={ addContact }/>
  )
}

export default NewContactView
