export default {

  async roleHasUser({ id }, _, { dataSources }) {

    const rows = await dataSources.ouserDb.roleHasUserDatamapper.findByRole(id);
    return rows;

  },

};