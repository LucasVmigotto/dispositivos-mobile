import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  FlatList,
  View
} from 'react-native'

export default function App() {
  const [name, setName] = useState('')
  const putName = name =>
    setName(name)

  const [phone, setPhone] = useState('')
  const putPhone = phone =>
    setPhone(phone)

  const [contactKey, setContactKey] = useState(8)

  const [contacts, setContacts] = useState([])
  const addContact = () => {
    setContactKey(contactKey + 2)
    setContacts(contacts => [
      ...contacts,
      { key: contactKey.toString(), name, phone }
    ])
    putName('')
    putPhone('')
    console.log(contacts)
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.formData }>
        <TextInput
          placeholder="John Doe"
          style={ styles.input }
          onChangeText={putName}
          value={ name }
        />
        <TextInput
          placeholder="9999-9999"
          style={ styles.input }
          onChangeText={putPhone}
          value={ phone }
        />
        <Button
          title="Adicionar"
          onPress={ addContact }
        />
      </View>
      <FlatList
        style={ styles.itemList }
        data={ contacts }
        renderItem={
          contact => (
            <View style={ styles.itemOnList }>
              <Text style={ styles.field }>
                { contact.item.name }
              </Text>
              <Text style={ styles.field }>
                { contact.item.phone }
              </Text>
            </View>
          )
        }
      />
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
  },
  formData: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    paddingTop: 20
  },
  itemList: {
    width: '90%',
    marginTop: 10
  },
  itemOnList: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: .7,
    marginBottom: 8,
    borderRadius: 8
  },
  field: {
    margin: 12
  }
})
