import {open} from 'react-native-quick-sqlite';
import {AUDIO_FILE_TYPE} from '../../constant/audio';

const db = open({name: 'mydata1', location: '../data'});

interface IInsertOne {
  name: string;
  path: string;
  duration: number;
  listen_number: number;
  transcript: string;
  type: AUDIO_FILE_TYPE;
  topic: string;
  level: number;
}

async function insertOne({
  name,
  path,
  duration,
  level,
  listen_number,
  transcript,
  type,
  topic,
}: IInsertOne) {
  try {
    let dataInsert = await db.executeAsync(
      `
        INSERT INTO audio (name,path,duration,listen_number, transcript, type, topic, level)
    VALUES (?, ?, ?, ?, ?, ?, ?, ? );`,
      [name, path, duration, listen_number, transcript, type, topic, level],
    );
    let {rows} = db.execute('SELECT * FROM audio');
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

async function insertMany(records: IInsertOne[]) {
  let stringInsertValue = '';
  const dataInsert: any[] | undefined = [];
  records.forEach(
    (
      {name, path, duration, listen_number, transcript, type, topic, level},
      index,
    ) => {
      stringInsertValue += '(?, ?, ?, ?, ?, ?, ?, ? )';
      if (index < records.length - 1) stringInsertValue + ',';
      dataInsert.push(
        name,
        path,
        duration,
        listen_number,
        transcript,
        type,
        topic,
        level,
      );
    },
  );

  try {
    let nsert = await db.executeAsync(
      `
        INSERT INTO audio (name,path,duration,listen_number, transcript, type, topic, level)
    VALUES ${stringInsertValue};`,
      dataInsert,
    );
    let {rows} = db.execute('SELECT * FROM audio');
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IFind {
  search?: string;
}

async function find({search}: IFind) {
  try {
    let {rows} = await db.executeAsync('SELECT * FROM audio');

    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IRemove {
  id: number | string;
}
async function remove({id}: IRemove) {
  try {
    let {rows} = await db.executeAsync('DELETE from audio where id = ?', [id]);
    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IUpdateOne {
  id: number | string;
}

async function updateOne({id}: IUpdateOne) {
  try {
    let dataInsert = await db.executeAsync(
      `
        UPDATE audio SET column1 = value1
        WHERE id = ?    
    `,
      [id],
    );
    let {rows} = db.execute('SELECT * FROM audio');
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

export {insertMany, insertOne, updateOne, remove};
