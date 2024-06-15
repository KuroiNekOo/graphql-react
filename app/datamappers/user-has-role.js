import CoreDatamapper from './core-datamapper.js';

class UserHasRole extends CoreDatamapper {
  tableName = 'user_has_role';

  async findByUser(userId) {

    const rows = await this.client.from(this.tableName).where({ 'user_id': userId }).cache();
    return rows;

  }

}

export default UserHasRole;