import { elements } from './base';

export const renderForecast = (forecast) => {

    const markup = `
    <li class="forecast__item">
        <a href="123" class="forecast__link">
            <figure class="forecast__fig">
                <img src="img/weather/${forecast.weather[0].icon}.svg" alt="Test Image">
            </figure>
            <div class="forecast__data">
                <h4 class="forecast__date">${forecast.dt_txt}</h4>
                <p class="forecast__temp">${Math.floor(forecast.main.temp)}</p>
            </div>
        </a>
      </li>
   `

    elements.forecastList.insertAdjacentHTML('beforebegin', markup);

}