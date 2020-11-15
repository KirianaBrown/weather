import { elements } from './base';

export const renderWeather = (weather, metric = 'C') => {
    const html =
        `
    <div class="results__location heading-tertiary">${weather.name} <sup class='country'> ${weather.sys.country} </sup></div>
     
      <div class="details">
        <div class="details__temperature">
            ${Math.round(weather.main.temp)} <span class='details__temperature-metric'> &#0176;${metric} </span>
        </div>

        <div class="details__description">
            <img class="details__fig" src="./img/weather/${weather.weather[0].icon}.svg" alt="Weather Icon"/>
            <br>
            <p class="details__description-secondary">${weather.weather[0].main}</p>
            <p class="details__description-secondary">The high today will be ${Math.round(weather.main.temp_max)}&#0176;${metric} currently feels like ${Math.round(weather.main.feels_like)}&#0176;${metric}</p>
        </div>      
    </div>

    <div class="info">
                    <ul class="info__list">
                        <li class="info__list-item">
                            Sunrise: 8am
                        </li>
                        <li class="info__list-item">
                            Sunset: 8pm
                        </li>
                        <li class="info__list-item">
                            Chance of Rain: 20%
                        </li>
                    </ul>
                    <ul class="info__list">
                        <li class="info__list-item">
                            Humidity: 10
                        </li>
                        <li class="info__list-item">
                            Wind: 10
                        </li>
                        <li class="info__list-item">
                            Pressure: 10
                        </li>
                    </ul>
                </div>


  `

    elements.weatherDetails.insertAdjacentHTML('afterbegin', html);
}