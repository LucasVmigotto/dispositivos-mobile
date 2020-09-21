import React, { useState } from 'react'

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native'

const NewPlaceView = props => {
  const [place, setPlace] = useState ('')
  const addPlace = value => {
    setPlace(value)
  }
  return (
      <ScrollView>
        <View style={ styles.form }>
          <Text style={ styles.titulo }>Novo Lugar</Text>
          <TextInput
            style={ styles.textInput }
            onChangeText={ addPlace }
            value={ place }
          />
          <Button
            title="Salvar lugar"
            onPress={
              () => {
                setPlace('')
                console.log(`Botão para adição de lugar clicado: ${place}`)
              }
            }/>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8
  }
})

export default NewPlaceView
