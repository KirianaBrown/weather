import { elements } from './base'

export const toggleSavedButton = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';

    document.querySelector('.results__love use').setAttribute('href', `img/icons.svg#${iconString}`);
}

export const renderItem = item => {
    const markup = `
    <li class="saved__item" data-itemid=${item.id}>
        <a href="123" class="saved__link">
            <figure class="saved__fig">
                <img src="img/weather/${item.img}.svg" alt="Test Image">
            </figure>

            <p class="saved__location">${item.location}</p>
            <p class="saved__temp">${Math.round(item.temp)}</p>

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
    console.log(item)
};