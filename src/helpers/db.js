import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('contact.db')

export const init = () => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS tb_contact (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          image_uri TEXT NOT NULL,
          location TEXT NOT NULL,
          create_at TEXT NOT NULL
        );`,
        [],
        () => { res() },
        (_, err) => { rej(err) })
    })
  })
  return promise
}

export const insertContact = (name, phone, imageUri, location, createAt) => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(`
        INSERT INTO tb_contact (
          name,
          phone,
          image_uri,
          location,
          create_at
        ) VALUES (?,?,?,?,?);
        `,
        [name, phone, imageUri, JSON.stringify(location), createAt],
        (_, result) => { res(result) },
        (_, err) => { rej(err) })
    })
  })
  return promise
}

export const listContacts = () => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tb_contact',
        [],
        (_, result) => { res(result) },
        (_, err) => { rej(err) })
    })
  })
  return promise
}
