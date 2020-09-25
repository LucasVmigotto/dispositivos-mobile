import React from 'react'
import Contact from './Contact'
import { FlatList, StyleSheet } from 'react-native'

const ContactList = ({ contacts }) => {
  return (
    <FlatList
      data={ contacts }
      keyExtractor={ contact => contact.id }
      renderItem={
        contact =>
          <Contact contact={ { ...contact.item } } />
      }
    />
  )
}

const styles = StyleSheet.create({})

export default ContactList
