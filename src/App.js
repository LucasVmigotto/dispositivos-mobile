
import React from 'react';
import ContactsNavigation from './navigation/ContactsNavigation';
import reduxThunk from 'redux-thunk'
import contactsReducer from './store/contactsReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { init } from './helpers/db'

init()
  .then(() => {
    console.log('Database successully created')
  })
  .catch(() => {
    console.log('An error occurred while creating database')
  })

const rootReducer = combineReducers({
  contacts: contactsReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
  return (
    <Provider store={ store }>
      <ContactsNavigation />
    </Provider>
  )
}
