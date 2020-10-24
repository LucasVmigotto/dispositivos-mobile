import * as FileSystem from 'expo-file-system'
import { insertContact, listContacts } from '../helpers/db'

export const ADD_CONTACT = 'ADD_CONTACT'

export const addContact = (name, phone, image, location) => {
  console.log({
    name, phone, image, location
  })
  return async dispatch => {
    const filename = image.split('/').pop()
    const newPath = FileSystem.documentDirectory + filename
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      })
      const createAt = new Date().toISOString()
      const resultDB = await insertContact(
        name, phone, newPath, location, createAt
      )
      dispatch({
        type: ADD_CONTACT,
        data: {
          id: resultDB.insertId,
          name,
          phone,
          image: newPath,
          location,
          createAt
        }
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}

export const LIST_CONTACTS = 'LIST_CONTACTS'

export const getContacts = () => {
  return async dispatch => {
    try {
      const resultDB = await listContacts()
      console.log(resultDB.rows._array)
      dispatch({
        type: LIST_CONTACTS,
        contacts: resultDB.rows._array
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
