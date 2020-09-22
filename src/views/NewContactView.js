import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ContactInput from '../components/ContactInput'

const NewContactView = props => {
  const [contactKey, setContactKey] = useState(10)
  const [contacts, setContacts] = useState([])
  const addContact = contact => {
    setContactKey(contactKey + 2)
    setContacts(contacts => [
      ...contacts,
      { key: contactKey.toString(), ...contact }
    ])
    console.log(`Contato adicionado: ${JSON.stringify({ key: contactKey.toString(), ...contact })}`)
    props.navigation.navigate('ContactList', { contacts })
  }
  return (
    <View>
      <ContactInput onAddContact={ addContact }/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default NewContactView
