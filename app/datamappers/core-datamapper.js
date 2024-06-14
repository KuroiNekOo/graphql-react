class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
  }

  /**
     * Récupération par identifiant
     * @param {number|number[]} id identifiant ou liste d'identifiants
     * @returns un enregistrement ou une liste d'enregistrement
     */
  async findByPk(id) {
    const preparedQuery = {
      text: `SELECT * FROM "${this.tableName}" WHERE id = $1`,
      values: [id],
    };

    const result = await this.client.query(preparedQuery);

    if (!result.rows[0]) {
      return null;
    }

    return result.rows[0];
  }

  async findAll(params) {
    let filter = '';
    const values = [];

    if (params?.where) {
      const filters = [];
      let indexPlaceholder = 1;

      Object.entries(params.where).forEach(([param, value]) => {
        if (param === '$or') {
          const filtersOr = [];
          Object.entries(value).forEach(([key, val]) => {
            filtersOr.push(`"${key}" = $${indexPlaceholder}`);
            values.push(val);
            indexPlaceholder += 1;
          });
          filters.push(`(${filtersOr.join(' OR ')})`);
        } else {
          filters.push(`"${param}" = $${indexPlaceholder}`);
          values.push(value);
          indexPlaceholder += 1;
        }
      });
      filter = `WHERE ${filters.join(' AND ')}`;
    }

    const preparedQuery = {
      text: `
                SELECT * FROM "${this.tableName}"
                ${filter}
            `,
      values,
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async create(inputData) {

    const preparedQuery = {
      text: `
              SELECT *
              FROM insert_${this.tableName}
              ($1)
            `,
      values: [inputData],
    };

    const { rows: [ row ] } = await this.client.query(preparedQuery);

    return row;

  }

  async update({ id }, inputData) {

    const preparedQuery = {
      text: `
              SELECT *
              FROM update_${this.tableName}
              ($1)
            `,
      values: [{ ...inputData, id }],
    };

    const { rows: [ row ] } = await this.client.query(preparedQuery);

    return row;

  }

  async delete(id) {

    const result = await this.client.query({
      text: `DELETE FROM "${this.tableName}" WHERE id = $1`,
      values: [id],
    });

    return !!result.rowCount;

  }
}

export default CoreDatamapper;