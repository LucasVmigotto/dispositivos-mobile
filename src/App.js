
import React from 'react';
import ContactsNavigation from './navigation/ContactsNavigation';
import reduxThunk from 'redux-thunk'
import contactsReducer from './store/contactsReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

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
