import {open} from 'react-native-quick-sqlite';

const db = open({name: 'data', location: '../data'});

const createTableAudio = async () => {
  console.log('----------------------------------------------');
  try {
    let dataCreateTableAudio = db.execute(`CREATE TABLE IF NOT EXISTS audio (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name text,
          path text,
          duration integer,
          listen_number integer,
          transcript text,
          type text,
          topic text,
          level integer
        );`);

    let dataCreateTableBreak = db.execute(`CREATE TABLE IF NOT EXISTS break (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          audio_id integer,
          name text,
          content integer,
          start integer,
          end integer,
          position integer
        );`);
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
};

export {createTableAudio, db};
