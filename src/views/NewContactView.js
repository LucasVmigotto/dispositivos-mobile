import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactInput from '../components/ContactInput'
import * as contactsActions from '../store/contactsActions'

const NewContactView = ({ navigation }) => {
  const dispatch = useDispatch()
  const addContact = ({ name, phone, picURI }) => {
    dispatch(contactsActions.addContact(
      name, phone, picURI
    ))
    navigation.goBack()
  }
  return (
    <ContactInput onAddContact={ addContact }/>
  )
}

export default NewContactView
