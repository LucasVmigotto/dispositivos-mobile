import React from 'react'
import Contact from './Contact'
import { FlatList, StyleSheet } from 'react-native'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <FlatList
      style={ styles.itemList }
      data={ contacts }
      renderItem={
        contact => (
          <Contact
            contact={ contact }
            onSetContact={ onDeleteContact }
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  itemList: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center'
  }
})

export default ContactList
