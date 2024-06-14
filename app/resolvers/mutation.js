import userDatamapper from '../datamappers/user.js';
import roleDatamapper from '../datamappers/role.js';
import userHasRoleDatamapper from '../datamappers/user-has-role.js';

export default {

  async createUser(_, { input }) {

    const row = await userDatamapper.create(input);
    return row;

  },

  async createRole(_, { input }) {

    const row = await roleDatamapper.create(input);
    return row;

  },

  async createUserHasRole(_, { input }) {

    const row = await userHasRoleDatamapper.create(input);
    return row;

  },

  async updateUser(_, { input }) {

    const { id, ...inputData } = input;
    
    const row = await userDatamapper.update({ id }, inputData);
    return row;

  },

  async updateRole(_, { input }) {

    const { id, ...inputData } = input;
    
    const row = await roleDatamapper.update({ id }, inputData);
    return row;

  },

  async deleteUser(_, { id }) {

    const result = await userDatamapper.delete(id);
    return result;

  },

  async deleteRole(_, { id }) {

    const result = await roleDatamapper.delete(id);
    return result;

  },

  async deleteUserHasRole(_, { id }) {

    const result = await userHasRoleDatamapper.delete(id);
    return result;

  },

};