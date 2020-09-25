export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (name, image) => {
  return {
    type: ADD_PLACE,
    placeData: {
      name,
      image
    }
  }
}
