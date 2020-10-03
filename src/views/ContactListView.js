import React, { useEffect } from 'react'
import HeadButton from '../components/HeadButton'
import ContactList from '../components/ContactList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'
import * as contactsActions from '../store/contactsActions'

const ContactListView = props => {
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(contactsActions.getContacts())
  }, [dispatch])

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
