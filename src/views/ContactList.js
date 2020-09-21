import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeadButton from '../components/HeadButton'

const ContactList = props => {
  return (
    <View>
      <Text>Lista de contatos</Text>
    </View>
  )
}

ContactList.navigationOptions = dataNav => {
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

const styles = StyleSheet.create({

})

export default ContactList
