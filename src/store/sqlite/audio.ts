import { open } from 'react-native-quick-sqlite';
import { AUDIO_FILE_TYPE } from '../../constant/audio';
import { db } from './sqliteConfig';
import { IAudio } from '../zustand/usePlayerStore';

async function insertOne({
  name,
  path,
  duration,
  level,
  listen_number,
  transcript,
  type,
  topic,
}: IAudio) {
  try {
    let dataInsert = await db.executeAsync(
      `
        INSERT INTO audio (name,path,duration,listen_number, transcript, type, topic, level)
    VALUES (?, ?, ?, ?, ?, ?, ?, ? );`,
      [name, path, duration, listen_number, transcript, type, topic, level],
    );
    return dataInsert.insertId;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

async function insertMany(records: IAudio[]) {
  let stringInsertValue = '';
  const dataInsert: any[] | undefined = [];
  records.forEach(
    (
      { name, path, duration, listen_number, transcript, type, topic, level },
      index,
    ) => {
      const isNotEnd = index < records.length - 1;
      stringInsertValue += isNotEnd
        ? '(?, ?, ?, ?, ?, ?, ?, ? ) , '
        : '(?, ?, ?, ?, ?, ?, ?, ? )';

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
    const queryString = `
    INSERT INTO audio (name,path,duration,listen_number, transcript, type, topic, level)
VALUES ${stringInsertValue};`;

    let nsert = await db.executeAsync(queryString, dataInsert);
    let { rows } = db.execute('SELECT * FROM audio');

    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IFind {
  search?: string;
}

async function find({ search }: IFind): Promise<any> {
  try {
    let { rows } = await db.executeAsync(
      `SELECT * FROM audio WHERE name LIKE '%${search}%' `,
      [search],
    );
    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

async function findOne(id: string | number): Promise<any> {
  try {
    let { rows } = await db.executeAsync('SELECT * FROM audio where id = ?', [
      id,
    ]);
    return rows?._array;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IRemove {
  id: number | string;
}
async function remove({ id }: IRemove) {
  try {
    let { rows } = await db.executeAsync('DELETE from audio where id = ?', [
      id,
    ]);
    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

interface IUpdateOne {
  id: number | string;
}

async function updateOne({ id }: IUpdateOne) {
  try {
    let dataInsert = await db.executeAsync(
      `
        UPDATE audio SET column1 = value1
        WHERE id = ?    
    `,
      [id],
    );
    let { rows } = db.execute('SELECT * FROM audio');
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

export { insertMany, insertOne, updateOne, remove, find, findOne };
