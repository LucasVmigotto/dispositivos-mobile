import 'firebase/firestore'
import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, Button, TextInput } from 'react-native'
import Modal, { ModalContent } from 'react-native-modals'
import * as firebase from 'firebase'

const firestore = firebase.firestore()
const restaurantsCollection = firestore.collection('restaurants')

const DetailRestaurantView = props => {
  const [modalVisible, setModalVisible] = useState(false)
  const [ratingTyped, setRatingTyped] = useState('')

  const restaurant = props.navigation.state.params.restaurant
  const ratingsCollections = restaurantsCollection
    .doc(restaurant.item.id)
    .collection('ratings')

    const submitRating = () => {
      return firestore.runTransaction(transaction => {
        return transaction.get(restaurantsCollection
          .doc(restaurant.item.id))
          .then(doc => {
            let newRating = ratingsCollections.doc()
            const newAverage =
              (
                doc.data().rating *
                doc.data().ratingCount +
                ratingTyped
              ) / (doc.data().ratingCount + 1)
            transaction.update(restaurantsCollection
              .doc(restaurant.item.id), {
                ratingCount: doc.data().ratingCount + 1,
                rating: newAverage
              })
            setRatingTyped('')
            return transaction.set(newRating, {
              data: new Date(),
              rating: ratingTyped
            })
          })
      })
    }

  return (
    <View style={ styles.container }>
      <Image
        source={ { uri: restaurant.item.imageURL } }
        style={ styles.restaurantImage }
      />
      <Text style={ styles.nameAndRatingRestaurantText }>
        { restaurant.item.name } : { restaurant.item.rating }
      </Text>
      <View style={ styles.ratingButton }>
        <Button
          title="Rating"
          onPress={ () => setModalVisiBle(true) }
        />
      </View>
      <Modal
        visible={ modalVisible }
        onTouchOutside={ () => setModalVisible(false) }
      >
        <ModalContent>
          <View>
            <TextInput
              style={ styles.ratingTextInput }
              placeholder="Insert rate between 1 and 5"
              onChangeText={ t => setRatingTyped(t) }
              value={ ratingTyped }
            />
            <Button
              title="OK"
              onPress={ () => {
                submitRating()
                setModalVisible(false)
                props.navigation.goBack()
              } }
            />
          </View>
        </ModalContent>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  restaurantImage: {
    width: '90%',
    height: 300,
    marginBottom: 8
  },
  nameAndRatingRestaurantText: {
    fontSize: 18,
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    paddingBottom: 4,
    marginBottom: 4,
    width: '90%',
    textAlign: 'center'
  },
  ratingButton: {
    width: '90%'
  },
  ratingTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    padding: 4,
    textAlign: 'center',
    marginBottom: 4
  }
})

export default DetailRestaurantView
