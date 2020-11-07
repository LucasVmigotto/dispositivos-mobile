import 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Text
} from 'react-native'
import ENV from './env'
import * as firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(ENV)
}

export default function App() {
  const db = firebase.firestore()

  const [toDoList, setToDoList] = useState([])
  const [toDo, setToDo] = useState('')
  const getToDo = toDo => {
    setToDo(toDo)
  }

  useEffect(() => {
    db.collection('to_do').onSnapshot(snapshot => {
      let aux = []
      snapshot.forEach(doc => {
        aux.push({
          key: doc.id,
          text: doc.data().text,
          date: doc.data().date
        })
      })
      setToDoList(aux)
    })
  }, [])

  const saveToDo = () => {
    db.collection('to_do').add({
      text: toDo,
      date: new Date()
    })
    setToDo('')
  }

  const removeToDo = key => {
    Alert.alert(
      'Delete To Do',
      'Do you really want to remove this To Do?',
      [
        { text: 'Cancel' },
        {
          text: 'Remove',
          onPress: () => db.collection('to_do').doc(key).delete()
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={ styles.input }
        placeholder="Insert your To Do"
        onChangeText={ getToDo }
        value={ toDo }
      />
      <View style={ styles.button }>
        <Button
          title="OK"
          onPress={ saveToDo }
        />
      </View>
      <FlatList
        style={ { marginTop: 4 } }
        data={ toDoList }
        renderItem={
          td => (
            <TouchableOpacity onLongPress={ () => removeToDo(td.item.key) }>
              <View style={ styles.itemList }>
                <Text>{ td.item.text }</Text>
                <Text>{ td.item.date.toDate().toLocaleString() }</Text>
              </View>
            </TouchableOpacity>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  input: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'center',
    width: '80%',
    marginBottom: 8
  },
  button: {
    width: '80%'
  },
  itemList: {
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    alignItems: "center",
    justifyContent: 'center',
    padding: 8
  }
})
