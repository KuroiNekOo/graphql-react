import userDatamapper from '../datamappers/user.js';

export default {

  async user({ user_id }) {

    const row = await userDatamapper.findByPk(user_id);
    return row;

  },

};