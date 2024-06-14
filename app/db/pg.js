import debug from 'debug';
import pg from 'pg';

const debugSql = debug('app:sql');
const pool = new pg.Pool();

let queryCount = 0;

export default {

  originalClient: pool,

  async query(...params) {

    debugSql(...params);
    queryCount += 1;
    debugSql(`Req n°${queryCount}`);

    return this.originalClient.query(...params);

  },

};