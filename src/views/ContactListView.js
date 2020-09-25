import React from 'react'
import HeadButton from '../components/HeadButton'
import ContactList from '../components/ContactList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

const ContactListView = props => {
  const contacts = useSelector(state => state.contacts.contacts)

  return (
    <ContactList contacts={ contacts }/>
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

export default ContactListView
