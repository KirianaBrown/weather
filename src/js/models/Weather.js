export default class Weather {
    constructor(weatherObj) {
        this.weatherObj = weatherObj;
        this.id = weatherObj.id;
        this.city = weatherObj.name;
        this.country = weatherObj.sys.country;
        this.temp = weatherObj.main.temp;
    }

    showWeatherTemp() {
        console.log(this.weatherObj);
        console.log(this.id);
        console.log(this.city);
        console.log(this.country);
        console.log(this.temp);
    }
}