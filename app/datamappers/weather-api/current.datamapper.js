export default class CurrentDatamapper {

  constructor(datasource) {
    //* this.datasource = <instance de WeatherApiDataSource>
    this.datasource = datasource;
  }

  async findOneData() {

    const data = await this.datasource.get('/v1/current.json', {

      params: {
        key: process.env.WEATHER_API_KEY,
        q: 'Paris',
      }

    });

    return {
      temperature: data.current.temp_c,
    };

  }

}