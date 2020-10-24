import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactInput from '../components/ContactInput'
import * as contactsActions from '../store/contactsActions'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const NewContactView = ({ navigation }) => {
  const dispatch = useDispatch()

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
    const location = JSON.stringify(await getLocation())
    dispatch(contactsActions.addContact(
      name, phone, picURI, location
    ))
    navigation.goBack()
  }

  return (
    <ContactInput onAddContact={ addContact }/>
  )
}

export default NewContactView
