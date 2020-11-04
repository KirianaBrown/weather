export default class Weather {
    constructor(id) {
        this.id = id
    }

    async getWeather() {
        try {
            const API_KEY = `c8d2013b39ce1062ff9e54042c8d2be6`;
            const res = await fetch(`api.openweathermap.org/data/2.5/weather?id=${this.id}&appid=${API_KEY}`);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
}