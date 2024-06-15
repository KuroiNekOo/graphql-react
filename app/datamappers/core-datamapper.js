class CoreDatamapper {
  tableName;

  constructor(client) {
    this.client = client;
  }

  //* Relancé à chaque requête entrante
  initLoader() {

    this.pkLoader = this.client
      .from(this.tableName)
      /**
       * @params query - Requête courante venant de Knex
       * @params ids - Tableau que le dataloader a rempli avec les ids envoyé par la méthode load()
       * @params .load() - Méthode de l'objet retourné par .batch()
       */
      .batch(async (query, ids) => {

        //! Exemple
        //* SI ids = [ 2, 3, 1 ]

        //* La méthode query.whereIn() va faire une requête SQL
        //* qui va implicitement trier les valeurs de retour
        //* dans l'ordre des ids du plus petit au plus grand

        //* reOrderRows va simplement retrier
        //* les valeurs de retour en fonction des ids du tableau de base

        //* Requête SQL
        const rows = await query.whereIn('id', ids);

        //* Triage des résultats par les ids du tableau ids[]
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