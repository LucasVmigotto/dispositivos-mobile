import Contact from '../models/Contact'
import { ADD_CONTACT, LIST_CONTACTS } from './contactsActions'

const initialState = {
  contacts: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return ({
        contacts: state.contacts.concat(
          new Contact({
            id: action.data.id.toString(),
            name: action.data.name,
            phone: action.data.phone,
            image: action.data.image,
            location: action.data.location,
            createAt: action.data.createAt
          })
        )
      })
    case LIST_CONTACTS:
      return {
        contacts: action.contacts
          .map(el => new Contact({
            id: el.id.toString(),
            name: el.name,
            phone: el.phone,
            image: el.image_uri,
            location: JSON.parse(el.location),
            createAt: el.create_at
          }))
      }
    default:
      return state
  }
}
