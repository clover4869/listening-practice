import {AUDIO_FILE_TYPE} from '../../constant/audio';
import {db} from './sqliteConfig';

interface IInsertOne {
  audio_id: number;
  start: number;
  end: number;
  position: number;
  name?: string;
  content?: string;
}

async function insertOne({audio_id, start, end, position}: IInsertOne) {
  try {
    let dataInsert = await db.executeAsync(
      `
          INSERT INTO break (audio_id, start,end, position)
      VALUES (?, ?, ?, ?);`,
      [audio_id, start, end, position],
    );
    let {rows} = await db.executeAsync('SELECT * FROM break');

    return rows;
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
}

async function findAll(audio_id : number | string) {
  try {
    let {rows} = await db.executeAsync('SELECT * FROM break where audio_id = ?', [audio_id]);

    return rows?._array;
  } catch (error) {
    console.error('Something went wrong executing SQL commands:', error);
  }
}

async function remove(id: number) {
  try {
    await db.executeAsync('DELETE from break where id = ?', [id]);
    let {rows} = await db.executeAsync('SELECT * FROM break');

    return rows?._array;
  } catch (error) {
    console.error('Something went wrong executing SQL commands:', error);
  }
}

export {insertOne, remove, findAll};
