export default {

  async userHasRole({ id }, _, { dataSources }) {

    const rows = await dataSources.ouserDb.userHasRoleDatamapper.findByUser(id);
    return rows;

  },

};