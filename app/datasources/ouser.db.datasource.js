import { BatchedSQLDataSource } from '@nic-jennings/sql-datasource';
import UserDatamapper from '../datamappers/user.js';
import RoleDatamapper from '../datamappers/role.js';
import UserHasRole from '../datamappers/user-has-role.js';
import RoleHasUser from '../datamappers/role-has-user.js';

export default class OuserDbDataSource extends BatchedSQLDataSource {

  //* Relancé à chaque requête entrante
  constructor(config) {

    super(config);

    //* db sera généré par BatchedSQLDataSource, c'est la connection à la BDD
    //* db.query sert donc à ne pas utiliser .query() dans nos datamapper
    this.userDatamapper = new UserDatamapper(this.db.query);
    this.roleDatamapper = new RoleDatamapper(this.db.query);
    this.userHasRoleDatamapper = new UserHasRole(this.db.query);
    this.roleHasUserDatamapper = new RoleHasUser(this.db.query);

    //* Le initLoader permet d'acceder aux contextes des instances de datamappers
    this.userDatamapper.initLoader();
    this.roleDatamapper.initLoader();
    this.userHasRoleDatamapper.initLoader();
    this.roleHasUserDatamapper.initLoader();

  }

}