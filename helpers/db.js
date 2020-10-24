import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('places.db')

export const init = () => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(`
        CREATE TABLE IF NOT EXISTS tb_place (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL,
          image_uri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        );`,
        [],
        () => { res() },
        (_, err) => { rej(err) })
    })
  })
  return promise
}

export const insertPlace = (name, imageUri, address, lat, lng) => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(`
        INSERT INTO tb_place (
          name,
          image_uri,
          address,
          lat,
          lng
        ) VALUES (?,?,?,?,?);
        `,
        [name, imageUri, address, lat, lng],
        (_, result) => { res(result) },
        (_, err) => { rej(err) })
    })
  })
  return promise
}

export const listPlaces = () => {
  const promise = new Promise((res, rej) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tb_place',
        [],
        (_, result) => { res(result) },
        (_, err) => { rej(err) })
    })
  })
  return promise
}
