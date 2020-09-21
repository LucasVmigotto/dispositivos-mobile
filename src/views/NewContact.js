import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ContactInput from '../components/ContactInput'

const NewContact = props => {
  const [contactKey, setContactKey] = useState(8)
  const [contacts, setContacts] = useState([])
  const addContact = contact => {
    setContactKey(contactKey + 2)
    setContacts(contacts => [
      ...contacts,
      { key: contactKey.toString(), ...contact }
    ])
    console.log(`Contato adicionado: ${JSON.stringify(contact)}`)
  }
  return (
    <View>
      <ContactInput onAddContact={ addContact }/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default NewContact
