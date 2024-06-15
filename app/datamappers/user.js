import CoreDatamapper from './core-datamapper.js';
import client from '../db/pg.js';

class User extends CoreDatamapper {
  tableName = 'user';
}

export default User;