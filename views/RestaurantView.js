import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'
import
  React,
  {
    useState,
    useEffect
  } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
import ENV from '../env'

if (!firebase.apps.length) {
  firebase.initializeApp(ENV)
}

const firestore = firebase.firestore()
const restaurantsCollection = firestore.collection('restaurants')

const RestaurantesTela = props => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    restaurantsCollection.onSnapshot(collection => {
      let aux = []
      collection.docs.forEach(doc => {
        aux.push({
          id: doc.id,
          name: doc.data().name,
          category: doc.data().category,
          city: doc.data().city,
          price: doc.data().price,
          imageURL: doc.data().imageURL,
          rating: doc.data().rating,
          ratingCount: doc.data().ratingCount
        })
      })
      setRestaurants(aux)
    })
  }, [])

  return (
    <View style={ styles.container }>
      <FlatList
        data={ restaurants }
        renderItem={ restaurant => (
          <TouchableWithoutFeedback onPress={ () =>
            props.navigation.navigate('DetailRestaurantView', { restaurant: restaurant })
          }>
            <View style={ styles.restaurantItemView }>
              <Image
                source={ { uri: restaurant.item.imageURL } }
                style={ styles.restaurantImage }
              />
              <Text style={ styles.nameRestaurantText }>
                { restaurant.item.name }
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ) }
        keyExtractor={ restaurant => restaurant.id }
      />
      <TouchableOpacity onPress={ () =>
          props.navigation.navigate('AddRestaurant')
        }
        style={ styles.fab }
      >
        <Text style={ styles.iconFab }>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nameRestaurantText: {
    fontSize: 16
  },
  restaurantItemView: {
    padding: 4,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 4,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center'
  },
  restaurantImage: {
    width: '60%',
    height: 100,
    marginBottom: 8
  },
  container: {
    flex: 1,
    padding: 20
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
    fontSize: 20,
    color: 'white'
  }
})

export default RestaurantesTela
