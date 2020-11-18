import axios from 'axios';

export default class Forecast {
    constructor(query, unit) {
        this.query = query;
        this.unit = unit;
    }

    async getForecast() {
        const API_KEY = `${process.env.API_KEY}`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${API_KEY}&units=${this.unit}`)
        this.forecast = res.data;
        // 6am 9am 12pm 3pm 6pm 9pm 12pm 3am 6am 
        this.forecastArr = [
            this.forecast.list[8],
            this.forecast.list[16],
            this.forecast.list[24],
            this.forecast.list[32],
            this.forecast.list[39],
        ];

        this.forecastWeather = this.forecastArr.map(el => ({
            temp: Math.round(el.main.temp),
            dateTime: el.dt,
            icon: el.weather[0].icon,
        }));
    }
}