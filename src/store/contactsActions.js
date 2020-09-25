export const ADD_CONTACT = 'ADD_CONTACT'

export const addContact = (id, name, phone, image) => {
  return {
    type: ADD_CONTACT,
    data: {
      id,
      name,
      phone,
      image
    }
  }
}
