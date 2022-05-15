import { app } from 'electron';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Database } from 'sqlite3';
import log from 'electron-log';

const sqlite3 = require('sqlite3').verbose();

export default class Repository {
  db: Database;

  constructor() {
    this.db = new sqlite3.Database(`${app.getPath('userData')}/application.db`);
  }

  private initTable = (callback: ((db: Database) => void) | null) => {
    this.db.serialize(() => {
      this.db.get(
        'SELECT name FROM sqlite_master where name = ?',
        'cache',
        (_err: any, row: any) => {
          if (row === undefined) {
            log.log('Table NOT FOUND, Staring to init tables');
            this.db.run('CREATE TABLE cache (key TEXT, value TEXT)', () => {
              log.log('Table cache created, starting to init data');
              this.db.run(
                'INSERT INTO cache values (?, ?)',
                'hideWhenClose',
                false,
                () => {
                  log.log('Table cache data init done');
                  if (callback) {
                    callback(this.db);
                  }
                }
              );
            });
          } else {
            log.log('Table already init, skip table creation...');
            if (callback) {
              callback(this.db);
            }
          }
        }
      );
    });
  };

  start = (callback: ((db: Database) => void) | null) => {
    this.initTable(callback);
  };

  close = () => {
    this.db.close();
  };
}
