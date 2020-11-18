import { elements } from './base';

export const renderWeather = (weather, symbol, isSaved) => {
    const html =
        `
    <div class="results__location heading-tertiary">${weather.name} <sup class='country'> ${weather.sys.country} </sup>
     <button class="results__love">
        <svg class="results__likes">
            <use href="img/icons.svg#icon-bookmark${isSaved ? '' : '-outlined'}"></use>
        </svg>
    </button>
    
    </div>

   
     
      <div class="details">
        <div class="details__temperature">
            ${Math.round(weather.main.temp)} <span class='details__temperature-metric'> &#0176;${symbol} </span>
        </div>

        <div class="details__description">
            <img class="details__fig" src="./img/weather/${weather.weather[0].icon}.svg" alt="Weather Icon"/>
            <br>
            <p class="details__description-secondary">${weather.weather[0].main}</p>
            <p class="details__description-secondary">The high today will be ${Math.round(weather.main.temp_max)}&#0176;${symbol} currently feels like ${Math.round(weather.main.feels_like)}&#0176;${symbol}</p>
        </div>      
    </div>

    <div class="info">
        <ul class="info__list">
            <li class="info__list-item">
                <span class='info__list-title'>Sunrise: </span> ${convertUnix(weather.sys.sunrise)}
            </li>
            <li class="info__list-item">
                <span class='info__list-title'>Sunset: </span> ${convertUnix(weather.sys.sunset)}
            </li>
            <li class="info__list-item">
                <span class='info__list-title'>Humidity: </span> ${weather.main.humidity}%
            </li>
        </ul>
        <ul class="info__list">
            <li class="info__list-item">
                <span class='info__list-title'>Wind Speed: </span> ${weather.wind.speed} met/sec
            </li>
            <li class="info__list-item">
                <span class='info__list-title'>Wind Direction: </span> ${getDirection(weather.wind.deg)}
            </li>
            <li class="info__list-item">
                <span class='info__list-title'>Pressure :</span> ${weather.main.pressure}hPa
            </li>
        </ul>
    </div>
  `

    elements.weatherDetails.insertAdjacentHTML('afterbegin', html);
}

const convertUnix = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let timeUnit = (hours >= 12) ? 'PM' : 'AM'

    let formattedTime = `${hours}:${minutes} ${timeUnit}`;

    // let formattedTime = `${hours}:${minutes}:${seconds}`

    return formattedTime;
}

const getDirection = angle => {
    const arrows = { north: '↑ N', north_east: '↗ NE', east: '→ E', south_east: '↘ SE', south: '↓ S', south_west: '↙ SW', west: '← W', north_west: '↖ NW' };

    const directions = Object.keys(arrows);
    const symbols = Object.values(arrows);

    const degree = 360 / directions.length;

    angle = Math.floor(angle / degree);

    if (angle >= 45) {
        return `${directions[0], symbols[0]}`
    }
    return `${directions[angle], symbols[angle]}`
}