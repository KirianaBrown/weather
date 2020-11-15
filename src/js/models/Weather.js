import axios from 'axios';

export default class Weather {
    constructor(query) {
        this.query = query;
    }

    async getWeather() {
        const API_KEY = `${process.env.API_KEY}`;
        const res = await axios(`${process.env.API_URL}?q=${this.query}&units=metric&appid=${API_KEY}`);
        this.results = res.data;
        this.metric = 'C';
        this.id = this.results.id;

        console.log(this.results)
    }

}