import userDatamapper from '../datamappers/user.js';
import roleDatamapper from '../datamappers/role.js';

export default {

  async users() {

    const rows = await userDatamapper.findAll();
    return rows;

  },

  async user(_, { id }) {

    const row = userDatamapper.findByPk(id);
    return row;

  },

  async roles() {

    const rows = await roleDatamapper.findAll();
    return rows;

  },

  async role(_, { id }) {

    const row = roleDatamapper.findByPk(id);
    return row;

  },

};