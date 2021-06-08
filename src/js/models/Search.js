import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const API_KEY = `${process.env.API_KEY}`;

        if (API_KEY) {
            console.log("We have an API KEY");
        } else {
            console.log("NO API KEY LOADED");
        }

        console.log(API_KEY);
        const res = await axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${API_KEY}`
        );
        this.results = res.data;
        // console.log(this.results)
    }
}