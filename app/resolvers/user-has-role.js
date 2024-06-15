export default {

  async role({ role_id }, _, { dataSources }) {

    const row = await dataSources.ouserDb.roleDatamapper.findByPk(role_id);
    return row;

  },

};