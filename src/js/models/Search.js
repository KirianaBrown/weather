import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }

    async getResults() {
        const API_KEY = `c8d2013b39ce1062ff9e54042c8d2be6`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${API_KEY}`);
        this.results = res.data;
        // console.log(this.results)
    }
}