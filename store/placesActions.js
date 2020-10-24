import * as FileSystem from 'expo-file-system'
import { insertPlace, listPlaces } from '../helpers/db'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (name, image) => {
  return async dispatch => {
    const filename = image.split('/').pop()
    const newPath = FileSystem.documentDirectory + filename
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      })
      const resultDB = await insertPlace(
        name,
        newPath,
        'Torre Eiffel',
        48.8584,
        2.2945
      )
      console.log(resultDB)
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: resultDB.insertId,
          name,
          image: newPath
        }
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export const LIST_PLACES = 'LIST_PLACES'

export const getPlaces = () => {
  return async dispatch => {
    try {
      const resultDB = await listPlaces()
      dispatch({
        type: LIST_PLACES,
        places: resultDB.rows._array
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
