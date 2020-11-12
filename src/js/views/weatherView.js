import { elements } from './base';

export const renderWeather = (weather, metric = 'C') => {
    const html =
        `
    <div class="results__location heading-tertiary">${weather.name} <sup class='country'> ${weather.sys.country} </sup></div>
     
      <div class="details">
        <div class="details__temperature">
            ${Math.round(weather.main.temp)}&#0176;${metric}
        </div>

        <div class="details__description">
            <img class="details__fig" src="./img/weather/${weather.weather[0].icon}.svg" alt="Weather Icon"/>
            <br>
            <p class="details__description-secondary">${weather.weather[0].main}</p>
            <p class="details__description-secondary">The high today will be ${Math.round(weather.main.temp_max)}&#0176;${metric} currently feels like ${Math.round(weather.main.feels_like)}&#0176;${metric}</p>

      </div> 
  
  `

    elements.resultsContainer.insertAdjacentHTML('afterbegin', html);
}