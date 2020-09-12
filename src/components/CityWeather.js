import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createURI, formatToDate } from '../utils/index'

const CityWeather = ({ city, data }) => {
  const getURI = () =>
    data.weather
      ? { uri: createURI(data.weather[0].icon) }
      : { uri: '' }

  return (
    <View style={ styles.card }>
      <View style={ styles.cardRow }>
        <Text style={ styles.cityTitle }>{ city }</Text>
        <Image
          style={ styles.cardIcon }
          source={ getURI() }
        />
      </View>
      <View style={ styles.cardColumn }>
        <Text style={ styles.cardCol }>
          <Text style={ styles.label }>Nascer do Sol:</Text> { formatToDate(data.sunrise) }
        </Text>
        <Text style={ styles.cardCol }>
          <Text style={ styles.label }>Por do Sol:</Text> { formatToDate(data.sunset) }
        </Text>
        <Text style={ styles.cardCol }>
          <Text style={ styles.label }>Sensação Térmica:</Text> { data.feelsLike }&#176;C
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardIcon: {
    width: '20%'
  },
  cityTitle: {
    width: '60%',
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 30,
    paddingBottom: 30
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#aaa',
    width: '90%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.32,
    backgroundColor: 'white',
    elevation: 4,
    padding: 12,
    borderRadius: 12
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardCol: {
    width: '100%',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginRight: 12
  }
})

export default CityWeather
