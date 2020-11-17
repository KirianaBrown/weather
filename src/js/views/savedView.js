import { elements } from './base'

export const toggleSavedButton = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';

    document.querySelector('.results__love use').setAttribute('href', `img/icons.svg#${iconString}`);
}

export const renderItem = item => {
    const markup = `
    <li class="saved__item" data-itemid=${item.id} data-itemLocation=${item.location}>
        <a href="${item.id}" class="saved__link" data-itemLocation=${item.location}>
            <figure class="saved__fig" data-itemLocation=${item.location}>
                <img src="img/weather/${item.img}.svg" alt="Test Image">
            </figure>

            <p class="saved__location">${item.location}</p>
            <p class="saved__temp">${Math.round(item.temp)}</p>
        </a>
    </li> 
  `

    elements.savedList.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`.saved__item[data-itemid='${id}']`)

    if (item) {
        item.parentElement.removeChild(item);
    }
}