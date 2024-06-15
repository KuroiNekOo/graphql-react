class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
  }

  //* Relancé à chaque requête entrante
  initLoader() {

    this.pkLoader = this.client
      .from(this.tableName)
      .batch(async (query, ids) => {

        const rows = await query.whereIn('id', ids);

        const reOrderRows = ids.map(
          (id) => rows.find((row) => row.id === id)
        );

        return reOrderRows;

      });

  }

  /**
   * Récupération par identifiant
   * @param {number|number[]} id identifiant ou liste d'identifiants
   * @returns un enregistrement ou une liste d'enregistrement
   */
  async findByPk(id) {

    //* Cache par défaut: 5 secondes
    const row = await this.client.from(this.tableName).where({ id }).first().cache();
    return row;

  }

  async findAll(params) {

    const query = this.client.from(this.tableName);

    if (params?.where) query.where(where);

    const rows = await query.cache();

    return rows;

  }

  async create(inputData) {

    const { rows: [row] } = await this.client.raw(`
      SELECT *
      FROM insert_${this.tableName}
      (?)
    `, [inputData]);

    return row;

  }

  async update({ id }, inputData) {

    const { rows: [row] } = await this.client.raw(`
      SELECT *
      FROM insert_${this.tableName}
      (?)
    `, [{ ...inputData, id }]);

    return row;

  }

  async delete(id) {

    const affectedRows = await this.client.from(this.tableName).where({ id }).del();
    return !!affectedRows;

  }
}

export default CoreDatamapper;