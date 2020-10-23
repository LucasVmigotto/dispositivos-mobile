
import React from 'react';
import PlacesNavigation from './navigation/PlacesNavigation';
import placesReducer from './store/placesReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk';
import { init } from './helpers/db'

init()
  .then(() => {
    console.log('Database successfully created.')
  })
  .catch(err => {
    console.log('An error occurred during the database created')
    console.log(err)
  })

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
  return (
    <Provider store={ store }>
      <PlacesNavigation />
    </Provider>
  )
}
