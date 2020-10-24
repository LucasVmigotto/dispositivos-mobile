import Place from '../models/Place'
import { ADD_PLACE, LIST_PLACES } from './placesActions'

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return ({
        places: state.places.concat(
          new Place(
            action.placeData.id.toString(),
            action.placeData.name,
            action.placeData.image
          )
        )
      })
    case LIST_PLACES:
      return {
        places: action.places
          .map(el => new Place(el.id.toString(), el.name, el.image))
      }
    default:
      return state
  }
}
