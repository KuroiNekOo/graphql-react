export default {

  async createUser(_, { input }, { dataSources }) {

    const row = await dataSources.ouserDb.userDatamapper.create(input);
    return row;

  },

  async createRole(_, { input }, { dataSources }) {

    const row = await dataSources.ouserDb.roleDatamapper.create(input);
    return row;

  },

  async createUserHasRole(_, { input }, { dataSources }) {

    const row = await dataSources.ouserDb.userHasRoleDatamapper.create(input);
    return row;

  },

  async updateUser(_, { input }, { dataSources }) {

    const { id, ...inputData } = input;

    const row = await dataSources.ouserDb.userDatamapper.update({ id }, inputData);
    return row;

  },

  async updateRole(_, { input }, { dataSources }) {

    const { id, ...inputData } = input;

    const row = await dataSources.ouserDb.roleDatamapper.update({ id }, inputData);
    return row;

  },

  async deleteUser(_, { id }, { dataSources }) {

    const result = await dataSources.ouserDb.userDatamapper.delete(id);
    return result;

  },

  async deleteRole(_, { id }, { dataSources }) {

    const result = await dataSources.ouserDb.roleDatamapper.delete(id);
    return result;

  },

  async deleteUserHasRole(_, { id }, { dataSources }) {

    const result = await dataSources.ouserDb.userHasRoleDatamapper.delete(id);
    return result;

  },

};