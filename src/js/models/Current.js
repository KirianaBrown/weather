import axios from 'axios';

export default class Current {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }

    async getCurrentLocation() {
        const API_KEY = `${process.env.API_KEY}`;;
        const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${API_KEY}`);
        this.location = res.data.name
        console.log(this.location)
    }

}