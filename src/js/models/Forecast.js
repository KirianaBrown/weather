import axios from 'axios';

export default class Forecast {
    constructor(query) {
        this.query = query
    }

    async getForecast() {
        const API_KEY = `${process.env.API_KEY}`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${API_KEY}`)
        console.log(res);
    }
}