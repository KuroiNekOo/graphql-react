import CoreDatamapper from './core-datamapper.js';

class RoleHasUser extends CoreDatamapper {
  tableName = 'user_has_role';

  async findByRole(roleId) {

    const rows = await this.client.from(this.tableName).where({ 'role_id': roleId }).cache();
    return rows;

  }

}

export default RoleHasUser;