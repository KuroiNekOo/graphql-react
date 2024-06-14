import roleDatamapper from '../datamappers/role.js';

export default {

  async role({ role_id }) {

    const row = await roleDatamapper.findByPk(role_id);
    return row;

  },

};