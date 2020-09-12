import React from 'react'
import moment from 'moment'
import { View, Text, StyleSheet } from 'react-native'

const formatToDate = timestamp => timestamp
  ? moment(timestamp).format('hh:mm a')
  : ''

const CityWeather = ({ city, data }) => {
  return (
    <View style={ styles.card }>
      <Text style={ styles.cityTitle }>{ city }</Text>
      <View style={ styles.cardRow }>
        <Text style={ styles.cardCol4 }>
          <Text style={ styles.label }>Nascer do Sol:</Text> { formatToDate(data.sunrise) }
        </Text>
        <Text style={ styles.cardCol4 }>
          <Text style={ styles.label }>Por do Sol:</Text> { formatToDate(data.sunset) }
        </Text>
        <Text style={ styles.cardCol4 }>
          <Text style={ styles.label }>Sensação Térmica:</Text> { data.feelsLike }&#176;C
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cityTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    paddingTop: 30,
    paddingBottom: 30
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#ccc',
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
    justifyContent: 'space-between',
  },
  cardCol4: {
    width: '30%',
    fontSize: '1.3rem'
  },
  cardCol12: {
    width: '100%'
  },
  label: {
    fontSize: '1.4rem',
    fontWeight: 500,
    marginRight: 12
  }
})

export default CityWeather
