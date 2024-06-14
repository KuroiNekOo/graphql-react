import userHasRoleDatamapper from '../datamappers/user-has-role.js';

export default {

  async userHasRole({ id }) {

    const rows = await userHasRoleDatamapper.findByUser(id);
    return rows;

  },

};