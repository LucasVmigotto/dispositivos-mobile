import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeadButton from '../components/HeadButton'
import ContactList from '../components/ContactList'

const ContactListView = props => {
  const [contacts, setContacts] = useState([
    { key: '10', name: 'Lucas', phone: '99999999' }
  ])
  const removeContact = key => {
    setContacts(contacts.filter(el =>
      el.key !== key))
  }

  return (
    <View>
      <ContactList
        contacts={ contacts }
        onDeleteContact={ removeContact }
      />
    </View>
  )
}

ContactListView.navigationOptions = dataNav => {
  return {
    headerTitle: "Lista de contatos",
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={ HeadButton }
      >
      <Item
        title="Adicionar"
        iconName={
          Platform.OS === 'android'
            ? 'md-add'
            : 'ios-add'
        }
        onPress={
          () => dataNav.navigation.navigate ('NewContact')
        }
      />
      </HeaderButtons>
  }
}

const styles = StyleSheet.create({})

export default ContactListView
