import Place from '../models/Place'

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_PLACE':
      return ({
        places: state.places.concat(
          new Place(
            new Date().toString(),
            action.placeData.name,
            action.placeData.image
          )
        )
      })
    default:
      return state
  }
}
