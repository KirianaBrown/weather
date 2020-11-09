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

export default class Weather {
    constructor(query) {
        this.query = query;
    }

    async getWeather() {
        const API_KEY = `c8d2013b39ce1062ff9e54042c8d2be6`;
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&appid=${API_KEY}`);
        this.results = res.data;

        console.log(this.results)
    }
}