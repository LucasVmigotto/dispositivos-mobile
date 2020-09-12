import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const CityInput = ({ onCitySelected }) => {
  const [name, setName] = useState('')
  const putName = name =>
    setName(name)

  return (
    <View style={ styles.inputRow }>
      <TextInput
        placeholder="Nowhereville"
        style={ styles.input }
        onChangeText={ putName }
        value={ name }
      />
      <Button
        title="Get"
        onPress={ () => { onCitySelected({ name }) } }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    paddingTop: 20
  }
})

export default CityInput
