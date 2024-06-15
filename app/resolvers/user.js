export default {

  async userHasRole({ id }, _, { dataSources }) {

    const rows = await dataSources.ouserDb.userHasRoleDatamapper.findByUser(id);
    return rows;

  },

  async temperature(_, __, { dataSources }) {

    const { temperature } = await dataSources.weatherApi.currentDatamapper.findOneData();
    return temperature;

  },

};