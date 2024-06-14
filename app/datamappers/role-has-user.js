import CoreDatamapper from './core-datamapper.js';
import client from '../db/pg.js';

class RoleHasUser extends CoreDatamapper {
  tableName = 'user_has_role';

  async findByRole(roleId) {
    const preparedQuery = {
      text: `
              SELECT *
              FROM "${this.tableName}"
              WHERE "role_id" = $1
            `,
      values: [roleId],
    };

    const { rows } = await this.client.query(preparedQuery);

    return rows;
  }

}

export default new RoleHasUser(client);