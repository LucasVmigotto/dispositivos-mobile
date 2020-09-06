import React, { useState } from 'react'
import ContactInput from './components/ContactInput'
import ContactList from './components/ContactList'
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  FlatList,
  View
} from 'react-native'

export default function App() {
  const [contactKey, setContactKey] = useState(8)
  const [contacts, setContacts] = useState([])
  const addContact = contact => {
    setContactKey(contactKey + 2)
    setContacts(contacts => [
      ...contacts,
      { key: contactKey.toString(), ...contact }
    ])
  }

  return (
    <View style={ styles.container }>
      <ContactInput onAddContact={ addContact }/>
      <ContactList contacts={ contacts }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  }
})
