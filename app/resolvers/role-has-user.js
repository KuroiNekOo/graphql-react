export default {

  async user({ user_id }, _, { dataSources }) {

    const row = await dataSources.ouserDb.userDatamapper.pkLoader.load(user_id);
    return row;

  },

};