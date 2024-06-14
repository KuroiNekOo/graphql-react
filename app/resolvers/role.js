import roleHasUserDatamapper from '../datamappers/role-has-user.js';

export default {

  async roleHasUser({ id }) {

    const rows = await roleHasUserDatamapper.findByRole(id);
    return rows;

  },

};