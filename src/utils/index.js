import moment from 'moment'

export const formatToDate = timestamp => timestamp
  ? moment(timestamp * 1000).format('HH:MM')
  : ''

export const createURI = icon =>
  `https://openweathermap.org/img/wn/${icon}.png`

export const prepareCityName = cityName =>
  cityName
    .split(' ')
    .reduce(
      (prv, crr, i) => i === 0 ? crr : `${prv}%20${crr}`
    , '')
