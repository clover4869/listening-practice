import {open} from 'react-native-quick-sqlite';

const db = open({name: 'mydata1', location: '../data'});

const createTableAudio = async () => {
  console.log('----------------------------------------------');

  try {
    // let dataCreateTableAudio = db.execute(`CREATE TABLE audio (
    //       id INTEGER PRIMARY KEY AUTOINCREMENT,
    //       name text,
    //       path text,
    //       duration integer,
    //       listen_number integer,
    //       transcript text,
    //       type text,
    //       topic text,
    //       level integer
    //     );`);

    // let dataCreateTableBreak = db.execute(`CREATE TABLE break (
    //       id INTEGER PRIMARY KEY AUTOINCREMENT,
    //       audio_id integer,
    //       name text,
    //       content integer,
    //       start integer,
    //       end integer,
    //       index integer
    //     );`);
    let dataInsert = await db.executeAsync(
      `
    INSERT INTO audio (name,path,duration,listen_number, transcript, type, topic, level)
VALUES (?, ?, ?, ?, ?, ?, ?, ? );`,
      ['name', 'path', 0,0, 'trans', 'drive', 'scient', 3],
    );
    let {rows} = db.execute('SELECT * FROM audio');
console.log(rows);

    // (rows as any).forEach((row : any) => {
    //   console.log(row);
    // });
  } catch (e) {
    console.error('Something went wrong executing SQL commands:', e);
  }
};

export {createTableAudio};
