import axios from 'axios';

export default class Forecast {
    constructor(query) {
        this.query = query
    }

    async getForecast() {
        const API_KEY = `${process.env.API_KEY}`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${API_KEY}&units=metric`)
        this.forecast = res.data;
        // 6am 9am 12pm 3pm 6pm 9pm 12pm 3am 6am 
        this.forecastArr = this.forecast.list[0];
        console.log(this.forecastArr);
    }
}