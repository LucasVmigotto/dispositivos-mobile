import CityInput from './components/CityInput'
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const API_KEY_WEATHER = '233d5607967b87c35d4c9dafa40c924d'
const API_KEY_LOCATION = '390e92438973465ead1291dec62b525b'
const LOCATION_API = 'https://api.opencagedata.com/geocode/v1/json?q='

const prepareCityName = cityName =>
  cityName
    .split(' ')
    .reduce(
      (prv, crr, i) => i === 0 ? crr : `${prv}%20${crr}`
    , '')

export default function App() {
  const [cityData, setCityData] = useState({})
  const getCityData = ({ name }) => {
    fetch(`${LOCATION_API}${prepareCityName(name)}&key=${API_KEY_LOCATION}`)
      .then(res => res.json())
      .then(res => {
        setCityData(res.results[0].geometry)
      })
  }

  return (
    <View style={ styles.container }>
      <CityInput onCitySelected={ getCityData }/>
      <Text>{ JSON.stringify(cityData) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  }
})
