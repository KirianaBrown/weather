import axios from 'axios';

export default class Weather {
    constructor(query, unit) {
        this.query = query;
        this.unit = unit;
    }

    async getWeather() {
        const API_KEY = `${process.env.API_KEY}`;
        const res = await axios(`${process.env.API_URL}?q=${this.query}&units=${this.unit}&appid=${API_KEY}`);
        this.results = res.data;
        this.id = this.results.id;

        console.log(this.results)
    }

}