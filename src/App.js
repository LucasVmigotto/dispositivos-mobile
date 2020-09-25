
import React from 'react';
import PlacesNavigation from './navigation/PlacesNavigation';
import placesReducer from './store/placesReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk';

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
