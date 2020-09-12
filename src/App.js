import React, { useState } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { camelizeKeys } from 'humps'

import CityInput from './components/CityInput'
import CityWeather from './components/CityWeather'
import { prepareCityName } from './utils/index'

const LOCATION_API = 'https://api.opencagedata.com/geocode/v1/json?q='
const API_KEY_LOCATION = '390e92438973465ead1291dec62b525b'
const WEATHER_API = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY_WEATHER = 'e34280913cd763f37b7b1f3eab02124c'

export default function App() {
  const [cityData, setCityData] = useState({})
  const [cityName, setCityName] = useState('')
  const [onRequest, isOnRequest] = useState(false)

  const getCityData = async ({ name }) => {
    setCityName(name)
    isOnRequest(true)
    Keyboard.dismiss()
    fetch(`${LOCATION_API}${prepareCityName(name)}&key=${API_KEY_LOCATION}`)
      .then(res => res.json())
      .then(async res => {
        const { lat, lng} = res.results[0].geometry
        return fetch(`${WEATHER_API}?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY_WEATHER}`)
      })
      .then(res => res.json())
      .then(res => { setCityData(camelizeKeys({ ...res.current })) })
      .finally(() => {
        isOnRequest(false)
      })
  }

  return (
    <View style={ styles.container }>
      <CityInput
        onRequest={ onRequest }
        onCitySelected={ getCityData }/>
      <CityWeather
        style={ styles.viewerInfo }
        city={ cityName }
        data={ cityData }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100
  },
  viewerRow: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row'
  }
})
