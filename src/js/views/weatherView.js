import { elements } from './base';

export const renderWeather = weatherObject => {
    const html =
        `
    <div class="results__location heading-tertiary">Christchurch <sup class='country'> NZ </sup></div>
      <button class="results__love">
          <svg class="results__likes">
              <use href="img/icons.svg#icon-heart-outlined"></use>
          </svg>
      </button>
      <div class="details">
        <div class="details__temperature">
            ${weatherObject.temp}${weatherObject.type}
        </div>

        <div class="details__description">
            <p class="details__description-main">
                Cloudy and overcast
            </p>
            <br>
            <p class="details__description-secondary">The high today will be 28C with winds of 453mph</p>
        </div>
      </div> 
  
  `

    elements.resultsContainer.insertAdjacentHTML('afterbegin', html);
}