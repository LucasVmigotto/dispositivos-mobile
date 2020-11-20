import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import * as firebase from 'firebase'
import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Picker,
  Slider,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const firestore = firebase.firestore()
const storage = firebase.storage()
const database = firebase.database()

const restaurantsCollection = firestore.collection("restaurants")
const imagesRef = storage.ref("images")
const imagesCounterRef = database.ref('imagesCounter')

const AddRestaurant = props => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('Category')
  const [price, setPrice] = useState(1)
  const [imageURI, setImageURI] = useState()

  const takePicture = async () => {
    let picture = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      base64: true
    })
    setImageURI(picture.uri)
  }

  const saveRestaurant = async () => {
    const picture = await fetch(imageURI);
    const blob = await picture.blob();
    const idImage = (await imagesCounterRef.once('value'))
      .val()
      .toString()
    await imagesRef
      .child(idImage)
      .put(blob)
    const downloadURL = await imagesRef
      .child(idImagem)
      .getDownloadURL()
    imagesCounterRef.set(+idImagem + 1)
    restaurantsCollection.add({
      name: name,
      city: city,
      imageURI: downloadURL,
      price: price,
      category: category
    })
  }

  return (
    <View style={ styles.container }>
      <TextInput
        style={ styles.nameInput }
        placeholder="Restaurant's Name"
        onChangeText={ name => setName(name) }
        value={ name }
      />
      <View style={ styles.cityAndCategoryView }>
          <TextInput
            style={ styles.cityInput }
            placeholder="City"
            onChangeText={ city => setCity(city) }
            value={ city }
          />
          <Picker
            selectedValue={ category }
            style={ styles.categoryPicker }
            onValueChange={
              (value, index) => { setCategory(value) }
            }
            mode="dropdown"
          >
            <Picker.Item
              label="Category"
              value="Category"
            />
            <Picker.Item
              label="Japanese"
              value="Japanese"
            />
            <Picker.Item
              label="Brazilian"
              value="Brazilian"
            />
          </Picker>
      </View>
      <View style={ styles.priceView }>
        <Text>Price</Text>
        <Slider
          style={ styles.priceView }
          minimumValue={ 1 }
          maximumValue={ 5 }
          value={ price }
          step={ 1 }
          onValueChange={ price => setPrice(price) }
        />
      </View>
      <View style={ styles.previewImage }>
        {
          imageURI
            ? <Image
                style={ {
                  width: '100%',
                  height: '100%'
                } }
                source={ { uri: imageURI } }
              />
            : <Text>No Image</Text>
        }
      </View>
      <View style={ styles.takePicture }>
        <Button
          title="Choose Picture"
          onPress={ () => { takePicture() } }
        />
      </View>
      <TouchableOpacity
        style={ styles.fab }
        onPress={ () => {
          saveRestaurant()
          props.navigation.goBack()
        } }
      >
        <Text style={ styles.iconFab }>
          OK
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nameInput: {
    width: '90%',
    textAlign: 'center',
    padding: 4,
    fontSize: 16,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginVertical: 8,
    alignSelf: 'center'
  },
  cityAndCategoryView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8
  },
  cityInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    width: '40%'
  },
  categoryPicker: {
    width: '40%'
  },
  priceView: {
    marginVertical: 8,
    alignItems: 'center'
  },
  priceSlider: {
    width: '95%',
    marginVertical: 8
  },
  previewImage: {
    alignSelf: 'center',
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#CCC',
    marginVertical: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  takePicture: {
    width: '90%',
    alignSelf: 'center'
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  iconFab: {
    fontSize: 14,
    color: 'white'
  }
})

export default AddRestaurant
