import { elements } from './base';

export const renderForecast = (forecast) => {

    const markup = `
    <li class="forecast__item">  
            <figure class="forecast__fig">
                <img src="img/weather/${forecast.icon}.svg" alt="Test Image">
            </figure>
            <div class="forecast__data">
                <h4 class="forecast__date">${formatDateTime(forecast.dateTime)}</h4>
                <p class="forecast__temp">${Math.floor(forecast.temp)}</p>
            </div>
       
      </li>
   `

    elements.forecastList.insertAdjacentHTML('beforeend', markup);

}

const formatDateTime = dt => {
    const unixTimeStamp = dt;
    const milliseconds = unixTimeStamp * 1000;
    const newDateVar = new Date(milliseconds);
    // const humanStringForm = newDateVar.toLocaleDateString();
    const humanStringForm = newDateVar.toLocaleString("en-US", {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    })

    return humanStringForm
}