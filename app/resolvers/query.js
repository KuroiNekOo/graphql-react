export default {

  async users(_, __, { dataSources }) {

    const rows = await dataSources.ouserDb.userDatamapper.findAll();
    return rows;

  },

  async user(_, { id }, { dataSources }) {

    const row = dataSources.ouserDb.userDatamapper.findByPk(id);
    return row;

  },

  async roles(_, __, { dataSources }) {

    const rows = await dataSources.ouserDb.roleDatamapper.findAll();
    return rows;

  },

  async role(_, { id }, { dataSources }) {

    const row = dataSources.ouserDb.roleDatamapper.findByPk(id);
    return row;

  },

};