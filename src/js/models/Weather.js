// export default class Weather {
//     constructor(weatherObj) {
//         this.weatherObj = weatherObj;
//         this.id = weatherObj.id;
//         this.city = weatherObj.name;
//         this.country = weatherObj.sys.country;
//         this.temp = weatherObj.main.temp;
//     }

//     setMetric() {
//         this.type = 'deg'
//     }

//     showWeatherTemp() {
//         console.log(this.weatherObj);
//         console.log(this.id);
//         console.log(this.city);
//         console.log(this.country);
//         console.log(this.temp);
//         console.log(this.type);
//     }
// }

import axios from 'axios';

export default class Weather {
    constructor(query) {
        this.query = query;
    }

    async getWeather() {
        const API_KEY = `c8d2013b39ce1062ff9e54042c8d2be6`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${API_KEY}`);
        this.results = res.data;
        // this.id = this.results.id;
        // this.name = this.results.name;
        // this.country = this.results.sys.country;
        // this.temp = this.results.main.temp;
        // this.tempMax = this.results.main.temp_max;
        // this.tempMin = this.results.main.temp_min;
        // this.description = this.results.weather[0].description;
        // this.id = results.id;

        // console.log(this.id, this.name, this.country, this.temp, this.tempMax, this.tempMin, this.description)

        console.log(this.results)
    }
}