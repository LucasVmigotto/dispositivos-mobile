import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native'
import * as placesActions from '../store/placesActions'
import TakePicture from '../components/TakePicture'
import GetLocation from '../components/GetLocation'


const NewPlaceView = props => {
  const dispatch = useDispatch()
  const [picURI, setPicURI] = useState()
  const pictureHandler = uri => {
    setPicURI(uri)
  }
  const [place, setPlace] = useState ('')
  const setPlaceChange = place => {
    setPlace(place)
  }
  const addPlace = () => {
    dispatch(placesActions.addPlace(place, picURI))
    console.log(`
      Place: ${place}
      URI: ${picURI}
    `)
    props.navigation.goBack()
  }
  return (
      <ScrollView>
        <View style={ styles.form }>
          <Text style={ styles.titulo }>Novo Lugar</Text>
          <TextInput
            style={ styles.textInput }
            onChangeText={ setPlaceChange }
            value={ place }
          />
          <TakePicture onTakePicture={ pictureHandler }/>
          <GetLocation />
          <Button
            title="Salvar lugar"
            onPress={ addPlace }
          />
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
