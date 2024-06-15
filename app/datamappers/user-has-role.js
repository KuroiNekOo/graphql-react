import CoreDatamapper from './core-datamapper.js';
import client from '../db/pg.js';

class UserHasRole extends CoreDatamapper {
  tableName = 'user_has_role';

  // async findByUser(userId) {
  //   const preparedQuery = {
  //     text: `
  //             SELECT *
  //             FROM "${this.tableName}"
  //             WHERE "user_id" = $1
  //           `,
  //     values: [userId],
  //   };

  //   const { rows } = await this.client.query(preparedQuery);

  //   return rows;
  // }

  async findByUser(userId) {

    const rows = await this.client.from(this.tableName).where({ 'user_id': userId }).cache();
    return rows;

  }

}

export default UserHasRole;