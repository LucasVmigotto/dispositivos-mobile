import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Contact = ({ contact }) => {
  return (
    <View style={ styles.itemOnList }>
      <Text style={ styles.field }>
        { contact.item.name }
      </Text>
      <Text style={ styles.field }>
        { contact.item.phone }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemOnList: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEE',
    borderColor: '#000',
    borderWidth: .7,
    marginBottom: 8,
    borderRadius: 8
  },
  field: {
    margin: 12
  }
})

export default Contact
