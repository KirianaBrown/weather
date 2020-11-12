import { elements } from './base';

export const renderWeather = (weather, metric = 'C') => {
    const html =
        `
    <div class="results__location heading-tertiary">${weather.name} <sup class='country'> ${weather.sys.country} </sup></div>
     
      <div class="details">
        <div class="details__temperature">
            ${Math.round(weather.main.temp)}${metric}
        </div>

        <div class="details__description">
            <img src="./img/weather/${weather.weather[0].icon}.svg" alt="Weather Icon"/>
            <br>
            <p class="details__description-secondary">${weather.weather[0].main}</p>
            <p class="details__description-secondary">The high today will be ${weather.main.temp_max}${metric} currently feels like ${weather.main.feels_like}${metric}</p>
        </div>
      </div> 
  
  `

    elements.resultsContainer.insertAdjacentHTML('afterbegin', html);
}