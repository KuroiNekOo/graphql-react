import CoreDatamapper from './core-datamapper.js';
import client from '../db/pg.js';

class Role extends CoreDatamapper {
  tableName = 'role';
}

export default new Role(client);