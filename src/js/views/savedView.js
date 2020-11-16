import { elements } from './base'

export const renderItem = item => {
    const markup = `
    <li class="saved__item" data-itemid=${item.id}>
        <a href="123" class="saved__link">
            <figure class="saved__fig">
                <img src="img/weather/02d.svg" alt="Test Image">
            </figure>

            <p class="saved__location">${item.location}</p>
            <p class="saved__temp">${item.temp}</p>

            <button class="saved__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </a>
    </li> 
  `

    elements.savedList.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`)

    item.parentElement.removeChild(item);
};