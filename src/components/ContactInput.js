import React, { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'

const ContactInput = ({ onAddContact }) => {
  const [name, setName] = useState('')
  const putName = name =>
    setName(name)

  const [phone, setPhone] = useState('')
  const putPhone = phone =>
    setPhone(phone)

  return (
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
        onPress={ () => { onAddContact({ name, phone }) } }
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default ContactInput
