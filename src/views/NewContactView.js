import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactInput from '../components/ContactInput'
import * as contactsActions from '../store/contactsActions'

const NewContactView = ({ navigation }) => {
  const dispatch = useDispatch()
  const [id, setId] = useState(10)
  const addContact = ({ name, phone, picURI }) => {
    setId(id + 2)
    dispatch(contactsActions.addContact(
      id.toString(), name, phone, picURI
    ))
    navigation.goBack()
  }
  return (
    <ContactInput onAddContact={ addContact }/>
  )
}

export default NewContactView
