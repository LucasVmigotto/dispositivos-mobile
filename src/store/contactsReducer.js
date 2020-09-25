import Contact from '../models/Contact'

const initialState = {
  contacts: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CONTACT':
      return ({
        contacts: state.contacts.concat(
          new Contact({ ...action.data })
        )
      })
    default:
      return state
  }
}
