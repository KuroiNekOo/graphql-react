import { RESTDataSource } from '@apollo/datasource-rest';
import CurrentDatamapper from '../datamappers/weather-api/current.datamapper.js';

export default class WeatherApiDataSource extends RESTDataSource {

  baseURL = 'http://api.weatherapi.com';

  constructor() {

    super();

    this.currentDatamapper = new CurrentDatamapper(this);

  }

}