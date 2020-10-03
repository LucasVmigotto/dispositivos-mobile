import * as FileSystem from 'expo-file-system'
import { insertContact, listContacts } from '../helpers/db'

export const ADD_CONTACT = 'ADD_CONTACT'

export const addContact = (name, phone, image) => {
  return async dispatch => {
    const filename = image.split('/').pop()
    const newPath = FileSystem.documentDirectory + filename
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath
      })
      const resultDB = await insertContact(
        name, phone, newPath
      )
      dispatch({
        type: ADD_CONTACT,
        data: {
          id: resultDB.insertId,
          name,
          phone,
          image: newPath
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
