import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import Colors from '../constraints/colors'

const Contact = ({ contact }) => {
  return (
    <TouchableOpacity style={ styles.contactItem }>
      <Image
        style={ styles.image }
        source={ { uri: contact.image }}
      />
      <View style={ styles.infoContainer }>
        <Text style={ styles.name }>
          { contact.name }
        </Text>
        <Text style={ styles.phone }>
          { contact.phone }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contactItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5
  },
  phone: {
    color: '#666',
    fontSize: 16
  }
})

export default Contact
