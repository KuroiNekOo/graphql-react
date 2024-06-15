export default {

  async user({ user_id }, _, { dataSources }) {

    const row = await dataSources.ouserDb.userDatamapper.findByPk(user_id);
    return row;

  },

};