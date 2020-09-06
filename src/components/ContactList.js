import React from 'react'
import Contact from './Contact'
import { FlatList, StyleSheet } from 'react-native'

const ContactList = ({ contacts }) => {
  return (
    <FlatList
      style={ styles.itemList }
      data={ contacts }
      renderItem={
        contact => (
          <Contact contact={ contact }/>
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  itemList: {
    width: '90%',
    marginTop: 10
  }
})

export default ContactList
